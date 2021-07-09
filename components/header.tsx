import styles from '../styles/header.module.scss';
import React from 'react';
import { Container, Grid, Typography } from '@material-ui/core';

export default function Header() {
    return (
        <div className={styles.header}>
            <Container fixed>
                <Grid container justifyContent='space-between' alignItems='center' spacing={6}>
                    <Grid item xs={12} sm={6}>
                        <Typography variant='h3'> 
                            <span>Conversor de Temperatura</span>
                        </Typography>
                            <br />
                        <Typography>
                            Converta temperatura de Celsius para Fahrenheit e Kelvin, Fahrenheit para Celsius e Kelvin ou Kelvin para Fahrenheit e Celsius
                        </Typography>
                    </Grid>

                    <Grid item xs={12} sm={6}>
                        <img src='/images/temperature.png' alt='Imagem que ilustra temperature 0 Celsius'/>
                    </Grid>
                </Grid>
            </Container>
        </div>
    )
} 