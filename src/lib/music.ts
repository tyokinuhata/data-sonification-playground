export type Note = {
  beat: number;
  melody: number;
  chord: number[];
};

export const notes: Note[] = [
  { beat: 1,  melody: 65, chord: [56, 60, 63] },
  { beat: 2,  melody: 67, chord: [56, 60, 63] },
  { beat: 3,  melody: 65, chord: [56, 60, 63] },
  { beat: 4,  melody: 63, chord: [55, 59, 62] },
  { beat: 5,  melody: 63, chord: [55, 59, 62] },
  { beat: 6,  melody: 60, chord: [55, 59, 62] },
  { beat: 7,  melody: 60, chord: [60, 63, 67] },
  { beat: 8,  melody: 63, chord: [60, 63, 67] },
  { beat: 9,  melody: 65, chord: [60, 63, 67] },
  { beat: 10, melody: 63, chord: [60, 63, 67] },
  { beat: 11, melody: 65, chord: [63, 67, 70] },
  { beat: 12, melody: 63, chord: [63, 67, 70] },
  { beat: 13, melody: 67, chord: [63, 67, 70] },
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
