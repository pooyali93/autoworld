import { useState } from "react";
import API from "../../api/API.js";
import useLoad from "../../api/useLoad.js";
import { FaPlus } from "react-icons/fa";
import Button from "../../UI/Button.js";
import VehicleForm from "../../entities/VehicleForm.js";
import VehiclePanels from "../../entities/VehiclePanels.js";
import Sidebar from "../../layouts/SideBar.js";
import { Container, Row, Col } from 'reactstrap'

export default function Vehicles() {
    // Initialisation ---------
    // const currentUserID = 3;
    const endpoint = '/vehicles';

    // State --------
    const [vehicles, , loadingMessage, loadVehicles] = useLoad(endpoint)
    const [showAddVehicleForm, setShowAddVehicleForm] = useState(false);

    // Context ---------
    // Methods ---------
    const toggleAddForm = () => setShowAddVehicleForm(!showAddVehicleForm);
    const cancelAddForm = () => setShowAddVehicleForm(false);

    const handleAddVehicleSubmit = async (vehicle) => {
        const response = await API.post(endpoint, vehicle);
        return response.isSuccess
            ? loadVehicles(endpoint) || true
            : false;
    }

    // View ---------
    return (
        <Container className='mw-100  p-3'>
            <Row>
                <Col sm='2' className='sidebar-wrapper mt-4 mb-5 p-0'>
                    <Sidebar />
                </Col>
                <Col xs="8 mt-4 p-5">
                    <div className="button">
                        <Button color='rgb(58, 110, 165)' iconName={<FaPlus />} text='Add New User' onClick={toggleAddForm} ></Button>
                    </div>
                    <div className="form-container">
                        {showAddVehicleForm && <VehicleForm onCancel={cancelAddForm} onSubmit={handleAddVehicleSubmit} />}
                    </div>

                    <div className="form-container">
                        {
                            !vehicles
                                ? <p>{loadingMessage}</p>
                                : vehicles.length === 0
                                    ? <p className="currentMsg">Currently you don't have any vehicles!</p>

                                    : <VehiclePanels vehicles={vehicles} reloadVehicles={() => loadVehicles(endpoint)} />
                        }
                    </div>


                </Col>
                <Col lg="2" xs="8 mt-4 p-5">
                </Col>
            </Row>
        </Container>
    )

}




