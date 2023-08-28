import React from 'react';
import Image from 'next/image';
import styles from '../styles/ExpCard.module.css';
import sjlogo from "../images/sjlogo.svg"
import Link from 'next/link';
function ExpCard({cardData}) {
    console.log(cardData)
  return (<>
  <div className={styles.mainCard}>

{cardData.map((card, index) => (
    <div className={`${styles.expCard} ${styles.cardHover}`  } key = {index}>
      <div className={`${styles.cardImage} e-card-horizontal`}>
        <Image src={card.logo} alt="Sample" width={60} height={60} />
      </div>
      <div className={`${styles.cardContent} e-card-stacked`}>
        <div className="e-card-header">
          <div className="e-card-header-caption">
            <div className="e-card-header-title"> <h3>{card.title}</h3> </div>
          </div>
        </div>
        <div className={styles.cardDescription}>
          {card.description}
        </div>
        <div className={`${styles.cardFooter} ${styles.footerHover}`}>
          <div className={styles.jobTitle}>{card.jobtitle}</div>
          <div className={styles.tenure}>{card.tenure}</div>
          <div className={styles.viewLink}><a target='_blank' href={card.link} className='text-decoration-none' style={{fontSize:"15px"}}>🔗 View</a></div>
        </div>
      </div>
    </div>
  ))};
  </div>

  </>
  );
}

export default ExpCard;
