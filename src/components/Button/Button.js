import { h, render, Component } from 'preact';

import s from './Button.css';

export default class Button extends Component {

  render(props, state) {

    let button = (
      <a className={s.container} href={props.href}>
        {props.children}
      </a>
    );

    if (!props.href) {
      button = (
        <button className={s.container}>
          {props.children}
        </button>
      )
    }

    return (
      <div>
      { button }
      </div>
    );
  }
}