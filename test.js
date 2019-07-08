const chai = require('chai');
const expect = chai.expect;
const func = require("./map");
const sinon = require('sinon');
const names = func.getNames;
const companies = func.companies;
const location = func.nameAndLocation;
const employees = func.expectedEmployees;
let assert = require('assert');

let spy = sinon.spy(Array.prototype, "map");



describe('The Map Method', function() {
    describe('getNames', function() {
        it('should return an array with the same length as the input array', function() {
            assert.equal(companies.length, names.length);
        });
        it('should return an array containing the name of every company', function() {
            expect(["Pepsi", "Nike", "Samsung", "Starbucks"]).to.eql(names);
        });
        it('should use the native map method', function() {
            expect(spy.called).to.eql(true);
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
            expect([{ 'Company Name': 'Pepsi', 'Expected Employees': 277680 },
                { 'Company Name': 'Nike', 'Expected Employees': 78217 },
                { 'Company Name': 'Samsung', 'Expected Employees': 327083.4 },
                { 'Company Name': 'Starbucks', 'Expected Employees': 305550 }
            ]).to.eql(employees);
        });
    });
});