#!/usr/bin/env python3
"""Check every old URL: expect a 301 to the new path, and a 200 at the destination.

Usage:  python3 scripts/check_redirects.py https://get-to-rev.com
Needs:  pip install requests
"""
import json
import sys
from pathlib import Path

import requests

base = (sys.argv[1] if len(sys.argv) > 1 else "https://get-to-rev.com").rstrip("/")
redirects = json.loads((Path(__file__).parent / "redirects.json").read_text())

failed = 0
for old, new in redirects.items():
    first = requests.get(base + old, allow_redirects=False, timeout=15)
    final = requests.get(base + old, timeout=15)
    loc = first.headers.get("Location", "")
    ok = first.status_code == 301 and loc.rstrip("/").endswith(new.rstrip("/")) and final.status_code == 200
    failed += not ok
    print("OK  " if ok else "FAIL", old, first.status_code, final.status_code, loc)

print(f"\n{len(redirects) - failed}/{len(redirects)} OK")
sys.exit(1 if failed else 0)
