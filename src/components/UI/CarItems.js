import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { Col, Row } from 'reactstrap'
import useLoad from '../api/useLoad';
import './CarItems.css'
import FavoritesList from '../Frontend/pages/FavoritesList';
//import Modal from "../UI/Modal.js";

export default function CarItems() {

  const [vehicles, , loadVehicleMessage,] = useLoad('/vehicles');
  const [favorite, setFavorite] = useState([]);
  const [showAll, setShowAll] = useState(false);


  const visibleVehicles = showAll ? vehicles : (vehicles ? vehicles.slice(0, 6) : []);

  const handleViewMore = () => {
    setShowAll(true);
  };

  const handleFavorite = (vehicle) => {
    const updateFavorite = favorite.includes(vehicle.VEHICLE_ID)
      ? favorite.filter((id) => id !== vehicle.VEHICLE_ID)
      : [...favorite, vehicle.VEHICLE_ID];
    setFavorite(updateFavorite);
    console.log("fav", updateFavorite)
  };
  

  // const [showModal, setShowModal] = useState(false);
  // const handleOpenModal = () => { setShowModal(true); }
  // const handleCloseModal = () => { setShowModal(false); }

  const navigate = useNavigate();
  const handleCardClick = (vehicle) => {
    navigate('/cars/',{state: vehicle});
  };

  return (
    <Row>
      {!vehicles
        ? <p>{loadVehicleMessage}</p>
        : vehicles.length === 0
          ? <p>No Vehicles found</p>
          : visibleVehicles.map((vehicle) => (
            <Col lg='4' md='6' sm='12' className='mb-5' key={vehicle.VEHICLE_ID}>
              <div className="card_item" >
                <div className="card_img">
                  <img src={vehicle.VEHICLEURL} alt='' className='w-100' />
                </div>
                <span className='favorite-icon' onClick={() => handleFavorite(vehicle)}>
                  {favorite.includes(vehicle.VEHICLE_ID) ? <i className="ri-heart-fill"></i> : <i className="ri-heart-line"></i>}
                </span>
                <FavoritesList favorite={favorite} handleFavorite={handleFavorite} />

                <div className="card_item_detail">
                  <h4 className='title text-left'>{vehicle.MAKE} {vehicle.MODEL} {vehicle.MODELYEAR}</h4>
                  <h6 className="card_price text-left"> £{vehicle.PRICE}.00</h6>
                  <div className="card_item_info d-flex align-item-center justify-content-between mt3 mb-4">
                    <span className='d-flex align-item-center gap-1'><i className="ri-gas-station-fill"> </i>{vehicle.FUELTYPE}</span>
                    <span className='d-flex align-item-center gap-1'><i className="ri-paint-fill"></i>{vehicle.COLOUR}</span>
                    <span className='d-flex align-item-center gap-1'><i className="ri-time-fill"></i>{vehicle.MILEAGE}</span>
                  </div>
                  <div className="card_item_info d-flex align-item-center justify-content-between mt3 mb-4">
                    <span className='d-flex align-item-center gap-1'><i className="ri-door-fill"></i>{vehicle.NOOFDOORS}</span>
                    <span className='d-flex align-item-center gap-1'><i className="ri-settings-3-fill"></i>{vehicle.TRANSMISSION}</span>
                    <span className='d-flex align-item-center gap-1'><i className="ri-creative-commons-line"></i>{vehicle.ENGINESIZE}</span>
                  </div>

                  <button className='item_btn book_card_btn' onClick={() => handleCardClick(vehicle)}>View Car Details</button>

                </div>
              </div>
            </Col>
          )
          )
      }
      {!showAll && (
        <Col>
          <button onClick={handleViewMore} className="item_btn book_card_btn">
            View More
          </button>
        </Col>
      )}
    </Row>
  );
}
