import { Button, ButtonGroup, Paper, TextField } from "@mui/material";
import LoadingButton from "@mui/lab/LoadingButton";
import { Activity } from "../../../app/models/activity";
import { ChangeEvent, FormEvent, useState } from "react";

interface Props {
  activity: Activity | undefined;
  closeForm: () => void;
  createOrEdit: (activity: Activity) => void;
  submitting: boolean;
}

export default function ActivityForm({
  activity: selectedActivity,
  closeForm,
  createOrEdit,
  submitting,
}: Props) {
  const initialState = selectedActivity ?? {
    id: "",
    title: "",
    category: "",
    description: "",
    date: "",
    city: "",
    venue: "",
  };

  const [activity, setActivity] = useState(initialState);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    createOrEdit(activity);
  }

  function handleInputChange(event: ChangeEvent<HTMLInputElement>) {
    const { name, value } = event.target;
    setActivity({ ...activity, [name]: value });
  }

  return (
    <Paper sx={{ padding: "2em", marginTop: "1em" }}>
      <form onSubmit={handleSubmit}>
        <TextField
          sx={{ mb: 2 }}
          label="Title"
          fullWidth
          value={activity.title}
          name="title"
          onChange={handleInputChange}
        />

        <TextField
          sx={{ mb: 2 }}
          label="Description"
          fullWidth
          multiline
          maxRows={4}
          value={activity.description}
          name="description"
          onChange={handleInputChange}
        />
        <TextField
          sx={{ mb: 2 }}
          label="Category"
          fullWidth
          value={activity.category}
          name="category"
          onChange={handleInputChange}
        />
        <TextField
          sx={{ mb: 2 }}
          label="Date"
          fullWidth
          value={activity.date}
          name="date"
          type="date"
          onChange={handleInputChange}
        />
        <TextField
          sx={{ mb: 2 }}
          label="City"
          fullWidth
          value={activity.city}
          name="city"
          onChange={handleInputChange}
        />
        <TextField
          sx={{ mb: 2 }}
          label="Venue"
          fullWidth
          value={activity.venue}
          name="venue"
          onChange={handleInputChange}
        />
        <ButtonGroup fullWidth>
          <Button color="error" onClick={closeForm}>
            Cancel
          </Button>
          <LoadingButton
            loading={submitting}
            variant="contained"
            color="success"
            type="submit"
          >
            Submit
          </LoadingButton>
        </ButtonGroup>
      </form>
    </Paper>
  );
}
