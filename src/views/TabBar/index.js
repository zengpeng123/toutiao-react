import React from 'react';

import './index.less';
import IconSvg from '../../components/IconSvg';

export default class extends React.Component {
  render() {
    const footerBarList = [
      { icon: 'iconshouye', title: '首页' },
      { icon: 'iconvideo-', title: '视频' },
      { icon: 'icondengluyonghuming', title: '我的' }
    ];

    return (
      <footer className="footer">
        <ul>
          {footerBarList.map(v => (
            <li>
              <IconSvg className="footer-icon" iconName={v.icon} />
              <p>{v.title}</p>
            </li>
          ))}
        </ul>
      </footer>
    );
  }
}
