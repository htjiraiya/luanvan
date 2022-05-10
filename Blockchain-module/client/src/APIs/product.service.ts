import configService from './config.service'


class ProductService {

    private url = '/product' 
    
    async getAll() {
        const result =  await configService.getAPI('GET', `/product`)
        return result
    }

    async getById(id: number) {
        const result = await configService.getAPI('GET', `/product/${id}`)
        return result
    }

    async addProduct(product: any) {
        const result = await configService.getAPI('POST', '/product')
        return result
    }

    async getActivityDateByFarmerId(id: number) {
        const result = await configService.getAPI('GET', `/product/activity-date/${id}`)
        return result
    }

}

export default new ProductService()