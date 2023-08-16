import React, { useEffect, useState } from "react";
import "./App.css";
import axios from "axios";
import { Button, Header, List } from "semantic-ui-react";

function App() {
  const [activities, setActivities] = useState([]);
  useEffect(() => {
    // axios({
    //   method: "get",
    //   url: "http://localhost:5000/api/activities",
    //   withCredentials: false,
    //   headers: {
    //     "Access-Control-Allow-Origin": "*",
    //     "Content-Type": "application/json",
    //   },
    // }).then((response) => {
    //   console.log(response);
    //   setActivities(response.data);
    // });
    axios.get("http://localhost:5000/api/activities").then((response) => {
      console.log(response);
      setActivities(response.data);
    });
  }, []);
  return (
    <div>
      <Header as="h2" icon="users" content="Reactivities" />
      <List>
        {activities.map((activity: any) => (
          <li key={activity.id}>{activity.title}</li>
        ))}
      </List>
      <Button content="test" />
    </div>
  );
}

export default App;
