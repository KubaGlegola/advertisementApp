export type CategoryType = {
  name: string;
  slug: string;
  image: string;
};

export type HowItWorksStep = {
  title: string;
  description: string;
  icon: string;
};

export type SearchParams = { [key: string]: string | undefined };
