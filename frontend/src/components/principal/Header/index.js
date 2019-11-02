import React from 'react';
import './styles.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';


const Header = () => (
   <header id="main-header">
      <Container>
         <Form>
            <Row>
               <Col md={6} id="logo-love-pet">
                     <h2>Lovepet</h2>          
               </Col>
               <Col md={6}>
                  <Row>
                     <Col md={5}>
                        <div>
                           <Form.Group controlId="formBasicEmail">
                              <Form.Label>Email</Form.Label>
                                 <Form.Control type="email" placeholder="Digite seu Email" />
                           </Form.Group>
                        </div>
                     </Col>
                     <Col md={5}>
                        <div>
                           <Form.Group controlId="formBasicPassword">
                              <Form.Label>Senha</Form.Label>
                              <Form.Control type="password" placeholder="Digite sua Senha" />
                           </Form.Group>
                        </div>
                     </Col>
                     <Col md={2}>
                        <div>
                           <Button id="entrar-principal" variant="primary" type="submit">
                              Entrar
                           </Button>
                        </div>
                     </Col>
                  </Row>
                  
               </Col>
            </Row>
         </Form>
      </Container>
   </header>
)
export default Header;