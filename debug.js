/*global require,console*/

var lsv = require('lsv-interactive');
import { h, render } from 'preact';
import Base from './src/base';

require("./src/styles.css"); // this goes outside the callback since otherwise the interactive sometimes fires before the CSS is fully loaded

lsv("si_no_javerina", function (interactive) {
  "use strict";

  if (!interactive) {
    console.log("Interactive si_no_javerina not initiated. Exiting.");
    return;
  }

  //MARKUP
  render((
    <Base />
  ), interactive.el);

}, true); // change this last param to true if you want to skip the DOM checks