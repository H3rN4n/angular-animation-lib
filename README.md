# angular-animation-lib

##INSTALATION
npm install --save angular-animation-lib;

import { AnimationsService } from './angular-animation-lib';

providers: [...,AnimationsService]

##USAGE

import { AnimationsService } from 'angular-animation-lib';

const fadeIn = JSON.parse(AnimationsService.fadeIn());

 animations: [
    fadeIn
    ...
