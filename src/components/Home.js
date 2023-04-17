import React, { useState } from 'react';
import styles from '../components/Home.module.css'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';


function Home() {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const [user,setUser] = useState();
    const [password, setPassword] = useState();

    function login(e){
         e.preventDefault();
        console.log('Usuário: ${user} Senha: ${password}');
    }

    return(
        <div className={styles.home}>
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Login</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form onSubmit={login}>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Label>Username</Form.Label>
                                <Form.Control
                                type="text"
                                placeholder="Henrique"
                                autoFocus
                                onChange={(e) => setUser(e.target.value)}
                             />
                        </Form.Group>
                        <Form.Group
                            className="mb-3"
                            controlId="exampleForm.ControlTextarea1"
                        >
                            <Form.Label>Password</Form.Label>
                            <Form.Control 
                            type='password'
                            autoFocus
                            onChange={(e) => setPassword(e.target.value)}
                            />
                        </Form.Group>
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                         Voltar
                    </Button>
                    <Button variant="primary" type='submit' onClick={handleClose}>
                        Login
                    </Button>
                </Modal.Footer>
            </Modal>
            <div className={styles.left_side}>
                <div className={styles.text_and_button}>
                    <h1 className={styles.title}>Bem vindo a página de almoço e eventos Bioma!</h1>
                    <Button variant="outline-primary" size='lg' onClick={handleShow}>Login</Button>
                </div>
            </div>
            <div className={styles.right_side}>
                
            </div>
        </div>
    )
}

export default Home;