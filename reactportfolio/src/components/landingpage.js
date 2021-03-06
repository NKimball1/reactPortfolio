import React, { Component, } from 'react';
import { Grid, Cell } from 'react-mdl';
import ParticleComponent from './particlecomponent';


class Landing extends Component {
    render() {
        return (
            <div style={{ width: '100%', margin: 'auto', }}>

                <Grid className="landing-grid">
                
                    <Cell col={12}>
                        <img
                            src="https://scontent-msp1-1.cdninstagram.com/v/t51.2885-19/s150x150/42068703_175867920001335_2749559946034020352_n.jpg?_nc_ht=scontent-msp1-1.cdninstagram.com&_nc_ohc=228ZslAqyWUAX-9bJF8&oh=20a2055e84a35a4b362535c8391bd69c&oe=5F276878"
                            alt="avatar"
                            className="avatar-img"
                        />

                        <div className="banner-text">
                            <h1>Software Developer</h1>

                            <hr />

                            <p>JAVA | PYTHON | C | JAVASCRIPT | SQL | OPTIMIZATION</p>

                            <div className="social-links">
                               
                             {/* Linkedin */  }                               
                                <a href="https://www.linkedin.com/in/nicholas-kimball-819194150/" rel="noopener noreferrer" target="_blank">
                                    <i className="fab fa-linkedin" aria-hidden="true" />
                                </a>
                            

                            {/* Github */  }                               
                            <a href="https://github.com/NKimball1" rel="noopener noreferrer" target="_blank">
                                    <i className="fab fa-github-square" aria-hidden="true" />
                                </a>
                            

                             {/* Email */  }                               
                             <a href="mailto:nkimball@wisc.edu" rel="noopener noreferrer" target="_blank">
                                    <i className="fas fa-envelope-square" aria-hidden="true" />
                                </a>

                            {/* CodePen */  }                               
                            <a href="https://codepen.io/nkimball1" rel="noopener noreferrer" target="_blank">
                                    <i className="fab fa-codepen" aria-hidden="true" />
                                </a>
                            
                            </div>
    
                        </div>
                      
                    </Cell>

                  
                </Grid>
            <ParticleComponent />

            
                
            </div>

            
              
           
            


        )
    }
}

export default Landing;