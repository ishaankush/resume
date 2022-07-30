import React from "react";

import resumeSvg from "../../assets/resume.svg";
import sampleResume from "../../assets/SampleResume.png"

import styles from "./Header.module.css";

function Header() {
  return ( <div>
    <div className={styles.container}>
      <div className={styles.left}>
        <p className={styles.heading}>
          A <span>Resume</span> that stands out!
        </p>
        <p className={styles.heading}>
          Simple, Flexible  <span> and Truly free</span>
        </p>
      </div>
      <div className={styles.right}>
        <img src={resumeSvg} alt="Resume" />
      </div>
    </div>
     <div className={styles.sampleResume}>
        <img className={styles.sampleResumeImage} src={sampleResume} alt="" />
    </div>
    </div>
    
  );
}

export default Header;
