import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Table, Button} from "react-bootstrap";
import { readyForManage } from "./manageUsers/manageAction";
import { useHistory } from "react-router";

export const Users = () => {
    const { users } = useSelector((state) => state.allUsers) 
    const dispatch = useDispatch()
    const history = useHistory()

    let count = 1

    const handleClick = (id) => {
        dispatch(readyForManage(id));   
        history.push(`/popup/:${id}`)
    }
    return(
        <>

     <Table striped bordered hover size="sm" style={{width:'80%', margin:0}}>
            <thead>
                <tr>
                <th>#</th>
                <th>Name</th>
                <th>Email</th>
                <th>Phone</th>
                <th>isVerified</th>
                <th>Role</th>
                <th>Gender</th>
                <th>Mange</th>
                </tr>
            </thead>
            {users.length?
            users.map((elem) => (
                <tbody>
                    <tr>
                        <td>{count++}</td>
                        <td>{elem.name} </td>
                        <td>{elem.email}</td>
                        <td>0{elem.phone}</td>
                        <td>{`${elem.isVerified}`}</td>
                        <td>{elem.role}</td>
                        <td>{elem.gender}</td>
                        <td><Button variant="outline-secondary" style={{width:'100%'}} onClick={()=>handleClick(elem._id)}>Edit</Button></td>
                    </tr>
                </tbody>
            )):
            <tr>
            <td colSpan="4" className="text-center">
              No Users show{" "}
            </td>
          </tr>
             }
        </Table>         
        </>
    )
}