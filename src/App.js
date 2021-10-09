// Load Required components
import Heading from './modules/header/header';
import FooterHome from './modules/footer/footerHome';
import Home from './modules/mainCcontainer/home';
import CopyRightComponent from './modules/footer/copyRight';

// Load Material  components
import Grid from '@material-ui/core/Grid';

function App() {
 
  return (
    <Grid>
      <Heading />
      <Home />
      <FooterHome />
      <CopyRightComponent />
    </Grid>
  );
}

export default App;
