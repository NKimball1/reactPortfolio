import React from 'react';
import './App.css';
import { Layout, Header, Navigation, Drawer, Content, Grid, Cell } from 'react-mdl';
import { Link } from 'react-router-dom';
import LandingPage from './components/landingpage';
import Projects from './components/projects';



function App() {
  return (

    <div className="demo-big-content">
      <Layout>
        <Header className="header-color" title="Nicholas Kimball" scroll>
          <Navigation>
            <Link to="/aboutme">About Me</Link>
            <Link to="/resume">Resume</Link>
            <Link to="/projects">Projects</Link>
            <Link to="/contact">Contact</Link>
          </Navigation>
        </Header>
        <Drawer title="Title">
          <Navigation>
            <Link to="/aboutme">About Me</Link>
            <Link to="/resume">Resume</Link>
            <Link to="/projects">Projects</Link>
            <Link to="/contact">Contact</Link>
          </Navigation>
        </Drawer>
        <Content>


            <Grid noSpacing style={{width: '100%', height: '100%'}}>
              <Cell col={1}>
                <LandingPage/>
              </Cell>
            </Grid>

            <Grid noSpacing style={{width: '100%', height: '80%'}}>
              <Cell col={12}>
                <Projects/>
              </Cell>
            </Grid>
          
            

        </Content>

      </Layout>


    </div>



  );
}

export default App;
