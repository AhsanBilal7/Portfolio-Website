import React, { useState } from "react";
import styles from "../styles/ClubInfo.module.css";
import Modal from "./Modal";
import Image from "next/image";
import Link from "next/link";
const ClubInfo = ({ data }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  console.log(data.logopath);
  return (
    <div className={styles.container}>
      <div className={styles.logoContainer}>
        <a
          target="_blank"
          href={data.clublink}
          className="text-decoration-none"
        >
          <Image
            className={styles.logo}
            src={data.logopath}
            alt="Club Logo"
            width={70}
            height={70}
          />
        </a>
      </div>
      <div className={styles.textContainer}>
        <h3 className={styles.clubName}>{data.title}</h3>
        <p className={styles.designation}>{data.designation}</p>
        <p className={styles.tenure}>{data.tenure}</p>
        <Modal certpath={data.certpath} />
      </div>
    </div>
  );
};

export default ClubInfo;
