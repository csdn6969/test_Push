import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import moment from "moment/moment"
import GetImageProduct from "../getImageProduct";
import { getComment, getProduct, createComment } from "../services/Api";
const ProductDetails = ({ item }) => {
    const params = useParams();
    const id = params.id;
    const [product, setProduct] = React.useState({});
    const [comments, setComments] = React.useState([])
    const [data, setData] = React.useState({});
    const getComments = (id) => {
        getComment(id, {}).then(({ data }) => {
            return setComments(data.data.docs)
        })
    }
    useEffect(() => {
        getProduct(id, {}).then(({ data }) => {
            console.log(id)
            return setProduct(data.data)
        })
        getComments(id)
    }, [id])
    const onChangeInput = (e) => {
        const { name, value } = e.target;
        return setData({ ...data, [name]: value })
    }
    const onSubmitComments = (e) => {
        e.preventDefault()
        createComment(id, data, {}).then(({ data }) => {
            if (data.status === "success") {
                setData({})
            }
            getComment()
        })
    }

    return (
        <>
            <div>
                <div className="container">
                    <div className="row">
                    <div className="details col-xl-6 col-lg-6 col-12">
                        <div className="product">
                            <div className="large">
                                <img src={GetImageProduct(product?.image)} />
                            </div>
                        </div>
                        <div className="text-details">
                            <p> Nhập trực tiếp từ các nhà phân phối Apple chính hãng tại Việt Nam: Synnex FPT, Digiworld, Dầu khí (Petrosetco), Viettel.</p>
                        </div>
                        <div className="text-details">
                            <p> Bảo hành tại trung tâm Apple VN</p>
                        </div>
                        <div className="sales-policy">
                            <div className="row">
                                <div className="col-xl-6 col-lg-6 col-12" style={{ display: 'flex' }}>
                                    <p>Bảo hành 12 tháng chính hãng Apple tại Việt Nam</p>
                                </div>
                                <div className="col-xl-6 col-lg-6 col-12" style={{ display: 'flex' }}>
                                    <p>Giao hàng miễn phí nội thành TP.HCM</p>
                                </div>
                                <div className="col-xl-6 col-lg-6 col-12" style={{ display: 'flex' }}>
                                    <p>Bộ sản phẩm: Hộp, Sách hướng dẫn, Cây lấy sim, Cáp Lightning - Type C
                                    </p>
                                </div>
                                <div className="col-xl-6 col-lg-6 col-12" style={{ display: 'flex' }}>
                                    <p>Trả trước 30% qua Home Credit. Thủ tục chỉ cần CMND + GPLX;
                                        Hoặc trả góp lãi suất 0% qua thẻ tín dụng Visa, Master, JCB.</p>
                                </div>
                            </div>
                        </div>
                        </div>
                        <div className="buy-addCart col-xl-6 col-lg-6 col-12">
        <div className="name-product-details">
          <h2>iphone 14 pro max 128gb chinh hang</h2>
          <div>Trả góp 0%</div>
        </div>
        <div className="price-product-details">
          <div className="real-price">
            <h3>30.000.000đ</h3>
            <div><span>-10%</span><del>3.000.000đ</del></div>
          </div>
          <div className="installment-price">
            <div>Chỉ cần trả trước:</div>
            <p>9.000.000đ</p>
          </div>
        </div>
        <div className="option-price">
          <button className="option-item">128gb <br /> 27.000.000d</button>
          <button className="option-item">128gb <br /> 27.000.000d</button>
          <button className="option-item">128gb <br /> 27.000.000d</button>
          <button className="option-item">128gb <br /> 27.000.000d</button>
        </div>
        <div className="details-promotion">
          <div className="promotion-title">Khuyến mãi</div>
          <div className="promotion-item"><span><i className="fa-solid fa-check" /></span>Tặng thêm PMH 150.000đ mua Bộ Quà Tặng VIP.</div>
          <div className="promotion-item"><span><i className="fa-solid fa-check" /></span>Giảm thêm 1 triệu khi thu cũ lên đời</div>
          <div className="promotion-item"><span><i className="fa-solid fa-check" /></span>Trả góp 0% lãi suất qua thẻ tín dụng</div>
          <div className="promotion-item"><span><i className="fa-solid fa-check" /></span>[Từ 01 - 31/12] Tặng thêm PMH 200.000đ</div>
          <div className="promotion-item"><span><i className="fa-solid fa-check" /></span>[Từ 26/12 - 18/01] Cơ hội trúng chỉ Vàng 9999 khi mua điện thoại</div>
          <div className="promotion-item"><span><i className="fa-solid fa-check" /></span>[Từ nay đến 31/12] Ưu đãi cực sốc khi mua phiên bản Deep Purple (Tím):
            Thu cũ lên đời chỉ 30.590.000đ *Số lượng có hạn
            Tặng thêm Bảo hành 2 năm chính hãng Apple</div>
        </div>
        <div className="buy-now"><button>Mua ngay</button></div>
        <div className="add-to-card"><button>Thêm vào giỏ hàng</button></div>
      </div>
                    </div>
                    <div id="product-body" className="row">
                        <div className="col-lg-12 col-md-12 col-sm-12">
                            <h3>Đánh giá về iPhone X 64GB</h3>
                            <p>
                                Màn hình OLED có hỗ trợ HDR là một sự nâng cấp mới của Apple thay vì màn hình LCD với IPS được tìm thấy trên iPhone 8 và iPhone 8 Plus đem đến tỉ lệ tương phản cao hơn đáng kể là 1.000.000: 1, so với 1.300: 1 ( iPhone 8 Plus ) và 1.400: 1 ( iPhone 8 ).
                            </p>
                            <p>
                                Màn hình OLED mà Apple đang gọi màn hình Super Retina HD có thể hiển thị tông màu đen sâu hơn. Điều này được thực hiện bằng cách tắt các điểm ảnh được hiển thị màu đen còn màn hình LCD thông thường, những điểm ảnh đó được giữ lại. Không những thế, màn hình OLED có thể tiết kiệm pin đáng kể.
                            </p>
                            <p>
                                Cả ba mẫu iPhone mới đều có camera sau 12MP và 7MP cho camera trước, nhưng chỉ iPhone X và iPhone 8 Plus có thêm một cảm biến cho camera sau. Camera kép trên máy như thường lệ: một góc rộng và một tele. Vậy Apple đã tích hợp những gì vào camera của iPhone X?
                            </p>
                            <p>
                                Chống rung quang học (OIS) là một trong những tính năng được nhiều hãng điện thoại trên thế giới áp dụng. Đối với iPhone X, hãng tích hợp chống rung này cho cả hai camera, không như IPhone 8 Plus chỉ có OIS trên camera góc rộng nên camera tele vẫn rung và chất lượng bức hình không đảm bảo.
                            </p>
                            <p>
                                Thứ hai, ống kính tele của iPhone 8 Plus có khẩu độ f / 2.8, trong khi iPhone X có ống kính tele f / 2.2, tạo ra một đường cong nhẹ và có thể chụp thiếu sáng tốt hơn với ống kính tele trên iPhone X.
                            </p>
                            <p>
                                Portrait Mode là tính năng chụp ảnh xóa phông trước đây chỉ có với camera sau của iPhone 7 Plus, hiện được tích hợp trên cả iPhone 8 Plus và iPhone X. Tuy nhiên, nhờ sức mạnh của cảm biến trên mặt trước của iPhone X, Camera TrueDepth cũng có thể chụp với Potrait mode.
                            </p>
                        </div>
                    </div>
                    {/*	Comment	*/}
                    <div id="comment" className="row">
                        <div className="col-lg-12 col-md-12 col-sm-12">
                            <h3>Bình luận sản phẩm</h3>
                            <form method="post">
                                <div className="form-group">
                                    <label>Tên:</label>
                                    <input
                                        onChange={onChangeInput}
                                        name="name"
                                        required type="text"
                                        className="form-control"
                                        value={data.name || ""} />
                                </div>
                                <div className="form-group">
                                    <label>Email:</label>
                                    <input
                                        onChange={onChangeInput}
                                        name="email"
                                        required type="email"
                                        className="form-control" id="pwd"
                                        value={data.email || ""} />
                                </div>
                                <div className="form-group">
                                    <label>Nội dung:</label>
                                    <textarea
                                        onChange={onChangeInput}
                                        name="content"
                                        required rows={8}
                                        className="form-control"
                                        value={data.content || ""} />
                                </div>
                                <button onClick={onSubmitComments} type="submit" name="sbm" className="btn btn-primary">Gửi</button>
                            </form>
                        </div>
                    </div>
                    {/*	End Comment	*/}
                    {/*	Comments List	*/}
                    <div id="comments-list" className="row">
                        <div className="col-lg-12 col-md-12 col-sm-12">
                            <div className="comment-item">
                                <ul>
                                    {
                                        comments.map((value, index) => {
                                            const m = moment(value.createdAt)
                                            return (
                                                <ul>
                                                    <li>{value.name}</li>
                                                    <li>{m.fromNow()}</li>
                                                    <li>{value.content}</li>
                                                </ul>
                                            )
                                        })
                                    }
                                </ul>
                            </div>
                        </div>
                    </div>
                    {/*	End Comments List	*/}
                </div>
                {/*	End Product	*/}
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
        </>

    )
}
export default ProductDetails