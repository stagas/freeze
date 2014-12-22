
/**
 * @module freeze
 * @author stagas
 * @version 2.0.0
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

  function play(t){
    this.pos = Math.round((t * sampleRate) % n_samples);
    return this.buffer[this.pos];
  }
}
