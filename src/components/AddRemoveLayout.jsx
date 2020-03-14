import React from "react";
import { Card, CardBody, Col,  Row,
  Button
  } from 'reactstrap';
import MenuDataAnalysisBuild from 'components/MenuDataAnalysisBuild';
import AddCircleIcon from '@material-ui/icons/AddCircle';
import { WidthProvider, Responsive } from "react-grid-layout";
import _ from "lodash";
import "components/test-hook.jsx"
import JupViewer from 'components/JupViewer.js'
const ResponsiveReactGridLayout = WidthProvider(Responsive);
const ipynb = require('components/notebooks/Code_Output.ipynb')

/**
 * This layout demonstrates how to use a grid with a dynamic number of elements.
 */
export default class AddRemoveLayout extends React.PureComponent {
  static defaultProps = {
    className: "layout",
    cols: { lg: 12, md: 10, sm: 6, xs: 4, xxs: 2 },
    rowHeight: 100
  };

  constructor(props) {
    super(props);

    this.state = {
      items: [].map(function(i, key, list) {
        return {
          i: i.toString(),
          x: i * 2,
          y: 0,
          w: 2,
          h: 2,
          add: i === (list.length - 1)
        };
      }),
      newCounter: 0,
    };

    this.onAddItem = this.onAddItem.bind(this);
    this.onLayoutChange = this.onLayoutChange.bind(this);
    this.onBreakpointChange = this.onBreakpointChange.bind(this);
  }

  createElement(el) {
    const removeStyle = {
      position: "absolute",
      right: "2px",
      top: 0,
      cursor: "pointer"
    };
    const i = el.add ? "+" : el.i;
    
    return (
      <Card key={i} data-grid={el}>
        {el.add ? (
          <span
            className="add text"
            onClick={this.onAddItem}
            title="Add item by clicking here"
          >
            Add +
          </span>
        ) : (
        <span className="text"></span>
        )}
        <span
          className="remove"
          style={removeStyle}
        >
          <MenuDataAnalysisBuild deleteButton = {this.onRemoveItem.bind(this, i)}/>

        </span>
        <br/>
        <span>
          <JupViewer file={ipynb}/>
        </span>
      </Card>
    );
  }

  onAddItem() {
    /*eslint no-console: 0*/
    console.log("adding", "item " + this.state.newCounter);
    this.setState({
      // Add a new item. It must have a unique key!
      items: this.state.items.concat({
        i: "" + this.state.newCounter,
        x: (this.state.items.length * 2) % (this.state.cols || 12),
        y: Infinity, // puts it at the bottom
        w: 2,
        h: 100 % (this.state.cols || 12),
      }),
      // Increment the counter to ensure key is always unique.
      newCounter: this.state.newCounter + 1
    });
  }

  // We're using the cols coming back from this to calculate where to add new items.
  onBreakpointChange(breakpoint, cols) {
    this.setState({
      breakpoint: breakpoint,
      cols: cols
    });
  }

  onLayoutChange(layout) {
    // this.props.onLayoutChange(layout); // for some reason https://github.com/STRML/react-grid-layout/issues/726
    this.setState({ layout: layout });
  }

  onRemoveItem(i) {
    console.log("removing", i);
    this.setState({ items: _.reject(this.state.items, { i: i }) });
  }

  render() {
    return (
      <div>
        {/* <button onClick={this.onAddItem}>Add Item</button> */}
        <AddCircleIcon fontSize="large" outline color="primary" onClick={this.onAddItem}>Add Item</AddCircleIcon>
        <ResponsiveReactGridLayout
          onLayoutChange={this.onLayoutChange}
          onBreakpointChange={this.onBreakpointChange}
          {...this.props}
        >
          {_.map(this.state.items, el => this.createElement(el))}
        </ResponsiveReactGridLayout>
      </div>
    );
  }
}
