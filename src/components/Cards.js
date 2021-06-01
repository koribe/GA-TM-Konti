import React from "react";
import CardItem from "./CardItem";
import "./styles/Cards.css";
import img1 from "../images/cards/sajat_telep.jpg";
import img2 from "../images/cards/kontener_meretek.jpg";
import img3 from "../images/cards/vegyes_kontener.jpg";
import img4 from "../images/cards/kontener_ido.jpg";
import img5 from "../images/cards/csapat.jpg";

function Cards() {
  return (
    <div className='cards'>
      <h2>Rugalmasság, áron alul kínálva!</h2>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src={img1}
              text='Saját hulladék szelektáló és újrahasznosító telepünknek köszönhetően, a konténereket olcsóbban tudja megrendelni, mint más konténeres szolgáltatóktól'
              label='ALACSONY ÁRAK'
              alt='Olcsó konténerek'
            />
            <CardItem
              src={img2}
              text='Konténereink 4 m³, 5 m³ 6 m³ és 8 m³-es nagyságban is elérhetőek, így könnyen választhat önnek megfelelő méretűt'
              label='TÖBB MÉRET'
              alt='Konténerek több méretben'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src={img3}
              text='Nálunk nem szükséges a hulladék fajtákat külön válogatni, vegyesen is rakodhatják a konténert'
              label='VEGYES HULLADÉK'
              alt='Vegyes konténer'
            />
            <CardItem
              src={img4}
              text='Akár több napig is kint maradhat Önnél a konténer, így van idő megrakodni.'
              label='RUGALMASSÁG'
              alt='Akár 5 napig is önnél maradhat a konténer'
            />
            <CardItem
              src={img5}
              text='Szakaértő kollégáink segítenek, ha vannak kérdései és rugalmasan állnak az Ön körülményeihez'
              label='SZAKÉRTELEM'
              alt='Tapasztalt csapat'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
