const midiToHz = (midi: number) => 440 * Math.pow(2, (midi - 69) / 12);

let audioCtx: AudioContext;
let compressor: DynamicsCompressorNode;

function getAudioCtx() {
  if (!audioCtx) {
    audioCtx = new AudioContext();
    compressor = audioCtx.createDynamicsCompressor();
    compressor.connect(audioCtx.destination);
  }
  return audioCtx;
}

function playNote(midi: number, gain: number) {
  const ctx = getAudioCtx();
  const osc = ctx.createOscillator();
  const gainNode = ctx.createGain();

  osc.frequency.value = midiToHz(midi);
  gainNode.gain.value = gain;

  // signal chain: osc → gain → compressor → destination
  osc.connect(gainNode);
  gainNode.connect(compressor);

  osc.start();
  osc.stop(ctx.currentTime + 0.8);
}

export function play(melody: number, chord: number[]) {
  playNote(melody, 0.8);
  chord.forEach(midi => playNote(midi, 0.2));
}
