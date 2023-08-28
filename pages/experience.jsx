import React, { useState } from "react";
import styles from "../styles/Home.module.css";
import Image from "next/image";
import exper from "../images/experiencesvg.svg";
import ExpCard from "../Components/ExpCard";
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import Head from "next/head";
import { useEffect } from "react";
const Experience = () => {
const [Jobdata , setJobdata] = useState([])
const [Labdata , setLabdata] = useState([])

    useEffect(() => {
        const fetchData = async () => {
          try {
            const response = await fetch('/Experience.json'); // Path to the JSON file
            const data = await response.json();
            setJobdata(data.job);
            setLabdata(data.lab)
          } catch (error) {
            console.error('Error fetching JSON data:', error);
          }
        };
    
        fetchData();
      }, []);


  return (
    <div>
        <Head>
        <title>🧑‍💻Ahsan - Experience</title>
        <meta name="description" content="Ahsan Portfolio" />
      </Head>
      <div className={styles.heroContainer}>
        <div className={styles.textSection}>
          <h1 className="">Experience</h1>
          <p className="">
          My professional journey revolves around my fervent passion for machine learning 🧠 research, where I've actively collaborated with diverse research labs within my university. 🔬 Simultaneously, I've harnessed my skill set in UI/UX 🎨 design and frontend development, undertaking part-time engagements in this field. This dual commitment has uniquely positioned 📊 me to acquire a deep understanding 🚀 of the practical and theoretical aspects of machine learning, while also gaining real-world exposure to user-centric design paradigms.
          </p>
          {/* //////////////////////////// */}
          <div className={styles.icon}></div>
        </div>
        <div className={styles.imageSection}>
          <div className={styles.image}>
            {" "}
            <Image src={exper} alt="Illustration" />
          </div>
        </div>
      </div>

      {/* <div className= {`"mb-4" ${styles.headingName}`} style={{textAlign:"center"}}><h2> {`- Research and Job Experience -`} </h2></div> */}
      <div className={`mb-4 ${styles.headingName}`} style={{ textAlign: "center" }}>
  <p className={styles.headingone}>- Research and Job Experience -</p>
  <p className={styles.headingBackground}>Experience</p>
</div>

      <style>
        {`
          /* Style the active tab link to fill with color */
          .nav-tabs .nav-link.active {
            background-color: #007bff; /* Change this to the desired color */
            color: white; /* Change this to the desired text color */
            padding: 10px 10px;
            border-radius: 5px
          }
          .nav-item{
            margin: 0px 8px;
          }
          .nav-tabs{
  width:50%;
  margin: 0px auto
          }
          .nav-link:hover{
            background-color: #b2d7ff; /* Change this to the desired color */
            padding: 10px 10px;
            border-radius: 5px
          }

    
        `}
      </style>



      <Tabs
        defaultActiveKey="Research"
        id="justify-tab-example"
        className="mb-3 border-0 justify-content-center d-flex"
        justify
        fill
    >
      <Tab eventKey="Research" title="Research Work">
      {/* <CardComp cardsData = {devdata} /> */}
      <ExpCard cardData = {Labdata}/>
      
      </Tab>
      <Tab eventKey="Jobs" title="Jobs">
      {/* <CardComp cardsData = {figmadata} /> */}
      <ExpCard cardData = {Jobdata}/>
      </Tab>

    </Tabs>
    </div>
  );
}

export default Experience;
