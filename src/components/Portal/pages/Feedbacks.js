import { useState } from "react";
import API from "../../api/API.js";
import useLoad from "../../api/useLoad.js";
import { FaStar } from "react-icons/fa";
import Button from "../../UI/Button";
import FeedbackForm from "../../entities/FeedbackForm";
import Card from "../../UI/Card.js";
import Modal from "../../UI/Modal.js";
import Sidebar from "../../layouts/SideBar.js";
import { Container, Row, Col } from 'reactstrap'

export default function Feedbacks() {
    // Initialisation ---------
    const endpoint = '/feedbacks';

    // State --------
    const [feedbacks, , loadingMessage, loadFeedbacks] = useLoad(endpoint)
    const [showAll, setShowAll] = useState(false);

    // Context ---------
    // Methods ---------
    const stars = Array(5).fill(0)

    const visibleFeedbacks = showAll ? feedbacks : (feedbacks ? feedbacks.slice(0, 6) : []);

    const handleViewMore = () => {
        setShowAll(!showAll);
    };

    const [showModal, setShowModal] = useState(false);
    const handleOpenModal = () => { setShowModal(true); }
    const handleCloseModal = () => { setShowModal(false); }



    const handleAddFeedbackSubmit = async (feedback) => {
        const response = await API.post(endpoint, feedback);
        return response.isSuccess
            ? loadFeedbacks(endpoint) || true
            : false;
    }

    // View ---------
    return (
        <Container className='mw-100  p-3'>
            <Row>
                <Col sm='2' className='sidebar-wrapper mt-4 mb-5 p-0'>
                    <Sidebar />
                </Col>
                <Col xs="10 mt-4">
                    <Button color='(192, 192, 192)' text='Add Review' onClick={handleOpenModal}></Button>
                    <Modal isOpen={showModal} onClose={handleCloseModal}>
                        <FeedbackForm onCancel={handleCloseModal} onSubmit={handleAddFeedbackSubmit} />
                    </Modal>

                    <div className="panelContainer">

                        {
                            !feedbacks
                                ? <p>{loadingMessage}</p>
                                : feedbacks.length === 0
                                    ? <p>You have no reviews yet</p>
                                    : visibleFeedbacks.map((feedback) =>
                                        <Card key={feedback.FEEDBACK_ID}>

                                            <div className="card_main">
                                                <span className="rating">
                                                    {
                                                        stars.map((item, index) => (<FaStar key={index} color={feedback.RATING > index ? "#F2C265" : "#a9a9a9"} />))
                                                    }
                                                </span>
                                                <span className="message">   "{feedback.MESSAGE}"</span>

                                            </div>
                                            <div className="card_bottom">
                                                <span className="date">{new Date(feedback.DATE).toLocaleDateString()}</span>
                                                <span className="username">{` ${feedback.FULLNAME} `}</span>
                                            </div>
                                        </Card>
                                    )
                        }


                        <button onClick={handleViewMore} className="item_btn book_card_btn">
                            {showAll ? "Show Less" : "View More"}
                        </button>
                    </div>
                </Col>
            </Row>
        </Container>

    )

}




