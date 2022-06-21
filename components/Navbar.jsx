import Image from 'next/image'
import React from 'react'
import styles from "../styles/Navbar.module.css"

const Navbar = () => {
  return (
    <div className= {styles.container}>
      <div className = {styles.item}>
        <div className = {styles.callButton}>
          <Image src ="/img/phone.png" alt ="" width = "32" height ="32"/>
        </div>
        <div className = {styles.texts}> 
          <div className= {styles.text}>Order Now !</div>   
          <div className= {styles.text}>012 345 789</div>         
        </div>
      </div>
        <div className = {styles.item}>
          <ul className = {styles.list}>
          <li className = {styles.listItem}>Homepage</li>
          <li className = {styles.listItem}>Menu</li>
          <Image src ="/img/logo.png" alt ="" width = "200px" height = "200px"/>
          <li className = {styles.listItem}>Event</li>
          <li className = {styles.listItem}>Contact</li>
          
          </ul>       

 </div>
        <div className = {styles.item}>
          <div className= {styles.cart}>
          <Image src ="/img/cart.png" alt ="" width = "30px" height = "30px"/>
          <div className= {styles.counter}>5</div>
          </div>
          </div>       
    </div>
  )
}

export default Navbar