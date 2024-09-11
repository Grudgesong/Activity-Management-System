import { useEffect, useState } from "react";
import axios from "axios";
import { Container } from "@mui/material";
import { Activity } from "../models/activity";
import NavBar from "./NavBar/NavBar";
import ActivityDashboard from "../../features/activities/dashboard/ActivityDashboard";
import { v4 as uuid } from "uuid";

function App() {
  const [activities, setActivities] = useState<Activity[]>([]);
  const [selectedActivity, setSelectedActivity] = useState<
    Activity | undefined
  >(undefined);
  const [editMode, setEditMode] = useState(false);

  useEffect(() => {
    axios
      .get<Activity[]>("http://localhost:5000/api/activities")
      .then((response) => {
        setActivities(response.data);
      });
  }, []);

  function handleSelectedActivity(id: string) {
    setSelectedActivity(activities.find((activity) => activity.id === id));
  }

  function handleCancelSelectActivity() {
    setSelectedActivity(undefined);
  }

  function handleFormOpen(id?: string) {
    if (id) {
      handleSelectedActivity(id); // Calls handleSelectedActivity if id is provided
    } else {
      handleCancelSelectActivity(); // Calls handleCancelSelectActivity if id is not provided
    }
    setEditMode(true); // Enables edit mode for the form
  }

  function handleFormClose() {
    setEditMode(false);
  }

  function handleCreateOrEditActivity(activity: Activity) {
    // Check if the activity has an ID (indicating it's an existing activity)
    if (activity.id) {
      // Update the activities array by filtering out the old activity with the same ID
      // and adding the updated activity object
      setActivities([
        ...activities.filter((x) => x.id !== activity.id),
        activity,
      ]);
    } else {
      // If the activity is new (doesn't have an ID), add it to the activities array
      setActivities([...activities, { ...activity, id: uuid() }]);
    }

    // Disable edit mode after creating or editing the activity
    setEditMode(false);

    // Set the selected activity to the current activity
    setSelectedActivity(activity);
  }

  function handleDeleteActivity(id: string) {
    setActivities([...activities.filter((x) => x.id !== id)]);
  }

  return (
    <>
      <NavBar openForm={handleFormOpen} />
      <Container style={{ marginTop: "7em" }}>
        <ActivityDashboard
          activities={activities}
          selectedActivity={selectedActivity}
          selectActivity={handleSelectedActivity}
          cancelSelectActivity={handleCancelSelectActivity}
          editMode={editMode}
          openForm={handleFormOpen}
          closeForm={handleFormClose}
          createOrEdit={handleCreateOrEditActivity}
          deleteActivity={handleDeleteActivity}
        />
      </Container>
    </>
  );
}

export default App;
