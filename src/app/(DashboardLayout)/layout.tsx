"use client";
import { styled, Container, Box } from "@mui/material";
import React, { useState } from "react";
import Header from "@/app/(DashboardLayout)/layout/header/Header";
import Sidebar from "@/app/(DashboardLayout)/layout/sidebar/Sidebar";


const MainWrapper = styled("div")(() => ({
  display: "flex",
  minHeight: "100vh",
  width: "100%",
}));

const PageWrapper = styled("div")(() => ({
  display: "flex",
  flexGrow: 1,
  paddingBottom: "60px",
  flexDirection: "column",
  zIndex: 1,
  backgroundColor: "transparent",
}));

interface Props {
  children: React.ReactNode;
}

// Define or adjust SidebarProps interface
export interface SidebarProps {
  isSidebarOpen: boolean;
  isMobileSidebarOpen: boolean;
  onSidebarClose: () => void;
  onMobileSidebarClose: () => void; // Ensure this is included if it's required
  // Add other necessary props
}// Define RootLayout component
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isSidebarOpen, setSidebarOpen] = useState(true);
  const [isMobileSidebarOpen, setMobileSidebarOpen] = useState(false);

  // Define sidebarProps with correct types, including onMobileSidebarClose
  const sidebarProps: SidebarProps = {
    isSidebarOpen,
    isMobileSidebarOpen,
    onSidebarClose: () => setMobileSidebarOpen(false), // Ensure onSidebarClose is correctly defined
    onMobileSidebarClose: () => setMobileSidebarOpen(false), // Ensure onMobileSidebarClose is correctly defined
    // Add other props as necessary
  };

  return (
    <MainWrapper className="mainwrapper">
      {/* Render Sidebar component with sidebarProps */}
      <Sidebar {...sidebarProps} />

      {/* Main Wrapper */}
      <PageWrapper className="page-wrapper">
        {/* Render Header component */}
        <Header toggleMobileSidebar={() => setMobileSidebarOpen(true)} />

        {/* PageContent */}
        <Container
          maxWidth={false}
          sx={{
            margin: 0,
            width: '100%',
            paddingTop: '20px',
            maxWidth: 'none',
            border: 'none',
            backgroundColor: 'transparent',
          }}
        >
          {/* Page Route */}
          <Box sx={{ minHeight: "calc(100vh - 170px)" }}>{children}</Box>
        </Container>
      </PageWrapper>
    </MainWrapper>
  );
}