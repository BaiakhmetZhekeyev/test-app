import "./App.css";
import { useDispatch, useSelector } from "react-redux";
import {
  addCustomerAction,
  removeCustomerAction,
} from "./store/customerReducer";
import { fetchCustomers } from "./asyncAction/customers";

function App() {
  const dispatch = useDispatch();
  const cash = useSelector((state) => state.cash.cash);
  const customers = useSelector((state) => state.customers.customers);
  console.log(cash);
  console.log(customers);

  const addCash = (cash) => {
    dispatch({ type: "ADD_CASH", payload: +cash });
  };
  const getCash = (cash) => {
    dispatch({ type: "GET_CASH", payload: +cash });
  };

  const addCustomer = (name) => {
    const customer = {
      name,
      id: Date.now(),
    };
    dispatch(addCustomerAction(customer));
  };

  const removeCustomer = (customer) => {
    dispatch(removeCustomerAction(customer.id));
  };

  return (
    <div className="App">
      <div style={{ fontSize: "20px", fontWeight: "bold", marginTop: "15px" }}>
        {cash}
      </div>
      <button
        style={{ padding: "10px", margin: "10px" }}
        onClick={() => addCash(prompt("How much do you want deposit ?"))}
      >
        Пополнить счет
      </button>
      <button
        style={{ padding: "10px", margin: "10px" }}
        onClick={() => getCash(prompt("How much money do you want ?"))}
      >
        Снять со счета
      </button>
      <button
        style={{ padding: "10px", margin: "10px" }}
        onClick={() => addCustomer(prompt("Type name..."))}
      >
        Add client
      </button>
      <button
        style={{ padding: "10px", margin: "10px" }}
        onClick={() => dispatch(fetchCustomers())}
      >
        Add clients from Server
      </button>
      {customers.length > 0 ? (
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          {customers.map((customer) => (
            <div
              onClick={() => removeCustomer(customer)}
              style={{
                border: "1px solid black",
                padding: "10px",
                margin: "10px",
                width: "200px",
              }}
            >
              {customer.name}
            </div>
          ))}
        </div>
      ) : (
        <div>No clients</div>
      )}
    </div>
  );
}

export default App;
