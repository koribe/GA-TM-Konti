import React from 'react';
import './styles/Home.css';

function Home() {
    return (
    <div className="home-container">
     <div className="home-wrapper">
     <ul className="home__items">
        <li className="home__item">
            <div className="home__item__link">
                    <div className="home__item__header">
                    <h2>Építési törmelék és vegyes hulladék elszállítás a legjobb árakon</h2>
                    </div>
                <div className="home__item__info">
                    <h5 className="home__item__text">
                    <p> <span className="strong">2020-óta</span> szállítjuk el konténerekkel a hulladékot <span className="strong">Budapesten</span> és környékén. 
         Segítünk <span className="strong">Önnek</span> is megaszabadulni a <span className="strong">felesleges</span> bontási és építési törmeléktől, 
         vegyes szeméttől, zöld hulladéktól. Működtetünk egy saját, komplex hulladék feldolgozó üzemet is, 
         így tőlünk a konténereket sokkal <span className="strong">jobb árakon</span> tudja rendelni, mint más konténeresektől.</p>
                    </h5>
                </div>
            </div>
        </li>
        <li className="home__item">
            <div className="home__item__link">
                    <div className="home__item__header">
                    <h2>Mi kell a konténer rendeléshez</h2>
                    </div>
                <div className="home__item__info">
                    <h5 className="home__item__text">
                    <p>Határozza meg, hogy mekkora konténerre van szüksége. Diszpécser kollégánkat a <span className="home-phone-num">+36 70 428-7596</span> telefonszámon hívhatja. 
                        Munkatársunk egy nevet, címet, konténer méretet, és egy időpontot fog Öntől kérdezni. Rendelhet konténert az itt található űrlap segítségével is.
                        Kérjük vegye figyelembe, hogy a teherautónak a ráforduláshoz és a konténer lerakáshoz megfelelő méretű helyre van szüksége.</p>
                    </h5>
                </div>
            </div>
        </li>
        <li className="home__item">
            <div className="home__item__link">
                    <div className="home__item__header">
                    <h2>Építési törmelék és vegyes hulladék elszállítás a legjobb árakon</h2>
                    </div>
                <div className="home__item__info">
                    <h5 className="home__item__text">
                    <p> <span className="strong">2020-óta</span> szállítjuk el konténerekkel a hulladékot <span className="strong">Budapesten</span> és környékén. 
         Segítünk <span className="strong">Önnek</span> is megaszabadulni a <span className="strong">felesleges</span> bontási és építési törmeléktől, 
         vegyes szeméttől, zöld hulladéktól. Működtetünk egy saját, komplex hulladék feldolgozó üzemet is, 
         így tőlünk a konténereket sokkal <span className="strong">jobb árakon</span> tudja rendelni, mint más konténeresektől.</p>
                    </h5>
                </div>
            </div>
        </li>
        
        

         {/* <h1 className="center">Építési törmelék és vegyes hulladék elszállítás a legjobb árakon</h1>
         <p> <span className="strong">2020-óta</span> szállítjuk el konténerekkel a hulladékot <span className="strong">Budapesten</span> és környékén. 
         Segítünk <span className="strong">Önnek</span> is megaszabadulni a <span className="strong">felesleges</span> bontási és építési törmeléktől, 
         vegyes szeméttől, zöld hulladéktól. Működtetünk egy saját, komplex hulladék feldolgozó üzemet is, 
         így tőlünk a konténereket sokkal <span className="strong">jobb árakon</span> tudja rendelni, mint más konténeresektől.</p> */}
          </ul>
     </div>
     </div>
    )
}

export default Home
