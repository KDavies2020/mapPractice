// This data set will be used for all of our examples of map below. 
let companies = [{
        "Company Name": "Pepsi",
        "Current Employees": 267000,
        "Expected Growth": .04,
        "Location": "Harrison, NY",
    },
    {
        "Company Name": "Nike",
        "Current Employees": 73100,
        "Expected Growth": .07,
        "Location": "Beaverton, OR",
    },
    {
        "Company Name": "Samsung",
        "Current Employees": 320670,
        "Expected Growth": .02,
        "Location": "Seoul, S.K.",
    },
    {
        "Company Name": "Starbucks",
        "Current Employees": 291000,
        "Expected Growth": .05,
        "Location": "Seattle, WA",
    }
];



///////////////////////// EXERCISES /////////////////////////////

// NOTE FOR ME: ADD ONE FOR LOOP TO MAP QUESTION.

/*
 1) Use map to return an array of company names
 ex output: [Pepsi, Nike,...]
 */


const getNames = companies.map(el => el["Company Name"]);



/*
 2) Use map to return an array of tuples containing each companies name and location.

 ex output: [[Pepsi, Harrison, NY], [Nike, Beaverton, OR]...] 
*/


const nameAndLocation = companies.map(el => [el["Company Name"], el["Location"]]);



/* 
3) Use map to return an array of objects that include company name and their projected number of employees after growth. This number can be found by multipling current employeed times BY 1 + expected growth. 

ex output:[{"Company Name" : "Pepsi", "Expected Employees" : 277680}...]
*/

const expectedEmployees = companies.map((el) => {
    return {
        "Company Name": el["Company Name"],
        "Expected Employees": el["Current Employees"] * (el["Expected Growth"] + 1)
    }
});




//////////////// DO NOT EDIT BELOW THIS LINE //////////////////
module.exports.getNames = getNames;
module.exports.nameAndLocation = nameAndLocation;
module.exports.expectedEmployees = expectedEmployees;
module.exports.companies = companies;