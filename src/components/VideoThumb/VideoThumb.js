import { h, render, Component } from 'preact';
import cx from 'classnames';

import s from './VideoThumb.css';

const playIcon = require('../../images/playIcon.svg');

class VideoThumb extends Component {
  render(props) {
    const {
      imageUrl,
      name = 'Sin definir',
      theme = 'Sin definir',
      themeFormatted,
      title = 'Sin definir',
      videoId,
      showVotes
    } = this.props;

    let votes;
    if (showVotes) votes = (<div className={s.votes}>234 Votos!</div>);

    let thumbImg = imageUrl;
    if (!thumbImg) thumbImg = `http://img.youtube.com/vi/${this.props.videoId}/sddefault.jpg`;

    return (
      <article className={s.container}>
        {votes}
        <figure className={s.thumb}>
          <img src={thumbImg} alt="" />
          <div className={s.playIcon} dangerouslySetInnerHTML={{ __html: playIcon }} />
        </figure>
        <small className={s.theme}>{ theme }</small>
        <h3 className={s.title}><a href={`#/temas/${ themeFormatted }/${videoId}`}>{ title }</a></h3>
        <span className={s.author}>{ name }</span>
      </article>
    );
  }
}

export default VideoThumb;