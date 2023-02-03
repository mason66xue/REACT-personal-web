import React from "react";
import profileImage from "../../assets/large/Profile/Profile_Pic.png";
function About() {
  return (
    <section id="about-me" className="my-5 intro">
      <div class="flex-row">
        <h1 id="about" className="section-title primary-border">
          About Me
        </h1>
      </div>
      <div className="flex-row">
        <div class="intro-info">
          <div class="intro-img">
            <img src={profileImage} style={{ width: "100%" }} alt="profile" />
          </div>
          <p>
            Hello, my name is Ruochen Liu, a girl who is passionate to back-end developing! 
            Let me briefly introduce myself! I graduated from Rutgers University with a Bachelor degree in Chemistry and currently living in New Jersey. I would say the closest experience I had with coding was taking a lot of advanced math classes in college. 
            Anyways, before I started this coding bootcamp, I had no idea what exactly coding is. This corse really opens up my horizion and really helps me have a better understanding of myself. After the intensive three months of studying, I realized I enjoy doing back-end development. Designing database and working on APIs are facinating to me. I really enjoy the logic behind them. 
            During my leisure time, Just like any other girls, I enjoying shopping. I also enjoying trading futures. Hopefully one day I can trade futures with my own Algorithm. 
          </p>
        </div>
      </div>
    </section>
  );
}

export default About;
