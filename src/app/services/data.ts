interface Items {
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

const servicesItems: IContent = {
  name: "services",
  left: {
    class: "justify-center",
    title: "Our Services",
    desc: "Branding, Web Development Strategy",
  },
  right: [
    {
      title: "Branding",
      query: "branding",
    },
    {
      title: "Web Development",
      query: "webDevelopment",
    },
    {
      title: "Strategy",
      query: "strategy",
    },
  ],
};

const brandingItems: IContent = {
  name: "branding",
  left: {
    class: "justify-end",
    title: "branding",
  },
  right: [
    {
      title: "Creative Concept",
      desc: `The creative concept is the soul of a brand. It is built from in-depth market and consumer research. It's a core idea that guides all brand communications and experiences. A good concept is relevant, original, clear and lasting.`,
    },
    {
      title: "Brand Strategy",
      desc: `Start by defining your brand identity, then develop a unique value proposition and communicate this proposal consistently across all your touchpoints with the customer. The branding strategy includes the creation of a visual identity a tone of voice and a coherent narrative.`,
    },
    {
      title: "Visual Identity",
      desc: `It is the set of graphic and visual elements that represent its essence and values. It includes the logo, color palette, typography, and other visual elements that are used in all communications. Visual identity is crucial to creating instant brand recognition and differentiating it from the competition. It's like the fingerprint of a brand, unique and recognizable.`,
    },
    {
      title: "Applications",
      desc: `It's all the ways in which a brand manifests itself visually in the real world. This includes everything from the logo, color palette, to the design of business cards, stationery, products and any other material that carries the brand's identity.`,
    },
  ],
};

interface ServicesI {
  services: IContent;
  branding: IContent;
  webDevelopment: IContent;
  strategy: IContent;
}

export const services: ServicesI = {
  services: servicesItems,
  branding: brandingItems,
  webDevelopment: brandingItems,
  strategy: brandingItems,
};
