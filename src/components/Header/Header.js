import { h, render, Component } from 'preact';
import Navigation from '../Navigation/Navigation';

import s from './Header.css';

const logo = require('../../images/logo.svg');

export default class Header extends Component {

  render(props, state) {
    return (
      <div className={s.container}>
        <a href="/#" className={s.logo} dangerouslySetInnerHTML={{__html: logo}} />
        <Navigation />
      </div>
    );
  }
}