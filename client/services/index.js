import config from '../config.js'

module.exports = {
 logincall: function(queryData,successCb,errorCb){
   console.log(JSON.stringify({username:queryData.username,password:queryData.password}));
   console.log(config.loginUrl+"/login");
   $.ajax({
     type: "POST",
   url: config.loginUrl+"/login",
   datatype: "json",
   data : queryData,
    success:successCb,
    error:errorCb
  })
},
debitCall: function(queryData,successCb,errorCb) {
  $.ajax({
    type :"GET",
    url : config.accountUrl+"/debit",
    headers: {"x-access-token": queryData},
    contentType : "application/json",
    success : successCb,
    error : errorCb
  })
},
creditCall: function(queryData,successCb,errorCb) {
  $.ajax({
    type :"GET",
    url : config.accountUrl+"/credit",
    headers: {"x-access-token": queryData},
    contentType : "application/json",
    success : successCb,
    error : errorCb
  })
},
payOutCall: function(queryData,successCb,errorCb) {
  $.ajax({
    type :"GET",
    url : config.payOutUrl+"/calculateBestMatch",
    headers: {"x-access-token": queryData},
    contentType : "application/json",
    success : successCb,
    error : errorCb
  })
},
makePaymentCall: function(queryData,successCb,errorCb) {
  $.ajax({
    type :"GET",
    url : config.payOutUrl+"/makePayment",
    headers: {"x-access-token": queryData},
    contentType : "application/json",
    success : successCb,
    error : errorCb
  })
},
offeringCall: function(queryData,successCb,errorCb) {
  $.ajax({
    type :"GET",
    url : config.offeringsUrl+"/cardDetails",
    headers: {"x-access-token": queryData},
    contentType : "application/json",
    success : successCb,
    error : errorCb
  })
},
totalBalancesCall: function(queryData,successCb,errorCb) {
  $.ajax({
    type :"GET",
    url : config.accountUrl+"/totalBalances",
    headers: {"x-access-token": queryData},
    contentType : "application/json",
    success : successCb,
    error : errorCb
  })
},
getSISuggestions: function(queryData,successCb,errorCb) {
  $.ajax({
    type :"GET",
    url : config.manageSIUrl+"/si/suggestions",
    headers: {"x-access-token": queryData},
    contentType : "application/json",
    success : successCb,
    error : errorCb
  })
},
postSISuggestions: function(queryData,successCb,errorCb) {
  console.log(queryData.data, "data..s");
  $.ajax({
    type :"POST",
    url : config.manageSIUrl+"/si/suggestions",
    data: JSON.stringify(queryData.data),
    headers: {"x-access-token": queryData.token},
    contentType : "application/json",
    success : successCb,
    error : errorCb
  })
},
poolFunds: function(queryData,successCb,errorCb) {
  $.ajax({
    type :"POST",
    url : config.poolingUrl+"/mergeFunds",
    data: JSON.stringify(queryData.data),
    headers: {"x-access-token": queryData.token},
    contentType : "application/json",
    success : successCb,
    error : errorCb
  })
},
portFunds: function(queryData,successCb,errorCb) {
  $.ajax({
    type :"POST",
    url : config.portingUrl+"/mergeAccounts",
    data: JSON.stringify(queryData.data),
    headers: {"x-access-token": queryData.token},
    contentType : "application/json",
    success : successCb,
    error : errorCb
  })
},
getFinancialAdvisory: function(queryData,successCb,errorCb) {
  $.ajax({
    type :"GET",
    url : config.offeringsUrl+"/advisory",
    headers: {"x-access-token": queryData},
    contentType : "application/json",
    success : successCb,
    error : errorCb
  })
}

}
