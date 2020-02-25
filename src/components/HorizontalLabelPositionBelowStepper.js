import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { InputGroup, InputGroupAddon, InputGroupText, Input,
Label, FormGroup} from 'reactstrap';

const useStyles = makeStyles(theme => ({
  root: {
    width: '100%',
  },
  backButton: {
    marginRight: theme.spacing(1),
  },
  instructions: {
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(1),
  },
}));

function getSteps() {
  return ['Name', 'Department', 'Data Load', 'Quality Control', 'Data Analysis'
  , 'Model', 'Evaluation'];
}

function getStepContent(stepIndex) {
  switch (stepIndex) {
    case 0:
      return (<InputGroup>
        <InputGroupAddon addonType="prepend">
          <InputGroupText>Name</InputGroupText>
        </InputGroupAddon>
        <Input placeholder="Create Use Case Name..." />
      </InputGroup>
      );
    case 1:
      return (
        <FormGroup>
          <Label for="exampleSelect">Select Department</Label>
          <Input type="select" name="select" id="exampleSelect">
            <option></option>
            <option>Safety</option>
            <option>Flight Operations</option>
            <option>ME</option>
          </Input>
        </FormGroup>
      );
    case 2:
      return (
        <FormGroup>
          <Label for="exampleSelect">Select Data Load Connection</Label>
          <Input type="select" name="select" id="exampleSelect">
            <option></option>
            <option>load1</option>
            <option>load2</option>
            <option>load3</option>
          </Input>
        </FormGroup>
      );
    case 3:
      return (
        <FormGroup>
          <Label for="exampleSelect">Quality Control Rule</Label>
          <Input type="select" name="select" id="exampleSelect">
            <option></option>
            <option>Rule1</option>
            <option>Rule2</option>
            <option>Rule3</option>
          </Input>
          <Label for="exampleSelect">Quality Control Format</Label>
          <Input type="select" name="select" id="exampleSelect">
            <option></option>
            <option>Format1</option>
            <option>Format2</option>
            <option>Format3</option>
          </Input>
        </FormGroup>
      );
    case 4:
      return (
        <FormGroup>
          <Label for="exampleSelect">Select Data Analysis Format</Label>
          <Input type="select" name="select" id="exampleSelect">
            <option></option>
            <option>Format1</option>
            <option>Format2</option>
            <option>Format3</option>
          </Input>
        </FormGroup>
      );
    case 5:
      return (
        <FormGroup>
          <Label for="exampleSelect">Select Model</Label>
          <Input type="select" name="select" id="exampleSelect">
            <option></option>
            <option>Model1</option>
            <option>Model2</option>
            <option>Model3</option>
          </Input>
          <Label for="exampleSelect">Select Model Process</Label>
          <Input type="select" name="select" id="exampleSelect">
            <option></option>
            <option>Process1</option>
            <option>Process2</option>
            <option>Process3</option>
          </Input>
        </FormGroup>
      );
    case 6:
      return (
        <FormGroup>
          <Label for="exampleSelect">Select Evaluation Format</Label>
          <Input type="select" name="select" id="exampleSelect">
            <option></option>
            <option>Format1</option>
            <option>Format2</option>
            <option>Format3</option>
          </Input>
        </FormGroup>
      );
    default:
      return 'Unknown stepIndex';
  }
}

export default function HorizontalLabelPositionBelowStepper() {
  const classes = useStyles();
  const [activeStep, setActiveStep] = React.useState(0);
  const steps = getSteps();

  const handleNext = () => {
    setActiveStep(prevActiveStep => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep(prevActiveStep => prevActiveStep - 1);
  };

  const handleReset = () => {
    setActiveStep(0);
  };

  return (
    <div className={classes.root}>
      <Stepper activeStep={activeStep} alternativeLabel>
        {steps.map(label => (
          <Step key={label}>
            <StepLabel>{label}</StepLabel>
          </Step>
        ))}
      </Stepper>
      <div>
        {activeStep === steps.length ? (
          <div>
            <Typography className={classes.instructions}>All steps completed</Typography>
            <Button onClick={handleReset}>Return</Button>
          </div>
        ) : (
          <div>
            <Typography className={classes.instructions}>{getStepContent(activeStep)}</Typography>
            <div>
              <Button
                disabled={activeStep === 0}
                onClick={handleBack}
                className={classes.backButton}
              >
                Back
              </Button>
              <Button variant="contained" color="primary" onClick={handleNext}>
                {activeStep === steps.length - 1 ? 'Finish' : 'Next'}
              </Button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
