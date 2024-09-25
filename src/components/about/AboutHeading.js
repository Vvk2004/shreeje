import { Box, Container, Typography } from '@mui/material'
import React from 'react'

import Line from '../../assets/images/about/Line.png'
import BG from '../../assets/images/about/bg.png'

const AboutHeading = () => {
    return (
        <>
            <Box
                sx={{
                    position: 'relative',
                    width: "100%",
                    backgroundImage: `url(${BG})`,
                    backgroundSize: "cover",
                    backgroundPosition: 'center',
                    backgroundRepeat: "no-repeat",
                    padding: "120px 0",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    textAlign: "center",
                    color: "#fff",
                    '::before': {
                        content: '""',
                        position: "absolute",
                        top: 0,
                        left: 0,
                        right: 0,
                        bottom: 0,
                        backgroundColor: "#294462E5", // Add the semi-transparent color
                        zIndex: 1, // Ensure this appears on top of the background image
                    },
                }}
            >
                <Container sx={{ zIndex: 2 }}> {/* Content on top of overlay */}
                    <Typography
                        sx={{
                            fontWeight: 600,
                            fontSize: '38px',
                            mb: 1
                        }}
                    >
                        <Typography component={'img'} src={Line} width={'20px'} alt="line" style={{ marginRight: '10px' }} />About Us
                    </Typography>
                    <Typography
                        sx={{ mb: 1, fontSize: '14px', fontWeight: 500 }}
                    >
                        Home / <Typography variant='span' style={{ color: '#19AED7' , fontWeight:500 }}>About Us</Typography>
                    </Typography>
                </Container>
            </Box>

        </>
    )
}

export default AboutHeading
