const {expect} = require('chai');
const request = require('supertest');
const server = require('../server');

var app;

describe("api post/apiupdate",()=>{
    beforeAll(async()=>{
        app = await server.listen(8083)
    })

    test("tests cases errors",async()=>{
        test("should return a error when send undefined id",async()=>{
            const response = await request(app)
            .post('/apiupdate')
            .set({'Content-Type':'application/json'})
            .send({id:'',name:'mango',price:3.32})

            expect(response.body.msg).to.be.equal('id not be null')
            expect(response.status).to.be.equal(401)
        })
        test("should return a error when send undefined price",async()=>{
            const response = await request(app)
            .post('/apiupdate')
            .set({'Content-Type':'application/json'})
            .send({id:32,name:'mango',price:''})

            expect(response.body.msg).to.be.equal('name or price needs a value')
            expect(response.status).to.be.equal(401)
        })
        test("should return a error when send undefined name",async()=>{
            const response = await request(app)
            .post('/apiupdate')
            .set({'Content-Type':'application/json'})
            .send({id:32,name:'',price:3.32})

            expect(response.body.msg).to.be.equal('name or price needs a value')
            expect(response.status).to.be.equal(401)
        })
    })
})