import React, { useContext } from 'react'
import { ShopContext } from '../Context/ShopContext'
import { useParams } from 'react-router-dom'
import Breadcums from '../Components/Breadcums/Breadcums'
import ProductDisplay from '../Components/ProductDisplay/ProductDisplay'
import DescriptionBox from '../Components/DescriptionBox/DescriptionBox'
import RelatedProduct from '../Components/RelatedProducts/RelatedProduct'

const Product = () => {
  const {all_product}=useContext(ShopContext)
  const {productId}=useParams()
  const product=all_product.find((e)=>e.id===Number(productId))
  return (
    <div className='product'>
     <Breadcums product={product} />
     <ProductDisplay product={product} />
     <DescriptionBox />
     <RelatedProduct />
    </div>
  )
}

export default Product