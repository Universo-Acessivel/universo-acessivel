import logo from '../.././logo.svg';
//import './Home.css';
import '../.././styles/fonts.css';
import Header from '.././Header/Header.js';
import Introduction from '.././Introduction/Introduction.js';

function Home() {
  return (
    <div>
      <Header />
      <Introduction />
      <div style={{ height: "1000px" }}> </div>
    </div>
  );
}

export default Home;
