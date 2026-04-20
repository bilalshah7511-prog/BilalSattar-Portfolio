/**
 * Maps skill labels to devicon CDN paths (devicons/devicon).
 * Fallback: generic devicon icon.
 */
const MAP: Record<string, string> = {
  React: "react/react-original",
  "Next.js": "nextjs/nextjs-original",
  TypeScript: "typescript/typescript-original",
  "Tailwind CSS": "tailwindcss/tailwindcss-plain",
  HTML: "html5/html5-original",
  CSS: "css3/css3-original",
  JavaScript: "javascript/javascript-original",
  "Node.js": "nodejs/nodejs-original",
  Express: "express/express-original",
  MongoDB: "mongodb/mongodb-original",
  Python: "python/python-original",
  Git: "git/git-original",
  Figma: "figma/figma-original",
  "VS Code": "vscode/vscode-original",
  Docker: "docker/docker-original",
  "Chrome DevTools": "chrome/chrome-original",
  "REST APIs": "nginx/nginx-original",
  Axios: "javascript/javascript-original",
  APIs: "jquery/jquery-original",
};

export function skillIconUrl(skill: string): string {
  const path = MAP[skill] ?? "devicon/devicon-original";
  return `https://cdn.jsdelivr.net/gh/devicons/devicon/icons/${path}.svg`;
}
