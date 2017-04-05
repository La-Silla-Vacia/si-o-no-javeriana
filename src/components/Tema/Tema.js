import { h, render, Component } from 'preact';
import cx from 'classnames';

import VideoThumb from '../../components/VideoThumb/VideoThumb';

import s from './Tema.css';

class Tema extends Component {

  constructor() {
    super();

    this.state = {
      theme: ''
    }
  }

  componentWillReceiveProps(newprops) {
    // this.setState({ theme: newprops.params.tema });
  }

  getVideoThumbs() {
    const { videos } = this.props;
    return videos.map((video, index) => {
      return (
        <div key={index} className={s.column}>
          <VideoThumb {...video} />
        </div>
      )
    });
  }

  render(props, state) {
    const videoThumbs = this.getVideoThumbs();

    let title;
    if (props.title) {
      title = (
        <div className={s.row}>
          <h2 className={s.title}>{props.title}</h2>
        </div>
      );
    }

    let subTitle;
    if (props.subTitle) {
      subTitle = (
        <div className={s.row}>
          <h3 className={s.subTitle}>{props.subTitle.toUpperCase()}</h3>
        </div>
      )
    }
    return (
      <div className={cx(s.limiter, s.container)}>
        {title}
        {subTitle}
        <div className={s.row}>
          { videoThumbs }
        </div>
      </div>
    )
  }
}

export default Tema;