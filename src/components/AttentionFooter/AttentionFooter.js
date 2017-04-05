import { h, render } from 'preact';
import cx from 'classnames';

import s from './AttentionFooter.css';

const AttentionFooter = (props) => (
  <div className={s.container}>
    <div className={s.triangle} />
    <div className={s.limiter}>
      {props.children}
    </div>
  </div>
);

export default AttentionFooter;