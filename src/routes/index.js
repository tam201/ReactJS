import Home from '../pages/home';
import Cart from '../pages/cart';
import Detail from '../pages/detail';

const puclicRouter = [
    { path: '/', component: Home },
    { path: '/home', component: Home },
    { path: '/cart', component: Cart },
    { path: '/detail/:productId', component: Detail },
];

const privateRouter = [];

export { puclicRouter, privateRouter };
