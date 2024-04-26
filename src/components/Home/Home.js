import React from 'react';
import '../.././styles/fonts.css';
import Header from '.././Header/Header.js';
import Sidebar from '.././Sidebar/Sidebar.js';
import Introduction from '.././Introduction/Introduction.js';
import Description from '.././Description/Description.js';
import Files from '.././Files/Files.js';
import Projects from '.././Projects/Projects.js';
import Video from '.././Video/Video.js';
import Team from '.././Team/Team.js';
import Footer from '.././Footer/Footer.js';

function Home() {
  return (
    <React.Fragment>
      <Header />
      <Sidebar />
      <Introduction />
      <Description />
      <Files />
      <Projects />
      <Video />
      <Team />
      <div style={{ height: "100px" }}> </div>
      <Footer />
    </React.Fragment>
  );
}

export default Home;
