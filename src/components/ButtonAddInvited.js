import Button from 'react-bootstrap/Button'
import React, { useState } from 'react';
import { Form } from 'react-bootstrap';
import { Modal } from 'react-bootstrap';

import styles from '../components/Almoço.module.css'

function ButtonAddInvited(){

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const [nameInvited, setNameInvited] = useState()

    function addInvited(){
        console.log('Convidado adicioando');
    }
    return (
        
        <div className={styles.btn_div2}>
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Adicionar convidado</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Label>Nome e sobrenome</Form.Label>
                            <Form.Control type='text' id="nameInvited" placeholder="example: Gabriel Zeitoum" autoFocus onChange={(e) => setNameInvited(e.target.value)} />
                        </Form.Group>
                    </Form>
                </Modal.Body>
                <Modal.Footer onSubmit={addInvited}>
                    <Button variant="secondary" onClick={handleClose}> Voltar </Button>
                    <Button variant="primary" type='submit' onClick={handleClose}> Enviar </Button>
                </Modal.Footer>
            </Modal>
          <Button size="sm" variant="primary" bsPrefix="btn" onClick={handleShow}>Adicionar convidado</Button>
        </div>
    )
}

export default ButtonAddInvited