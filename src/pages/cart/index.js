import { useEffect, useState } from 'react';
import { getList } from '../../model/callApi';

function Cart() {
    let [carts, setCarts] = useState([]);
    const [quantity, setQuantity] = useState();

    useEffect(() => {
        var listCart = JSON.parse(localStorage.getItem('listCart') || '[]')
        setCarts(listCart);
    }, []);

    let total = 0;
    let calculateMoney = () => {
        carts.map((cart) => {
            total = total + cart.totalMoney;
        });
        return total;
    };
    total = calculateMoney();

    let quantitys = [];

    let calculateQuantity = (e) => {
        carts.map((cart) => {
            quantitys = [...quantitys, cart.quantity];
        });
        return quantitys;
    };
    quantitys = calculateQuantity();

    const HandleQuantity = (index) => {
    };

    return (
        <div className="container px-3 my-5 clearfix">
            {/* Shopping cart table */}
            {carts.length > 0 ? (
                <div className="card">
                    <div className="card-header">
                        <h2>Shopping Cart</h2>
                    </div>
                    <div className="card-body">
                        <div className="table-responsive">
                            <table className="table table-bordered m-0">
                                <thead>
                                    <tr>
                                        {/* Set columns width */}
                                        <th className="text-center py-3 px-4" style={{ minWidth: '400px' }}>
                                            Product Name &amp; Details
                                        </th>
                                        <th className="text-right py-3 px-4" style={{ width: '100px' }}>
                                            Price
                                        </th>
                                        <th className="text-center py-3 px-4" style={{ width: '120px' }}>
                                            Quantity
                                        </th>
                                        <th className="text-right py-3 px-4" style={{ width: '150px' }}>
                                            Total
                                        </th>
                                        <th className="text-right py-3 px-4" style={{ width: '150px' }}>
                                            Trang thai
                                        </th>
                                        
                                    </tr>
                                </thead>
                                <tbody>
                                    {carts.map((cart, index) => (
                                        <tr key={cart.id}>
                                            <td className="p-4">
                                                <div className="media align-items-center">
                                                    <img
                                                        src={cart.image}
                                                        className="d-block ui-w-40 ui-bordered mr-4"
                                                        alt=""
                                                    />
                                                    <div className="media-body">
                                                        <a href="#" className="d-block text-dark">
                                                            {}
                                                        </a>
                                                        <small>
                                                            <span className="text-muted">Color:</span>{' '}
                                                            {cart.productId.color} &nbsp;
                                                            <span className="text-muted">Size: </span>{' '}
                                                            {cart.productId.size} &nbsp;
                                                        </small>
                                                    </div>
                                                </div>
                                            </td>
                                            <td className="text-right font-weight-semibold align-middle p-4">
                                                <span>{cart.productId.price} đ</span>
                                            </td>
                                            <td className="align-middle p-4">
                                                <input
                                                    type="text"
                                                    id="abc"
                                                    value={quantitys[index]}
                                                    className="form-control text-center"
                                                    onChange={HandleQuantity}
                                                />
                                            </td>
                                            <td className="text-right font-weight-semibold align-middle p-4">
                                                <span>{cart.quantity * cart.productId.price} đ</span>
                                            </td>
                                            <td className="text-right font-weight-semibold align-middle p-4">
                                                <span>{cart.status}</span>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                        {/* / Shopping cart table */}

                        <div className="d-flex flex-wrap justify-content-between align-items-center pb-4">
                            <div className="mt-4"></div>
                            <div className="d-flex">
                                <div className="text-right mt-4">
                                    <label className="text-muted font-weight-normal m-0">Total price</label>
                                    <div className="text-large">
                                        <strong>{total} đ</strong>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="float-right" style={{ textAlign: 'end' }}>
                            <button type="button" className="btn btn-lg btn-default md-btn-flat mt-2 mr-3">
                                Back to shopping
                            </button>
                            <button type="button" className="btn btn-lg btn-primary mt-2">
                                Checkout
                            </button>
                        </div>
                    </div>
                </div>
            ) : (
                'Bạn chưa có sản phẩm nào trong giỏ hàng xin mời quay lại trang chủ để mua sắm !'
            )}
        </div>
    );
}

export default Cart;
