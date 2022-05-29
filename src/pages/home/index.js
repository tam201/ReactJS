import { useEffect, useState } from 'react';
import listProducts from '../../dataProduct.json'

function Home() {
    const [products, setProducts] = useState([]);
   
    useEffect(() => {
        setProducts(listProducts)
    }, []);

    const getProductInfo = async (productId) => {
        return listProducts[productId]
    };

    const handleAddCart = async (productId) => {
        let productinfo = await getProductInfo(productId);
        let data ={
                receiverName: 'Tam Hoang',
                totalMoney:  productinfo.price,
                productId: productinfo,
                image: productinfo.avatar,
                quantity: 1,
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
            {/* Header*/}
            <header className="bg-dark py-5">
                <div className="container px-4 px-lg-5 my-5">
                    <div className="text-center text-white">
                        <h1 className="display-4 fw-bolder">Shop Giay</h1>
                        <p className="lead fw-normal text-white-50 mb-0">With this shop hompeage template</p>
                    </div>
                </div>
            </header>
            <section className="py-5">
                <div className="container px-4 px-lg-5 mt-5">
                    <div className="row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-4 justify-content-center">
                        {products &&
                            products.map((product, index) => (
                                <div key={product.id} className="col mb-5">
                                    {/* <div className="card h-100"> */}
                                    {/* Product image*/}
                                    <img className="card-img-top" src={product.avatar} alt="..." />
                                    {/* Product details*/}
                                    <div className="card-body p-4">
                                        <div className="text-center">
                                            {/* Product name*/}
                                            <h5 className="fw-bolder">{product.name}</h5>
                                            {/* Product price*/}
                                            {product.price} đ
                                        </div>
                                    </div>
                                    {/* Product actions*/}
                                    <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
                                        <div className="text-center">
                                            <a className="btn btn-outline-dark mt-auto" href={'/detail/' + index}>
                                                View options
                                            </a>
                                            <button
                                                className="btn btn-outline-dark mt-auto"
                                                onClick={() => handleAddCart(index)}
                                            >
                                                Add to cart
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            ))}
                    </div>
                </div>
            </section>
        </div>
    );
}

export default Home;
