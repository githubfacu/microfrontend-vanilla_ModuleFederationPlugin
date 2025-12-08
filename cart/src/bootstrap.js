
import faker from 'faker'

const mount = (el) => {
    const cartText = `<div>Tienes ${faker.random.number()} en el carrito</div>`
    el.innerHTML = cartText
}

if (process.env.NODE_ENV === 'development') {
    const el = document.getElementById('cart-dev')
    if (el) {
        mount(el)
    }
}

export { mount }
