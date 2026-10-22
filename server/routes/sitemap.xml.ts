const paths = ["/", "/services", "/realisations", "/atelier", "/contact", "/mentions-legales"];

export default function sitemap(event: { url: URL; req: { headers: Headers } }) {
  const host = event.req.headers.get("x-forwarded-host") ?? event.req.headers.get("host") ?? event.url.host;
  const urls = paths.map((p) => `  <url><loc>https://${host}${p === "/" ? "/" : p}</loc></url>`).join("\n");
  const body = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls}\n</urlset>\n`;
  return new Response(body, {
    headers: { "content-type": "application/xml; charset=utf-8", "cache-control": "public, max-age=3600" },
  });
}
