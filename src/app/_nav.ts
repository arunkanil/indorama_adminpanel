import { INavData } from "@coreui/angular";

export const navItems = [
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
    role: "Admin",
  },
  {
    name: "Marketplace",
    url: "/marketplace/all",
    icon: "icon-cursor",
    role: "Admin",
  },
  {
    name: "Indorama Updates",
    url: "/indorama_updates/all",
    icon: "icon-cursor",
    role: "Admin",
  },
  {
    name: "SMS Campaigns",
    url: "/sms-campaigns/all",
    icon: "icon-cursor",
    role: "Admin",
  },
  {
    name: "Farm Demo",
    url: "/farmdemo/all",
    icon: "icon-cursor",
    role: "Admin",
  },
  {
    name: "Soil Analysis",
    url: "/soiltest/customers",
    icon: "icon-cursor",
    role: "Admin",
  },
  {
    name: "Crop Prices",
    url: "/cropprices/all",
    icon: "icon-cursor",
    role: "Admin",
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
    role: "Admin",
  },
  {
    name: "Best crop practices",
    url: "/best-crop-practices/all",
    icon: "icon-cursor",
    role: "Admin",
  },
  {
    name: "Surveys",
    url: "/surveys/all",
    icon: "icon-cursor",
    role: "Admin",
  },
  {
    name: "Chat",
    url: "/chat/all",
    icon: "icon-cursor",
    role: "Admin",
  },
  {
    name: "Advertisement",
    url: "/advertisement/all",
    icon: "icon-cursor",
    role: "Admin",
  },
  {
    name: "Masters",
    url: "/soiltest/enquiries",
    icon: 'icon-cursor',
    role: "Admin",
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
        name: "City",
        url: "/masters/Cities",
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
