const {expect} = require('chai');
const request = require('supertest');
const server = require('../server');

var app;


describe("api /apiadditem",()=>{
    beforeAll(async()=>{
        app = await server.listen(8081)
    })
    describe("test cases errors ",()=>{
        test("should return a error when send undefined name",async()=>{
            const response = await request(app)
            .post('/apiadditem')
            .set({'Content-Type':'application/json'})
            .send({name:'',price:2.32})
            
            expect(response.body.msg).to.be.equal('invalid datas')
            expect(response.status).to.be.equal(401)
        })
        test("should return a error when send a undefined price",async()=>{
            const response = await request(app)
            .post('/apiadditem')
            .set({'Content-Type':'application/json'})
            .send({name:'mango',price:'e2.32'})

            expect(response.body.msg).to.be.equal('invalid datas')
            expect(response.status).to.be.equal(401)
            
        })

        test("should return a error when send a invalid name and a invalid price",async()=>{
            const response = await request(app)
            .post('/apiadditem')
            .set({'Content-Type':'application/json'})
            .send({name:5,price:'e'})

            expect(response.body.msg).to.be.equal('invalid datas')
            expect(response.status).to.be.equal(401)
        })


    })
    define("test cases sucessfull",()=>{
        test("should return sucess when send correct values",async()=>{
            const response = await request(app)
            .post('/apiadditem')
            .set({'Content-Type':'application/json'})
            .send({name:'mango',price:2.56})

            expect(response.body.msg).to.be.equal('sucessful')
            expect(response.status).to.be.equal(200)
        })
    })
})