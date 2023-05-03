import React, {useState} from "react";
import API from "../../api/API.js";
import useLoad from "../../api/useLoad.js";
import './MyBookings.scss'
import BookingForm from "../../entities/BookingForm";
import BookingPanels from "../../entities/BookingPanels.js";
import { useAuth } from '../../auth/useAuth.js';
import Sidebar from "../../layouts/SideBar.js";
import { Container, Row, Col } from 'reactstrap'
import Modal from "../../UI/Modal.js";


export default function MyBookings() {
    // Initialisation ---------
    const { currentUser } = useAuth();
    let endpoint;

    if (currentUser && currentUser.userType === 1) {
        endpoint = `/bookings?Customer_ID=${currentUser.USER_ID.toString()}`;
    } else if (currentUser && currentUser.userType === 2) {
        endpoint = `/bookings?Sales_ID=${currentUser.USER_ID.toString()}`
        console.log(endpoint, "sales")
    }
    console.log(JSON.stringify(currentUser))
    // State --------
    const [bookings, , loadingMessage, loadBookings] = useLoad(endpoint)
    const [showModal, setShowModal] = useState(false);
    // Context ---------
    // Methods ---------
    const handleCloseModal = () => setShowModal(false);

    const handleAddSubmit = async (booking) => {
        const response = await API.post(endpoint, booking);
        if (response.isSuccess) {
            await loadBookings(endpoint);
            setShowModal(true);
            return true;
        } else {
            return false;
        }
    }
    

    const currentUserBookings = bookings ? bookings.filter(booking => booking.Customer_ID === currentUser.USER_ID || booking.Sales_ID === currentUser.USER_ID) : [];


    // View ---------
    return (
        <Container className='mw-100 p-3'>
            <Row>
                <Col lg='2' className='sidebar-wrapper mt-4 mb-5 p-0 col-sm-2'>
                    <Sidebar />
                </Col>
                <Col lg="6  mt-4 mb-5 p-0">
                    <div className="item-container">
                        {
                            !bookings
                                ? <p>{loadingMessage}</p>
                                : currentUserBookings.length === 0
                                    ? <p className="currentMsg">Currently you don't have any booking!</p>

                                    : <BookingPanels bookings={currentUserBookings} reloadBookings={() => loadBookings(endpoint)} />
                        }

                    </div>
                </Col>
                {currentUser && currentUser.userType === 2 ?
                    <Col lg="4 mt-2 p-4 ml-5">
                        <div className="form-container">
                            <BookingForm onSubmit={handleAddSubmit} />
                            <Modal title="Conformation..." isOpen={showModal} onClose={handleCloseModal}>
                              <p>You successfully submitted  </p>
                            </Modal>
                        </div>

                    </Col>
                    : null
                }
            </Row>
        </Container>
    )
}

