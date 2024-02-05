import React, { useState, useEffect, useContext } from 'react'
import style from './AllProducts.module.css'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import { UserContext } from '../../UserContext/UserContext'

const AllProducts = () => {

    const [products, setProducts] = useState([])
    const [loading, setLoading] = useState(true)
    const navigate = useNavigate()
    const { user, checkUser } = useContext(UserContext)

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const response = await axios.get(`${process.env.REACT_APP_PATH}/product/all`)
                setProducts(response.data.Products)
                setLoading(false)
            }
            catch (error) {
                console.error(error)
                setLoading(false)
              }
        }
        fetchProducts()
    }, [])

    const handleShowButtonClick = (product, i) => {
        user && checkUser ? navigate(`/product/${i}`, { state: { product } })
            : navigate('/login')
      } 

  return (
    <main className={style.productsContainer}>
      <h1 className={style.productsTitle}>All Products</h1>
      <section className={style.productsCards}>
        {
          products.map((item) => (
            <article className={style.productCard} key={item.id}>
              <div className={style.productCardImage}>
                <img className={style.productCardImageItem} src={item.image} alt='product' />
              </div>
              <div className={style.productCardBody}>
                <h2 className={style.productCardTitle}>{item.title}</h2>
                <div className={style.productCardSubTitle}>
                  <h3 className={style.productCardPrice}>{item.price}</h3>
                  <button className={style.button} type='button' onClick={() => handleShowButtonClick(item, item.id)}>Checkout</button>
                </div>
              </div>
            </article>
          ))
        }
      </section>
    </main>
  )
}

export default AllProducts