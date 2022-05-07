import configService from "./config.service";

export default new class TransactionService {
    transactionURL = '/transaction'

    async getBuyersByFramerId(framerId: number) {
        const url = `${this.transactionURL}/buyers/${framerId}`

        const data = await configService.getAPI('get', url)

        switch (data.status) {
            case 200: {
                let endData = data as {timeout: number, status: number, data: any}
                return endData.data.data
            }
            default: {
                return []
            }
        }
    }

}