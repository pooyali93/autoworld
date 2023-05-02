import { useState } from "react";
import API from "../../api/API.js";
import useLoad from "../../api/useLoad.js";
import { FaPlus } from "react-icons/fa";
import Button from "../../UI/Button";
import UserPanels from "../../entities/UserPanels.js";
import UserForm from "../../entities/UserForm.js";
import Sidebar from "../../layouts/SideBar.js";
import { Container, Row, Col } from 'reactstrap'

export default function Users() {
  // Initialisation ---------
  // const currentUserID = 3;
  const endpoint = '/users';
  // State --------
  const [users, , loadingMessage, loadUsers] = useLoad(endpoint)
  const [showAddUsersForm, setShowUsersForm] = useState(false);

  // Context ---------
  // Methods ---------
  const toggleAddForm = () => setShowUsersForm(!showAddUsersForm);
  const cancelAddForm = () => setShowUsersForm(false);

  const handleAddUserSubmit = async (user) => {
    const response = await API.post(endpoint, user);
    return response.isSuccess
      ? loadUsers(endpoint) || true
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
          <div className="button">
            <Button color='rgb(58, 110, 165)' iconName={<FaPlus />} text='Add New User' onClick={toggleAddForm} ></Button>
          </div>
          <div className="form-container">
            {showAddUsersForm && <UserForm onCancel={cancelAddForm} onSubmit={handleAddUserSubmit} />}
          </div>

          <div className="form-container">
            {
              !users
                ? <p>{loadingMessage}</p>
                : users.length === 0
                  ? <p className="currentMsg">Currently you don't have any users!</p>

                  : <UserPanels users={users} reloadUsers={() => loadUsers(endpoint)} />
            }
          </div>


        </Col>
      </Row>
    </Container>
  )

}




