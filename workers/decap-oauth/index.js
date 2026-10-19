// Decap CMS GitHub OAuth proxy for Cloudflare Workers.
// Routes: /auth (start login), /callback (finish login). Secrets: GITHUB_CLIENT_ID, GITHUB_CLIENT_SECRET.
// Var: ALLOWED_ORIGIN (the site that hosts /admin/, e.g. https://get-to-rev.com).

const html = (body) =>
  new Response(body, { headers: { "content-type": "text/html;charset=UTF-8" } });

export default {
  async fetch(request, env) {
    const url = new URL(request.url);

    if (url.pathname === "/auth") {
      const state = crypto.randomUUID();
      const params = new URLSearchParams({
        client_id: env.GITHUB_CLIENT_ID,
        scope: "repo,user",
        state,
      });
      return new Response(null, {
        status: 302,
        headers: {
          Location: `https://github.com/login/oauth/authorize?${params}`,
          "Set-Cookie": `oauth_state=${state}; HttpOnly; Secure; SameSite=Lax; Path=/; Max-Age=600`,
        },
      });
    }

    if (url.pathname === "/callback") {
      const code = url.searchParams.get("code");
      const state = url.searchParams.get("state");
      const cookie = request.headers.get("Cookie") || "";
      const saved = (cookie.match(/oauth_state=([^;]+)/) || [])[1];
      if (!code || !state || state !== saved) {
        return html("Login failed: invalid state. Close this window and try again.");
      }
      const res = await fetch("https://github.com/login/oauth/access_token", {
        method: "POST",
        headers: { "content-type": "application/json", accept: "application/json" },
        body: JSON.stringify({
          client_id: env.GITHUB_CLIENT_ID,
          client_secret: env.GITHUB_CLIENT_SECRET,
          code,
        }),
      });
      const data = await res.json();
      const ok = !!data.access_token;
      const message = ok
        ? "authorization:github:success:" + JSON.stringify({ token: data.access_token, provider: "github" })
        : "authorization:github:error:" + JSON.stringify(data);
      const origin = JSON.stringify(env.ALLOWED_ORIGIN);
      return html(`<!doctype html><script>
(function () {
  var msg = ${JSON.stringify(message)};
  function receive(e) {
    if (e.origin !== ${origin}) return;
    window.opener.postMessage(msg, e.origin);
    window.removeEventListener("message", receive);
    window.close();
  }
  window.addEventListener("message", receive);
  window.opener.postMessage("authorizing:github", ${origin});
})();
</script>`);
    }

    return new Response("Decap OAuth proxy", { status: 200 });
  },
};
