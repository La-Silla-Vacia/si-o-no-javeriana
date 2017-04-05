import { h, render, Component } from 'preact';
import { Router, Route } from 'preact-enroute';
import * as firebase from "firebase";

const videosEndpoint = 'https://si-o-no-javeriana.firebaseio.com/videos.json';
const config = {
  apiKey: "AIzaSyCKfjtwOOVhM51RP21ABLBiBvMYQkFL3gs",
  authDomain: "si-o-no-javeriana.firebaseapp.com",
  databaseURL: "https://si-o-no-javeriana.firebaseio.com",
  projectId: "si-o-no-javeriana",
  storageBucket: "si-o-no-javeriana.appspot.com",
  messagingSenderId: "1088896685674"
};
firebase.initializeApp(config);

const getHash = hash => {
  if (typeof hash === 'string' && hash.length) {
    if (hash.substring(0, 1) === '#') {
      return hash.substring(1);
    }
    return hash;
  }
  return '/';
};

const state = {
  location: getHash(window.location.hash),
  videos: [],
  currentVideo: false,
  videoSelection: [],
  themes: [],
  theme: false
};

import Header from './components/Header/Header';
import Home from './pages/Home/Home';
import Temas from './pages/Temas/Temas';
import TemaNavigation from './components/TemaNavigation/TemaNavigation';
import Tema from './components/Tema/Tema';
import SingleVideo from './components/SingleVideo/SingleVideo';

import s from './base.css';

const HomeComp = () => (
  <div className={s.container}>
    sdfsadfasd
  </div>
);

class Base extends Component {

  constructor() {
    super();
    this.state = state;

    this.updateVideos = this.updateVideos.bind(this);
  }

  componentWillMount() {
    this.handleSwitch(getHash(window.location.hash));
  }

  componentDidMount() {
    this.getVideos();

    window.addEventListener('popstate', () => {
      const newLocation = getHash(window.location.hash);
      this.setState({ location: newLocation });
      this.handleSwitch(newLocation);
    });
  }

  handleSwitch(location) {
    if (!location) return;
    let theme = location.split('/');
    if (theme.length > 2) {
      this.setState({ theme: theme[2] });
    } else {
      this.setState({ theme: false });
    }
    this.updateVideos();
  }

  getVideos() {
    const videos = [];
    // const videosRef = firebase.database().ref('videos');
    // videosRef.on('child_added', (data) => {
    //   // console.log(data.val());
    //   const video = data.val();
    //   videos.push({
    //     college: video.colegio,
    //     imageUrl: video.imageUrl,
    //     name: video.nombre,
    //     profile: video.perfil,
    //     theme: video.tema,
    //     themeFormatted: video.tema.split(' ').join('-'),
    //     title: video.titulo,
    //     videoId: video.videoId
    //   });
    //
    //   this.updateVideos();
    // });
    fetch(videosEndpoint)
      .then((response) => {
        return response.json()
      }).then((json) => {

      json.map((video) => {
        videos.push({
          college: video.colegio,
          imageUrl: video.imageUrl,
          name: video.nombre,
          profile: video.perfil,
          theme: video.tema,
          themeFormatted: video.tema.split(' ').join('-'),
          title: video.titulo,
          videoId: video.videoId
        });
      });

      this.setState({ videos });
      this.updateVideos();

    }).catch((ex) => {
      console.log('parsing failed', ex)
    });
  }

  updateVideos() {
    const currentTheme = this.state.theme;
    const videoSelection = [];
    const themes = [];

    this.state.videos.map((video) => {
      const videoTheme = video.themeFormatted;
      if (themes.indexOf(video.theme) === -1) {
        themes.push(video.theme);
      }
      if (videoTheme === currentTheme) {
        videoSelection.push(video);
      }
    });

    this.setState({
      themes: themes,
      videoSelection
    });
  }

  getChildContext() {
    return {
      navigate: path => {
        window.location.hash = path;
        this.setState({ location: path });
      },
    };
  }

  temaComp() {
    const { videoSelection, themes } = this.state;
    return (props, state) => (
      <div>
        <TemaNavigation items={ this.state.themes } current={this.state.theme} />
        <Tema title="Paso Uno: Ver videos" videos={this.state.videoSelection} />
      </div>
    );
  }

  openVideo() {
    const url = this.state.location.split('/');
    let videoId = false;
    (url.length > 3) ? videoId = url[url.length - 1] : videoId = false;
    let currentVideo;

    // console.log(videoId);

    this.state.videos.map((video) => {
      if (video.videoId === videoId) {
        currentVideo = video;
      }
    });

    if (this.state.currentVideo !== videoId) {
      this.setState({ currentVideo: videoId });
    }

    return (props, state) => (
      <div>
        <TemaNavigation items={ this.state.themes } current={this.state.theme} />
        <SingleVideo id={this.state.currentVideo} videos={this.state.videos} />
        <Tema subTitle="MÁS VIDEOS SOBRE ESTE TEMA" videos={this.state.videoSelection} />
      </div>
    );
  }

  render() {
    return (
      <div className={s.container}>
        <Header />
        <Router {...this.state}>
          <Route path="/" component={Home} />
          <Route path="/login" component={HomeComp} />
          <Route path="/temas" component={Temas}>
            <Route path=":tema" component={this.temaComp()} />
            <Route path=":tema/:id" component={this.openVideo()} />
          </Route>
        </Router>
      </div>
    );
  }
}

export default Base;