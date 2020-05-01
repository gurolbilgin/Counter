import React, { Component } from 'react'
import Counter from "./Counter"
import { Container } from '@material-ui/core';




 const App = () => {
  return  (

      <Container maxWidth="xs" fixed>
        <Counter />
        
       
      </Container>
      
      
    )
  
  }
export default App;
