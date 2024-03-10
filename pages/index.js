import Head from 'next/head';
import { Grid, Container, Typography, Button } from '@mui/material';
import styles from '../styles/Home.module.css';

export default function Home() {
  return (
    <Container maxWidth="md">
      <Grid
        container
        direction="column"
        justifyContent="center"
        alignItems="center"
        spacing={4}
      >
        <Grid item>
          <Typography variant="h2">Final Fantasy Deck Builder</Typography>
        </Grid>
        <Grid item>
          <Typography variant="h4">
            Enter your username
          </Typography>
        </Grid>
        <Grid item>
          <p>UHhh</p>
        </Grid>
        <Grid item>
          <Button
            variant="contained"
            color="primary"
            // type={type}
            // onClick={onClick}
          >
            Submit
          </Button>
        </Grid>
      </Grid>
    </Container>
  );
}
