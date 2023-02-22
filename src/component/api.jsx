import React, { useEffect, useState } from "react";
import axios from "axios";

const Data = () => {
  const [data, setData] = useState([]);

  const fetchData = async () => {
    try {
      const response = await axios.get("https://jsonplaceholder.typicode.com/posts");
      setData(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="container">
      {data.map(({ id, title, body }) => (
        <div className="card" key={id}>
          <h1>{id}</h1>
          <h2 className="title">{title}</h2>
          <p className="body">{body}</p>
        </div>
      ))}
    </div>
  );
};

export default Data;
