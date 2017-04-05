import { h, render, Component } from 'preact';

import s from './Logos.css';

const logoLaSillaVacia = require('../../images/lasillavacia-logo.svg');
const logoJaveriana = require('../../images/javeriana-logo.svg');

export default class Logos extends Component {

  render(props, state) {
    return (
      <div className={s.container}>
        <span className={s.title}>UN ESPACIO CREADO POR:</span>
        <div className={s.logos}>
          <a href="https://lasillavacia.com" dangerouslySetInnerHTML={{ __html: logoLaSillaVacia }} />
          <a href="http://www.javeriana.edu.co/home" dangerouslySetInnerHTML={{ __html: logoJaveriana }} />
        </div>
      </div>
    );
  }
}