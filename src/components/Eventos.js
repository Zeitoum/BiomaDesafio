import styles from '../components/Eventos.module.css'
import EventsItems from './EventsItems';
import Carousel from 'react-bootstrap/Carousel';
import Img from '../img/teste2.jpg'
// import Img2 from '../img/teste1.jpg'
// import Img3 from '../img/857335.jpg'


function Eventos() {
    
    return(
        <div className={styles.events_page}>
            <div className={styles.left_side}>
                <h2>Eventos</h2>
                <h6>*Confirmar presença em eventos até 30 minutos antes do mesmo</h6>
                <div className={styles.events}>
                    <hr></hr>
                    <EventsItems/>

                </div>
            </div>
            <div className={styles.right_side}>
                <div className={styles.carrosel}>
                    <Carousel>
                        <Carousel.Item interval={1000}>
                            <img className="d-block w-100" src={Img} alt="First slide"/>
                            <Carousel.Caption>
                                <h3>Evento Terça insana</h3>
                                <p>Nesse evento ficamos geral bebado</p>
                            </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item interval={500}>
                            <img className="d-block w-100" src={Img} alt="Second slide"/>
                            <Carousel.Caption>
                                <h3>Evento quarta maluca</h3>
                                <p>Competição de comida</p>
                            </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item>
                            <img className="d-block w-100" src={Img} alt="Third slide"/>
                            <Carousel.Caption>
                                <h3>Evento quinta da maldade</h3>
                                <p> Rolezin com os pessoas da empresa</p>
                            </Carousel.Caption>
                        </Carousel.Item>
                    </Carousel>
                </div>
            </div>
        </div>
    )
}

export default Eventos;