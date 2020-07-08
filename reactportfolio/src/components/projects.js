import React, { Component } from 'react';
import { Tabs, Tab, Grid, Cell, Card, CardTitle, CardActions, Button, CardMenu, IconButton, CardText } from 'react-mdl';

class Projects extends Component {
    constructor(props) {
        super(props);
        this.state  = { activeTab: 0};
    }
    
    toggleCategories() {

        
        if (this.state.activeTab === 0) {
            return(
                
                <div className='projects-grid'>
                {/*project 1*/}
                <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
                    <CardTitle style={{color: 'black', height: '176px',  background:'url() center / cover'}}>Tab 0 P1</CardTitle>
                    <CardText>
                        Text blah blah blah
                    </CardText>
                    <CardActions border>
                        <Button Colored>Github</Button>
                    </CardActions>
                    <CardMenu style={{color: '#fff'}}>
                        <IconButton name="share" />
                    </CardMenu>
                </Card>


                {/*project 2*/}
                <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
                    <CardTitle style={{color: 'black', height: '176px',  background:'url() center / cover'}}>Tab 0 P2</CardTitle>
                    <CardText>
                        Text blah blah blah
                    </CardText>
                    <CardActions border>
                        <Button Colored>Github</Button>
                    </CardActions>
                    <CardMenu style={{color: '#fff'}}>
                        <IconButton name="share" />
                    </CardMenu>
                </Card>

                </div>
            )
        } else if (this.state.activeTab === 1) {
           return(
                <div><h1>This is tab 1</h1></div>
           ) 
        } else if (this.state.activeTab === 2) {
            return(
                <div><h1>This is tab 2</h1></div>
            )  
        } else if (this.state.activeTab === 3) {
            return(
                <div><h1>This is tab 3</h1></div>
            )   
        }
       
    }


    render() {
        return (
           
            <div className="category-tabs">
                <Tabs activeTab={this.state.activeTab} onChange={(tabId) => this.setState({ activeTab: tabId })} ripple>
                    <Tab>tab0</Tab>
                    <Tab>tab1</Tab>
                    <Tab>tab2</Tab>
                    <Tab>tab3</Tab>
                </Tabs>

                
                    <Grid>
                        <Cell col={12}>
                            <div className="content">
                                 {this.toggleCategories()}
                            </div>
                        </Cell>
                    </Grid>
                   
                
            </div>

           
        )
    }
}

export default Projects;