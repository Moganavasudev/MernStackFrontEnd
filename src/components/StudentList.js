import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { getStudent } from "../api";
import { deleteStudent } from '../api';
function StudentList(){
    const [students, setStudents] = useState([]);
    const loadStudents = () => {
        getStudent().then(res => setStudents(res.data))
    }
    const removeStudent = async (rollno) => {
        await deleteStudent(rollno);
        loadStudents();
    }
    useEffect(() => {
        loadStudents();
    }, []);
    return(
        <>
        <h2>Student List</h2>
        <Link to="/add">Add Student</Link><br></br><br></br>
        <table border={4}>
            <thead>
            <tr>
                <th>Roll No</th>
                <th>Name</th>
                <th>Email</th>
                <th>Action</th>
            </tr>
            </thead>
            <tbody>
            {
                students.map(s =>(
                    <tr key={s.rollno}>
                        <td>{s.rollno}</td>
                        <td>{s.name}</td>
                        <td>{s.email}</td>
                        <td>
                            <Link to={`/edit/${s.rollno}`}>Edit</Link>
                            <button onClick={() => removeStudent(s.rollno)}>Delete</button>
                        </td>
                    </tr>
                ))
            }
            </tbody>
        </table>
        </>
    )
}

export default StudentList;