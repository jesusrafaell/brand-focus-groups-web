export interface Items {
  title: string;
  desc?: string;
  class?: string;
  query?: string;
}

export interface IContent {
  name: string;
  left: Items;
  right: Items[];
}

export interface IServices {
  services: IContent;
  branding: IContent;
  webDevelopment: IContent;
  strategy: IContent;
}
