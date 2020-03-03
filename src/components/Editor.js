import React from 'react';
import AceEditor from "react-ace";
 
import "ace-builds/src-min-noconflict/ext-language_tools";
import "ace-builds/src-noconflict/mode-python";
import "ace-builds/src-noconflict/snippets/python";
import "ace-builds/src-noconflict/theme-github";
 
function onChange(newValue) {
  console.log("change", newValue);
}

class Editor extends React.Component {

render() {
  return (
    <div>
    <AceEditor
    mode="python"
    theme="github"
    onChange={onChange}
    name="UNIQUE_ID_OF_DIV"
    editorProps={{ $blockScrolling: true }}
    enableBasicAutocompletion={true}
    enableLiveAutocompletion={true}
    enableSnippets={true}
  />
    </div>
  );
};
};

export default Editor;
