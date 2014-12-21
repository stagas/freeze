
/**
 * test
 */

import freeze from './index';
import { sin } from 'opendsp/osc';

var out = 0;
var fn_out = freeze(fn, sampleRate/10);

export function dsp(t){
  out = 0;
  out += fn_out.play();
  return out;
}

function fn(t){
  return sin(t, 300) * .5;
}
