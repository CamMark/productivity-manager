export const SelectedPage = {
  Home: "home",
  About: "about",
  ContactUs: "contactus",
} as const;

export type SelectedPage = (typeof SelectedPage)[keyof typeof SelectedPage];
