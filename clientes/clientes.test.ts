import * as jest from 'jest'
import * as supertest from 'supertest'
const address = 'http://localhost:3000'
test('get /clientes', () => {
  supertest(address)
    .get('/clientes')
    .then(response => {
      expect(response.status).toBe(200)
    }).catch(fail)
})

test('post /clientes', () => {
  supertest(address)
    .post('/clientes')
    .send({
        "nome": "teste cliente",
        "sexo": "masculino",
        "data_nascimento": "1997-06-15",
        "cidade": "6032efcdeba9554c5cb13de5"
    })
    .then(response => {
      expect(response.status).toBe(200)
      expect(response.body._id).toBeDefined()
    }).catch(fail)
})

test('get /clientes/aaaaaa - not found', () => {
  supertest(address)
    .get('/clientes/aaaa')
    .then(response => {
      expect(response.status).toBe(500)
    }).catch(fail)
})

test('patch /clientes/:id ', () => {
    supertest(address)
    .post('/clientes')
    .send({
        "nome": "teste cliente",
        "sexo": "masculino",
        "data_nascimento": "1997-06-15",
        "cidade": "6032efcdeba9554c5cb13de5"
    })
      .then(response => supertest(address)
        .patch(`/clientes/${response.body._id}`)
        .send({"nome": "teste cliente patch"}))
      .then(response => {
          expect(response.status).toBe(200)
          expect(response.body._id).toBeDefined()
      })
      .catch(fail)
})


