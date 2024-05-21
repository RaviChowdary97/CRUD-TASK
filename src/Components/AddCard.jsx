import { useState } from "react";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import axios from "axios";

const AddCard = () => {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [website, setWebsite] = useState("");
  const [username, setUsername] = useState("");
  const [city, setCity] = useState("");
  const [street, setStreet] = useState("");
  const [suite, setSuite] = useState("");
  const [zipcode, setZipcode] = useState("");
  const [lat, setLat] = useState("");
  const [lng, setLng] = useState("");
  const [cname, setCname] = useState("");
  const [bs, setBs] = useState("");
  const [cp, setCp] = useState("");

  const addcard = () => {
    const movie = {
      name: name,
      email: email,
      phone: phone,
      website: website,
      username: username,
      city: city,
      street: street,
      suite: suite,
      zipcode: zipcode,
      lat: lat,
      lng: lng,
      cname: cname,
      bs: bs,
      cp: cp,
    };
    console.log(movie);
    postCard(movie);
  };

  const postCard = async (movie) => {
    try {
      const response = await axios({
        method: "POST",
        url: "https://jsonplaceholder.typicode.com/users/",
        data: movie,
        headers: {
          "Content-Type": "application/json",
        },
      });

      console.log("Success:", response.data);
      alert("Card added successfully!");
      navigate("/");
    } catch (error) {
      console.error("Error:", error);
      alert("Failed to add card.");
    }
  };

  return (
    <>
      {/* MUI Form Add Movie */}

      <Box sx={{ width: "100%" }}>
        <TextField
          sx={{
            width: "50%",
            margin: "1% 25% 1% 25%",
          }}
          id="filled-basic"
          label="Name"
          variant="filled"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <TextField
          sx={{
            width: "50%",
            margin: "1% 25% 1% 25%",
          }}
          id="filled-basic"
          label="UserName"
          variant="filled"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />

        <TextField
          sx={{
            width: "50%",
            margin: "1% 25% 1% 25%",
          }}
          id="filled-basic"
          label="Email"
          variant="filled"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <TextField
          sx={{
            width: "50%",
            margin: "1% 25% 1% 25%",
          }}
          id="filled-basic"
          label="Phone"
          variant="filled"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
        />

        <TextField
          sx={{
            width: "50%",
            margin: "1% 25% 1% 25%",
          }}
          id="filled-basic"
          label="City"
          variant="filled"
          value={city}
          onChange={(e) => setCity(e.target.value)}
        />
        <TextField
          sx={{
            width: "50%",
            margin: "1% 25% 1% 25%",
          }}
          id="filled-basic"
          label="Street"
          variant="filled"
          value={street}
          onChange={(e) => setStreet(e.target.value)}
        />
        <TextField
          sx={{
            width: "50%",
            margin: "1% 25% 1% 25%",
          }}
          id="filled-basic"
          label="ZipCode"
          variant="filled"
          value={zipcode}
          onChange={(e) => setZipcode(e.target.value)}
        />
        <TextField
          sx={{
            width: "50%",
            margin: "1% 25% 1% 25%",
          }}
          id="filled-basic"
          label="Suite"
          variant="filled"
          value={suite}
          onChange={(e) => setSuite(e.target.value)}
        />
        <TextField
          sx={{
            width: "50%",
            margin: "1% 25% 1% 25%",
          }}
          id="filled-basic"
          label="Latitude"
          variant="filled"
          value={lat}
          onChange={(e) => setLat(e.target.value)}
        />
        <TextField
          sx={{
            width: "50%",
            margin: "1% 25% 1% 25%",
          }}
          id="filled-basic"
          label="Longitude"
          variant="filled"
          value={lng}
          onChange={(e) => setLng(e.target.value)}
        />
        <TextField
          sx={{
            width: "50%",
            margin: "1% 25% 1% 25%",
          }}
          id="filled-basic"
          label="Website"
          variant="filled"
          value={website}
          onChange={(e) => setWebsite(e.target.value)}
        />
        <TextField
          sx={{
            width: "50%",
            margin: "1% 25% 1% 25%",
          }}
          id="filled-basic"
          label="Company Name"
          variant="filled"
          value={cname}
          onChange={(e) => setCname(e.target.value)}
        />
        <TextField
          sx={{
            width: "50%",
            margin: "1% 25% 1% 25%",
          }}
          id="filled-basic"
          label="bs"
          variant="filled"
          value={bs}
          onChange={(e) => setBs(e.target.value)}
        />
        <TextField
          sx={{
            width: "50%",
            margin: "1% 25% 1% 25%",
          }}
          id="filled-basic"
          label="CatchPhrase"
          variant="filled"
          value={cp}
          onChange={(e) => setCp(e.target.value)}
        />

        <Button
          sx={{
            width: "10%",
            margin: "1% 1% 1% 38%",
          }}
          variant="contained"
          onClick={() => addcard()}
        >
          Add Movie
        </Button>

        <Button
          sx={{
            width: "10%",
          }}
          variant="contained"
          onClick={() => navigate("/")}
        >
          Back
        </Button>
      </Box>
    </>
  );
};

export default AddCard;
