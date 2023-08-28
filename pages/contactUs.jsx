import React from "react";
import styles from "../styles/Home.module.css";
import Image from "next/image";
import contact from "../images/contact.svg";
import { SocialIcon } from "react-social-icons";
import Link from "next/link";
import Button from "react-bootstrap/Button";
import Head from "next/head";
function contactUs() {
  return (
    <div>
          <Head>
        <title>🧑‍💻Ahsan - Contact</title>
        <meta name="description" content="Ahsan Portfolio" />
      </Head>
      {" "}
      <div className={styles.heroContainer}>
        <div className={styles.textSection}>
          <h1 className="">Contact Us</h1>
          <p className="">  Need to reach me? Sure thing, but remember, even though I'm here to help, I can't fix your Wi-Fi with just a wave of my hand. So before you hit me up, make sure you've tried turning it off and on again! 😉 Looking forward to your message! </p>
          {/* //////////////////////////// */}
          <div className={styles.icon}>
            <div className="d-flex flex-row m-0 justify-content-start p-0">
              <div className="mx-1">
                <SocialIcon
                  target="_blank"
                  url="https://www.facebook.com/ahsan.cricko"
                />
              </div>
              <div className="mx-1">
                <SocialIcon
                  target="_blank"
                  url="https://www.flickr.com/photos/193071231@N06"
                />
              </div>
              <div className="mx-1">
                <SocialIcon
                  target="_blank"
                  url="https://www.behance.net/ahsanbilal3"
                />
              </div>
              <div className="mx-1">
                <SocialIcon
                  target="_blank"
                  url="https://www.linkedin.com/in/ahsanbilal7"
                />
              </div>
              <div className="mx-1">
                <SocialIcon
                  target="_blank"
                  url="https://github.com/AhsanBilal7"
                />
              </div>
              <div className="mx-1">
                <SocialIcon
                  target="_blank"
                  url="https://www.instagram.com/ahsan.bilal_/"
                />
              </div>
            </div>
          </div>
          <div>
            {" "}
            <Link target="_blank" rel="noopener noreferrer"  href="/cv.pdf" >
              <p className="m-2">
                <Button>View Resume</Button>{" "}
              </p>
            </Link>
          </div>
        </div>

        <div className={styles.imageSection}>
          <div className={styles.image}>
            {" "}
            <Image src={contact} alt="Illustration" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default contactUs;
