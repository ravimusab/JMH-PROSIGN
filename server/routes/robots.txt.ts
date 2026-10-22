function origin(event: { url: URL; req: { headers: Headers } }): string {
  const host = event.req.headers.get("x-forwarded-host") ?? event.req.headers.get("host") ?? event.url.host;
  return `https://${host}`;
}

export default function robots(event: { url: URL; req: { headers: Headers } }) {
  const body = `User-agent: *\nAllow: /\n\nSitemap: ${origin(event)}/sitemap.xml\n`;
  return new Response(body, {
    headers: { "content-type": "text/plain; charset=utf-8", "cache-control": "public, max-age=3600" },
  });
}
