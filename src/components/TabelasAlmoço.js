import {Table} from "react-bootstrap"

function TabelasAlmoço(props){
    return (
        <Table striped bordered hover>
        <thead>
          <tr>
            <th>{props.dia}</th>
            <th>{props.guarnição}</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Gabriel</td>
          </tr>
        </tbody>
        </Table>
    )
}

export default TabelasAlmoço