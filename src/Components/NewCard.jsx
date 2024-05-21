import { useNavigate, useLocation } from "react-router-dom";
import Button from "@mui/material/Button";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";

export default function NewCard() {
  const navigate = useNavigate();
  const location = useLocation();

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          {location.pathname !== "/newcard" && (
            <Button color="inherit" onClick={() => navigate("/newcard")}>
              Add Card
            </Button>
          )}

          <Button color="inherit" onClick={() => navigate("/")}>
            Home
          </Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
