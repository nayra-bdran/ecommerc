import Breadcrumb from '@/app/Component/Breadcrumb/Breadcrumb';
import ItemProduct from '@/app/Component/Products/ItemProduct';
import ProductDetails from '@/app/Component/Products/ProductDetails/ProductDetails';
import React from 'react'

function Detail() {
 
  return (
    <div>
 <Breadcrumb />
 <ItemProduct />
<ProductDetails/>
    </div>
  )
}

export default Detail;