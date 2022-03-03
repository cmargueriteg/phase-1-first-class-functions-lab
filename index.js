const returnFirstTwoDrivers= function(drivers){

    return drivers.slice(0,2)
}

const returnLastTwoDrivers= function(drivers){

    return drivers.slice(2)
}

const selectingDrivers=[returnFirstTwoDrivers, returnLastTwoDrivers]


function createFareMultiplier(num1){

    return function fareQuintupler(){
        num1*5
    } 
        
    
}

const fareDoubler = function(num){
    return num*2
}

const fareTripler = function(num){

    return num*3
}

function selectDifferentDrivers(arrayOfDrivers,returnFirstTwoDrivers){

    return returnFirstTwoDrivers(arrayOfDrivers.slice(0,2))

      
    }

