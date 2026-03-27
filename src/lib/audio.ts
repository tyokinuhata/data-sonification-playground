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

function scheduleEnvelope(gainNode: GainNode, peak: number, now: number, duration: number) {
  const attack = 0.01;
  const release = 0.1;
  gainNode.gain.setValueAtTime(0, now);
  gainNode.gain.linearRampToValueAtTime(peak, now + attack);
  gainNode.gain.setValueAtTime(peak, now + duration - release);
  gainNode.gain.linearRampToValueAtTime(0, now + duration);
}

function playNote(midi: number, gain: number) {
  const ctx = getAudioCtx();
  const now = ctx.currentTime;
  const duration = 0.8;
  const osc = ctx.createOscillator();
  const gainNode = ctx.createGain();

  osc.frequency.value = midiToHz(midi);
  scheduleEnvelope(gainNode, gain, now, duration);

  // signal chain: osc → gain → compressor → destination
  osc.connect(gainNode);
  gainNode.connect(compressor);

  osc.start(now);
  osc.stop(now + duration);
}

export function play(melody: number, chord: number[]) {
  playNote(melody, 0.8);
  chord.forEach(midi => playNote(midi, 0.2));
}
