import React from 'react'
import { Col, Row} from 'reactstrap'
import useLoad from '../api/useLoad';
import '../style/CarItems.css'

export const CarItems = () => {
  const [vehicles, , loadVehicleMessage, ] = useLoad('/vehicles');
  return (
    <Row>
    {
      !vehicles
      ? <p>{loadVehicleMessage}</p>
      : vehicles.length === 0
        ? <p>No Vehicles found</p>
        : vehicles.map(vehicle => (
      <Col lg='4' md='4' sm='6' className='mb-5' key={vehicle.VEHICLE_ID}>
        <div className="car_item">
          <div className="car_img">
            <img src={vehicle.VEHICLEURL} alt='' className='w-100' />
          </div>
          <div className="car_item_detail mt-4">
            <h4 className='title text-center'>{vehicle.MAKE} {vehicle.MODEL} {vehicle.MODELYEAR}</h4>
            <h6 className="car_price text-center"> £{vehicle.PRICE}.00</h6>
            <div className="car_item_info d-flex align-item-center justify-content-between mt3 mb-4">
              <span className='d-flex align-item-center gap-1'><i class="ri-gas-station-fill"> </i>{vehicle.FUELTYPE}</span>
              <span className='d-flex align-item-center gap-1'><i class="ri-paint-fill"></i>{vehicle.COLOUR}</span>
              <span className='d-flex align-item-center gap-1'><i class="ri-time-fill"></i>{vehicle.MILEAGE}</span>
            </div>
            <div className="car_item_info d-flex align-item-center justify-content-between mt3 mb-4">
              <span className='d-flex align-item-center gap-1'><i class="ri-door-fill"></i>{vehicle.NOOFDOORS}</span>
              <span className='d-flex align-item-center gap-1'><i class="ri-settings-3-fill"></i>{vehicle.TRANSMISSION}</span>
              <span className='d-flex align-item-center gap-1'><i class="ri-creative-commons-line"></i>{vehicle.ENGINESIZE}</span>
            </div>
          </div>
        </div>
      </Col>
    ))}
  </Row>
  
  )
}
