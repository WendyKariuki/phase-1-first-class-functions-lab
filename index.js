const returnFirstTwoDrivers = function(drivers) {
    return drivers.slice(0, 2);
};
const drivers = ["Kim", "Tom", "Kyle", "Lucy"];
const firstTwoDrivers = returnFirstTwoDrivers(drivers);
console.log(firstTwoDrivers); 

const returnLastTwoDrivers = function(drivers) {
    return drivers.slice(-2);
};

const driver = ["Kim", "Tom", "Kyle", "Lucy"];
const lastTwoDrivers = returnLastTwoDrivers(drivers);
console.log(lastTwoDrivers); 

const returnFirstTwodrivers = function(drivers) {
    return drivers.slice(0, 2);
};

const returnfirstTwoDrivers = function(drivers) {
    return drivers.slice(0, 2);
};

const returnlastTwoDrivers = function(drivers) {
    return drivers.slice(-2);
};
const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

function createFareMultiplier(integer) {
    return function fareMultiplier(fare) {
        return integer * fare;
    };
}

function createFareMultiplier(integer) {
    return function fareMultiplier(fare) {
        return integer * fare;
    };
}

const fareDoubler = createFareMultiplier(2);

function createFareMultiplier(integer) {
    return function fareMultiplier(fare) {
        return integer * fare;
    };
}

const fareTripler = createFareMultiplier(3);

function selectDifferentDrivers(arrayOfDrivers, func) {
    return func(arrayOfDrivers);
}
