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
}
}
