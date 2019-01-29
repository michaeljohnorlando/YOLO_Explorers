import React, { Component } from 'react';
//images
import hero_1    from './images/hero_1.png';
import hero_2    from './images/hero_2.png';
import hero_3    from './images/hero_3.png';
import hero_4    from './images/hero_4.png';
import hamburger from './images/hamburger.svg';
import social_media from './images/social media 2.svg';
import logo_full from './images/yolo logo 3.1.svg';
import logo from './logo.svg';
import loop_video from './videos/video_loop.mp4';
import './App.css';


window.addEventListener("load",function(){
  //inital fade scroll effect
  window.addEventListener("scroll",
                         function(){
    const hero_imgs_all = document.getElementById("hero_imgs");
    const change_color  = document.getElementById("hamburger");
    const scroll_bar    = document.getElementById("scroll_bar");
    hero_imgs_all.style.width = (100+(window.scrollY/20))+"%";
    hero_imgs_all.style.left = (0-(window.scrollY/50))+"%";
    hero_imgs_all.style.opacity = 1-(1/(window.innerHeight/window.scrollY));
    //change_color.style.color = white;
    //top scrollbar indicator
    scroll_bar.style.width = 10-(1/(window.innerHeight/window.scrollY))+'vw';

  });
});


class App extends Component {
  render() {
    return (
      <div>

      <section>
        <video autoPlay muted loop id="myVideo">
          <source src={loop_video} type="video/mp4"/>
        </video>
        <div id="opacity_layer"></div>
      </section>

      <section id="hero_imgs">
        <img src={hero_4} className="hero_2"/>
        <h2 id="discover"> DISCOVER </h2>
        <img src={hero_3} className="hero_2"/>
        <img src={hero_2} className="hero_2" id="hero_2_animation"/>
        <img src={hero_1} className="hero_1" id="hero_1_animation"/>
        <div className="scroll-indicator"></div>
      </section>

      <img src={logo_full} id="logo_full"/>
      <img src={social_media} id="social_media"/>

      <nav>
        <div id="menuToggle">
          <input type="checkbox" />
          <span></span>
          <span></span>
          <span></span>
        </div>
      </nav>

        <div id="scroll_bar"></div>

      </div>
    );
  }
}

export default App;


/*
use body.noScroll ... some script... for intro animation?
remove ctrl mousewheel zoom action
gatsby netifly ... host on github?
*/
