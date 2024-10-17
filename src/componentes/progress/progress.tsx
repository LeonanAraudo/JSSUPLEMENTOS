"use client"
import * as React from 'react';
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Stack } from '@mui/material';
import Form1 from '../forms/formProduct1/form1';
import Form2 from '../forms/formProduct2/form2';
import Form3 from '../forms/formProduct3/form3';

const steps = ['Categoria de produto', 'Informações do Produto','Dados Adicionais'];

export default function HorizontalLinearStepper() {
  const [activeStep, setActiveStep] = React.useState(0);
  const [skipped, setSkipped] = React.useState(new Set<number>());

  const isStepOptional = (step: number) => {
    return step === 1;
  };

  const isStepSkipped = (step: number) => {
    return skipped.has(step);
  };

  const handleNext = () => {
    let newSkipped = skipped;
    if (isStepSkipped(activeStep)) {
      newSkipped = new Set(newSkipped.values());
      newSkipped.delete(activeStep);
    }

    setActiveStep((prevActiveStep) => prevActiveStep + 1);
    setSkipped(newSkipped);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleSkip = () => {
    if (!isStepOptional(activeStep)) {
      throw new Error("You can't skip a step that isn't optional.");
    }

    setActiveStep((prevActiveStep) => prevActiveStep + 1);
    setSkipped((prevSkipped) => {
      const newSkipped = new Set(prevSkipped.values());
      newSkipped.add(activeStep);
      return newSkipped;
    });
  };

  const handleReset = () => {
    setActiveStep(0);
  };

  const getStepContent = (step: number) => {
    switch (step) {
      case 0:
        return <Form1/>;
      case 1:
        return <Form2/>;
      case 2:
        return <Form3/>;
      default:
        return 'Unknown step';
    }
  };

  return (
    <Box sx={{ width: '100%',marginTop:'20px'}}>
      <Box sx={{ width:'100%',display:'flex',flexDirection:'column',alignItems:'center',justifyContent:'center' }}>
      <Stepper sx={{ width: '80%'}}  activeStep={activeStep}>
        {steps.map((label, index) => {
          const stepProps: { completed?: boolean } = {};
          const labelProps: { optional?: React.ReactNode } = {};
          if (isStepSkipped(index)) {
            stepProps.completed = false;
          }
          return (
            <Step key={label} {...stepProps}>
              <StepLabel {...labelProps}>{label}</StepLabel>
            </Step>
          );
        })}
      </Stepper>
      </Box>
      {activeStep === steps.length ? (
        <React.Fragment>
          <Typography sx={{ mt: 2, mb: 1 }}>
            All steps completed - you&apos;re finished
          </Typography>
          <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
            <Box sx={{ flex: '1 1 auto' }} />
            <Button onClick={handleReset}>Reset</Button>
          </Box>
        </React.Fragment>
      ) : (
        <React.Fragment>
          <Box sx={{ mt: 2, mb: 1 }}>
            {getStepContent(activeStep)}
          </Box>
          
          <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
            <Button
              color="inherit"
              disabled={activeStep === 0}
              onClick={handleBack}
              sx={{ mr: 1 }}
            >
              Back
            </Button>
            <Box sx={{ flex: '1 1 auto' }} />
          <Button 
            type={activeStep === 0 || activeStep === steps.length - 1 ? 'submit' : 'button'}
            onClick={handleNext}
          >
            {activeStep === steps.length - 1 ? (
              <Stack
                spacing={2}
                direction="row"
                sx={{
                  display: 'flex',
                  width: '100%',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                <Button
                  color="primary" 
                  type='submit'
                  variant="contained"
                  sx={{ width: '223px', height: '45px' }} 
                >
                  Cadastrar
                </Button>
              </Stack>
            ) : 'Prosseguir'}
          </Button>

          </Box>
        </React.Fragment>
      )}
    </Box>
  );
}