import { Box, Button, Container, Grid, Typography } from '@mui/material';
import React from 'react';
import homeTwoLines from '../../assets/images/home/homeTwoLines.png';
import Sourcing from '../../assets/images/home/Sourcing.png';
import Quality from '../../assets/images/home/Quality.png';
import Logistics from '../../assets/images/home/Logistics.png';
import Certifications from '../../assets/images/home/Certifications.png';
import Sustainability from '../../assets/images/home/Sustainability.png';

const productRange = [
    { image: Sourcing, label: 'Sourcing' },
    { image: Quality, label: 'Quality Control' },
    { image: Logistics, label: 'Logistics' },
    { image: Certifications, label: 'Certifications' },
    { image: Sustainability, label: 'Sustainability' }
];

const HomePrdRange = () => {
    return (
        <Box sx={{ mt: { md: 15, xs: 5 } }}>
            <Container>
                <Box>
                    <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', mb: { md: 10, xs: 5 } }}>
                        <Typography sx={{ fontWeight: 600, fontSize: { lg: '40px', md: '34px', sm: '24px', xs: '28px' }, alignItems: 'center', display: 'flex' }}>
                            <Typography component={'img'} src={homeTwoLines} sx={{ mr: 1 }}></Typography>
                            Our Product Range
                        </Typography>
                    </Box>
                    <Grid container spacing={3}>
                        {productRange.map((product, index) => (
                            <Grid item md={2.4} sm={4} xs={12} key={index}>
                                <Box sx={{ position: 'relative' }}>
                                    <Typography component={'img'} src={product.image} width={'100%'} />
                                    <Typography
                                        sx={{
                                            position: 'absolute',
                                            top: '8%',
                                            width: '85%',
                                            backgroundColor: '#fff',
                                            boxShadow: 1,
                                            display: 'flex',
                                            justifyContent: 'center',
                                            color: '#555555',
                                            py: 2,
                                            fontWeight: 600,
                                            left: { sm: '-6%', xs: '-3%' }
                                        }}
                                    >
                                        {product.label}
                                    </Typography>
                                    <Button
                                        sx={{
                                            position: 'absolute',
                                            borderRadius: '0',
                                            bottom: '8%',
                                            color: '#fff',
                                            boxShadow: 1,
                                            display: 'flex',
                                            justifyContent: 'center',
                                            backgroundColor: '#19AED7',
                                            textTransform: 'unset',
                                            py: 0.5,
                                            px: 3,
                                            fontWeight: 600,
                                            right: { sm: '-6%', xs: '-3%' }
                                        }}
                                    >
                                        Read More
                                    </Button>
                                </Box>
                            </Grid>
                        ))}
                    </Grid>
                </Box>
            </Container>
        </Box>
    );
};

export default HomePrdRange;
