import React from "react"
const Cart = ()=>{
    return(
        <>
            <div id="cart">
                <div className="container">
                   <div className="row">
                   <div className="my-cart col-lg-8 col-md-8 col-12">
                        <div className="row title-item"> 
                        <div className="col-lg-5 col-md-5 col-12">Thông tin sản phẩm</div>
                        <div className="col-lg-4 col-md-4 col-12">Số lượng sản phẩm</div>
                        <div className="col-lg-3 col-md-3 col-12">Giá</div>
                        </div>
                        <form>
                            <div className="cart-item row">
                                <div className="cart-thumb col-lg-5 col-md-5 col-12">
                                    <img src="images/img-1.jpg"/>
                                    <p>opppo sdasa</p>
                                </div>
                                <div className="cart-quality col-lg-4 col-md-4 col-12">
                                    <input className="form-control qty" type="number" />
                                </div>
                                <div className="price-product col-lg-3 col-md-3 col-12">12.000.000 <br/><a>Xóa</a></div>
                            </div>
                            <div className="cart-item row">
                                <div className="cart-thumb col-lg-5 col-md-5 col-12">
                                    <img src="images/img-1.jpg"/>
                                    <p>opppo sdasa</p>
                                </div>
                                <div className="cart-quality col-lg-4 col-md-4 col-12">
                                    <input className="form-control qty" type="number" />
                                </div>
                                <div className="price-product col-lg-3 col-md-3 col-12" onClick="as">12.000.000 <br/><a>Xóa</a></div>
                            </div>
                            <div className="update-cart row">
                            <div className="cart-thumb col-lg-5 col-md-7 col-sm-12">
                                <button id="update-cart" className="btn btn-success" type="submit" name="sbm">Cập nhật giỏ hàng</button>
                            </div>
                            <div className="cart-total col-lg-4 col-md-2 col-sm-12"><b>Tổng cộng:</b></div>
                            <div className="cart-price col-lg-3 col-md-3 col-sm-12"><b>{new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(23)}</b></div>
                        </div>
                        </form>
                    </div>
                   </div>
                   </div>
                </div>
        </>
    )
}
export default Cart