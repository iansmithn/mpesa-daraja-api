import { useState } from "react";
import "./App.css";
import axios from "axios";

function App() {
  const price = 10;
  const [phone, setPhone] = useState("");

  const submitPayment = (event: React.FormEvent<HTMLButtonElement>) => {
    console.log("button");
    event.preventDefault();
    axios
      .post("http://localhost:3030/token", {
        price,
        phone,
      })
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <main className="w-screen">
      <p className="font-semibold text-xl  w-1/2 m-auto mt-5 text-cyan-500 text-center">
        (This is a fuctional webpage used to test the STK push funtionality by
        entering a phone number and clicking the make payment button below. This
        is for testing purposes only and users' phone numbers are not stored
        after the session.)
        <br />
        Thank you for visiting this webpage.
      </p>

      <div className=" m-auto mt-10 p-3 mb-10 w-fit  justify-center flex flex-col items-center border-4  ">
        <img src="/t-shirt.jpeg" width="300" height="200" />
        <h1 className="text-2xl font-semibold">Black T-shirt </h1>
        <h2 className="mt-3  text-3 text-xl font-sans hover:font-semibold">
          Price: Ksh {price}{" "}
        </h2>
        <p className=" mt-3 text-lg">
          Pay with <span className="text-green-600 font-bold">M-pesa</span>
        </p>
        <form>
          <input
            placeholder="Phone number"
            className="px-2 py-1 bg-slate-50 border border-slate-700 focus:border-green-500 focus focus:outline-none rounded-2xl "
            onChange={(e) => setPhone(e.target.value)}
          />
          <br />
          <button
            onClick={submitPayment}
            className=" m-2 ml-8 p-2 bg-green-600 text-white border rounded-lg"
          >
            Make payment
          </button>
        </form>
      </div>
    </main>
  );
}

export default App;
