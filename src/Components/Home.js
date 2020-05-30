import React from "react";
import history from "../Utils/history";
import '../App.css';
import { Container, Grid, Button } from "@material-ui/core";

const Home = () => {
    return (
      <Container>
          Welcome!
          <Grid container alignItems='center'>
              <Grid item xs={6}>
                <Button>
                    Previous games
                </Button>
              </Grid>
              <Grid item xs={6}>
                <Button  onClick = {() =>history.push('/newgame')}>
                    New game
                </Button>
              </Grid>
          </Grid>
      </Container>
    );
  };
  
  export default Home;