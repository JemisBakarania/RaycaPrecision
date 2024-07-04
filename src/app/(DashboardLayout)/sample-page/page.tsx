'use client';
import React, { useState } from 'react';
import { Tabs, Tab, Card, CardContent, Typography, IconButton, Divider, List, ListItem, ListItemText, Switch } from '@mui/material';
import { styled } from '@mui/system';
import DeleteIcon from '@mui/icons-material/Delete';
import { SyntheticEvent } from 'react';
import Paper from '@mui/material/Paper';
import Alert from '@mui/material/Alert';
import CloseIcon from '@mui/icons-material/Close';
import { Dangerous } from '@mui/icons-material';
// Override styles for MuiPaper and MuiCard
const StyledPaper = styled(Paper)({
  border: 'none', // Remove border
  backgroundColor: 'transparent', // Set background color to transparent
});

const StyledCard = styled(Card)({
  backgroundColor: 'transparent', // Set background color to transparent
});
const StyledTab = styled(Tab)(({ theme }) => ({
  border: 'none', // Remove border
  backgroundColor: 'transparent', // Set background color to transparent
  whiteSpace: 'nowrap',
  marginBottom: '2px',
  borderRadius: '10px',
  color: theme.palette.text.secondary,
  paddingLeft: '10px',
  transition: 'all 0.3s ease-in-out', // Smooth transition
  '&:hover': {
    backgroundColor:'#2A2A2A', // Light gray hover color for both dark and light modes
      opacity: 0.8,
    color:
      theme.palette.mode === 'dark'
        ? '#ffffff'
        : theme.palette.primary.main, // Adjusting text color for contrast
  },
  '&.Mui-selected': {
    color: 'white',
    backgroundColor:'#2A2A2A', // Gray background color for selected item
      opacity: 0.8,
  },
}));

