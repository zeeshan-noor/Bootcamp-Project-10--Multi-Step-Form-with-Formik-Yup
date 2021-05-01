import React from 'react';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import InfoForm from '../Components/InfoForm';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      width: '100%',
    },
    backButton: {
      marginRight: theme.spacing(1),
    },
 
  }),
);

function getSteps() {
  return ['Form1', 'Form2', 'Form3'];
}

function getStepContent(stepIndex: number,setStepIndex: React.Dispatch<React.SetStateAction<number>>) {
  switch (stepIndex) {
    case 0:
      return <InfoForm  submit={setStepIndex}/>;
    case 1:
      return <InfoForm  submit={setStepIndex}/>;
    case 2:
      return <InfoForm  submit={setStepIndex}/>;
    default:
      return 'Unknown stepIndex';
  }
}

export default function FoStepper() {
  const classes = useStyles();
  const [activeStep, setActiveStep] = React.useState(0);
  const steps = getSteps();

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleReset = () => {
    setActiveStep(0);
  };

  return (
    <div className={classes.root}>
      <Stepper activeStep={activeStep} alternativeLabel>
        {steps.map((label) => (
          <Step key={label}>
            <StepLabel>{label}</StepLabel>
          </Step>
        ))}
      </Stepper>
    
         {getStepContent(activeStep,setActiveStep)}
          
            {/* <Button variant="contained" color="primary" onClick={handleNext}>
              {activeStep === steps.length - 1 ? 'Finish' : 'Next'}
            </Button> */}
             
  
    </div>
  );
}
