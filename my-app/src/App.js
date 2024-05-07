// import logo from './logo.svg';
import './App.css';
import { Navbar } from './Navbar';
import { Page2 } from './Page2';
import { Page1 } from './page1';
import { Portfolio } from './portfolio';
import { Skill } from './skill';

function App() {
  return (
    <>
      <div className="header">
        <Navbar />
        <Page1/>
      </div>
      <div className='about'>
        <span className='about'>About</span>
        <p className='about'><hr/>I have acquired and sharpened m ipsum dolor sit amet consectetur adipisicing elit. Incidunt fugit, aliquam nam, impedit aspernatur nesciunt autem sequi perferendis, hic quis iure provident nostrum? Quae, alias at ipsum enim ullam officia.
        ipsum dolor sit amet consectetur adipisicing elit. Incidunt fugit, aliquam nam, impedit aspernatur nesciunt autem sequi perferendis, hic quis iure provident nostrum? Quae, alias at ipsum enim ullam officia.
        </p>
        <div className='sk'>
          <p className='sk'>My Skills</p>
          <Skill/>
        </div>
        <div className='port'>
          Portfolio
          <Portfolio/>
        </div>
      </div>
      <p className='nexp'>Experience</p>
      <div className='exp'>
        <Page2/>
        <Page2/>
      </div>
    </>
  );
}

export default App;
