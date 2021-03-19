import React from 'react';
import CardItem from './CardItem';
import './styles/Cards.css';
import img1 from '../images/cards/sajat_telep.jpg';
import img2 from '../images/cards/kontener_meretek.jpg';
import img3 from '../images/cards/img-3.jpg';
import img4 from '../images/cards/img-4.jpg';
import img5 from '../images/cards/img-8.jpg';

function Cards() {
    return (
        <div className="cards">
            <h1>Rugalmasság, áron alul kínálva!</h1>
            <div className="cards__container">
                <div className="cards__wrapper">
                    <ul className="cards__items">
                    <CardItem
              src={img1}
              text='Saját hulladék szelektáló és újrahasznosító telepünknek köszönhetően, a konténereket olcsóbban tudja megrendelni, mint más konténeres szolgáltatóktól'
              label='Alacsony árak'
              alt='Olcsó konténerek'
            />
            <CardItem
              src={img2}
              text='Konténereink 4 m³, 5 m³ 6 m³ és 8 m³-es nagyságban elérhetőek, így könnyen választhat önnek megfelelő méretűt'
              label='Konténerek több méretben'
              alt='Konténerek több méretben'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src={img3}
              text='Set Sail in the Atlantic Ocean visiting Uncharted Waters'
              label='Mystery'
            />
            <CardItem
              src={img4}
              text='Experience Football on Top of the Himilayan Mountains'
              label='Adventure'
            />
            <CardItem
              src={img5}
              text='Ride through the Sahara Desert on a guided camel tour'
              label='Adrenaline'
            />
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Cards
