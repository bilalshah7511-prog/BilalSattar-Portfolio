Put your files in this folder and reference them in src/lib/site.ts with a leading slash, e.g. /img/profile.png

Paths are served from the "public" folder, so /img/photo.png = public/img/photo.png

Suggested names:
  profile.png (or .jpg)     — set site.profileImage to "/img/profile.png"
  fad-next.png              — project image paths in site.ts

If an image fails to load, the UI shows "Missing image" — check the filename and extension match site.ts exactly.
