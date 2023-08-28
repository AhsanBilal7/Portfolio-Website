import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Image from 'next/image';
import cardstyles from '../styles/card.module.css';
import Link from 'next/link';
function CardComp({ cardsData }) {
  const sample = ["/wordpress.svg", "/wordpress.svg", "/wordpress.svg"];

  return (
    <>
      <div className={`d-flex justify-content-evenly flex-wrap ${cardstyles.cardContainer}`}>
        {cardsData.map((card, index) => (
          <div className={`${cardstyles.container} ${cardstyles.fadeIn}`} key={index}>
            <Card className={`${cardstyles.card} ${cardstyles.fadeIn}`}>
              <Card.Img variant="top" src={card.imagepath} height={170} className={`${cardstyles.fadeIn}`} />
              <Card.Body>
                <Card.Title>{card.title}</Card.Title>
                <Card.Text>
                  {card.description}
                </Card.Text>
                <div className={`mt-2 ${cardstyles.iconContainer}`}>
                 <div className={`${cardstyles.iconitem}`}>

                  {card.icons.map((iconPath, index) => (
                    <Image
                      key={index}
                      src={iconPath}
                      alt={`Icon ${index + 1}`}
                      width={40}
                      height={40}
                      className={`p-1 ${cardstyles.iconone}`} // Apply fade-in to icons
                    />
                  ))}
                 </div>

              <div className={`${cardstyles.linkitem}`} >  <a target="_blank"  href={card.link} passHref><p> View Source </p></a></div>
                </div>
              </Card.Body>
            </Card>
          </div>
        ))}
      </div>
    </>
  );
}

export default CardComp;
