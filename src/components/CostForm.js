import React, { useState, useEffect } from "react";
import "./styles/CostForm.css";

function CostForm(props) {
  const [zip, setZip] = useState("");
  const [container, setContainer] = useState(4);
  const [material, setMaterial] = useState("epitesi");
  const [isModalVisible, setModalVisible] = useState(false);
  const [modalText, setModalText] = useState("");

  useEffect(() => {
    function keyListener(e) {
      if (isModalVisible && e.keyCode === 27) {
        setModalVisible(false);
      }
    }

    document.addEventListener("keydown", keyListener);

    return () => document.removeEventListener("keydown", keyListener);
  });

  const zones = [
    [1161, 2144, 2143],
    [1141, 1151, 1041],
    [1031, 1051, 1061],
    [1011, 1021, 1121],
  ];

  const zoneCosts = [
    {
      4: 26000,
      5: 28000,
      6: 30000,
      8: 35000,
    },

    {
      4: 30000,
      5: 32000,
      6: 34000,
      8: 39000,
    },

    {
      4: 33000,
      5: 35000,
      6: 37000,
      8: 42000,
    },

    {
      4: 38000,
      5: 40000,
      6: 42000,
      8: 46000,
    },
  ];

  const materialCost = {
    epitesi: 0,
    fa: 2000,
    lom: 4000,
    omlesztett: 0,
    vegyes: 10000,
  };

  const handleZipChange = (e) => {
    setZip(e.target.value);
  };

  const handleContainerChange = (e) => {
    setContainer(e.target.value);
  };
  const handleMaterialChange = (e) => {
    setMaterial(e.target.value);
  };

  const kontenerArCalc = () => {
    let zipFound = -1;
    let containerCost = 0;

    for (let i = 0; i < 4; i++) {
      let zipSearch = zones[i].includes(parseInt(zip));
      if (zipSearch) {
        zipFound = i;
        break;
      }
    }
    if (zipFound >= 0) {
      containerCost =
        zoneCosts[zipFound][container] +
        materialCost[material] +
        " Ft / konténer";
      setModalText(containerCost);
    } else {
      setModalText("Cégünk nem szállít erre a településre!");
    }
  };

  function openModal() {
    setModalVisible(true);
  }

  function closeModal(e) {
    if (
      e.target.className === "modal-bg" ||
      e.target.className === "modal-close"
    ) {
      setModalVisible(false);
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    if (zip) {
      kontenerArCalc();
    } else {
      setModalText("Kérjük adja meg az irányítószámot!");
    }
    openModal();
  };
  const closeCostForm = () => {
    props.closeCostForm(false);
  };

  return (
    <div className='costform-container'>
      <form className='costform-form' onSubmit={handleSubmit}>
        <label>
          Irányítószám
          <input
            className='footer-input'
            name='iranyitoszam'
            type='number'
            placeholder='2144'
            max='9999'
            onBlur={handleZipChange}
          />
        </label>
        <label>
          Konténer
          <select
            className='footer-select'
            name='kontener'
            onBlur={handleContainerChange}>
            <option value='4'>4 m³</option>
            <option value='5'>5 m³</option>
            <option value='6'>6 m³</option>
            <option value='8'>8 m³</option>
          </select>
        </label>
        <label>
          Szállítandó anyag
          <select
            className='footer-select'
            name='anyag'
            onBlur={handleMaterialChange}>
            <option value='epitesi'>Építési törmelék</option>
            <option value='fa'>Fahulladék</option>
            <option value='lom'>Lomhulladék</option>
            <option value='omlesztett'>Ömlesztett anyag</option>
            <option value='vegyes'>Vegyes</option>
          </select>
        </label>
        <button type='submit' className='cost-form-button'>
          ÁRAT
        </button>
        <button
          className='cost-form-button'
          type='button'
          onClick={closeCostForm}>
          BEZÁR
        </button>
      </form>
      <div className={isModalVisible ? "modal modal--isVisible" : "modal"}>
        <div
          role='button'
          className='modal-bg'
          onClick={closeModal}
          tabIndex='0'
          onKeyDown={() => (isModalVisible ? closeModal : "")}>
          <div className='modal-box'>
            <button className='modal-close' type='button' onClick={closeModal}>
              BEZÁR
            </button>
            <h2>A legjobb ár!</h2>
            <div className='modal-text'>{modalText}</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CostForm;
