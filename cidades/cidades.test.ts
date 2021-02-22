import * as jest from 'jest'
import * as supertest from 'supertest'
const address = 'http://localhost:3000'
test('get /cidades', () => {
  supertest(address)
    .get('/cidades')
    .then(response => {
      expect(response.status).toBe(200)
    }).catch(fail)
})

test('post /cidades', () => {
  supertest(address)
    .post('/cidades')
    .send({
        "estado": "teste estado",
        "nome": "teste cidade"
    })
    .then(response => {
      expect(response.status).toBe(200)
      expect(response.body._id).toBeDefined()
    }).catch(fail)
})

test('get /cidades/aaaaaa - not found', () => {
  supertest(address)
    .get('/cidades/aaaa')
    .then(response => {
      expect(response.status).toBe(500)
    }).catch(fail)
})

test('patch /cidades/:id ', () => {
    supertest(address)
    .post('/cidades')
    .send({
        "estado": "teste estado",
        "nome": "teste cidade"
    })
      .then(response => supertest(address)
        .patch(`/cidades/${response.body._id}`)
        .send({"nome": "teste cidade patch"}))
      .then(response => {
          expect(response.status).toBe(200)
          expect(response.body._id).toBeDefined()
      })
      .catch(fail)
})


