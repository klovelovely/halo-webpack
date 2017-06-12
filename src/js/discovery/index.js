import timer from '../common/component-timer.js';

const moment = require('moment');

const render = require('../../html/discovery/index.art');
const data = {
    title: 'My Page'
};
const html = render(data);
console.log(html);

module.exports = render;
