import React from 'react';
import '../../assets/styles/components/Carrousel/Carrousel_Item.scss';
import playIcon from '../../assets/static/play-icon.png';
import pauseIcon from '../../assets/static/plus-icon.png';

const Carrousel_Item = () => (
    <div className="carousel-item">
        <img className="carousel-item__img" src="https://images.pexels.com/photos/705792/pexels-photo-705792.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" alt=""  />
        <div className="carousel-item__details">
          <div>             
            <img className="carousel-item__details--img" src={playIcon} alt="Play Icon"/>
            <img className="carousel-item__details--img" src={pauseIcon} alt="Plus Icon"/>
          </div>
          <p className="carousel-item__details--title">Video de Platzi</p>
          <p className="carousel-item__details--subtitle">2019 16+ 114 minutos</p>
        </div>
      </div>
);

export default Carrousel_Item;