let email = 1;
function generateRequest() {
    var request = {
        method: 'add',
        name: 'name'+email,
        emailaddress: email,
        userid: generateRandomUserId(),
        requestid: 1,
        dentistid: '2',
        issuance: generateIssuance(),
        time: generateDate(31, 07, 12)
    }
    email++
    return request;
}

// function to generate a random 10 digit userId
function generateRandomUserId() {
    userid = Math.floor(Math.random()*9000000000) + 10000;
    return userid;
}

//function to generate a random 13 digit issuancenumber
function generateIssuance() {
    var d = new Date()
    issuance = d.getTime()
    return issuance;
}

var generateDate=function(rangeOfDays,startHour,hourRange){
    var today = new Date(Date.now());
    return new Date(today.getYear()+1900,today.getMonth(), today.getDate()+Math.random() *rangeOfDays, Math.random()*hourRange + startHour, (Math.random()<=0.5 ? 30 : 60));
}

module.exports.generateRequest = generateRequest;