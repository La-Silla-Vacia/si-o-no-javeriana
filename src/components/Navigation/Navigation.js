import { h, render, Component } from 'preact';

import s from './Navigation.css';

const navItems = [
  {
    "label": "Sign up/Sign in",
    "href": "#/login"
  },
  {
    "label": "Temas",
    "href": "#/temas/tema-1-4"
  },
  {
    "label": "Cómo funciona",
    "href": "#/como-funciona"
  },
  {
    "label": "Contacto",
    "href": "#/contacto"
  }
];

export default class Navigation extends Component {

  getNavItems() {
    return navItems.map((item, index) => {
      return (
        <li>
          <a className={s.link} href={item.href}>{item.label.toUpperCase()}</a>
        </li>
      )
    });
  }

  render(props, state) {

    const items = this.getNavItems();

    return (
      <nav className={s.container}>
        <ul className={s.list}>
          { items }
        </ul>
      </nav>
    );
  }
}