import React from 'react'
import style from './OneProduct.module.css'
import { useLocation } from 'react-router-dom'

const OneProduct = () => {

    const location = useLocation()
    const product = location.state.product
    let orderedProducts = []

    const handleClick = async (product) => {
      try {
        orderedProducts.push(product)
      }
      catch(error) {
        console.log(error.message)
    }
    }

  return (
    <main className={style.productContainer}>
      <h1 className={style.productTitle}>product</h1>
      <section className={style.productInfo}>
        <img className={style.productImage} src={product.image} alt='product' />
        <article className={style.productContent}>
          <p className={`${style.productContentParagraph} ${style.firstParagraph}`}>
            Title: <span className={style.productContentParagraphContent}>
              {product.title}
            </span>
          </p>
          <p className={style.productContentParagraph}>
            Price: <span className={style.productContentParagraphContent}>
              {product.proce}
            </span>
          </p>
          <p className={style.productContentBigParagraph}>
            Description: <span className={style.productContentParagraphContent}>
              {product.description}
            </span>
          </p>
        </article>
        <button className={style.button} type='button' onClick={() => handleClick(product)}>Add To Cart</button>
      </section>
    </main>
  )
}

export default OneProduct