import React from 'react'
import style from './Unauthorized.module.css'
import { Link } from 'react-router-dom'

const Unauthorized = () => {
  return (
    <main className={style.main}>
      <div className="container">
        <div className={style.content}>
          <div className={style.text_wrapper}>
            <p className={style.denied}>Access Denied</p>
            <p className={style.text}>Unauthorized entry detected.</p>
          </div>
        </div>
        <Link to={"/"} >
          <div className={style.button_wrapper}>
            <button className={style.button}>Back To Home</button>
          </div>
        </Link>
      </div>
    </main>
  )
}

export default Unauthorized
