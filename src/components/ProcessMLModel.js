import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Switch from '@material-ui/core/Switch';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';


const useStyles = makeStyles(theme => ({
    root: {
      '& .MuiTextField-root _': {
        margin: theme.spacing(1),
        width: '10ch',
        height: '10px'
      },
    },
  }));

export default function ProcessMLModel() {
  const classes = useStyles();

  return (
    <div>
    <div> Process Model</div>
    <br/>
    <form className={classes.root} noValidate autoComplete="off">
      <TextField id="process-name" label="Process name" variant="outlined" />
    </form> 
    <br/>
    <form className={classes.root} noValidate autoComplete="off">
      <TextField id="svc-c" label="C" type="number" variant="outlined" InputLabelProps={{shrink: true}} defaultValue="10" />
      <TextField id="svc-cache_size" label="cache_size" type="number" variant="outlined" InputLabelProps={{shrink: true}} defaultValue="200" />
      <TextField id="svc-max_iter" label="max_inter" type="number" variant="outlined" InputLabelProps={{shrink: true}} defaultValue="-1" />
      <TextField id="svc-coef0" label="coef0" type="number" variant="outlined" InputLabelProps={{shrink: true}} defaultValue="0.0" />   
    </form>
    <br/>
    <form className={classes.root} noValidate autoComplete="off">
      <TextField id="svc-degree" label="degree" type="number" variant="outlined" InputLabelProps={{shrink: true}} defaultValue="3" />
      <TextField id="svc-gamma" label="gamma" type="number" variant="outlined" InputLabelProps={{shrink: true}} defaultValue="0.0001" />
      <TextField id="svc-tol" label="tol" type="number" variant="outlined" InputLabelProps={{shrink: true}} defaultValue="0.001" />
      <TextField id="svc-class_weight" label="class_weight" variant="outlined" defaultValue="None" />
    </form>
    <br/>
    <form className={classes.root} noValidate autoComplete="off">
      <TextField id="svc-random_state" label="random_state" variant="outlined" defaultValue="None" />
      <TextField id="svc-kernel" label="kernel" variant="outlined" defaultValue="rbf" />
      <TextField id="svc-decision_function_shape" label="decision_function_shape" variant="outlined" defaultValue="ovr" />  
    </form>
    <br/>
    <FormControl component="fieldset">
    <FormGroup aria-label="position" row>
      <FormControlLabel
        value="probability"
        control={<Switch color="primary" />}
        label="probability"
        labelPlacement="start"
      />
      <FormControlLabel
        value="shrinking"
        control={<Switch color="primary" />}
        label="shrinking"
        labelPlacement="start"
      />
      <FormControlLabel
        value="verbose"
        control={<Switch color="primary" />}
        label="verbose"
        labelPlacement="start"
      />
    </FormGroup>
  </FormControl>
  </div>
  );
}