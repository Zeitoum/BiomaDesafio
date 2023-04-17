import React  from 'react';
import {Table} from "react-bootstrap";
// import TabelasAlmoço from "./TabelasAlmoço";
// import {Button} from 'react-bootstrap';
// import Form from 'react-bootstrap/Form';
// import Modal from 'react-bootstrap/Modal';
import styles from '../components/Almoço.module.css'
import ButtonAddInvited from './ButtonAddInvited';
import ButtonAddName from './ButtonAddName';

function Almoço(){

  //   const [show, setShow] = useState(false);

  // const handleClose = () => setShow(false);
  // const handleShow = () => setShow(true);
    return(
     <div className={styles.tabelas_almoço} >
      

       
        {/* <TabelasAlmoço dia="Segunda-Feira" guarnição="Guarnição: #" />
        <TabelasAlmoço dia="Terça-Feira" guarnição="Guarnição: #" />
        <TabelasAlmoço dia="Quarta-Feira" guarnição="Guarnição: #" />
        <TabelasAlmoço dia="Quinta-Feira" guarnição="Guarnição: #" />
        <TabelasAlmoço dia="Sexta-Feira" guarnição="Guarnição: #" /> */}

        <Table striped bordered hover  >
          <thead>
            <tr>
              <th>Segunda-Feira [#]</th>
              <th>Status </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Gabriel</td>
              <td>Convidado de getName</td>
            </tr>
            <tr>
              <td>Seiji</td>
              <td>Convidado de getName</td>
            </tr>
          </tbody>
        </Table>
        <ButtonAddName/>
        <ButtonAddInvited/>

        <Table striped bordered hover>
        <thead>
          <tr>
            <th>Terça-Feira</th>
            <th>Status </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Gabriel</td>
            <td>Convidado de getName</td>
          </tr>
        </tbody>
        </Table>
        <ButtonAddName/>
        <ButtonAddInvited/>

        <Table striped bordered hover>
        <thead>
          <tr>
            <th>Quarta-Feira</th>
            <th>Status </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Gabriel</td>
            <td>Convidado de getName</td>
          </tr>
        </tbody>
        </Table>
        <ButtonAddName/>
        <ButtonAddInvited/>
        

        <Table striped bordered hover>
        <thead>
          <tr>
            <th>Quinta-Feira</th>
            <th>Status </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Gabriel</td>
            <td>Convidado de getName</td>
          </tr>
        </tbody>
        </Table>
        <ButtonAddName/>
        <ButtonAddInvited/>

        <Table striped bordered hover>
        <thead>
          <tr>
            <th>Sexta-Feira</th>
            <th>Status </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Estevan</td>
            <td>Funcionario</td>
          </tr>
          <tr>
            <td>Seiji</td>
            <td>Convidado de getName</td>
          </tr>
        </tbody>
        </Table>
        <ButtonAddName/>
        <ButtonAddInvited/>

      </div>
    )
  }



export default Almoço;