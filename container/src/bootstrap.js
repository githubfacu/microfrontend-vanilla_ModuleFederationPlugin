import { mount as mountProducts } from 'products/ProductsIndex'
import { mount as mountCart } from 'cart/CartShow'

console.log('Container');
mountCart(document.getElementById('cart-entry'))
mountProducts(document.getElementById('products-entry'))
