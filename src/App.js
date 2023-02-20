import * as React from 'react';
import config from './constants/aimbleConfig';
import './styles/aimble.scss';
import logo from './assets/img/Aimble-Portfolio.png';
import Portal from './components/Portal';

function App() {
  return <Portal {...config} logo={logo} />;
}

export default App;
