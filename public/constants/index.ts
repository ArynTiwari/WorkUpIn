import {
    people01,
    people02,
    people03,
    facebook,
    instagram,
    linkedin,
    twitter,
    airbnb,
    binance,
    coinbase,
    dropbox,
    send,
    shield,
    star,
  } from "../assets";
  
  export const navLinks = [
    {
      id: "home",
      title: "Home",
    },
    {
      id: "features",
      title: "Features",
    },
    {
      id: "product",
      title: "Product",
    },
    {
      id: "clients",
      title: "Clients",
    },
  ];
  
  export const features = [
    {
      id: "feature-1",
      icon: star,
      title: "Rewards",
      content:
        "The best credit cards offer some tantalizing combinations of promotions and prizes",
    },
    {
      id: "feature-2",
      icon: shield,
      title: "100% Secured",
      content:
        "We take proactive steps make sure your information and transactions are secure.",
    },
    {
      id: "feature-3",
      icon: send,
      title: "Balance Transfer",
      content:
        "A balance transfer credit card can save you a lot of money in interest charges.",
    },
  ];
  
  export const feedback = [
    {
      id: "feedback-1",
      content:
        "Money is only a tool. It will take you wherever you wish, but it will not replace you as the driver.",
      name: "Herman Jensen",
      title: "Founder & Leader",
      img: people01,
    },
    {
      id: "feedback-2",
      content:
        "Money makes your life easier. If you're lucky to have it, you're lucky.",
      name: "Steve Mark",
      title: "Founder & Leader",
      img: people02,
    },
    {
      id: "feedback-3",
      content:
        "It is usually people in the money business, finance, and international trade that are really rich.",
      name: "Kenn Gallagher",
      title: "Founder & Leader",
      img: people03,
    },
  ];
  
  export const stats = [
    {
      id: "stats-1",
      title: "User Active",
      value: "3800+",
    },
    {
      id: "stats-2",
      title: "Trusted by Company",
      value: "230+",
    },
    {
      id: "stats-3",
      title: "Transaction",
      value: "$230M+",
    },
  ];
  
  
  export const socialMedia = [
    {
      id: "social-media-1",
      icon: instagram,
      link: "https://www.instagram.com/",
    },
    {
      id: "social-media-2",
      icon: facebook,
      link: "https://www.facebook.com/",
    },
    {
      id: "social-media-3",
      icon: twitter,
      link: "https://www.twitter.com/",
    },
    {
      id: "social-media-4",
      icon: linkedin,
      link: "https://www.linkedin.com/",
    },
  ];
  
  export const clients = [
    {
      id: "client-1",
      logo: airbnb,
    },
    {
      id: "client-2",
      logo: binance,
    },
    {
      id: "client-3",
      logo: coinbase,
    },
    {
      id: "client-4",
      logo: dropbox,
    },
  ];
  
  
  export const footerLinks = [
    {
      title: "For Client",
      links: [
        {
          id: "/gettalent",
          display: "Get talent",
        },
        {
          id: "/postproject",
          display: "Post projects",
        },
        {
          id: "/projectCatalouge",
          display: "Project catalouge",
        },
        {
          id: "/explore",
          display: "Explore WorkUp",
        },
      ],
    },
    {
      title: "For Talents",
      links: [
        {
          id: "/findProjects",
          display: "Get Projects",
        },
        {
          id: "/contracts",
          display: "Contracts",
        },
      ],
    },
    {
      title: "Useful Links",
      links: [
        {
          id: "/weWork",
          display: "How we work",
        },
        {
          id: "/visionMission",
          display: "Our Vision & Mission",
        },
        {
          id: "/privacyPolicy",
          display: "Privacy Policy",
        },
        {
          id: "/news/1",
          display: "Daily News",
        },
        {
          id: "/blogs",
          display: "Blogs from users",
        },
      ],
    },
  ];
  export const perksWorkUp = [
    {
      title: "Standard Work",
      description:
        "At WorkUp we have a commitment of providing a standard of work and assure client satisfaction at any cost.",
    },
    {
      title: "Free Revisions",
      description:
        "Toward's our commitment for client satisfaction, we provide upto 2 free revisions and money back gurantee if still there's something undesirable.",
    },
    {
      title: "Array of Services",
      description:
        "From essay writing to a complete Web App, you have it in your mind , we get it done on WorkUp",
    },
  ];
  export const links = [
    {
      name: "Find Talent",
      submenu: true,
      sublinks: [
        {
          Head: "Post a job and hire a pro",
          sublink: [{ name: "Talent marketplace", link: "/" }],
        },
        {
          Head: "Browse and buy projects",
          sublink: [{ name: "Project Catalog", link: "/" }],
        },
        {
          Head: "Let us find you the right talent",
          sublink: [{ name: "Talent scout", link: "/" }],
        },
      ],
    },
    {
      name: "Find Work",
      submenu: true,
      sublinks: [
        {
          Head: "Ways to earn",
          sublink: [{ name: "Learn why upwork has great for u", link: "/" }],
        },
        {
          Head: "find work for your skills",
          sublink: [{ name: "explore the kind of work available", link: "/" }],
        },
        {
          Head: "find ways to promote yourself",
          sublink: [{ name: "shows clients u r the one they want", link: "/" }],
        },
      ],
    },
    {
      name: "Why Upwork",
      submenu: true,
      sublinks: [
        {
          Head: "success stories",
          sublink: [
            { name: "Discover how teams works strategically", link: "/" },
          ],
        },
        {
          Head: "reviews",
          sublink: [{ name: "Discover something new things", link: "/" }],
        },
        {
          Head: "how to find work",
          sublink: [{ name: "Find yr own work ", link: "/" }],
        },
  
        {
          Head: "how to hire",
          sublink: [{ name: "Get to know how to hire", link: "/" }],
        },
      ],
    },
  ];
  