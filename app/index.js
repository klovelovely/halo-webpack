import _ from 'lodash';
const moment = require('moment');

function component() {
    let element = document.createElement('div');

    element.innerHTML = _.join(['Hello', 'webpack', moment().format()], ' ');

    return element;
}

document.body.appendChild(component());
