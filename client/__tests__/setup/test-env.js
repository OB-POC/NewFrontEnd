import $ from 'jquery';
global.$ = global.jQuery = $;
global.sessionStorage.getItem.username = 'alice';
console.log('test');
global.sessionStorage.getItem = jest.fn((a) => 'alice')
