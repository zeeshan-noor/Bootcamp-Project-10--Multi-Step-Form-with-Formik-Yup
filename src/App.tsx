import React from 'react';
import InfoForm from './Components/InfoForm';
import FormStepper from './Stepper';
import { Container, Box } from "@material-ui/core";

function App() {
  return (
    <div className="App">
      <Container maxWidth="md">
        <Box mt={5} mb={5}>
      <FormStepper/>
        </Box>
      </Container>
    </div>
  );
}

export default App;
