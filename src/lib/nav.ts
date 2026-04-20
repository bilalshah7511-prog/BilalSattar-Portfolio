/** Section ids used for scroll spy + hash links — keep in sync with section `id`s on the page. */
export const NAV_SECTIONS = [
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "projects", label: "Projects" },
  { id: "experience", label: "Experience" },
  { id: "contact", label: "Contact" },
] as const;

export const NAV_IDS = NAV_SECTIONS.map((s) => s.id);
