import { Box, Container, Typography } from "@mui/material";
import React from "react";
import backgroundimg from '../../assets/images/ourPrdGrains/grainsBg.png';
import line from "../../assets/images/ourPrdGrains/GrainsLine.png";
import { useNavigate } from "react-router-dom";

const GrainsDec = () => {

  const navigate = useNavigate();

  return (
    <>
      <Box
        sx={{
          position: 'relative',
          width: "100%",
          backgroundImage: `url(${backgroundimg})`,
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
            backgroundColor: "#294462E5",
          },
        }}
      >
        <Container sx={{ zIndex: 2 }}>
          <Box >
            <Typography sx={{ fontWeight: 600, fontSize: { lg: '40px', md: '34px', sm: '24px', xs: '28px' }, mb: 1, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <Typography component={'img'} src={line} width={'20px'} alt="line" style={{ marginRight: '10px' }} />Our Products
            </Typography>
            <Typography sx={{ mb: 1, ml: { lg: 7, md: 11, sm: 19 }, fontSize: '14px', fontWeight: 500 }}>
              <Typography variant="span" onClick={() => navigate('/')} sx={{ cursor: 'pointer' }} >Home</Typography> / <Typography variant="span" onClick={() => navigate('/ourProducts')} sx={{ cursor: 'pointer' }}>Our Products</Typography> / <Typography variant='span' sx={{ color: '#19AED7', fontWeight: 500 }}>Grains & Pulses</Typography>
            </Typography>
          </Box>
        </Container>
      </Box>
    </>
  );
};

export default GrainsDec;
