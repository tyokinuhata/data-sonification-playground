export type Note = {
  beat: number;
  melody: number;
  chord: number[];
};

// Twinkle Twinkle Little Star (first phrase)
export const notes: Note[] = [
  { beat: 1,  melody: 60, chord: [48, 52, 55] }, // C - C major
  { beat: 2,  melody: 60, chord: [48, 52, 55] }, // C - C major
  { beat: 3,  melody: 67, chord: [55, 59, 62] }, // G - G major
  { beat: 4,  melody: 67, chord: [55, 59, 62] }, // G - G major
  { beat: 5,  melody: 69, chord: [57, 60, 64] }, // A - Am
  { beat: 6,  melody: 69, chord: [57, 60, 64] }, // A - Am
  { beat: 7,  melody: 67, chord: [55, 59, 62] }, // G - G major
  { beat: 8,  melody: 65, chord: [53, 57, 60] }, // F - F major
  { beat: 9,  melody: 65, chord: [53, 57, 60] }, // F - F major
  { beat: 10, melody: 64, chord: [48, 52, 55] }, // E - C major
  { beat: 11, melody: 64, chord: [48, 52, 55] }, // E - C major
  { beat: 12, melody: 62, chord: [55, 59, 62] }, // D - G major
  { beat: 13, melody: 62, chord: [55, 59, 62] }, // D - G major
  { beat: 14, melody: 60, chord: [48, 52, 55] }, // C - C major
];

export const allUsedMidi = [...new Set([
  ...notes.map(n => n.melody),
  ...notes.flatMap(n => n.chord),
])];

export function midiToNoteName(midi: number): string {
  const noteNames = ['C', 'C#', 'D', 'Eb', 'E', 'F', 'F#', 'G', 'Ab', 'A', 'Bb', 'B'];
  const octave = Math.floor(midi / 12) - 1;
  return `${noteNames[midi % 12]}${octave}`;
}
