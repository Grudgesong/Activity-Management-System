import {
  Button,
  List,
  ListItem,
  Paper,
  Stack,
  Typography,
} from "@mui/material";
import { Activity } from "../../../app/models/activity";

interface Props {
  activities: Activity[];
  selectActivity: (id: string) => void;
  deleteActivity: (id: string) => void;
}

export default function ActivityList({
  activities,
  selectActivity,
  deleteActivity,
}: Props) {
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
              <Button
                variant="contained"
                color="error"
                onClick={() => deleteActivity(activity.id)}
              >
                Delete
              </Button>
            </Stack>
          </Paper>
        </List>
      ))}
      ;
    </>
  );
}
