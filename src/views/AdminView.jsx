import { useEffect, useState } from "react"
import AdminTable from "../components/admin/AdminTable/Admintable"
import AdminForm from "../components/admin/adminform/AdminForm"

const blogsLS = JSON.parse(localStorage.getItem('blogs')) || [];

const AdminView = () => {
  const [blogs,setBlogs] = useState([blogsLS]);

  useEffect(()=>{
    localStorage.setItem('blogs',JSON.stringify(blogs));
  },[blogs])

  return (
    <>
    <h1>Panel de administración</h1>
    <hr />
<AdminForm setBlogs={setBlogs}/>
<AdminTable blogs={blogs} setBlogs={setBlogs}/>
    </>
  )
}

export default AdminView