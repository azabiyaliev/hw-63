import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { NavLink } from 'react-router-dom';


const NavBar = () => {
  return (
    <Box sx={{ flexGrow: 1, mb: 5 }}>
      <AppBar color="inherit" position="static">
        <Toolbar>
          <Typography color="inherit" to="/" variant="h6" component={NavLink} sx={{ flexGrow: 1, textDecoration: "none" }}>
            My blog
          </Typography>
          <Button color="inherit" to="/" component={NavLink}>Home</Button>
          <Button color="inherit" to="/posts/new-post" component={NavLink}>Add</Button>
          <Button color="inherit" to="/about" component={NavLink}>About</Button>
          <Button color="inherit" to="/contacts" component={NavLink}>Contacts</Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default NavBar;