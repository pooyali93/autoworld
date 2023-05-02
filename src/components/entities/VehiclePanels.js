import { useState } from "react";
import API from "../api/API.js";
import Panel from "../UI/Panel.js";
import { FaRegEdit } from "react-icons/fa";
import Button from "../UI/Button.js";
import VehicleForm from "./VehicleForm.js";
//import Calendar from 'react-calendar';
import '../entities/Calendar.css';


export default function VehiclePanels({ vehicles, loadingMessage, reloadVehicles }) {
  // Initialisation ------------------
  const putEndpoint = '/vehicles';

  // State ---------------------------
  const [selectedForm, setSelectedForm] = useState(0);
  // Context -------------------------
  // Methods -------------------------
  const handleEdit = (id) => setSelectedForm(id === selectedForm ? 0 : id);
  const handleEditSubmit = async (vehicle) => {
    console.log(`handleEditSubmit`);

    const response = await API.put(`${putEndpoint}/${vehicle.VEHICLE_ID}`, vehicle);
    if (response.isSuccess) {
      setSelectedForm(0);
      reloadVehicles();

    }

  }



  const handleCancel = () => setSelectedForm(0);
  return (
    <section className="cal-section">
      <div>
        {
          vehicles.length > 0
            ? 
              <ul>
                {vehicles.map(vehicle => (
                  <Panel
                    key={vehicle.VEHICLE_ID}
                    title={` ${vehicle.MAKE} ${vehicle.MODEL} ${vehicle.MODELYEAR} ${vehicle.COLOUR} £${vehicle.PRICE}`}
                  >
                    <div className="card">
                      <div className="name">
                      Vehicle: {vehicle.MAKE} Model: {vehicle.MODEL} Year:{vehicle.NODELYEAR} Colour: {vehicle.COLOUR} £ {vehicle.PRICE} <br></br>
                      Description:<p> {vehicle.VEHICLEDESC}</p>
                      </div>
                    </div>
                    <Button color='rgb(58, 110, 165)' iconName={<FaRegEdit />} text='Edit' onClick={() => handleEdit(vehicle.VEHICLE_ID)} ></Button>

                    {
                      (selectedForm === vehicle.VEHICLE_ID) &&
                      <VehicleForm onCancel={handleCancel} onSubmit={handleEditSubmit} initialVehicle={vehicle} />
                    }
                  </Panel>
                ))}
              </ul>
            
            : <p>No vehicles for selected date {loadingMessage} </p>
        }
      </div>
    </section>
  );
}


