import React, {useState} from 'react'
import API from "../../api/API.js";
import { Container, Row, Col } from 'reactstrap'
import { useLocation } from 'react-router-dom';
import useLoad from '../../api/useLoad';
import { useAuth } from '../../auth/useAuth.js';
import Helper from '../../helpers/Helper';
import CustomerBookingForm from '../../entities/CustomerBookingForm'
import Modal from '../../UI/Modal.js';


export default function CarDetails() {
  const [vehicles, , loadVehicleMessage,] = useLoad('/vehicles');
  const { currentUser } = useAuth();
  const location = useLocation();
  const currentCar = location.state;
  const endpoint = '/bookings'

  const [showModal, setShowModal] = useState(false);


  // Context --------
  // Methods ---------
  const handleCloseModal = () => setShowModal(false);

  const handleAddSubmit = async (booking) => {
    //console.log(`handleAddSubmit ${booking}`);
    const response = await API.post(endpoint, booking);
    if (response.isSuccess) {
      setShowModal(true);
    }
  }

  const initialBooking = {
    VEHICLE_ID: currentCar.VEHICLE_ID,
    CUST_ID: currentUser ? currentUser.USER_ID : null,
    EMP_ID: 1,
    DATEBOOKED: new Date().toISOString().slice(0, 19).replace('T', ' ')
  }


  return (
    <Helper title={currentCar ? currentCar.MAKE : ''}>
      {
        !vehicles
          ? <p>{loadVehicleMessage}</p>
          : vehicles.length === 0
            ? <p>Sorry.. Car details not found</p>
            :
            <section>
              <Container className="container-lg">
                <Row>
                  <Col lg='6' md='12' sm='12' className='mb-2 mt-4'>
                    <div className="carDetails">
                      <div className='d-flex align-items-center gap-2'>
                        <h4 className="carPrice">£{currentCar.PRICE}.00</h4> |
                        <h4 className='sectionTitle'>{currentCar.MAKE} {currentCar.MODEL} {currentCar.ENGINESIZE} {currentCar.NOOFDOORS}</h4>
                        <span className='d-flex align-items-center gap-2'></span>
                      </div>
                      <p className="sectionInfo"></p>
                    </div>
                    <img src={currentCar.VEHICLEURL} alt='' className='w-100' />
                  </Col>

                  <Col lg='6' md='6' sm='12' className='mb-2 mt-4'>
                    <div className="cardItemDetail">
                      <h4 className='title text-left'>Key Facts</h4>
                      <div className="cardItemInfo d-flex align-item-center justify-content-between mt3 mb-4">
                        <span className='d-flex align-item-center gap-1'><i className="ri-gas-station-fill"> </i>Fuel Type: <br></br>{currentCar.FUELTYPE}</span>
                        <span className='d-flex align-item-center gap-1'><i className="ri-paint-fill"></i>Colour: <br></br>{currentCar.COLOUR}</span>
                        <span className='d-flex align-item-center gap-1'><i className="ri-time-fill"></i>Mileage: <br></br>{currentCar.MILEAGE}</span>
                      </div>
                      <div className="cardItemInfo d-flex align-item-center justify-content-between mt3 mb-4">
                        <span className='d-flex align-item-center gap-1'><i className="ri-door-fill"></i> Model Year: <br></br>{currentCar.MODELYEAR}</span>
                        <span className='d-flex align-item-center gap-1'><i className="ri-settings-3-fill"></i>Transmission: <br></br>{currentCar.TRANSMISSION}</span>
                        <span className='d-flex align-item-center gap-1'><i className="ri-creative-commons-line"></i>Engine size: <b></b>{currentCar.ENGINESIZE}L</span>

                      </div>

                      {/* // first check if the user exist then if the user exist and the usertype is ===1 (customer) show form else hide form   */}
                      {currentUser && currentUser.userType === 1 ?
                        <Col lg="6 mb-5 mt-4">
                          <div className='d-flex justify-content-flex-end align-items-end'>
                            <CustomerBookingForm initialBooking={initialBooking} onSubmit={handleAddSubmit} />
                            <Modal title="Conformation..." isOpen={showModal} onClose={handleCloseModal}>
                              <p>You successfully submitted  </p>
                            </Modal>
                          </div>
                        </Col>
                        : null
                      }



                    </div>
                  </Col>
                  <Col lg="12 mb-5 mt-4">
                    <div className='d-flex justify-content-center align-items-center'>
                      <p className="carDescription">
                        {currentCar.VEHICLEDESC}
                      </p>

                    </div>
                  </Col>

                </Row>


              </Container>
            </section>
      }
    </Helper>
  );
}



