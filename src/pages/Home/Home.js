import { h, render, Component } from 'preact';
import cx from 'classnames';
import Jumbotron from '../../components/Jumbotron/Jumbotron';
import VideoThumb from '../../components/VideoThumb/VideoThumb';
import AttentionFooter from '../../components/AttentionFooter/AttentionFooter';
import Button from '../../components/Button/Button';

import s from './home.css';

const mainImage = require('../../images/juanito.svg');

const Home = () => (
  <div>
    <Jumbotron
      title="Conoce los argumentos y vota!"
    >
      <div className={s.image} dangerouslySetInnerHTML={{ __html: mainImage }} />
    </Jumbotron>
    <div className={s.row}>
      <div className={s.limiter}>
        <div className={s.column}>
          <h2 className={s.title}>Comó<br />funciona?</h2>
        </div>
        <div className={s.column}>
          <h3>Lorem ipsum dolar</h3>
          <p>Sed posuere consectetur est at lobortis. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
            vitae
            elit libero, a pharetra augue. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Etiam
            porta
            sem malesuada magna mollis euismod.</p>

          <p>Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum. Cum sociis natoque penatibus
            et magnis dis parturient montes, nascetur ridiculus mus. Maecenas faucibus mollis interdum. Praesent commodo
            cursus magna, vel scelerisque nisl consectetur et. Praesent commodo cursus magna, vel scelerisque nisl
            consectetur et.</p>
        </div>
        <div className={s.column}>
          <h3>Comó funciona?</h3>
          <p>Donec sed odio dui. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor. Nullam quis
            risus eget urna mollis ornare vel eu leo. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>

          <p>Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum. Cras justo odio, dapibus ac
            facilisis in, egestas eget quam. Nulla vitae elit libero, a pharetra augue. Morbi leo risus, porta ac
            consectetur ac, vestibulum at eros.</p>
        </div>
      </div>
    </div>

    <div className={cx(s.row, s.grey)}>
      <div className={s.limiter}>
        <h2 className={s.title}>Los más votados</h2>

        <div className={cx(s.row, s.padding, s.videos)}>
          <div className={s.column}>
            <VideoThumb showVotes />
          </div>

          <div className={s.column}>
            <VideoThumb showVotes />
          </div>

          <div className={s.column}>
            <VideoThumb showVotes />
          </div>
        </div>
      </div>
    </div>

    <AttentionFooter>
      <h4>No has votado aun?</h4>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
        magna aliqua.</p>
      <footer>
        <Button>Vote Ahora!</Button>
      </footer>
    </AttentionFooter>
  </div>
);

export default Home;