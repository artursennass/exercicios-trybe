// tests/unit/controllers/driver.controller.test.js
const chai = require('chai');
const sinon = require('sinon');
const sinonChai = require('sinon-chai');

const { expect } = chai;
chai.use(sinonChai);

const { driverService } = require('../../../src/services');
const driverController = require('../../../src/controllers/driver.controller');

describe('Teste de unidade do driverController', function () {
  it('Buncando todos os motoristas cadastrados', async function () {
    // Este é o objeto de resposta (res) inicialmente é um objeto vazio que será preenchido pelo express.
    const res = {};

    // Este é o objeto de requisição (req) que contém os dados necessários para a requisição. Como a requisição é um GET não é esperado nenhum dado durante a requisição.
    const req = {};

    // Criamos um stub para a função "res.status" que retorna o objeto res quando executada
    res.status = sinon.stub().returns(res);

    // Criamos um stub para a função "res.json" que não retorna nada
    res.json = sinon.stub().returns();

    // Criamos um stub para a chamada do service "driverService.getDrivers" que irá retornar uma resposta com um array vazio
    sinon
      .stub(driverService, 'getDrivers')
      .resolves({ type: null, message: [] });

    // Realizamos a chamada para o controller simulando o recebimento de uma requisição
    await driverController.openTravel(req, res);

    // Validamos se o status code da resposta é igual a 200
    expect(res.status).to.have.been.calledWith(200);

    // Validamos se o json da resposta é igual a um array vazio
    expect(res.json).to.have.been.calledWith([]);
  });
});
