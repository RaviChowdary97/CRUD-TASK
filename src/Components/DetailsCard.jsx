import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { IconButton } from "@mui/material";

export default function DetailsCard({
  name,
  username,
  email,
  phone,
  website,
  address,
  company,
  deleteButton,
  editButton,
}) {
  return (
    <Card
      sx={{ maxWidth: 345, m: 2, backgroundColor: "#f5f5f5", borderRadius: 2 }}
    >
      <CardContent>
        <Typography gutterBottom variant="h6" component="div">
          {name}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Username: {username}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Email: {email}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Phone: {phone}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Website: {website}
        </Typography>
        <Typography sx={{ mt: 1 }} variant="subtitle2" color="text.primary">
          Address:
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {address.street}, {address.suite}, {address.city}, {address.zipcode}
        </Typography>
        <Typography sx={{ mt: 1 }} variant="subtitle2" color="text.primary">
          Company:
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {company.name} - {company.bs}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          "{company.catchPhrase}"
        </Typography>
      </CardContent>
      <CardActions>
        <IconButton aria-label="edit" color="primary">
          {editButton}
        </IconButton>
        <IconButton aria-label="delete" color="secondary">
          {deleteButton}
        </IconButton>
      </CardActions>
    </Card>
  );
}
