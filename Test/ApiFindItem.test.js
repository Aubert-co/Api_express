const {expect} = require('chai');
const request = require('supertest');
const server = require('../server');

var app;

describe("api post/apifinditem",()=>{
    beforeAll(async()=>{
        app = await server.listen(8083)
    })
    test("test cases errors",async()=>{
        test("should return a error when send undefined values",async()=>{
            const response = await request(app)
            .post('/apifinditem')
            .set({'Content-type':'application/json'})
            .send({id:'',name:'',price:''})

            expect(response.status).to.be.equal(401)
            expect(response.body.msg).to.be.equal('id or name or price needs to be a value')
        })
        test("should return a error when send id equal string",async()=>{
            const response = await request(app)
            .post('/apifinditem')
            .set({'Content-type':'application/json'})
            .send({id:'eqw',name:'test',price:3.1})

            expect(response.status).to.be.equal(401)
            expect(response.body.msg).to.be.equal('id and price needs to be a number and name need to be a string')
        })
        test("should return a error when send name equal number",async()=>{
            const response = await request(app)
            .post('/apifinditem')
            .set({'Content-type':'application/json'})
            .send({id:43,name:32,price:3.1})

            expect(response.status).to.be.equal(401)
            expect(response.body.msg).to.be.equal('id and price needs to be a number and name need to be a string')
        })
        test("should return a error when send price equal string",async()=>{
            const response = await request(app)
            .post('/apifinditem')
            .set({'Content-type':'application/json'})
            .send({id:43,name:32,price:'3.1'})

            expect(response.status).to.be.equal(401)
            expect(response.body.msg).to.be.equal('id and price needs to be a number and name need to be a string')
        })
    })

    test("test cases sucessful",async()=>{
        test("should return a sucess and a data when send  correct values",async()=>{
          
            const response = await request(app)
            .post('/apifinditem')
            .set({'Content-type':'application/json'})
            .send({id:43,name:32,price:3.1})

            expect(response.status).to.be.equal(200)
            expect(response.body.msg).to.be.equal('successful')
            expect(response.body.data).to.be.an('array')
        })
    })
})