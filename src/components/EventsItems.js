import styles from '../components/Eventos.module.css'
import Button from 'react-bootstrap/Button'
import Modal from 'react-bootstrap/Modal';
import React, { useState, useEffect } from 'react';
import eventFetch from '../axios/config'


function EventsItems(props){
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const [events, setEvents] = useState([])



    useEffect(() => {
        // const getEvents = async() => {
        //     try {
        //         const response = await eventFetch.get(
                        // /event/all
        //         );
        //         console.log(response);
        //         const events = [{event_name: 'Terça Maluca', event_data: '22/12 as 15:00'}, {event_name: 'Quinta Verde', event_data: '25/12 as 19:00'}]
        //         setEvents(events)
        //     } catch (error) {
        //         console.log(error);
        //     }
        // }
        const events = [{event_name: 'Terça Maluca', event_data: '22/12 as 15:00'}, {event_name: 'Quinta Verde', event_data: '25/12 as 19:00'}, {event_name:'Quinta Insana' , event_data:'24/12 as 15:00'}]
        setEvents(events);
        // getEvents();
    },[])
    return(
        <>
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Confirmação</Modal.Title>
                </Modal.Header>
                <Modal.Body>Certeza que deseja se inscrever no evento?</Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Voltar
                    </Button>
                    <Button variant="primary" onClick={handleClose}>
                        Sim
                    </Button>
                </Modal.Footer>
            </Modal>

            {events.length === 0 ? <p> Carregando...</p> :(
            events.map((event) =>(
                
            
            <div className={styles.events_list} key={event.id}>
                <div className={styles.events_name}>
                    <h6>{event.event_name}</h6>
                </div>
                <div className={styles.events_data}>
                    <h6>{event.event_data}</h6>
                    <div className={styles.btn}>
                        <Button className={styles.btn_border_radius} size='sm' variant='primary'  bsPrefix='btn' onClick={handleShow}>+</Button>
                    </div>
                </div>
                <hr></hr>
            </div>
            ))
            )}
        </>
        
    )
}

export default EventsItems