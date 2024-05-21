import { useState } from "react";
import DetailsCard from "./DetailsCard";
import EditIcon from "@mui/icons-material/Edit";
import { useEffect } from "react";
import { IconButton } from "@mui/material";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import { useNavigate } from "react-router-dom";
import axios from "axios";
function CardList() {
  const navigate = useNavigate();
  useEffect(() => {
    getDetails();
  }, []);
  const [details, setDetails] = useState([]);
  async function getDetails() {
    try {
      const response = await axios.get(
        "https://jsonplaceholder.typicode.com/users"
      );
      console.log(response.data);
      setDetails(response.data);
    } catch (error) {
      console.error("Failed to fetch cards:", error);
    }
  }
  const deleteCard = async (id) => {
    try {
      await axios.delete(`https://jsonplaceholder.typicode.com/users/${id}`);
      console.log("Card deleted");
      getDetails(); // Refresh the list after deletion
    } catch (error) {
      console.error("Failed to delete card:", error);
    }
  };

  return (
    <div
      style={{
        display: "flex",
        flexWrap: "wrap",
        gap: "2%",
        marginTop: "20px",
        height: "350px",
      }}
    >
      {details.map((element) => (
        <DetailsCard
          key={element.id}
          {...element}
          id={element.id}
          deleteButton={
            <IconButton
              aria-label="share"
              onClick={() => {
                deleteCard(element.id);
              }}
            >
              <DeleteForeverIcon />
            </IconButton>
          }
          editButton={
            <IconButton
              aria-label="edit"
              onClick={() => {
                navigate(`/edit/${element.id}`);
              }}
            >
              <EditIcon />
            </IconButton>
          }
        />
      ))}
    </div>
  );
}

export default CardList;
