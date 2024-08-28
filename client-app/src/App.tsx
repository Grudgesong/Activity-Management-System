import { useEffect, useState } from "react";
import GroupIcon from "@mui/icons-material/Group";
import "./App.css";
import axios from "axios";
import { List, ListItem, Stack, Typography } from "@mui/material";

function App() {
  const [activities, setActivities] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:5000/api/activities").then((response) => {
      setActivities(response.data);
    });
  }, []);
  return (
    <>
      <Stack direction="row" spacing={2}>
        <GroupIcon color="primary" fontSize="large" />
        <Typography variant="h5">Reactivities</Typography>
      </Stack>
      <List>
        {activities.map((activity: any) => (
          <ListItem key={activity.id}>{activity.title}</ListItem>
        ))}
      </List>
    </>
  );
}

export default App;
