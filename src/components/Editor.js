import React from 'react';
import AceEditor from "react-ace";
import { Card, CardBody, Col,  Row,
  Button
  } from 'reactstrap';
import PlayCircleOutlineIcon from '@material-ui/icons/PlayCircleOutline';
import JupViewer from 'components/JupViewer.js'

import "ace-builds/src-min-noconflict/ext-language_tools";
import "ace-builds/src-noconflict/mode-python";
import "ace-builds/src-noconflict/snippets/python";
import "ace-builds/src-noconflict/theme-tomorrow";
 
const ipynb = require('components/notebooks/Code_Output.ipynb')

function onChange(newValue) {
  console.log("change", newValue);
}

class Editor extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showComponent: false,
    };
    this._onButtonClick = this._onButtonClick.bind(this);
  }

  _onButtonClick() {
    this.setState({
      showComponent: true,
    });
  }
render() {
  return (
    <div>
    <AceEditor
    mode="python"
    theme="tomorrow"
    width="inherit"
    maxLines={Infinity}
    onChange={onChange}
    name="UNIQUE_ID_OF_DIV"
    value={
`import pandas as pd

data = [1,2,23,4,4,5]
df = pd.DataFrame(data)
display(df)
`}
    editorProps={{ $blockScrolling: true }}
    enableBasicAutocompletion={true}
    enableLiveAutocompletion={true}
    enableSnippets={true}
  />
  <br/>
  <PlayCircleOutlineIcon color="primary" onClick={this._onButtonClick}/>
  {this.state.showComponent ?
           <JupViewer file={ipynb}/> :
           null
        }
    </div>
  );
};
};

export default Editor;
