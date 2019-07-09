    const chai = require('chai');
    const expect = chai.expect;
    const func = require("./map");
    const names = func.getNames;
    const companies = func.companies;
    const location = func.nameAndLocation;
    const employees = func.expectedEmployees;
    const assert = require('assert');
    const sinon = require('sinon')




    describe('The Map Method', function() {



        describe('getNames', function() {
            it('should return an array with the same length as the input array', function() {
                assert.equal(companies.length, names.length);
            });
            it('should return an array containing the name of every company', function() {
                expect(["Pepsi", "Nike", "Samsung", "Starbucks"]).to.eql(names);
            });
            it('should use the map method', function() {
                sinon.fake()
                expect(sinon.spy(Array.prototype, "map")).to.eql(true);
            });
        });

        describe('namesAndLocation', function() {
            it('should return an array with the same length as the input array', function() {
                assert.equal(companies.length, location.length);
            });
            it('should return an array of tuples containing each companies name and location.', function() {
                expect([
                    ['Pepsi', 'Harrison, NY'],
                    ['Nike', 'Beaverton, OR'],
                    ['Samsung', 'Seoul, S.K.'],
                    ['Starbucks', 'Seattle, WA']
                ]).to.eql(location);
            });
        });

        describe('expectedEmployees', function() {
            it('should return an array with the same length as the input array', function() {
                assert.equal(companies.length, employees.length);
            });
            it('should return an array of objects that include company name and their projected number of employees after growth.', function() {
                expect([{ 'Company Name': 'Pepsi', "Index": 0, 'Expected Employees': 277680 },
                    { 'Company Name': 'Nike', "Index": 1, 'Expected Employees': 78217 },
                    { 'Company Name': 'Samsung', "Index": 2, 'Expected Employees': 327083.4 },
                    { 'Company Name': 'Starbucks', "Index": 3, 'Expected Employees': 305550 }
                ]).to.eql(employees);
            });
        });
    });