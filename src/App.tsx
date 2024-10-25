import NavBar from "./components/NavBar/NavBar.tsx";
import { Container } from "@mui/material";
import { Route, Routes } from "react-router-dom";
import Home from "./Containers/Home/Home.tsx";
import Typography from "@mui/material/Typography";
import NewPost from "./Containers/NewPost/NewPost.tsx";
import ShowPost from "./Containers/ShowPost/ShowPost.tsx";
import EditPost from "./Containers/EditPost/EditPost.tsx";
import About from "./Containers/About/About.tsx";

const App = () => (
  <>
    <header>
      <NavBar />
    </header>
    <Container maxWidth="lg">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/posts" element={<Home />} />
        <Route path="/posts/new-post" element={<NewPost />} />
        <Route path="/posts/:idPost" element={<ShowPost />} />
        <Route path="/posts/:idPost/edit" element={<EditPost />} />
        <Route path="/posts/about" element={<About />} />
        <Route
          path="*"
          element={<Typography variant="h3">Not found</Typography>}
        />
      </Routes>
    </Container>
  </>
);

export default App;
