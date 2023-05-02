import Form from '../UI/Form';
import useLoad from '../api/useLoad';
import DatePicker from "react-datepicker";
import "../entities/react-datepicker.css";
import { setHours, setMinutes } from "date-fns";
//import { useAuth } from '../auth/useAuth';



const emptyBooking = {
  VEHICLE_ID: 1,
  CUST_ID: 1,
  EMP_ID: 5,
  DATEBOOKED: new Date().toISOString().slice(0, 19).replace('T', ' ')
}

export default function CustomerBookingForm({ onSubmit, initialBooking = emptyBooking }) {
 
  //const { currentUser } = useAuth();

  // Initialisation ---------
  const validation = {
    isValid: {
      VEHICLE_ID: (id) => id !== 0,
      CUST_ID: (id) => id !== 0,
      EMP_ID: (id) => id !== 0,
      DATEBOOKED: (date) => /[0-9]{4}-(0[1-9]|1[0-2])-(0[1-9]|[1-2][0-9]|3[0-1]) (2[0-3]|[01][0-9]):[0-5][0-9]:[0-5][0-9]/.test(date)

    },
    errorMessage: {
      VEHICLE_ID: "Vehicle id must be a number",
      Customer_ID: "customer is not selected",
      Sales_ID: "Please select a salesperson",
      DATEBOOKED: "Please enter the date"
    }
  }
  // Hook  ---------
  const [booking, errors, handleChange, handleCBFSubmit] = Form.useForm(initialBooking, validation, onSubmit);
  const [salesperson, , loadSaleMessage,] = useLoad('/users/sales');

  const currentDate = new Date(booking.DATEBOOKED);



  //console.log(JSON.stringify(booking))


  // Handler ---------  
  // View ---------
  return (
    <Form onSubmit={handleCBFSubmit}>
      <Form.Item
        label=""
        htmlFor="VEHICLE_ID"
      >
        <input
          type="hidden"
          name="VEHICLE_ID"
          defaultValue={booking.VEHICLE_ID}
        />

      </Form.Item>

      <Form.Item
        label=""
        htmlFor="CUST_ID"
      >
        <input
          type="hidden"
          name="CUST_ID"
          defaultValue={booking.CUST_ID}
        />

      </Form.Item>

      <Form.Item
        label="Saleperson"
        htmlFor="EMP_ID"
        advice="Please Select a Salesperson"
        error={errors.USER_ID}
      >
        {
          !salesperson
            ? <p>{loadSaleMessage}</p>
            : salesperson.length === 0
              ? <p>No salesperson found</p>
              : <select
                name="EMP_ID"
                value={booking.USER_ID}
                onChange={handleChange}
              >
                <option value="0" disabled>None Selected</option>
                {
                  salesperson.map((sale) => <option key={sale.USER_ID} value={sale.USER_ID}>{sale.FIRSTNAME} {sale.LASTNAME}</option>)
                }
              </select>
        }
      </Form.Item>

      <Form.Item
        label="Date of Booking"
        htmlFor="DATEBOOKED"
        advice="Please Enter Date of booking"
        error={errors.DATEBOOKED}
      >
        <DatePicker
          //selected={new Date(booking.DATEBOOKED)}
          selected={currentDate}
          onChange={date => handleChange({ target: { name: 'DATEBOOKED', value: date.toISOString().slice(0, 19).replace('T', ' ') } })}
          dateFormat="yyyy-MM-dd HH:mm:ss"
          showTimeSelect
          minDate={new Date()}
          minTime={setHours(setMinutes(new Date(), 0), 9)}
          maxTime={setHours(setMinutes(new Date(), 0), 18)}
          timeFormat="HH:mm:ss"
          name="DATEBOOKED" />
      </Form.Item>
    </Form>
  )
}