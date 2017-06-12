import _ from 'lodash';
const moment = require('moment');

function component() {
    let elem = document.createElement('div');

    elem.innerHTML = _.join(['asdf', 'webpack', moment().format()], ' ');

    return elem;
}

document.body.appendChild(component());