import { useState,useEffect } from 'react'
import axios from 'axios'
import "./styles/style.scss"


function App() {
const [product,setProduct] = useState([])

useEffect(()=>{

  axios.get("https://fakestoreapi.com/products")
  .then((response)=>{
    if(response.status === 200){
      setProduct(response.data)
    }
  })
  .catch((e)=>{
    console.log(e)
  })

 },[])

  return (
    <>
      <div>
        {
          product.map((product,key)=>{
            return(
             <div key={key} className='card'>
              <div id="product-container">
              <div id="card">

              <img src={product.image} alt={product.title} width={200}/>
              <p className='head'>{product.title}</p>
              <p>{product.category}</p>
              <p>{product.price}</p>
              <p className='description'>{product.description}</p>
              </div>

              </div>
             </div>
            )
          })
        }
      </div>
    </>
  )
}

export default App
