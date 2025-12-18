import axios from "axios"

const API="http://localhost:5000/api/students"
export const getStudent=()=> axios.get(`${API}/allstudents`)
export const createStudent = (data) => axios.post(API, data)
export const deleteStudent = (id) => axios.delete(`${API}/delete/${id}`)

export const getStudentById = (id) => axios.get(`${API}/allstudents/${id}`)
export const updateStudent = (id, data) => axios.put(`${API}/update/${id}`, data)