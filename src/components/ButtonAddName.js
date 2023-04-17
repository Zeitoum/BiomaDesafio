import Button from 'react-bootstrap/Button'
import React, { useState } from 'react';
import styles from '../components/Almoço.module.css'
import { Modal } from 'react-bootstrap';
// import { Form } from 'react-bootstrap';

function ButtonAddName(){

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return(
        <div className={styles.btn_div}>
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Confirmação de almoço</Modal.Title>
                </Modal.Header>
                <Modal.Body>Tem certeza?</Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Voltar
                    </Button>
                    <Button variant="primary" onClick={handleClose}>
                        Sim
                    </Button>
                </Modal.Footer>
            </Modal>
          <Button className={styles.btn} size='sm' variant='success'  bsPrefix='btn' onClick={handleShow} >Adicionar seu nome</Button>
        </div>
    )
}

export default ButtonAddName