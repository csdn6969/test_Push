import React, { useEffect } from "react"
import { getProducts } from "../services/Api";
import ProductsItem from "../component/ProductItem";
const Home =()=>{
    const [products, setProducts] = React.useState([]);
    useEffect(()=>{
        getProducts({
            params: {
                limit: 8
            }
        }).then(({data})=>{
            console.log(data.data.docs)
            return setProducts(data.data.docs)
        })
    }, [])
    return(
        <>
             <div className="main-products">
                <div className="container">
                    <div className="row">
                        <h3 className="title col-12">sản phẩm bán chạy</h3>
                        <div className="products">
                            <div className="row">
                                {
                                    products.map((value, index) => {
                                        return (
                                            <ProductsItem item={value} />
                                        )
                                    })
                                }
                                </div>
                               <div className="row">
                               <div className="more-products">
                                    <button><a href>xem thêm <span className="more">+</span></a></button>
                                </div>
                               </div>
                                <div id="pagination">
                    <ul className="pagination">
                        <li className="page-item"><a className="page-link" href="#">Trang trước</a></li>
                        <li className="page-item active"><a className="page-link" href="#">1</a></li>
                        <li className="page-item"><a className="page-link" href="#">2</a></li>
                        <li className="page-item"><a className="page-link" href="#">3</a></li>
                        <li className="page-item"><a className="page-link" href="#">Trang sau</a></li>
                    </ul>
                </div>
                            </div>
                        </div>
                    </div>
                </div>
        </>
    )
}
export default Home