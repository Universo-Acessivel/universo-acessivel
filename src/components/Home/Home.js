import React, { useRef } from 'react';
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
import Expo from '../Expo/Expo.js';
import MencoesHonrosas from '../MencoesHonrosas/MencoesHonrosas.js';

function Home() {
  const audioWarningRef = useRef(null);

  const showWarning = () => {
      if (audioWarningRef.current) {
          audioWarningRef.current.showWarning();
      }
  };

  return (
    <TextReaderProvider>
      <AudioWarning ref={audioWarningRef} />
      <Header />
      <Sidebar showWarning={showWarning} />
      <Introduction />
      <Files />
      <Description />
      <Projects />
      <Expo />
      <MencoesHonrosas />
      <Video />
      <Team />
      <Footer />
    </TextReaderProvider>
  );
}

export default Home;
