import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import listProducts from '../../dataProduct.json'
import { getList } from '../../model/callApi';

function Detail() {
    const [quantity, setQuantity] = useState(0);
    const [product, setProduct] = useState({});
    const [avatar, setAvater] = useState('');
    const [image, setImage] = useState([]);
    const [price, setPrice] = useState(0);
    const { productId } = useParams();

    let handleQuantity = (e) => {
        setQuantity(e.target.value);
        setPrice(product.price * e.target.value);
    };

    let handleImage = (index) => {
        setAvater(image[index]);
    };

    useEffect(() => {
        let result = listProducts[productId]
        // console.log(result.image)
        setProduct(result);
        setImage(result.image);
        setAvater(result.avatar);
        setPrice(result.price);
    }, []);
    const getProductInfo = async (productId) => {
        return listProducts[productId]
    };

    const handleAddCart = async (quantity) => {
        let productinfo = await getProductInfo(productId);
        let data ={
                receiverName: 'Tam Hoang',
                totalMoney:  productinfo.price * quantity,
                productId: productinfo,
                image: productinfo.avatar,
                quantity: quantity,
                status: 'inCart',
            }
        var listCart = JSON.parse(localStorage.getItem('listCart') || '[]')
        if(listCart.length === 0){
            localStorage.setItem('listCart', JSON.stringify([data]));
        } else {
            listCart = JSON.parse(localStorage.getItem('listCart') || '[]')
            listCart = [...listCart, data]            
            localStorage.setItem('listCart', JSON.stringify(listCart));
        }
        alert("đã thêm sản phẩm vào giỏ hàng!")
    };

    return (
        <div>
            <section className="py-5">
                <div className="container px-4 px-lg-5 my-5">
                    <div className="row gx-4 gx-lg-5 align-items-center">
                        <div className="col-md-6">
                            <img className="card-img-top mb-5 mb-md-0" src={avatar} alt="..." />
                        </div>
                        <div className="col-md-6">
                            <h1 className="display-5 fw-bolder">{product.name}</h1>
                            <h3>Giá tiền</h3>
                            <div className="fs-5 mb-5">
                                <span className="text-decoration-line-through">
                                    {product.price + (product.price / 100) * 10}đ
                                </span>
                                <span> - {product.price}đ</span>
                            </div>
                            {quantity > 0 && (
                                <>
                                    <h3>Thành tiền</h3>
                                    <div className="fs-5 mb-5">
                                        <span className="text-decoration-line-through">
                                            {price + (price / 100) * 10}đ
                                        </span>
                                        <span> - {price}đ</span>
                                    </div>
                                </>
                            )}
                            <p className="lead">{product.description}</p>
                            <div className="d-flex">
                            <i className="bi-cart-fill me-1"> So luong</i>
                               <input
                                    className="form-control text-center me-3"
                                    id="inputQuantity"
                                    type="num"
                                    value={quantity}
                                    style={{ maxWidth: '3rem' }}
                                    onChange={handleQuantity}
                    
                                />
                                <button
                                    onClick={() => handleAddCart(quantity)}
                                    className="btn btn-outline-dark flex-shrink-0"
                                    type="button"
                                >
                                    <i className="bi-cart-fill me-1"></i>
                                    Add to cart
                                </button>
                            </div>
                        </div>
                        <div>
                            {image.map((rs, index) => (
                                <button
                                    key={index}
                                    className="btn btn-outline-dark flex-shrink-0"
                                    style={{ width: '100px', margin: '10px' }}
                                    onClick={() => handleImage(index)}
                                >
                                    <img src={rs} alt="" className="image-detail" width={'100%'} />
                                </button>
                            ))}
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default Detail;
