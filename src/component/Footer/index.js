import React from "react";
import { VscGithubAlt } from "react-icons/vsc";
import { AiOutlineLinkedin } from "react-icons/ai";


function Footer() {
  return (
    <footer>
      <h2>Made by Ruochen Liu©</h2>
      <p>
        <ul>
          <a href="https://github.com/mason66xue">
            <li className="logo">
              <VscGithubAlt />
            </li>
          </a>
          <a href="https://www.linkedin.com/in/ruochen-liu-1a3376b9/">
            <li className="logo">
              <AiOutlineLinkedin />
            </li>
          </a>
          
        </ul>
      </p>
    </footer>
  );
}

export default Footer;