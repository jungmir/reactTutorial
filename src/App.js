import logo from './logo.svg';
import test_img from './ttttt.jpg'
import ttttt from './test.jpg'
import './App.css';
import { Parallax, ParallaxProvider } from 'react-scroll-parallax';

const ParallaxImage = (props) => (
    <Parallax className="custom-class" y={[props.minimum, props.maximum]} tagOuter="figure">
        <img src={props.src} alt="asdfs" />
    </Parallax>
);

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <img src="../public/ttttt.jpg" alt="asdfs" />
      </header>
      <ParallaxProvider>
        <ParallaxImage  {...{"src" : test_img, "minimum" : 0, "maximum" : 30}}/>
      </ParallaxProvider>
      <ParallaxProvider>
        <ParallaxImage {...{"src" : ttttt, "minimum" : -10, "maximum" : 50}} />
      </ParallaxProvider>
    </div>
  );
}

export default App;
