import Head from "next/head";
import Image from "next/image";
import CardComp from "../Components/CardComp";
import styles from "../styles/Home.module.css";
import project from "../images/project.svg";
import { useState, useEffect } from "react";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import Link from "next/link";
export default function Project() {
  const [data, setdata] = useState("Ahsan Bilal");
  const [devdata, setdevData] = useState([]);
  const [figmadata, setfigmaData] = useState([]);
  const [mldata, setmlData] = useState([]);
  const [coursedata, setcourseData] = useState([]);
  const [wordpressdata, setwordpresseData] = useState([]);
  const [key, setKey] = useState("home");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("/Wordpressdata.json"); // Path to the JSON file
        const data = await response.json();
        setdevData(data.FrontEnd);
        setfigmaData(data.figma);
        setmlData(data.ml);
        setcourseData(data.electrical);
        setwordpresseData(data.wordpress);
      } catch (error) {
        console.error("Error fetching JSON data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <>
      <div className={styles.container}>
      <Head>
        <title>🧑‍💻Ahsan - Projects</title>
        <meta name="description" content="Ahsan Portfolio" />
      </Head>

        <div className={styles.heroContainer}>
          <div className={styles.imageSection}>
            <div className={styles.image}>
              {" "}
              <Image src={project} alt="Illustration" />
            </div>
          </div>

          <div className={styles.textSection}>
            <h1 className="">Wanna See Projects !</h1>
            <p>
              As a UI/UX Designer 🎨 and UI Developer 💻, I have worked on
              diverse projects, blending creativity with technical finesse. I am
              driven by Machine Learning 🤖, infusing data insights into design,
              and love tackling challenges as a Problem Solver 🧩. Every project
              is an opportunity to innovate and create meaningful digital
              experiences.
            </p>
            {/* //////////////////////////// */}
            <div className={styles.icon}></div>
          </div>
        </div>
      </div>
      <div className={`${styles.headingName}`} style={{ textAlign: "center" }}>
  <p className={styles.headingone}>- Project List -</p>
  <p className={styles.headingBackground}>Projects</p>
</div>      <style>
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
  width:70%;
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
        defaultActiveKey="Machine Learning"
        id="justify-tab-example"
        className="mb-3 border-0"
        justify
        fill
      >
        <Tab eventKey="Machine Learning" title="Machine Learning">
          <CardComp cardsData={mldata} />
        </Tab>

        <Tab eventKey="Course Projects" title="Course Projects">
          <CardComp cardsData={coursedata} />
        </Tab>

        <Tab eventKey="Development" title="Development">
          <CardComp cardsData={devdata} />
        </Tab>

        <Tab eventKey="Figma" title="Figma">
          <div
            style={{
              fontWeight: "bold",
              marginBottom: "10px",
              textAlign: "center",
            }}
          >
            <p>
              {" "}
              Welcome to my design portfolio! Here, you will find a selection of
              my design projects that showcase my creativity and skills.
            </p>
          </div>
          <div
            style={{
              fontWeight: "bold",
              marginBottom: "10px",
              textAlign: "center",
            }}
          >
            <p>
              You can check my all design project by viewing my Behance link
              below
            </p>
          </div>
          <CardComp cardsData={figmadata} />

          <div style={{ marginBottom: "10px", textAlign: "center" }}>
            <button
              style={{
                cursor: "pointer",
                backgroundColor: "#007BFF",
                border: "none",
                padding: "10px 20px",
                borderRadius: "3px",
                color: "white",
                transition: "background-color 0.3s",
                justifyContent: "center",
              }}
              onClick={() =>
                window.open("https://www.behance.net/ahsanbilal3", "_blank")
              }
            >
              View Full Project
            </button>
          </div>
        </Tab>

        <Tab eventKey="Wordpress" title="Wordpress">
          <CardComp cardsData={wordpressdata} />
        </Tab>
      </Tabs>
    </>
  );
}
