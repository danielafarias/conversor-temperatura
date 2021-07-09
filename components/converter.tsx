// Componentes
import { Container, Grid, Button, TextField, Typography, IconButton } from '@material-ui/core';
import TouchAppIcon from '@material-ui/icons/TouchApp';
import AutorenewIcon from '@material-ui/icons/Autorenew';
import DeleteIcon from '@material-ui/icons/Delete';
import React, { useState } from 'react';

// Styles
import styles from '../styles/converter.module.scss';
import { createTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/core/styles';
import { red, teal } from '@material-ui/core/colors';


const theme = createTheme({
    palette: {
      primary: {
        main: red[900],
      },
      secondary: {
        main: teal['A400'],
      },
    },
  });


export default function Converter() {

    const [temperature, setTemperature] = useState(0);
    const [celsius, setCelsius] = useState(0);
    const [fahrenheit, setFahrenheit] = useState(0);
    const [kelvin, setKelvin] = useState(0);

    function changeTemperature() {
        if (temperature == 0) {
            setTemperature(1);
        } else if (temperature == 1) {
            setTemperature(2)
        } else if (temperature == 2) {
            setTemperature(0)
        } 
    }

    function converterCelsius() {

        const celsiusToFahrenheit = (celsius * 9/5) + 32;
        setFahrenheit(Number(celsiusToFahrenheit.toFixed(2)));

        const celsiusToKelvin = celsius + 273.15;
        setKelvin(Number(celsiusToKelvin.toFixed(2)));

    } 
        
    function converterFahrenheit() {

        const fahrenheitToCelsius = (fahrenheit - 32) * 5/9;
        setCelsius(Number(fahrenheitToCelsius.toFixed(2)));
             
        const fahrenheitToKelvin = (fahrenheit - 32) * 5/9 + 273.15;
        setKelvin(Number(fahrenheitToKelvin.toFixed(2)));
            
    } 
        
    function converterKelvin(){

        const kelvinToCelsius = kelvin - 273.15;
        setCelsius(Number(kelvinToCelsius.toFixed(2)));

        const kelvinToFahrenheit = (kelvin - 273.15) * 9/5 + 32; 
        setFahrenheit(Number(kelvinToFahrenheit.toFixed(2)));

    } 
      
    function resetResults() {
        setCelsius(0);
        setFahrenheit(0);
        setKelvin(0);
    }

    return (
        <div className={styles.converter}>
            <Container maxWidth='xs'>
                <Grid container direction='column' alignItems='center' spacing={4}>

                    <Grid item> 
                        <Typography align='center' className={styles.title} variant='h6'>Escolha entre °C, °F ou °K</Typography>
                        {
                            temperature == 0 ? (
                                <ThemeProvider theme={theme}>
                                    <TextField
                                        variant='filled'
                                        label='Valor em Celsius'
                                        fullWidth
                                        type='number'
                                        onChange={ ({target}) => setCelsius(Number(target.value)) }
                                    />
                                </ThemeProvider>
                        ) : temperature == 1 ? (
                                <ThemeProvider theme={theme}>
                                    <TextField
                                        variant='filled'
                                        label='Valor em Fahrenheit'
                                        fullWidth
                                        type='number'
                                        onChange={ ({target}) => setFahrenheit(Number(target.value)) }
                                    />
                                </ThemeProvider>
                        ) : 
                            <ThemeProvider theme={theme}>
                                <TextField
                                    variant='filled'
                                    label='Valor em Kelvin'
                                    fullWidth
                                    type='number'
                                    onChange={ ({target}) => setKelvin(Number(target.value)) }
                                />
                            </ThemeProvider>
                        }
                    </Grid>

                    <Grid item>
                        <>
                            <IconButton 
                                aria-label='Troca as temperatures'
                                color='default'
                                onClick={ () => changeTemperature() }
                                className={styles.iconBtn}>
                                    <AutorenewIcon />
                            </IconButton>

                            <IconButton 
                                aria-label='Limpa os results convertidos'
                                color='default'
                                onClick={ () => resetResults()}
                                className={styles.iconBtn}>
                                    <DeleteIcon />
                            </IconButton>
                      </>
                    </Grid>
                    
                    <Grid item> {
                        temperature == 0 ? (
                            <Button 
                                onClick={ () => converterCelsius() } 
                                variant="contained"
                                startIcon={<TouchAppIcon />}
                                className={styles.btn}>
                                    Converter Celsius
                            </Button>
                        ) : temperature == 1 ? (
                                <Button 
                                    onClick={ () => converterFahrenheit() } 
                                    variant="contained"
                                    startIcon={<TouchAppIcon />}
                                    className={styles.btn}>
                                        Converter Fahrenheit
                                </Button>
                        ) : 
                            <Button 
                                onClick={ () => converterKelvin() } 
                                variant="contained"
                                startIcon={<TouchAppIcon />}
                                className={styles.btn}>
                                    Converter Kelvin
                            </Button>
                        }
                    </Grid>

                    <Grid item>
                        <div> 
                            <Typography align='center' className={styles.title}>Resultados:</Typography>
                            <div>   
                                <Typography align='center'>
                                    O valor em {temperature == 0 ? 'Fahrenheit' : temperature == 1 ? 'Celsius' : 'Fahrenheit'} é: 
                                        <br />
                                    <Typography align='center' className={styles.results}>{temperature == 0 ? fahrenheit : temperature == 1 ? celsius : fahrenheit}°</Typography>      
                                </Typography>
                            </div>     
                            <div>
                                <Typography align='center'>
                                    O valor em {temperature == 0 ? 'Kelvin' : temperature == 1 ? 'Kelvin' : 'Celsius'} é: 
                                        <br />
                                    <Typography align='center' className={styles.results}>{temperature == 0 ? kelvin : temperature == 1 ? kelvin : celsius}°</Typography>
                                </Typography> 
                            </div>
                        </div>
                    </Grid>

                    <Grid item xs={12} sm={6} alignItems='center'>
                        <a href="https://github.com/danielafarias" target="_blank">
                            <img src="/images/github.png" alt='Logo do Github' className={styles.github}/>
                        </a>
                    </Grid>

                </Grid>
            </Container>
        </div>
    );
}