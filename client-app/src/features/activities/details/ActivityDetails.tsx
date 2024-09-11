import {
  Card,
  CardHeader,
  CardMedia,
  CardContent,
  Typography,
  CardActions,
  ButtonGroup,
  Button,
} from "@mui/material";
import { Activity } from "../../../app/models/activity";

interface Props {
  activity: Activity;
  cancelSelectActivity: () => void;
  openForm: (id: string) => void;
}

export default function ActivityDetails({
  activity,
  cancelSelectActivity,
  openForm,
}: Props) {
  return (
    <Card key={activity.id} sx={{ marginTop: "0.5em" }}>
      <CardHeader title={activity.title} subheader={activity.date} />
      <CardMedia
        component="img"
        height="194"
        image={`./assets/categoryImages/${activity.category}.jpg`}
        alt="Paella dish"
      />
      <CardContent>
        <Typography variant="body2" sx={{ color: "text.secondary" }}>
          {activity.description}
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <ButtonGroup fullWidth>
          <Button onClick={() => openForm(activity.id)}>Edit</Button>
          <Button color="error" onClick={cancelSelectActivity}>
            Cancel
          </Button>
        </ButtonGroup>
      </CardActions>
    </Card>
  );
}
