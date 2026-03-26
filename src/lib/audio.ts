const midiToHz = (midi: number) => 440 * Math.pow(2, (midi - 69) / 12);

let audioCtx: AudioContext;

function playNote(midi: number, gain: number) {
  audioCtx ??= new AudioContext();
  const osc = audioCtx.createOscillator();
  const gainNode = audioCtx.createGain();
  gainNode.gain.value = gain;
  osc.frequency.value = midiToHz(midi);
  osc.connect(gainNode).connect(audioCtx.destination);
  osc.start();
  osc.stop(audioCtx.currentTime + 0.2);
}

export function play(melody: number, chord: number[]) {
  playNote(melody, 0.8);
  chord.forEach(midi => playNote(midi, 0.2));
}
