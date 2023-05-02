import { useState } from "react";
import API from "../api/API.js";
import Panel from "../UI/Panel.js";
import { FaRegEdit } from "react-icons/fa";
import Button from "../UI/Button.js";
import UserForm from "./UserForm.js";
//import Calendar from 'react-calendar';
import '../entities/Calendar.css';


export default function UserPanels({ users, loadingMessage, reloadUsers }) {
  // Initialisation ------------------
  const putEndpoint = '/users';

  // State ---------------------------
  const [selectedForm, setSelectedForm] = useState(0);
  // Context -------------------------
  // Methods -------------------------
  const handleEdit = (id) => setSelectedForm(id === selectedForm ? 0 : id);
  const handleEditSubmit = async (user) => {
    console.log(`handleEditSubmit`);

    const response = await API.put(`${putEndpoint}/${user.USER_ID}`, user);
    if (response.isSuccess) {
      setSelectedForm(0);
      reloadUsers();

    }

  }



  const handleCancel = () => setSelectedForm(0);
  return (
    <section className="cal-section">
      <div>
        {
          users.length > 0
            ? 
              <ul>
                {users.map(user => (
                  <Panel
                    key={user.USER_ID}
                    title={`${user.FIRSTNAME}, ${user.LASTNAME} ${user.PHONENO}`}
                  >
                    <div className="card">
                      <div className="name">
                      Street Name: {user.STREET} City: {user.CITY} Postcode:{user.POSTCODE} Email: {user.EMAIL} Phone number:{user.PHONENO}
                      </div>
                    </div>
                    <Button color='rgb(58, 110, 165)' iconName={<FaRegEdit />} text='Edit' onClick={() => handleEdit(user.USER_ID)} ></Button>

                    {
                      (selectedForm === user.USER_ID) &&
                      <UserForm onCancel={handleCancel} onSubmit={handleEditSubmit} initialUser={user} />
                    }
                  </Panel>
                ))}
              </ul>
            
            : <p>No Users for selected date {loadingMessage} </p>
        }
      </div>
    </section>
  );
}


