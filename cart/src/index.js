
import faker from 'faker'

const cartText = `<div>Tienes ${faker.random.number()} en el carrito</div>`

document.getElementById('cart-dev').innerHTML = cartText