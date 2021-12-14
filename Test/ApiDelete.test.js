const {expect} = require('chai');
const request = require('supertest');
const server = require('../server');

var app;


describe("api /apidelete",()=>{
    beforeAll(async()=>{
        app = await server.listen(8082)
    })

    test("test cases errors",async()=>{
        test("should return a error when send a id undefined",async()=>{
            const response = await request(app)
            .post('/apidelete')
            .set({'Content-type':'application/json'})
            .send({id:''})

            expect(response.body.msg).to.be.equal('invalid id')
            expect(response.status).to.be.equal(401)
        })
        test("should return a error when send a id equal a string",async()=>{
            const response = await request(app)
            .post('/apidelete')
            .set({'Content-type':'application/json'})
            .send({id:'and'})

            expect(response.body.msg).to.be.equal('invalid id')
            expect(response.status).to.be.equal(401)
        })
    })

    test("test cases sucessful",async()=>{
        test("should return a error when send a id undefined",async()=>{
            const response = await request(app)
            .post('/apidelete')
            .set({'Content-type':'application/json'})
            .send({id:30})

            expect(response.body.msg).to.be.equal('successful')
            expect(response.status).to.be.equal(200)
        })
    })
})