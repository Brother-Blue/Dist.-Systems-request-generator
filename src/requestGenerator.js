function generateRequest() {
    var request = {
        method: 'add',
        userid: generateRandomUserId(),
        requestid: 1,
        dentistid: 2,
        issuance: generateIssuance(),
        time: generateDate(31, 0700, 12)
    }
    return request;
}

// function to generate a random 5 digit userId
function generateRandomUserId() {
    userid = Math.floor(Math.random()*90000) + 10000;
    return userid;
}

//function to generate a random 13 digit issuancenumber
function generateIssuance() {
    issuance = Math.floor(Math.random()*9000000000000) + 1000000000000;
    return issuance;
}

var generateDate=function(rangeOfDays,startHour,hourRange){
    var today = new Date(Date.now());
    return new Date(today.getYear()+1900,today.getMonth(), today.getDate()+Math.random() *rangeOfDays, Math.random()*hourRange + startHour, (Math.random()<=0.5 ? 30 : 60));
}

module.exports.generateRequest = generateRequest;