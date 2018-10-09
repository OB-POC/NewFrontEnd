
let NODE_ENV = NODE_ENV || ""

module.exports = NODE_ENV == "PRO" ? {
    loginUrl: 'http://localhost:8082',
    accountUrl: 'http://localhost:8082/accountsService',
    payOutUrl: 'http://localhost:8082/payOutPlanService',
    offeringsUrl: 'http://localhost:8082/offeringService'
} : {
    loginUrl: 'http://localhost:3000',
    accountUrl: 'http://localhost:3001/accountsService',
    payOutUrl: 'http://localhost:3002/payOutPlanService',
    offeringsUrl: 'http://localhost:3003/offeringService'
};
