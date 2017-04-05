import { h, render, Component } from 'preact';
import cx from 'classnames';
import s from './SingleVideo.css';
const MarkdownIt = require('markdown-it'),
  md = new MarkdownIt();

import Button from '../Button/Button';

const avatar = require('../../images/avatar.svg');
const playIcon = require('../../images/playIcon.svg');

export default class SingleVideo extends Component {

  constructor() {
    super();

    this.state = {
      playerActive: false,
      data: {}
    };

    this.handleStart = this.handleStart.bind(this);
  }

  componentDidMount() {
    this.getData();
  }

  componentWillReceiveProps(newprops) {
    this.getData(newprops);
  }

  getData(props) {
    if (!props) props = this.props;
    props.videos.map((video) => {
      if (video.videoId === props.id && this.state.video !== video) {
        this.setState({ playerActive: false, data: video });
      }
    });
  }

  handleStart() {
    this.setState({ playerActive: true })
  }

  handleVote() {
    fetch('http://desarrollo.lasillavacia.com/services/session/token')
      .then(function(response) {
        return response.json()
      }).then(function(json) {
      console.log('parsed json', json)
    }).catch(function(ex) {
      console.log('parsing failed', ex)
    })
  }

  render(props, state) {
    const { theme, imageUrl, themeFormatted, videoId, title, name, profile, college, userImage } = state.data;
    let thumbImg = imageUrl;
    if (!thumbImg) thumbImg = `http://img.youtube.com/vi/${videoId}/sddefault.jpg`;

    let video;
    if (state.playerActive) {
      video = (
        <iframe src={`https://www.youtube.com/embed/${videoId}?autoplay=1&modestbranding=1&rel=0`}
                frameBorder="0"
                className={s.video} />
      )
    }

    let avatarImage = <figure className={s.avatar} dangerouslySetInnerHTML={{ __html: avatar }} />;
    if (userImage) {
      avatarImage = (<img className={s.avatar} src={userImage} alt="" />);
    }

    return (
      <section className={cx(s.container, s.limiter)}>
        <div className={s.videoContainer}>
          <div style={{ backgroundImage: `url(${thumbImg})` }}
               className={cx(s.placeholder, { [s.placeholder__active]: this.state.playerActive })}
               onClick={this.handleStart}>
            <div className={s.playIcon} dangerouslySetInnerHTML={{ __html: playIcon }} />
            {video}
            <div className={s.placeholderContent}>
              <small className={s.theme}>{ theme }</small>
              <h1 className={s.title}>{ title }</h1>
              <span className={s.author}>{ name }</span>
            </div>
          </div>
        </div>
        <article className={s.content}>
          <header>
            <h4 className={s.perfil}>PERFÍL DEL PARTICIPANTE</h4>

            {avatarImage}
            <div className={s.basicRow}>
              <span className={s.nombre}>{name}</span>
              <span className={s.college}>{college}</span>
            </div>

          </header>
          <div className={s.profile} dangerouslySetInnerHTML={{ __html: md.render(String(profile)) }} />

          <footer>
            <button className={s.voteButton} onClick={this.handleVote}>Votar por este Perfil</button>
            <br />
            <a href="#" className={s.verResultados}>VER COMO VAN LOS RESULTADOS</a>
          </footer>
        </article>
      </section>
    )
  }
}