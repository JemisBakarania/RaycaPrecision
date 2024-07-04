import { useMediaQuery, Box, Drawer } from "@mui/material";
import Logo from "../shared/logo/Logo";
import SidebarItems from "./SidebarItems";
import { Upgrade } from "./Updrade";
interface SidebarProps {
  isMobileSidebarOpen: boolean;
  onMobileSidebarClose: () => void;
  isSidebarOpen: boolean;
}

const Sidebar: React.FC<SidebarProps> = ({
  isMobileSidebarOpen,
  onMobileSidebarClose,
  isSidebarOpen,
}) => {
  const lgUp = useMediaQuery((theme: any) => theme.breakpoints.up("lg"));

  const sidebarWidth = "270px";

  if (lgUp) {
    // Desktop Sidebar
    return (
      <Box
        sx={{
          width: sidebarWidth,
          flexShrink: 0,
        }}
      >
        <Drawer
          anchor="left"
          open={isSidebarOpen}
          variant="permanent"
          PaperProps={{
            sx: {
              width: sidebarWidth,
              boxSizing: "border-box",
              border:'none'
            },
          }}
        >
          <Box
            sx={{
              height: "100%",
              display: "flex",
              flexDirection: "column",
            }}
          >
            {/* Logo */}
            <Box px={3} py={2}>
              <Logo />
            </Box>
            
            {/* Sidebar Items */}
            <Box sx={{ flexGrow: 1 }}>
              <SidebarItems />
            </Box>
            
            {/* Upgrade Section */}
            <Box>
              <Upgrade />
            </Box>
          </Box>
        </Drawer>
      </Box>
    );
  }

  // Mobile Sidebar
  return (
    <Drawer
      anchor="left"
      open={isMobileSidebarOpen}
      onClose={onMobileSidebarClose}
      variant="temporary"
      PaperProps={{
        sx: {
          width: sidebarWidth,
          boxShadow: (theme) => theme.shadows[8],
        },
      }}
    >
      {/* Logo */}
      <Box px={2} py={2}>
        <Logo />
      </Box>
      
      {/* Sidebar Items */}
      <Box sx={{ flexGrow: 1 }}>
        <SidebarItems />
      </Box>
      
      {/* Upgrade Section */}
      <Box>
        <Upgrade />
      </Box>
    </Drawer>
  );
};

export default Sidebar;