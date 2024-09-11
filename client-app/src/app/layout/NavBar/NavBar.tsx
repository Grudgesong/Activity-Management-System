import {
  AppBar,
  Box,
  Button,
  List,
  ListItem,
  Toolbar,
  Typography,
} from "@mui/material";

interface Props {
  openForm: () => void;
}

const navStyles = {
  color: "inherit",
  textDecoration: "none",
  typography: "h6",
  "&:hover": {
    color: "grey.500",
  },
  "&.active": {
    color: "text.secondary",
  },
};

export default function NavBar({ openForm }: Props) {
  return (
    <AppBar position="fixed" className="navbar">
      <Toolbar
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Box display="flex" alignItems="center">
          <img
            src="./assets/logo.png"
            alt="logo"
            style={{ marginRight: "10px", height: "50px", width: "50px" }}
          />
          <Typography variant="h6">Reactivities</Typography>
        </Box>
        <Box>
          <List sx={{ display: "flex" }}>
            <ListItem sx={navStyles}>ACTIVITIES</ListItem>
            <ListItem sx={navStyles}>
              <Button
                color="success"
                variant="contained"
                size="small"
                onClick={openForm}
              >
                Create Activity
              </Button>
            </ListItem>
          </List>
        </Box>
      </Toolbar>
    </AppBar>
  );
}
