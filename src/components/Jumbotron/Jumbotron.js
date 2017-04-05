import { h, render, Component } from 'preact';
import Button from '../Button/Button';

import s from './Jumbotron.css';
import Logos from "../Logos/Logos";

const logoLaSillaVacia = require('../../images/lasillavacia-logo.svg');
const logoJaveriana = require('../../images/javeriana-logo.svg');

export default class Jumbotron extends Component {

  render(props, state) {
    return (
      <div className={s.container}>
        <div className={s.limiter}>
          <div className={s.column}>
            <h1 className={s.title}>{props.title.toUpperCase()}</h1>
            <Button href="#">Ver y votar</Button>

            <Logos/>
          </div>
          <div className={s.twoColumns}>
            {props.children}
          </div>
        </div>
      </div>
    );
  }
}