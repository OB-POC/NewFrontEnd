//sessionStorage.js
var sessionStorage = {
  storage: {},
  setItem: function (field, value) {
    this.storage.field = value;
  },
  getItem: function (field) {
    return this.storage.field;
  }
};
module.exports = sessionStorage;
