// import logo from './logo.svg';
import './App.css';
import { Page2 } from './images/Page2';
import { Page3 } from './images/Page3';
import { Page1 } from './images/page1';


function App() {
  return (
    <>
      <Page1/>
      <Page2/>
      <p className='nexp'>Experience</p>
      <div className='exp'>
        <Page3/>
        <Page3/>
      </div>
    </>
  );
}

export default App;
