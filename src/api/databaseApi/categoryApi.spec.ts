import { CategoryApi } from './categoryApi'


describe('category api', () => {
    const api = new CategoryApi()

    it('should fetch categoryies', async () => {
        await api.getDataCollection()
    })


})