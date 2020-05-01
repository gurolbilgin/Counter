import React, { Component } from 'react'
import { Container, Button, Fab, Typography, Box, Divider } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';  


const useStyles = makeStyles(() => ({
    fabStyle : {
        flex: 1, 
        margin: 2   
    },
  }));

  
  
  
class IconButtons extends Component {
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
        
            const classes = useStyles();
        return (
            
            <Container>
              
              
            <br/>
            <Container {...className = classes.root} align="center" >   
            
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
export default IconButtons;