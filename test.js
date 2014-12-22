
/**
 * test
 */

import freeze from './index';
import { sin } from 'opendsp/osc';

var out = 0;
var fn_out = freeze(fn, sampleRate);

export function dsp(t){
  out = 0;
  out += fn_out.play(t);
  return out;
}

function fn(t){
  return sin(t, 440) * .1;
}
