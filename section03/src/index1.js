//외부에 있는 모듈을 가져온다.(import)
// const moduleData = require('./math');
// const {add,sub} = require('./math');
//esm 모듈방식으로 가져온다.
import {add,sub} from './math.js';
import multiply from './math.js';
import randomcolor from 'randomcolor';

const colorString = randomcolor();
console.log(colorString);
// let value = moduleData.add(10,20);
console.log(add(10,20));
console.log(sub(10,20));
console.log(multiply(10,20));
