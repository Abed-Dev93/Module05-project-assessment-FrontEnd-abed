import React, { useState } from 'react'
import style from './Login.module.css'
import axios from 'axios'
import { useNavigate, Link } from 'react-router-dom'

const Login = () => {

    const navigate = useNavigate()

    const [formData, setFormData] = useState({
        email: '',
        password: ''
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
            await axios.post(`${process.env.REACT_APP_PATH}/login`)
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
          <input type='text' className={style.formInput} name='email' id='email' placeholder='' value={formData.email} onChange={handleInputChange} />
          <label for='email' className={style.formInputLabel}>E-mail</label>
        </div>
        <div className={style.formFloating}>
          <input type='password' className={style.formInput} name='password' id='password' placeholder='' value={formData.password} onChange={handleInputChange} />
          <label for='password' className={style.formInputLabel}>Password</label>
        </div>
        <p>Don't have an account? <Link to='/register'>Create New One</Link></p>
        <button className={style.formButton} type='submit'>Sign in</button>
      </form>
    </main>
  )
}

export default Login