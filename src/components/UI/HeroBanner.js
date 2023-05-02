import React from 'react'
import { Container } from 'reactstrap'
// import Form from '../UI/Form';
// import useLoad from '../api/useLoad';
import '../layouts/Banner.css';
//import { useNavigate } from 'react-router-dom';


const HeroBanner = ({navigation}) => {

  // const navigate = useNavigate();


  // const [vehicles, , loadVehicleMessage,] = useLoad('/vehicles');

  return (
    <>
      <div className="banner_items banner_item mt0">
        <Container>
          <div className="hero_details">
            <h2 className="text_style mb-3">Better way to Book with us</h2>
          </div>
        </Container>

        {/* <Container>
          <div className="hero_section">
            <div className="hero_sec_detail"> Filter your search</div>
            <div className="hero_form">
              <Form>
                <Form.Item
                  label="Make"
                  htmlFor="VEHICLE_ID"
                >
                  {
                    !vehicles
                      ? <p>{loadVehicleMessage}</p>
                      : vehicles.length === 0
                        ? <p>No Vehicles found</p>
                        : <select
                          name="VEHICLE_ID"
                          value={vehicles.VEHICLE_ID}
                        >
                          <option value="0" disabled>Select Make</option>
                          {
                            vehicles.map((vehicle) => <option key={vehicle.VEHICLE_ID} value={vehicle.VEHICLE_ID}>{vehicle.MAKE}</option>)
                          }
                        </select>
                  }
                </Form.Item>

                <Form.Item
                  label="Model"
                  htmlFor="VEHICLE_ID"
                >
                  {
                    !vehicles
                      ? <p>{loadVehicleMessage}</p>
                      : vehicles.length === 0
                        ? <p>No Vehicles found</p>
                        : <select
                          name="VEHICLE_ID"
                          value={vehicles.VEHICLE_ID}
                        >
                          <option value="0" disabled>Select Model</option>
                          {
                            vehicles.map((vehicle) => <option key={vehicle.VEHICLE_ID} value={vehicle.VEHICLE_ID}>{vehicle.MODEL}</option>)
                          }
                        </select>
                  }
                </Form.Item>
                <button type="submit" className="search_btn" onClick={() => navigate('/carlist')}>
                  Search
                </button>

              </Form>


            </div>
          </div>

        </Container> */}
      </div>




    </>

  )
}

export default HeroBanner