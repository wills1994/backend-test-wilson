const dataCustomersMock  = require('../lib/dataMock');

class ProductosServiceMock{
    async getProductosContratados() {
        return Promise.resolve(dataCustomersMock);
      }
}

module.exports = ProductosServiceMock;