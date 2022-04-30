//-------------Route root---------------//
import authRouting from './auth.routing'
import productRouting from './product.routing'

const route = (app: any)=> {
    app.use('/api/auth', authRouting)
    app.use('/api/product', productRouting)
}

export default route

