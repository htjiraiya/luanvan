//-------------Route root---------------//
import authRouting from './auth.routing'
import productRouting from './product.routing'
import transactionRouting from './transaction.routing'
import chartRouting from './chart.routing'

const route = (app: any)=> {
    app.use('/api/auth', authRouting)
    app.use('/api/product', productRouting)
    app.use('/api/transaction', transactionRouting)
    app.use('/api/chart', chartRouting)
}

export default route

