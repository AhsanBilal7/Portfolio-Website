import React, { useState , useEffect } from "react";
import styles from "../styles/Home.module.css";
import Image from "next/image";
import education from "../images/edducation.svg";
import edustyles from "../styles/edu.module.css"
import nustlogo from "../images/nustlogopng.png"
import ClubInfo from "../Components/cardInfo";
import Head from "next/head";
const Education = () => {
  const [societydata , setsocietydata] = useState([])

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('/society.json'); // Path to the JSON file
        const data = await response.json();
        setsocietydata(data);
      } catch (error) {
        console.error('Error fetching JSON data:', error);
      }
    };
    
    fetchData();
  }, []);
  
  console.log(societydata)
  return (
    <>
    <div>
    <Head>
        <title>🧑‍💻Ahsan - Education</title>
        <meta name="description" content="Ahsan Portfolio" />
      </Head>
      <div className={styles.heroContainer}>
        <div className={styles.textSection}>
          <h1 className="">Education</h1>
          <p>🎓 Enthusiastic Electrical Engineering student at NUST, Islamabad, specializing in Microprocessor Systems, Computer Networks, and Machine Learning. Expected graduation in June 2024 with a Cumulative GPA of 3.67 over 6 semesters. 📚 Diverse coursework includes Python, C/C++, embedded C, JavaScript (React.js), and proficiency in PyTorch, Keras, and OpenCV. 🚀 Engaged in impactful research and hands-on projects, combining technical prowess with an aptitude for innovation. Committed to academic excellence and poised for a dynamic career in technology.</p>
          {/* //////////////////////////// */}
          <div className={styles.icon}></div>
        </div>
        <div className={styles.imageSection}>
          <div className={styles.image}>
            {" "}
            <Image src={education} alt="Illustration" />
          </div>
        </div>

      </div>
    </div>
{/* ////////////////////////////////////// */}
<div className={edustyles.container}>
      <div className={edustyles.logoContainer}>
        <Image className={edustyles.logo} src={nustlogo} alt="University Logo" />
      </div>
      <div className={edustyles.textContainer}>
        <h1 className={edustyles.universityName}>National University of Sciences and Technology</h1>
        <p className={edustyles.unicity}>Islamabad - Pakistan</p>
        <p className={edustyles.degree}>Bachelors of Electrical Engineering</p>
        <ul className={edustyles.points}>
          <li>⚡Bachelor of Electrical Engineering student with a fervent interest in 🤖deep learning and 🔌smart automation</li>
          <li>⚡Engaged in 📸computer vision research, particularly Gait Recognition.</li>
          <li>⚡Enthusiastic about learning and embracing feedback.</li>
          <li>⚡Proficient in 🎨graphic design and 🖌️UI/UX design, actively contributing to varied projects as a hobby with my studies</li>
          <li>⚡Actively involved in 🎉extracurricular activities including Nust'21 orientation, Codefest, and more. 🌄🏞️🏢</li>
        </ul>
      </div>
    </div>
     <div className={edustyles.mainSocietyContainer}>

    {societydata.map(  (data,index)=>(

      <ClubInfo  key = {index} data = {data}/>
    ))}

     </div>
</>
  );
};

export default Education;
