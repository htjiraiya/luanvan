//-------------Route root---------------//
import authRouting from './auth.routing'

const route = (app: any)=> {
    app.use('/api/auth', authRouting)
}

export default route