const SamplePage = () => {
  const [selectedTab, setSelectedTab] = useState(0);
  const [showAlert, setShowAlert] = useState(true); // State to control alert visibility
  const [showInfoAlert, setINfoShowAlert] = useState(true); // State to control alert visibility
  const [showErrorAlert, setErrorShowAlert] = useState(true); // State to control alert visibility
  const [showWarningAlert, setwarningShowAlert] = useState(true); // State to control alert visibility


  const handleChange = (event, newValue) => {
    setSelectedTab(newValue);
  };
  const handleDismiss = () => {
    setShowAlert(false); // Dismiss the alert
  };
  const handleDismissInfo = () => {
    setINfoShowAlert(false); // Dismiss the alert
  };
  const handleDismissError = () => {
    setErrorShowAlert(false); // Dismiss the alert
  };
  const handleDismissWarning = () => {
    setwarningShowAlert(false); // Dismiss the alert
  };

  return (
    <div style={{ padding: 0, margin: 0 }}>
      <Tabs  sx={{
        '& .MuiTabs-indicator': {
          display: 'none',
        },
        '& .MuiTabs-flexContainer': {
          height: '10px', // Adjust the height as needed
        }
      }} value={selectedTab} onChange={handleChange} indicatorColor="primary" textColor="primary">
        <StyledTab label="General" />
        <StyledTab label="Security" />
        <StyledTab label="Billing" />
        <StyledTab label="Notifications" />
        <StyledTab label="Apps" />
        <StyledTab label="Branding" />
        <StyledTab label="Refer a friend" />
        <StyledTab label="Sharing" />
      </Tabs>

      {selectedTab === 0 && (
          <Card style={{ background:'transparent', marginTop: 16 }}>
          <CardContent>
            <Typography variant="h6" component="div" gutterBottom>
              General Settings
            </Typography>
            <Typography variant="body2" color="text.secondary">
              General settings content goes here.
            </Typography>
          </CardContent>
          </Card>
          
      )}
      
      {selectedTab === 1 && (
        <Card style={{ background:'transparent', marginTop: 16 }}>
          <CardContent>
            <Typography variant="h6" component="div" gutterBottom>
              Your account security is 90%
            </Typography>
            {showAlert && (
              <Alert
                severity="success"
                action={
                  <IconButton
                    aria-label="close"
                    color="inherit"
                    size="small"
                    onClick={handleDismiss}
                  >
                    <CloseIcon fontSize="inherit" />
                  </IconButton>
                }
                sx={{ fontSize: '1.2rem', p: 3 }}
              >
                You have done your task
              </Alert>
            )}
            <Typography variant="body2" color="text.secondary">
              Please review your account security settings regularly and update your password.
            </Typography>
            <div style={{ marginTop: 16, marginBottom: 16, display: 'flex', justifyContent: 'space-between' }}>
              <Typography variant="body2">Password</Typography>
              <Typography variant="body2">Very secure</Typography>
              <IconButton>
                <DeleteIcon />
              </IconButton>
            </div>
            <Divider />
            <div style={{ marginTop: 16, marginBottom: 16, display: 'flex', justifyContent: 'space-between' }}>
              <Typography variant="body2">Two-step verification</Typography>
              <Switch defaultChecked />
            </div>
            <Divider />
            <div style={{ marginTop: 16, marginBottom: 16 }}>
              <Typography variant="body2" gutterBottom>
                Browsers and devices
              </Typography>
              <List>
                <ListItem>
                  <ListItemText primary="Brave on Mac OS X" secondary="Ninh Binh, Vietnam - Current session" />
                  <IconButton>
                    <DeleteIcon />
                  </IconButton>
                </ListItem>
                <ListItem>
                  <ListItemText primary="Mia's MacBook Pro" secondary="Ninh Binh, Vietnam - Current session" />
                  <IconButton>
                    <DeleteIcon />
                  </IconButton>
                </ListItem>
                <ListItem>
                  <ListItemText primary="Brave on Mac OS X" secondary="Mexico City, Mexico - 1 month ago" />
                  <IconButton>
                    <DeleteIcon />
                  </IconButton>
                </ListItem>
                <ListItem>
                  <ListItemText primary="Mia's MacBook Pro" secondary="Mexico City, Mexico - 1 month ago" />
                  <IconButton>
                    <DeleteIcon />
                  </IconButton>
                </ListItem>
              </List>
            </div>
            
          </CardContent>
        </Card>
      )}
      
      {selectedTab === 2 && (
        <Card style={{ background:'transparent', marginTop: 16 }}>
          <CardContent>
            <Typography variant="h6" component="div" gutterBottom>
              Billing Information
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Billing information content goes here.
            </Typography>
          </CardContent>
        </Card>
      )}
      
      {selectedTab === 3 && (
        <Card style={{ background:'transparent', marginTop: 16 }}>
          <CardContent>
            <Typography variant="h6" component="div" gutterBottom>
              Notifications
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Notifications content goes here.
              {showAlert && (
              <Alert
                severity="success"
                action={
                  <IconButton
                    aria-label="close"
                    color="inherit"
                    size="small"
                    onClick={handleDismiss}
                  >
                    <CloseIcon fontSize="inherit" />
                  </IconButton>
                }
                sx={{ fontSize: '1.2rem', p: 3 }}
              >
                Success Alert
              </Alert>
            )}
            {showWarningAlert && (
              <Alert
                severity="warning"
                action={
                  <IconButton
                    aria-label="close"
                    color="inherit"
                    size="small"
                    onClick={handleDismissWarning}
                  >
                    <CloseIcon fontSize="inherit" />
                  </IconButton>
                }
                sx={{ fontSize: '1.2rem', p: 3 }}
              >
                Warning Alert
              </Alert>
            )}
            {showErrorAlert && (
              <Alert
                severity='error'
                action={
                  <IconButton
                    aria-label="close"
                    color="inherit"
                    size="small"
                    onClick={handleDismissError}
                  >
                    <CloseIcon fontSize="inherit" />
                  </IconButton>
                }
                sx={{ fontSize: '1.2rem', p: 3 }}
              >
                Error Alert
              </Alert>
            )}
            {showInfoAlert && (
              <Alert
                severity='info'
                action={
                  <IconButton
                    aria-label="close"
                    color="inherit"
                    size="small"
                    onClick={handleDismissInfo}
                  >
                    <CloseIcon fontSize="inherit" />
                  </IconButton>
                }
                sx={{ fontSize: '1.2rem', p: 3 }}
              >
                Info Alert
              </Alert>
            )}
            </Typography>
          </CardContent>
        </Card>
      )}
      
      {selectedTab === 4 && (
        <Card style={{ background:'transparent', marginTop: 16 }}>
          <CardContent>
            <Typography variant="h6" component="div" gutterBottom>
              Apps
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Apps content goes here.
            </Typography>
          </CardContent>
        </Card>
      )}
      
      {selectedTab === 5 && (
       <Card style={{ background:'transparent', marginTop: 16 }}>
          <CardContent>
            <Typography variant="h6" component="div" gutterBottom>
              Branding
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Branding content goes here.
            </Typography>
          </CardContent>
        </Card>
      )}
      
      {selectedTab === 6 && (
        <Card style={{ background:'transparent', marginTop: 16 }}>
          <CardContent>
            <Typography variant="h6" component="div" gutterBottom>
              Refer a Friend
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Refer a friend content goes here.
            </Typography>
          </CardContent>
        </Card>
      )}
      
      {selectedTab === 7 && (
        <Card style={{ background:'transparent', marginTop: 16 }}>
          <CardContent>
            <Typography variant="h6" component="div" gutterBottom>
              Sharing
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Sharing content goes here.
            </Typography>
          </CardContent>
        </Card>
      )}
    </div>
  );
};

export default SamplePage;
