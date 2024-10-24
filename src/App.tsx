import NavBar from './components/NavBar/NavBar.tsx';
import { Container } from '@mui/material';
import { Route, Routes } from 'react-router-dom';
import Home from './Containers/Home/Home.tsx';
import Typography from '@mui/material/Typography';
import AddForm from './Containers/AddForm/AddForm.tsx';


const App = () => (
  <>
    <header>
      <NavBar/>
    </header>
    <Container maxWidth="lg">
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/posts" element={<Home/>}/>
        <Route path="/new-post" element={<AddForm/>}/>
        <Route path="*" element={<Typography variant="h3">Not found</Typography>}/>
      </Routes>
    </Container>
  </>
);

export default App;
