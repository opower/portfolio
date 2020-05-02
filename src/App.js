import React from 'react';
import './App.css';
import image from './assets/b3.png'
import NavMenu from './components/NavMenu'
import Container from '@material-ui/core/Container'

function App() {

  const styles = {
    background:{
      background: `url(${image})`,
      height: '100vh',
      width:'100%',
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat',
      backgroundSize: 'cover',
    }
  }
  return (
    <div style={styles.background}>
      <Container>
        <NavMenu/>
      </Container>
    </div>
  );
}

export default App;
