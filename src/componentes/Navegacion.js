import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import '../Estilos/EstiloNavegacion.css';

function Navegacion() {
  return (
    <div className="container">
      <Navbar className="justify-content-center" expand="md" fixed="top" >
        <Container fluid>
          <Navbar.Brand href="#" style={{ color:'#ffffff' }}>DIVERSIONES FANTASY</Navbar.Brand>
          <Navbar.Toggle aria-controls="navbar" style={{ opacity: .3, 'background-color':'#ffffff' }} />
          <Navbar.Collapse id="navbar">
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: '100px' }}>

              <Nav.Link href="#action1" style={{ color:'#ffffff' }}>Sobre Nosotros</Nav.Link>
              <Nav.Link href="#action2" style={{ color:'#ffffff' }}>Servicios</Nav.Link>
              <Nav.Link href="#action2" style={{ color:'#ffffff' }}>Contacto</Nav.Link>
              <Nav.Link href="#action2" className="nav-item cta-btn">Contacto1</Nav.Link>

            </Nav>

          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}

export default Navegacion;
