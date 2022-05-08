import configService from './config.service'

class ProductService {
    
    async getAll() {
        const result =  await configService.getAPI('GET', '/product')
        return result.data
    }

}

export default new ProductService()