import React, { useState } from 'react'
import style from '../login/Login.module.css'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

const Register = () => {

    const navigate = useNavigate()

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: '',
        role: 'registered'
      })

      const handleInputChange = (e) => {
        const { name, value } = e.target
        setFormData({
          ...formData,
          [name] : value
        })
      }

      const handleSubmit = async (e) => {
        e.preventDefault()
        try {
            await axios.post(`${process.env.REACT_APP_PATH}/register`)
            navigate('/')
        }
        catch(error) {
            console.log(error.message)
        }
      }

  return (
    <main className={style.loginContainer}>
      <h1 className={style.loginTitle}>Create An Article</h1>
      <form className={style.loginForm} onSubmit={handleSubmit}>
        <div className={`${style.formFloating} ${style.firstInput}`}>
          <input type='text' className={style.formInput} name='name' id='name' placeholder='' value={formData.name} onChange={handleInputChange} />
          <label for='name' className={style.formInputLabel}>Name</label>
        </div>
        <div className={style.formFloating}>
          <input type='text' className={style.formInput} name='email' id='email' placeholder='' value={formData.email} onChange={handleInputChange} />
          <label for='email' className={style.formInputLabel}>E-mail</label>
        </div>
        <div className={style.formFloating}>
          <input type='password' className={style.formInput} name='password' id='password' placeholder='' value={formData.password} onChange={handleInputChange} />
          <label for='password' className={style.formInputLabel}>Password</label>
        </div>
        <div className={style.formFloating}>
          <select className={style.formInput} name='role' id='role' placeholder='' value={formData.role} onChange={handleInputChange}>
            <option value='admin'>Admin</option>
            <option value='registered'>User</option>
          </select>
          <label for='role' className={style.formInputLabel}>Role</label>
        </div>
        <button className={style.formButton} type='submit'>Register</button>
      </form>
    </main>
  )
}

export default Register