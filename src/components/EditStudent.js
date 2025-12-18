import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom'
import { getStudentById } from '../api';
import { updateStudent } from '../api';
const EditStudent=()=>{
    const {id}=useParams();
    const [student, setStudent] = useState({name:"",email:""})
    const navigate=useNavigate();

    useEffect(()=>{
        getStudentById(id).then(res => setStudent(res.data))
    },[id])

    const submit = async (e)=>{
        e.preventDefault();
        await updateStudent(id, student);
        navigate("/");
    }

    return(
        <>
            <h1>Edit Student</h1>
            <form onSubmit={submit}>
                <label>Name</label>
                <input value={student.name} onChange={e=>setStudent({...student, name:e.target.value})}></input>
                <label>Email</label>
                <input value={student.email} onChange={e=>setStudent({...student, email:e.target.value})}></input>
                <button>Update</button>
            </form>
        </>
    )
}

export default EditStudent;