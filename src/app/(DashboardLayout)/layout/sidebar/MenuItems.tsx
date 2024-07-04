import {
  IconHome,
  IconFile,
  IconFolder,
  IconShare,
  IconTrash,
  IconBell,
  IconSettings,
  IconChartArcs,
  IconFoldDown,
  IconArrowRight,
  IconBrandGoogleDrive,
} from "@tabler/icons-react";

import { size, uniqueId } from "lodash";
import { Children } from "react";

const Menuitems = [
  {
    id: uniqueId(),
    title: "Home",
    icon: IconHome,
    href: "",
  },
  {
    id: uniqueId(),
    title: "All Files",
    icon: IconFile,
    href: "",
  },
  {
    id: uniqueId(),
    title: "Private Files",
    icon: IconFolder,
    href: "",
  },
  {
    id: uniqueId(),
    title: "Shared with me",
    icon: IconShare,
    href: "",
  },
  {
    id: uniqueId(),
    title: "Deleted Files",
    icon: IconTrash,
    href: "",
  },
  {
    id: uniqueId(),
    title: "Design",
    icon: IconChartArcs,
    href: "",
  },
  {
    id: uniqueId(),
    title: "Notifications",
    icon: IconBell,
    href: "/",
  },
  {
    id: uniqueId(),
    title: "Settings",
    icon: IconSettings,
    href: "/sample-page",
  },
  {
    navlabel: true,
    subheader: "File Browser",
    style: { color:"red" },
  },
  {
    id: uniqueId(),
  title: "Folders",
  icon: IconFolder,
  href: "",
  children: [
    {
      title: "Folder-A",
      href: "",
      children: [
        {
          title: "File-I",
          href: ""
        },
        {
          title: "File-II",
          href: "",
          
        }
      ]
    },
    {
      title: "Folder-B",
      href: "",
    },
  ],
  },
];

export default Menuitems;