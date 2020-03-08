import React from 'react';
import AceEditor from "react-ace";
import PlayCircleOutlineIcon from '@material-ui/icons/PlayCircleOutline';
import SaveIcon from '@material-ui/icons/Save';
import JupViewer from 'components/JupViewer.js'
import textCode from 'components/notebooks/Code.txt'
import "ace-builds/src-min-noconflict/ext-language_tools";
import "ace-builds/src-noconflict/mode-python";
import "ace-builds/src-noconflict/snippets/python";
import "ace-builds/src-noconflict/theme-tomorrow";


const ipynb = require('components/notebooks/Code_Output.ipynb')

class Editor extends React.Component {

  componentDidMount () {
    fetch(textCode)
    .then(response => response.text())
    .then((data) => {
        this.setState({
        code: data})  
    })
 }

  constructor(props) {
    super(props);
    this.state = {
      showComponent: false,
      code: "",
      newCode: "",
    };
    this._onButtonClick = this._onButtonClick.bind(this);
    this.onChange = this.onChange.bind(this);
  }

  _onButtonClick() {
    
    this.setState({
      showComponent: true,
    });
  }

  onChange(newValue) {
    console.log("change", newValue);
    this.state.newCode = newValue;
}

downloadTxtFile = () => {
  console.log("saveCode", this.state.newCode);
  const element = document.createElement("a");
  const file = new Blob([this.state.newCode], {type: 'text/plain'});
  element.href = URL.createObjectURL(file);
  element.download = "Code.txt";
  document.body.appendChild(element); // Required for this to work in FireFox
  element.click();
}

render() {
  return (
    <div>
      <AceEditor
      mode="python"
      theme="tomorrow"
      width="inherit"
      maxLines={Infinity}
      onChange={this.onChange}
      name="UNIQUE_ID_OF_DIV"
      value={this.state.code}
      editorProps={{ $blockScrolling: true }}
      enableBasicAutocompletion={true}
      enableLiveAutocompletion={true}
      enableSnippets={true}
    />
    <br/>
    <PlayCircleOutlineIcon color="primary" onClick={this._onButtonClick}/>
    <SaveIcon color="primary" onClick={this.downloadTxtFile}/>
    {this.state.showComponent ? <JupViewer file={ipynb}/> :null}
  </div>
  );
};
};

export default Editor;
