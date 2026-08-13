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
import Expo from '../Expo/Expo.js';
import MencoesHonrosas from '../MencoesHonrosas/MencoesHonrosas.js';
import Collaborators from '../Collaborators/Collaborators.js';

function Home() {
  return (
    <TextReaderProvider>
      <a className="skip-link" href="#conteudo">Pular para o conteúdo</a>
      <Header />
      <Sidebar />
      <main id="conteudo">
        <Introduction />
        <Files />
        <Description />
        <Projects />
        <Expo />
        <MencoesHonrosas />
        <Video />
        <Team />
        <Collaborators />
      </main>
      <Footer />
    </TextReaderProvider>
  );
}

export default Home;
