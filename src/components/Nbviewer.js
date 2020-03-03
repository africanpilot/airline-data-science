import React from 'react';


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
      <input type="file" id="file"/>
      <div id="notebook-holder"></div>
    </div>
  );
};
};

export default Nbviewer;
