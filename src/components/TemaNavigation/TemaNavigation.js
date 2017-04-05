import { h, render, Component } from 'preact';
import cx from 'classnames';

import s from './TemaNavigation.css';

export default class TemaNavigation extends Component {

  getItems() {
    const { items, current } = this.props;
    return items.map((item, index) => {
      const url = item.split(' ').join('-');
      return (
        <li className={cx(s.item, {[s.item__active]: current === url})}>
          <a href={`#/temas/${url}`}>{ item.toUpperCase() }</a>
        </li>
      )
    });
  }

  render(props, state) {
    const items = this.getItems();

    return (
      <nav className={s.container}>
        <ul className={s.list}>
          {items}
        </ul>
      </nav>
    );
  }
}