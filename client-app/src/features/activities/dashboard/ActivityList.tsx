import {
  Button,
  List,
  ListItem,
  Paper,
  Stack,
  Typography,
} from "@mui/material";
import { Activity } from "../../../app/models/activity";
import LoadingButton from "@mui/lab/LoadingButton";
import { SyntheticEvent, useState } from "react";

interface Props {
  activities: Activity[];
  selectActivity: (id: string) => void;
  deleteActivity: (id: string) => void;
  submitting: boolean;
}

export default function ActivityList({
  activities,
  selectActivity,
  deleteActivity,
  submitting,
}: Props) {
  const [target, setTarget] = useState("");

  function handleActivityDelete(
    e: SyntheticEvent<HTMLButtonElement>,
    id: string
  ) {
    setTarget(e.currentTarget.name);
    deleteActivity(id);
  }
  return (
    <>
      {activities.map((activity) => (
        <List key={activity.id}>
          <Paper sx={{ padding: "2em", marginBottom: "1em" }}>
            <Typography>{activity.title}</Typography>
            <Typography>{activity.date}</Typography>
            <Typography>{activity.description}</Typography>
            <Typography>{activity.venue}</Typography>
            <Stack direction="row">
              <ListItem>{activity.category}</ListItem>
              <Button
                variant="contained"
                onClick={() => selectActivity(activity.id)}
              >
                View
              </Button>
              <LoadingButton
                name={activity.id}
                variant="contained"
                color="error"
                onClick={(e) => handleActivityDelete(e, activity.id)}
                loading={submitting && target === activity.id}
              >
                Delete
              </LoadingButton>
            </Stack>
          </Paper>
        </List>
      ))}
    </>
  );
}
