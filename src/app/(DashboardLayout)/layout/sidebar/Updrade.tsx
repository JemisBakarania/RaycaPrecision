import { Box, Typography, Button, LinearProgress } from '@mui/material';
import Image from 'next/image';
import Link from 'next/link';

export const Upgrade = () => {
    // Mock data for storage usage
    const totalStorage = 10; // Total storage in GB
    const usedStorage = 9.2; // Used storage in GB
    const storagePercentage = (usedStorage / totalStorage) * 100; // Calculate percentage

    return (
        <Box
            display='flex'
            alignItems="center"
            gap={2}
            sx={{
                m: 3,
                p: 2,
                bgcolor: '#242424', // Dark theme background color
                border: `1px solid rgba(63,63,63,0.8)`, // Gray border color
                borderRadius: '12px',
                color: 'text.primary', // Dark theme text color
                boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.1)', // Optional: Box shadow for depth
                maxWidth: '400px'
            }}
        >
            {/* Text and Progress */}
            <Box sx={{ flex: '1 1 auto' }}>
                <Typography variant="h5" sx={{ fontSize: '16px', mb: 1 }}>Storage &nbsp; <a style={{color:'white',fontSize:12,float:'right'}} href='#'>Upgrade</a></Typography>
                
                <LinearProgress
                    variant="determinate"
                    value={storagePercentage}
                    sx={{
                        mt: 2,
                        height: '7px', // Increase height of the progress bar
                        borderRadius: '10px', // Round corners of the progress bar
                        '& .MuiLinearProgress-bar': {
                            backgroundColor: 'rgba(255, 255, 255, 0.3) !important', // Gray background for filled progress bar
                        },
                        '& .MuiLinearProgress-barColorPrimary': {
                            backgroundColor: '#d3d3d3 !important', // White color for filled progress bar
                        },
                        '& .MuiLinearProgress-barColorSecondary': {
                            backgroundColor: '#d3d3d3 !important', // Gray color for unfilled progress bar
                        },
                    }}
                />
                <Typography style={{marginTop:'8px'}}> </Typography>
                <Typography variant="body2" sx={{ color: 'text.secondary' }}>{`${usedStorage} GB of ${totalStorage} GB Used`}</Typography>
                {/* Optional: Upgrade Link */}
                {/* <a href='#' style={{color:'white',fontSize:12,float:'right'}}>Upgrade</a> */}
            </Box>
        </Box>
    );
};
