import React, { Component } from 'react'
import { Container, Button, Fab, Typography, Box, Divider } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';  


class Counter extends Component {
    constructor (props) {
        super (props)

        this.state = {
            figure : 0
        }
    
    }
        Increase = () => {
        let defaultFigure = this.state.figure
        this.setState ({
            figure: defaultFigure +1
        })
    }
        Decrease = () => {
            let defaultFigure = this.state.figure
            this.setState ({
                figure: defaultFigure -1
            })
    
        }
        Reset = () => {
                this.setState ({
                figure: 0
            })
    
        }    
  
    render() {
                   
        return (
              
            <Container>
            <br/>
            <Container align="center" >   
            
            <Typography align="center" variant="h2" >Counter</Typography>
            <br/>
            <Typography align="center" variant="h3" >{this.state.figure}</Typography>
            <br/>
            <Divider />
            <br/>
            <Fab size="small" color="primary" aria-label="add" onClick={this.Decrease} > <strong>-</strong> </Fab>
            <Fab size="large" color="default" aria-label="add" onClick={this.Increase} > <strong>+</strong> </Fab>              
            <Fab size="small" color="secondary" aria-label="add" onClick={this.Reset} >  </Fab>
            <br/>
            <br/> 
           
      </Container>
      <br />
      <br />


      
    </Container>
            
            
        )
    }
}
export default Counter;