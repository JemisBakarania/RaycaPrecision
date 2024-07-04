import React from 'react';
import { Box, AppBar, Toolbar, styled, Stack, IconButton, Badge, Button, InputBase, Typography } from '@mui/material';
import PropTypes from 'prop-types';
import Link from 'next/link';
// components
import Profile from './Profile';
import { IconBellRinging, IconMenu, IconSearch } from '@tabler/icons-react';
import AddIcon from '@mui/icons-material/Add';
import { Opacity } from '@mui/icons-material';
interface ItemType {
  toggleMobileSidebar:  (event: React.MouseEvent<HTMLElement>) => void;
}

const Header = ({ toggleMobileSidebar }: ItemType) => {

  const AppBarStyled = styled(AppBar)(({ theme }) => ({
    marginTop:'10px',
    boxShadow: 'none',
    background: 'transparent',
    justifyContent: 'center',
    backdropFilter: 'blur(4px)',
    [theme.breakpoints.up('lg')]: {
      minHeight: '70px',
    },
  }));
  const ToolbarStyled = styled(Toolbar)(({ theme }) => ({
    width: '100%',
    color: theme.palette.text.secondary,
  }));

  const Search = styled('div')(({ theme }) => ({
    position: 'relative',
  borderRadius: theme.shape.borderRadius + 4, // Adding a bit more roundness
  backgroundColor: 'transparent',
  border: `1px solid ${theme.palette.grey[400]}`, // Gray border color
  transition: 'all 0.3s ease-in-out', // Smooth transition
  '&:hover': {
    backgroundColor: '#2A2A2A'
  },
  marginRight: theme.spacing(2),
  marginLeft: 0,
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(3),
    width: 'auto',
  },
  }));
  const SearchIconWrapper = styled('div')(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: theme.palette.mode === 'dark' ? theme.palette.grey[300] : theme.palette.grey[800],
  }));
  const StyledButton = styled(Button)(({ theme }) => ({
    border: `1px solid ${theme.palette.grey[400]}`,
  backgroundColor: '#1A1A1A', // Gray background color for selected item
  whiteSpace: 'nowrap',
  marginBottom: '2px',
  borderRadius: '10px',
  color: theme.palette.text.secondary,
  paddingLeft: '10px',
  transition: 'all 0.3s ease-in-out', // Smooth transition
  '&:hover': {
    border: `1px solid ${theme.palette.grey[400]}`,
    backgroundColor:
      theme.palette.mode === 'dark' ? '#4f4f4f' : '#d3d3d3', // Light gray hover color for both dark and light modes
      opacity: 0.8,
    color:
      theme.palette.mode === 'dark'
        ? '#ffffff'
        : theme.palette.primary.main, // Adjusting text color for contrast
  },
  '&.Mui-selected': {
    color: 'white',
    backgroundColor:
      theme.palette.mode === 'dark' ? '#4f4f4f' : '#d3d3d3', // Gray background color for selected item
      opacity: 0.8,
  },
  }));
  const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: 'inherit',
    '& .MuiInputBase-input': {
      padding: theme.spacing(1, 1, 1, 0),
      paddingLeft: `calc(1em + ${theme.spacing(4)})`,
      transition: theme.transitions.create('width'),
      width: '100%',
      [theme.breakpoints.up('md')]: {
        width: '20ch',
      },
    },
  }));

  return (
    <AppBarStyled position="sticky" color="default">
      <ToolbarStyled>
        <IconButton
          color="inherit"
          aria-label="menu"
          onClick={toggleMobileSidebar}
          sx={{
            display: {
              lg: "none",
              xs: "inline",
            },
          }}
        >
          <IconMenu width="20" height="20" />
        </IconButton>

        <Typography variant="h4" component="div" gutterBottom>
              Jemis Bakarania
            </Typography>
        
          <Badge color="primary">
            <IconBellRinging size="0" stroke="1.5" />
          </Badge>

        <Box flexGrow={1} />

        <Stack spacing={1} direction="row" alignItems="center">
        <Search>
          <SearchIconWrapper>
            <IconSearch />
          </SearchIconWrapper>
          <StyledInputBase
            placeholder="Search…"
            inputProps={{ 'aria-label': 'search' }}
          />
        </Search>
        <StyledButton variant="outlined"  disableElevation color="primary" startIcon={<AddIcon />}>
  Invite
</StyledButton>
          <Button style={{borderRadius: '10px',
  marginBottom: '2px',}} variant="contained" component={Link} href="#" disableElevation color="info">
            Upgrade
          </Button>
          
          <Profile />
        </Stack>
      </ToolbarStyled>
    </AppBarStyled>
  );
};

Header.propTypes = {
  sx: PropTypes.object,
};

export default Header;
