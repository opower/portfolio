import React from 'react';
import './App.css';
import image from './assets/b3.png'
import img from './assets/logo1.png'
import NavMenu from './components/NavMenu'
import Container from '@material-ui/core/Container'
import About from './components/About'
import Projects from './components/Projects';

function App() {

  const styles = {
    background:{
      background: `url(${image})`,
      height: '100vh',
      width:'100%',
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat',
      backgroundSize: 'cover',
    },
  }
  return (
    <>
      <div style={styles.background}>
        <NavMenu/>
        <Container>
          <div className='center'>
            <img src={img} alt='logo'/>
            <h1>WEB DEVELOPER</h1>
          </div>
        </Container>
      </div>
      <Container>
        <About/>
      </Container>
      <Container>
        <Projects/>
      </Container>
    </>
  );
}

export default App;
