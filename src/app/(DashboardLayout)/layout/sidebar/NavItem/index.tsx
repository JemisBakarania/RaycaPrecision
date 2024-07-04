import React, { useState } from "react";
import {
  ListItemIcon,
  ListItem,
  List,
  styled,
  ListItemText,
  ListItemButton,
  Collapse,
} from "@mui/material";
import Link from "next/link";
import { ExpandLess, ExpandMore } from "@mui/icons-material";
import MoreVertIcon from "@mui/icons-material/MoreVert"; // Import MoreVertIcon

type NavGroup = {
  [x: string]: any;
  id?: string;
  navlabel?: boolean;
  subheader?: string;
  title?: string;
  icon?: any;
  href?: string; // Ensure href is string type for Link component
  children?: NavGroup[]; // Added children property for nested items
};

interface ItemType {
  item: NavGroup;
  onClick: (event: React.MouseEvent<HTMLElement>) => void;
  hideMenu?: any;
  level?: number | any;
  pathDirect: string;
}

const NavItem = ({ item, level = 1, pathDirect, onClick }: ItemType) => {
  const Icon = item.icon;
  const itemIcon = Icon ? <Icon stroke={1.5} size="1.3rem" /> : null;

  const ListItemStyled = styled(ListItem)(({ theme }) => ({
    padding: 0,
    ".MuiButtonBase-root": {
      whiteSpace: "nowrap",
      marginBottom: "2px",
      padding: "8px 10px",
      borderRadius: "8px",
      backgroundColor: level > 1 ? "transparent !important" : "inherit",
      color: theme.palette.text.secondary,
      paddingLeft: "10px",
      "&:hover": {
        backgroundColor:
          theme.palette.mode === "dark" ? "#4f4f4f" : "#d3d3d3", // Light gray hover color for both dark and light modes
        color:
          theme.palette.mode === "dark"
            ? "#ffffff"
            : theme.palette.primary.main, // Adjusting text color for contrast
      },
      "&.Mui-selected": {
        color: "white",
        backgroundColor:
          theme.palette.mode === "dark" ? "#4f4f4f" : "#d3d3d3", // Gray background color for selected item
      },
    },
  }));

  const [open, setOpen] = useState(false);

  const handleClick = () => {
    setOpen(!open);
  };

  return (
    <List component="nav" disablePadding>
      {/* Render navlabel and subheader with MoreVertIcon */}
      {item.navlabel && (
        <ListItemStyled>
          <ListItemButton>
            <ListItemText primary={item.subheader} />
            <MoreVertIcon />
          </ListItemButton>
        </ListItemStyled>
      )}

      {/* Render parent item */}
      <ListItemStyled>
        <ListItemButton
          onClick={item.children ? handleClick : onClick}
          selected={pathDirect === item.href}
          component={item.children ? "button" : Link} // Use Link for navigation
          href={item.href} // Pass href prop for Link component
        >
          {item.icon && (
            <ListItemIcon
              sx={{
                minWidth: "36px",
                p: "3px 0",
                color: "inherit",
              }}
            >
              {itemIcon}
            </ListItemIcon>
          )}
          <ListItemText>{item.title}</ListItemText>
          {item.children && (open ? <ExpandLess /> : <ExpandMore />)}
        </ListItemButton>
      </ListItemStyled>

      {/* Render nested items if present */}
      {item.children && (
        <Collapse in={open} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            {item.children.map((child) => (
              <NavItem
                key={child.id}
                item={child}
                onClick={onClick}
                pathDirect={pathDirect}
                level={level + 1} // Pass level to increase indentation
              />
            ))}
          </List>
        </Collapse>
      )}
    </List>
  );
};

export default NavItem;