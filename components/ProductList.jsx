import React from 'react'
import styles from "../styles/ProductList.module.css"
import ProductCard from './ProductCard'

const ProductList = () => {
  return (
    <div className= {styles.container}>
    <h1 className={styles.title}>WELCOME TO MINIBAKES!</h1>
      <p className={styles.desc}>
      Bake daily and fresh for you !
      </p>
        <div className = {styles.wrapper}>
            <ProductCard/>
            <ProductCard/>
            <ProductCard/>
            <ProductCard/>

        </div>

    </div>
  )
}

export default ProductList