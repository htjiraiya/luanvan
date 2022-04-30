//-------------Route root---------------//
import authRouting from './auth.routing'
import productRouting from './product.routing'
import transactionRouting from './transaction.routing'

const route = (app: any)=> {
    app.use('/api/auth', authRouting)
    app.use('/api/product', productRouting)
    app.use('/api/transaction', transactionRouting)
}

export default route

