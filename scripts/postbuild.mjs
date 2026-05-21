import { copyFile, mkdir } from "node:fs/promises";

for (const route of ["ds-agent", "research-agent"]) {
  await mkdir(`dist/${route}`, { recursive: true });
  await copyFile("dist/index.html", `dist/${route}/index.html`);
}
