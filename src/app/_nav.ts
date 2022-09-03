import { INavData } from "@coreui/angular";

export const navItems: INavData[] = [
  // {
  //   name: "Dashboard",
  //   url: "/dashboard",
  //   icon: "icon-speedometer",
  //   role: "",
  // },
  {
    name: "Activities",
    url: "/activities/all",
    icon: "icon-cursor",
    role: "",
  },
  {
    name: "Marketplace",
    url: "/marketplace/all",
    icon: "icon-basket-loaded",
    role: "",
  },
  {
    name: "Indorama Updates",
    url: "/indorama_updates/all",
    icon: "icon-note",
    role: "",
  },
  {
    name: "SMS Campaigns",
    url: "/sms-campaigns/all",
    icon: "icon-phone",
    role: "",
  },
  {
    name: "Farm Demo",
    url: "/farmdemo/all",
    icon: "icon-cursor",
    role: "",
  },
  {
    name: "Soil Analysis",
    url: "/soiltest/customers",
    icon: "icon-phone",
    role: "",
  },
  {
    name: "Crop Prices",
    url: "/cropprices/all",
    icon: "icon-phone",
    role: "",
  },
  {
    name: "Retailers",
    url: "/retailers/all",
    icon: "icon-cursor",
    role: "",
  },
  {
    name: "Users",
    url: "/users/all",
    icon: "icon-cursor",
    role: "",
  },
  {
    name: "Best crop practices",
    url: "/best-crop-practices/all",
    icon: "icon-cursor",
    role: "",
  },
  {
    name: "Surveys",
    url: "/surveys/all",
    icon: "icon-cursor",
    role: "",
  },
  {
    name: "Masters",
    url: "/soiltest/enquiries",
    icon: 'icon-puzzle',
    role: "",
    children: [
      {
        name: "States",
        url: "/masters/States",
      },
      {
        name: "LGA",
        url: "/masters/LGA",
      },
      {
        name: "Area",
        url: "/masters/Areas",
      },
      {
        name: "Villages",
        url: "/masters/Villages",
      },
      {
        name: "Markets",
        url: "/masters/Markets",
      },
      {
        name: "Crops",
        url: "/masters/Crops",
      },
    ],
  },
];
