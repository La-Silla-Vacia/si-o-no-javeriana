import { h, render, Component } from 'preact';
import cx from 'classnames';
import AttentionFooter from '../../components/AttentionFooter/AttentionFooter';
import Button from '../../components/Button/Button';

import s from './Temas.css';

class Temas extends Component {

  componentWillReceiveProps(newprops) {
    // console.log(newprops.params.tema);
    // console.log(newprops);
  }

  render(props, state) {
    return (
      <div className={s.container}>
        {props.hihi}

        {props.children}

        <AttentionFooter>
          <h4>No has votado aun?</h4>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
            dolore
            magna aliqua.</p>
          <footer>
            <Button>Vote Ahora!</Button>
          </footer>
        </AttentionFooter>
      </div>
    );
  }
}
export default Temas;