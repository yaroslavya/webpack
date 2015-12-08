'use strict';

//import _ from 'lodash';
var _ = require('./lodash');
import greeter from './greeter';
import {Test} from './convertme';

greeter("Hello");

new Test().doStuff();