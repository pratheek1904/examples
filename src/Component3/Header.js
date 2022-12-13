import React, { useState } from "react";
import "../Component3/weather.css";

const Header = () => {
  const city = [
    {
      id: 0,
      name: "Bangalore/Bengaluru",
      deg: "20°C",
    },
    {
      id: 1,
      name: "Pune",
      deg: "20°C",
    },
    {
      id: 2,
      name: "Mumbai",
      deg: "20°C",
    },
    {
      id: 3,
      name: "Kolkata",
      deg: "20°C",
    },
    {
      id: 4,
      name: "Patna",
      deg: "20°C",
    },
    {
      id: 5,
      name: "Delhi",
      deg: "20°C",
    },
    {
      id: 6,
      name: "Chennai",
      deg: "20°C",
    },
    {
      id: 7,
      name: "Hyderbad",
      deg: "20°C",
    },
    {
      id: 8,
      name: "Rajasthan",
      deg: "20°C",
    },
    {
      id: 9,
      name: "Kerala",
      deg: "20°C",
    },
    {
      id: 10,
      name: "punjab",
      deg: "20°C",
    },
  ];
  const [search, setsearch] = useState("");
  const [data, setdata] = useState(city);
  const [active, setactive] = useState(true);

  const addcity = () => {
    setactive(false);
  };
  const closebtn = () => {
    setactive(true);
  };
  const handlecity = (id) => {
    const newcity = data.filter((val) => {
        return val.id === id;
      });
        console.log(newcity)
    const newarray = data.filter((elem) => {
      return elem.id !== id;
    });
    setdata(newarray);


  };

  return (
    <>
      <div className="header">
        <h1 className="title">My Favorite Citie</h1>
        <br />
        <p>You dont have any Favorite cities selected yet</p>
        <button className="addcities" onClick={addcity}>
          Add New Cities
        </button>
      </div>

      {active ? (
        ""
      ) : (
        <div className="container">
          <h1>Add City Modal</h1>
          <button className="closebtn" onClick={closebtn}>
            X
          </button>
          <input
            type="text"
            placeholder="Enter City"
            value={search}
            onChange={(e) => setsearch(e.target.value)}
          />
          <br />
          {data
            .filter((valu) => {
              if (search === "") {
                return valu;
              } else if (
                valu.name.toLowerCase().includes(search.toLowerCase())
              ) {
                return valu.name;
              }
            })
            .map((elem) => {
              return (
                <div key={elem.id}>
                  <p className="elemname">
                    {elem.name}
                    <button
                      onClick={() => handlecity(elem.id)}
                      className="addbtn"
                    >
                      Add
                    </button>
                  </p>
                </div>
              );
            })}
        </div>
      )}
    </>
  );
};

export default Header;
