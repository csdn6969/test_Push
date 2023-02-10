import React from "react";
import { Link } from "react-router-dom";
import GetImageProduct from "../getImageProduct";
const ProductsItem = ({item})=>{
    return(
        <div className="products-item col-xl-3 col-lg-3 col-md-4 col-sm-6 col-6">
        <div className="image-products"><Link to={`/productsDetails/${item._id}`}><img src={GetImageProduct(item.image)} alt /></Link></div>
        <p><a href="#">{item.name}</a></p>
        <span className="price"><a href="#">{new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format((item.price)-((item.price)*0.34))} <del>{new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(item.price)}</del></a></span>
        <span className="sale"><a href="#">-34%</a></span>
    </div>
    )
}
export default ProductsItem