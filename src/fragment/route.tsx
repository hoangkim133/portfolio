import Home from './home';
import Info from './about';
import Project from './projects';
import Contact from './contact';
import {
  Route,
  Routes,
  useLocation,
} from "react-router-dom";
import { AnimatePresence } from 'framer-motion';
import ProjectContent from './projectcontent';
import Header from '../components/header';
import { useState, useEffect, useRef } from 'react';
import ProjectFeature from '../components/featurepro';
import sound from '/public/canon.mp3'


function Routers() {
    const lst_href_project = ["/projects/vick", "/projects/hdcap", "/projects/aladin", "/projects/mysite"]
    const location = useLocation();
    const main_section = useRef<HTMLDivElement>(null);
    const audioSound = useRef<HTMLAudioElement>(null);


    const [classBox, setClassBox] = useState(() => {
        if (lst_href_project.includes(location.pathname)){
            return "box2 scroll-off";
          } else {
            return "box full-height d-flex flex-column scroll-off";
          }
    })
    const [visibleHeader, setVisibleHeader] = useState(() => {
        if (lst_href_project.includes(location.pathname)){
            return false;
        } else {
            return true;
        }
    });

    useEffect(() => {
      if (lst_href_project.includes(location.pathname)){
        setVisibleHeader(false);
        setClassBox("box2 scroll-off");
        setTimeout(() => {
          if (main_section.current){
            main_section.current.style.position = 'static';
          }
        }, 1500)
      } else {
        setVisibleHeader(true);
        setClassBox("box full-height d-flex flex-column scroll-off");
        if (main_section.current){
          main_section.current.style.position = 'fixed';
        }
      }


      // change title
      switch (location.pathname) {
        case '/about':
          document.title = 'Kim Hoang - About'
          break;
        case '/projects':
          document.title = 'Kim Hoang - Projects'
          break;
        case '/contact':
          document.title = 'Kim Hoang - Contact'
          break;
        case '/projects/vick':
          document.title = 'Kim Hoang - Projects - ViCK'
          break;
        case '/projects/hdcap':
          document.title = 'Kim Hoang - Projects - HDCap'
          break;
        case '/projects/aladin':
          document.title = 'Kim Hoang - Projects - Aladin'
          break;
        case '/projects/mysite':
          document.title = 'Kim Hoang - Projects - My Site'
          break;
        default:
          document.title = 'Kim Hoang'
          break;
      }
    }, [location])

    useEffect(() => {
      var volume = localStorage.getItem("volume");
      var music_container = audioSound.current;
      if (music_container) {
        if (volume == null){
          music_container.play();
        } else {
            if (volume == "true"){
              music_container.play();
            } else {
              music_container.pause();
            }
        }
      }
    }, [])

    return (
            <div 
            ref={main_section} id='main_section' className={classBox} style={{overflowX: "hidden"}}>
                <audio ref={audioSound} id="music" src={sound} loop></audio>

                <AnimatePresence mode="wait">
                    {visibleHeader && <Header refAudio={audioSound}/>}
                </AnimatePresence>
                <div className="flex-grow-1">
                    <AnimatePresence mode="wait">
                      <Routes location={location} key={location.key}>
                          <Route path='/' element={<Home/>}/>
                          <Route path="/about" element={<Info/>} />
                          <Route path="/projects" element={<Project/>} />
                          <Route path="/contact" element={<Contact/>} />
                          <Route path="/projects/vick" element={<ProjectContent/>} />
                          <Route path="/projects/hdcap" element={<ProjectContent/>} />
                          <Route path="/projects/aladin" element={<ProjectContent/>} />
                          <Route path="/projects/mysite" element={<ProjectContent/>} />
                      </Routes>
                    </AnimatePresence>
                </div>
                {/* <AnimatePresence mode="wait"> */}
                    {!visibleHeader && <ProjectFeature/>}
                {/* </AnimatePresence> */}
            </div>
    );
  };


export default Routers;
