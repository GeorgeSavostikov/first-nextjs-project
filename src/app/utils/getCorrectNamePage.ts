export type PageKeys = "about-us" | "contact-us" | "our-projects";

type PageNames = {
  "about-us": string;
  "contact-us": string;
  "our-projects": string;
};

export function getCorrectNamePage(pageKey: PageKeys) {
  const pageNames: PageNames = {
    "about-us": "About Us",
    "contact-us": "Contact Us",
    "our-projects": "Our Projects",
  };

  return pageNames[pageKey];
}
