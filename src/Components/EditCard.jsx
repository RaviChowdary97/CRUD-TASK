import { useEffect, useState } from "react";
import Button from "@mui/material/Button";
import { useNavigate, useParams } from "react-router-dom";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import axios from "axios";
export const EditCard = () => {
  const [movie, setMovie] = useState(null);
  const { id } = useParams();
  useEffect(() => {
    getSingleCard();
  }, []);

  const getSingleCard = async () => {
    try {
      const response = await axios.get(
        `https://jsonplaceholder.typicode.com/users/${id}`
      );
      setMovie(response.data);
    } catch (error) {
      console.error("Failed to fetch card:", error);
    }
  };

  return <>{movie ? <EditMovieForm movie={movie} /> : "Loading...."}</>;
};

const EditMovieForm = ({ movie }) => {
  const navigate = useNavigate();
  const [name, setName] = useState(movie.name);
  const [email, setEmail] = useState(movie.email);
  const [phone, setPhone] = useState(movie.phone);
  const [website, setWebsite] = useState(movie.website);
  const [username, setUsername] = useState(movie.username);
  const [city, setCity] = useState(movie.address?.city);
  const [street, setStreet] = useState(movie.address?.street);
  const [suite, setSuite] = useState(movie.address?.suite);
  const [zipcode, setZipcode] = useState(movie.address?.zipcode);
  const [lat, setLat] = useState(movie.address?.geo?.lat);
  const [lng, setLng] = useState(movie.address?.geo?.lng);
  const [cname, setCname] = useState(movie.company?.name);
  const [bs, setBs] = useState(movie.company?.bs);
  const [cp, setCp] = useState(movie.company?.catchPhrase);
  // update on baisis id
  const updateMovie = (id) => {
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
    updateMoviesdata(movie, id);
  };

  const updateMoviesdata = async (movie, id) => {
    try {
      const response = await axios({
        method: "PUT",
        url: `https://jsonplaceholder.typicode.com/users/${id}`,
        data: movie,
        headers: {
          "Content-Type": "application/json",
        },
      });
      console.log("Update Success:", response.data);
      alert("Card updated successfully!");
      navigate(-1); // or navigate to a specific path
    } catch (error) {
      console.error("Failed to update card:", error);
      alert("Failed to update card.");
    }
  };
  return (
    <>
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
          onClick={() => updateMovie(movie.id)}
        >
          Update Movie
        </Button>

        <Button
          sx={{
            width: "10%",
          }}
          variant="contained"
          onClick={() => navigate(-1)}
        >
          Back
        </Button>
      </Box>
    </>
  );
};
