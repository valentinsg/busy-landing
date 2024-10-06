import React from 'react';
import './Card.css';
import { IconDefinition } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import LogoLight from '../img/logo-busy-light.png'; // Asegúrate de que la ruta del logo sea correcta
import { Badge, Image } from '@chakra-ui/react';

interface CardProps {
  icon: IconDefinition;
  title: string;
  backTitle: string;
  image?: string;
  footer?: string;
}

const Card: React.FC<CardProps> = ({ icon, title, backTitle, image, footer }) => {
  return (
    <div className="card">
      <div className="content">
        <div className="front">
          <div className="front-content">
            
            {image && <img src={image} alt={title} className="card-image" />}
            <Badge position={"absolute"} w={"4vw"} bg={"gray.800"} borderRadius={"15px"}>
              <Image src={LogoLight} alt="BUSY logo" p={1} />
            </Badge>
            <div className="description">
              <div className="title">
                <p className="title">
                  <strong>{backTitle}</strong>
                </p>
                <svg
                  fillRule="nonzero"
                  height="15px"
                  width="15px"
                  viewBox="0 0 256 256"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g fill="#20c997">
                    <path d="M25,27l-9,-6.75l-9,6.75v-23h18z"></path>
                  </g>
                </svg>
              </div>
              <p className="card-footer">
                {footer}
              </p>
            </div>
          </div>
        </div>
        <div className="back">
          <div className="back-content">
            {icon && <div className="icon"><FontAwesomeIcon icon={icon} size="3x" /></div>}
            <strong style={{ fontSize: '1.55em', fontFamily: 'Helvetica' }}>{title}</strong>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
