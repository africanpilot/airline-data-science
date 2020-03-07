import React from 'react';
import {Button} from 'reactstrap'

class Nbviewer extends React.Component {
  componentDidMount () {
    const script = document.createElement("script");

    script.src = 'js/nbpreview.js';
    script.async = true;

    document.body.appendChild(script);
}

render() {

  return (
    <div>    
      {/* <input type= "file" id="file" ></input> 
      <div id= "notebook-holder"></div> */}
      <Button id="notebook-holder" onClick={this.componentDidMount}>Run</Button>
      <button  id='mylink'>click me</button>
      <a href='linkhref.html' id='mylink'>click me</a>
    </div>
    
  );
};
};

export default Nbviewer;
