import React, { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [data, setData] = useState();

  const getData = async () => {
    const res = await fetch("https://randomuser.me/api/");
    const data = await res.json();
    console.log(data?.results?.[0]);
    setData(data?.results?.[0]);
  };
  useEffect(() => {
    getData();
  }, []);
  if (!data) {
    return <h1>Loading!!!</h1>;
  }
  return (
    <div className="app">
      <img src={data?.picture?.large} alt="thumbnail" />
      <h1>
        Name : {`${data?.name?.title}. ${data?.name?.first} ${data?.name?.last}`}
      </h1>
      <h1>Gender: {`${data?.gender}`}</h1>
      <h1>Age: {`${data?.dob?.age}`}</h1>
      <h1>
        Address:{" "}
        {`${data?.location?.city} ${data?.location?.state} ${data?.location?.country}`}
      </h1>
      <h1>Email: {`${data?.email}`}</h1>
      <h1>Phone: {`${data?.phone}`}</h1>
      <button onClick={getData}>Update Profile</button>
    </div>
  );
}

export default App;
