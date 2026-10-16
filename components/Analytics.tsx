import { SITE } from "@/lib/site";

// Google Tag Manager. GA4, PostHog and any pixels are configured inside GTM, not here.
// The container loads after the page has finished loading (idle, 3s at the latest) so tags never compete with the first paint.
// Staging does not load it at all, so staging visits stay out of production analytics.
export function GtmHead() {
  if (process.env.NEXT_PUBLIC_STAGING === "1") return null;
  return (
    <script
      dangerouslySetInnerHTML={{
        __html: `window.dataLayer=window.dataLayer||[];window.dataLayer.push({'gtm.start':new Date().getTime(),event:'gtm.js'});(function(w,d,i){function l(){var j=d.createElement('script');j.async=true;j.src='https://www.googletagmanager.com/gtm.js?id='+i;d.head.appendChild(j);}function s(){if(w.requestIdleCallback){w.requestIdleCallback(l,{timeout:3000});}else{setTimeout(l,2000);}}if(d.readyState==='complete'){s();}else{w.addEventListener('load',s);}})(window,document,'${SITE.gtmId}');`,
      }}
    />
  );
}

export function GtmBody() {
  if (process.env.NEXT_PUBLIC_STAGING === "1") return null;
  return (
    <noscript>
      <iframe src={`https://www.googletagmanager.com/ns.html?id=${SITE.gtmId}`} height="0" width="0" style={{ display: "none", visibility: "hidden" }} />
    </noscript>
  );
}
