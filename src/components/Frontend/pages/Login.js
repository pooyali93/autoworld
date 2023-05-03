import { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { useAuth } from '../../auth/useAuth.js';
import useLoad from '../../api/useLoad.js';
import './Login.css'

export default function Login() {
  // Initialisation ------------------------------
  const { login } = useAuth();
  const navigate = useNavigate();
  const { state } = useLocation();

  // State ---------------------------------------
  const [customers, , loadingCustomersMessage,] = useLoad(`/users/customers`);
  const [sales, , loadingSalesMessage,] = useLoad(`/users/sales`);
  const [selectedUser, setSelectedUser] = useState(null);

  // Context -------------------------------------
  // Methods -------------------------------------
  const handleSubmit = (event) => {
    event.preventDefault();
    if (selectedUser) {
      // Check if the selected user exists in the list of customers or employees
      const isCustomer = customers.some((user) => user.USER_ID === selectedUser.USER_ID);
      const isEmployee = sales.some((user) => user.USER_ID === selectedUser.USER_ID);
      if (isCustomer || isEmployee) {
        // User exists, log in
        login(selectedUser);
        navigate(state?.path || '/carlist');
      } else {
        // User doesn't exist
        alert('Invalid user selected. Please select a valid user.');
      }
    } else {
      // No user selected
      alert('Please select a user to log in.');
    }
  };


  const handleCustomersChange = (event) => {
    const selectedCustomer = customers[parseInt(event.target.value)]
    selectedCustomer['userType'] = 1;

    setSelectedUser(selectedCustomer);
  }
  const handleSalesChange = (event) => {
    const selectedSalesperson = sales[parseInt(event.target.value)]
    selectedSalesperson['userType'] = 2;

    setSelectedUser(selectedSalesperson);
  }


  // View ----------------------------------------
  return (
    <div className="login_container">
      <div className='left'>
        <div className="login_container">
          {/* <p>hello{JSON.stringify(customers.USER_ID)}</p> */}
          <form onSubmit={handleSubmit}>
            <h4>Login as a customer</h4>



            <label>Use this dropdown to select a customer</label>
            {
              !customers
                ? <p>{loadingCustomersMessage}</p>
                : <>
                  <select onChange={handleCustomersChange}>
                    <option value={null}>Select a customer ...</option>
                    {
                      customers.map((user, index) =>
                        <option key={user.USER_ID} value={index}>
                          {`${user.FIRSTNAME}, ${user.LASTNAME}`}
                        </option>
                      )
                    }
                  </select>
                </>
            }
            <button type="submit">Log in</button>

          </form>
        </div>
      </div>
      <div className='right'>
        <div className="login_container">
          <form onSubmit={handleSubmit}>
            <h4>Login as an employee</h4>
            <label>Use this dropdown to select an employee</label>
            {
              !sales
                ? <p>{loadingSalesMessage}</p>
                : <>
                  <select onChange={handleSalesChange}>
                    <option value={null}>Select an employee ...</option>
                    {
                      sales.map((user, index) =>
                        <option key={user.USER_ID} value={index}>
                          {`${user.FIRSTNAME}, ${user.LASTNAME}`}
                        </option>
                      )
                    }
                  </select>
                </>
            }
            <button type="submit">Log in</button>
          </form>
        </div>
      </div>
    </div>
  )
};