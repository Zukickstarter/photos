import React from 'react';

/**
 * css styles for the outtermost side div
 * @memberof Side
 * @type {Map<String, String>}
 */
const outterDiv = {
  'fontFamily': 'MaisonNeueBook, Helvetica, Arial, Sans-Serif',
  'float': 'left',
  'width': '20%',
};

/**
 * css styles for the green kickstarter bar
 * @memberof Side
 * @type {Map<String, String>}
 */
const greenBar = {
  'backgroundColor': '#009E74',
  'margin': '10px',
};

/**
 * css styles for the big h1 at the top of kickstarter, only first is green
 * @memberof Side
 * @type {Map<String, String>}
 */
const h1green = {
  'fontSize': '50px',
  'margin': '0px 0px',
  'color': '#009070',
};


/**
 * css styles for a normal h1
 * @memberof Side
 * @type {Map<String, String>}
 */
const h1 = {
  'fontSize': '50px',
  'margin': '0px 0px',
};

/**
 * css styles for a normal h2
 * @memberof Side
 * @type {Map<String, String>}
 */
const h2 = {
  'fontSize': '15px',
  'margin': '0px 0px',
  'marginBottom': '70px',
  'color': '#707070',
};

/**
 * To the side of the photos
 * Renders everything as a html br with background or a html p with style
 * @param {React.Props} props react props
 * @todo not yet displaying proper data, i may have forgotten about this.
 */
const Side = function (props) {
  return <div style={outterDiv}>
    <div style={greenBar}>
      <br/>
    </div>
    <p style={h1green}>$50,000</p>
    <p style={h2}>pledged of $4,000</p>
    <p style={h1}>500</p>
    <p style={h2}>backers</p>
    <p style={h1}>7</p>
    <p style={h2}>days to go</p>
  </div>
};

Side.outterDiv = outterDiv;
Side.greenBar = greenBar;
Side.h1green = h1green;
Side.h1 = h1;
Side.h2 = h2;

export default Side;