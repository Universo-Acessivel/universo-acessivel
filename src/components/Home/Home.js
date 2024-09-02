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
import { TextReaderProvider } from '../../context/TextReaderContext.js';
import AudioWarning from '../AudioWarning/AudioWarning.js';

function Home() {

  return (
    <TextReaderProvider>
      <AudioWarning />
      <Header />
      <Sidebar />
      <Introduction />
      <Files />
      <Description />
      <Projects />
      <Video />
      <Team />
      <Footer />
    </TextReaderProvider>
  );
}

export default Home;
