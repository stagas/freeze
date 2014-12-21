
/**
 * @module freeze
 * @author stagas
 * @version 1.0.0
 * @desc freeze a dsp function
 * @license mit
 */

export default function(fn, n_samples){
  n_samples = n_samples | 0;

  var buffer = new Float32Array(n_samples);

  for (var i = 0, t = 0; i < n_samples; i++) {
    t = i / sampleRate;
    buffer[i] = fn(t);
  }

  return {
    pos: 0,
    buffer: buffer,
    play: play
  };

  function play(){
    if (this.pos === n_samples) this.pos = 0;
    return this.buffer[this.pos++];
  }
}
