import Image from 'next/image'
import React from 'react'
import styles from "../styles/ProductCard.module.css"

const ProductCard = () => {
  return (
    <div className= {styles.container}>
              <Image src="/img/brownies.jpg" alt="" width="500" height="500" />
      <h1 className={styles.title}>Brownies Chips</h1>
      <span className={styles.price}>RM 20.05</span>
      <p className={styles.desc}>
      Do you like brownie? Do you like crunchy food for you to munch on? We've got just the right thing for you!
      </p>
    </div>
  )
}

export default ProductCard