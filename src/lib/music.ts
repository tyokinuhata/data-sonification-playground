export type Note = {
  beat: number;
  melody: number;
  chord: number[];
};

export type Song = Note[];

// Twinkle Twinkle Little Star (first phrase, C major)
const twinkle: Song = [
  { beat: 1,  melody: 60, chord: [48, 52, 55] }, // C - C major
  { beat: 2,  melody: 60, chord: [48, 52, 55] }, // C - C major
  { beat: 3,  melody: 67, chord: [55, 59, 62] }, // G - G major
  { beat: 4,  melody: 67, chord: [55, 59, 62] }, // G - G major
  { beat: 5,  melody: 69, chord: [57, 60, 64] }, // A - Am
  { beat: 6,  melody: 69, chord: [57, 60, 64] }, // A - Am
  { beat: 7,  melody: 67, chord: [55, 59, 62] }, // G - G major
  { beat: 8,  melody: 67, chord: [55, 59, 62] }, // G - G major (2nd beat)
  { beat: 9,  melody: 65, chord: [53, 57, 60] }, // F - F major
  { beat: 10, melody: 65, chord: [53, 57, 60] }, // F - F major
  { beat: 11, melody: 64, chord: [48, 52, 55] }, // E - C major
  { beat: 12, melody: 64, chord: [48, 52, 55] }, // E - C major
  { beat: 13, melody: 62, chord: [55, 59, 62] }, // D - G major
  { beat: 14, melody: 62, chord: [55, 59, 62] }, // D - G major
  { beat: 15, melody: 60, chord: [48, 52, 55] }, // C - C major
  { beat: 16, melody: 60, chord: [48, 52, 55] }, // C - C major (2nd beat)
];

// チューリップ - C major (ヨナ抜き：C D E G A のみ使用)
const tulip: Song = [
  // "さいた さいた"
  { beat: 1,  melody: 60, chord: [48, 52, 55] }, // C4 - さ
  { beat: 2,  melody: 62, chord: [48, 52, 55] }, // D4 - い
  { beat: 3,  melody: 64, chord: [48, 52, 55] }, // E4 - た (held)
  { beat: 4,  melody: 64, chord: [48, 52, 55] }, // E4
  { beat: 5,  melody: 60, chord: [48, 52, 55] }, // C4 - さ
  { beat: 6,  melody: 62, chord: [48, 52, 55] }, // D4 - い
  { beat: 7,  melody: 64, chord: [48, 52, 55] }, // E4 - た (held)
  { beat: 8,  melody: 64, chord: [48, 52, 55] }, // E4
  // "チューリップのはなが" G E D C D E D
  { beat: 9,  melody: 67, chord: [55, 59, 62] }, // G4 - チュー
  { beat: 10, melody: 64, chord: [48, 52, 55] }, // E4 - リッ
  { beat: 11, melody: 62, chord: [55, 59, 62] }, // D4 - プ
  { beat: 12, melody: 60, chord: [48, 52, 55] }, // C4 - の
  { beat: 13, melody: 62, chord: [55, 59, 62] }, // D4 - は
  { beat: 14, melody: 64, chord: [48, 52, 55] }, // E4 - な
  { beat: 15, melody: 62, chord: [55, 59, 62] }, // D4 - が (held)
  { beat: 16, melody: 62, chord: [55, 59, 62] }, // D4
  // "ならんだ ならんだ" (さいた と同じメロディ)
  { beat: 17, melody: 60, chord: [48, 52, 55] }, // C4 - な
  { beat: 18, melody: 62, chord: [48, 52, 55] }, // D4 - ら
  { beat: 19, melody: 64, chord: [48, 52, 55] }, // E4 - ん (held)
  { beat: 20, melody: 64, chord: [48, 52, 55] }, // E4
  { beat: 21, melody: 60, chord: [48, 52, 55] }, // C4 - な
  { beat: 22, melody: 62, chord: [48, 52, 55] }, // D4 - ら
  { beat: 23, melody: 64, chord: [48, 52, 55] }, // E4 - ん (held)
  { beat: 24, melody: 64, chord: [48, 52, 55] }, // E4
  // "あかしろきいろ" G E D C D E C
  { beat: 25, melody: 67, chord: [55, 59, 62] }, // G4 - あ
  { beat: 26, melody: 64, chord: [48, 52, 55] }, // E4 - か
  { beat: 27, melody: 62, chord: [55, 59, 62] }, // D4 - し
  { beat: 28, melody: 60, chord: [48, 52, 55] }, // C4 - ろ
  { beat: 29, melody: 62, chord: [55, 59, 62] }, // D4 - き
  { beat: 30, melody: 64, chord: [48, 52, 55] }, // E4 - い
  { beat: 31, melody: 60, chord: [48, 52, 55] }, // C4 - ろ (held)
  { beat: 32, melody: 60, chord: [48, 52, 55] }, // C4
  // "どのはなみても" G G E G A A G
  { beat: 33, melody: 67, chord: [55, 59, 62] }, // G4 - ど
  { beat: 34, melody: 67, chord: [55, 59, 62] }, // G4 - の
  { beat: 35, melody: 64, chord: [48, 52, 55] }, // E4 - は
  { beat: 36, melody: 67, chord: [55, 59, 62] }, // G4 - な
  { beat: 37, melody: 69, chord: [57, 60, 64] }, // A4 - み
  { beat: 38, melody: 69, chord: [57, 60, 64] }, // A4 - て
  { beat: 39, melody: 67, chord: [55, 59, 62] }, // G4 - も (held)
  { beat: 40, melody: 67, chord: [55, 59, 62] }, // G4
  // "きれいだな" E E D D C
  { beat: 41, melody: 64, chord: [48, 52, 55] }, // E4 - き
  { beat: 42, melody: 64, chord: [48, 52, 55] }, // E4 - れ
  { beat: 43, melody: 62, chord: [55, 59, 62] }, // D4 - い
  { beat: 44, melody: 62, chord: [55, 59, 62] }, // D4 - だ
  { beat: 45, melody: 60, chord: [48, 52, 55] }, // C4 - な (held)
  { beat: 46, melody: 60, chord: [48, 52, 55] }, // C4
  { beat: 47, melody: 60, chord: [48, 52, 55] }, // C4
];

// Mary Had a Little Lamb - C major (4/4拍子、半音符は2拍分繰り返す)
const mary: Song = [
  // "Mary had a little lamb" (E D C D | E E E.)
  { beat: 1,  melody: 64, chord: [48, 52, 55] }, // E4 - Ma-
  { beat: 2,  melody: 62, chord: [55, 59, 62] }, // D4 - ry
  { beat: 3,  melody: 60, chord: [48, 52, 55] }, // C4 - had
  { beat: 4,  melody: 62, chord: [55, 59, 62] }, // D4 - a
  { beat: 5,  melody: 64, chord: [48, 52, 55] }, // E4 - lit-
  { beat: 6,  melody: 64, chord: [48, 52, 55] }, // E4 - tle
  { beat: 7,  melody: 64, chord: [48, 52, 55] }, // E4 - lamb (半音符)
  { beat: 8,  melody: 64, chord: [48, 52, 55] }, // E4
  // "little lamb, little lamb" (D D D. | E G G.)
  { beat: 9,  melody: 62, chord: [55, 59, 62] }, // D4 - lit-
  { beat: 10, melody: 62, chord: [55, 59, 62] }, // D4 - tle
  { beat: 11, melody: 62, chord: [55, 59, 62] }, // D4 - lamb (半音符)
  { beat: 12, melody: 62, chord: [55, 59, 62] }, // D4
  { beat: 13, melody: 64, chord: [48, 52, 55] }, // E4 - lit-
  { beat: 14, melody: 67, chord: [55, 59, 62] }, // G4 - tle
  { beat: 15, melody: 67, chord: [55, 59, 62] }, // G4 - lamb (半音符)
  { beat: 16, melody: 67, chord: [55, 59, 62] }, // G4
  // "Mary had a little lamb" (E D C D | E E E E)
  { beat: 17, melody: 64, chord: [48, 52, 55] }, // E4 - Ma-
  { beat: 18, melody: 62, chord: [55, 59, 62] }, // D4 - ry
  { beat: 19, melody: 60, chord: [48, 52, 55] }, // C4 - had
  { beat: 20, melody: 62, chord: [55, 59, 62] }, // D4 - a
  { beat: 21, melody: 64, chord: [48, 52, 55] }, // E4 - lit-
  { beat: 22, melody: 64, chord: [48, 52, 55] }, // E4 - tle
  { beat: 23, melody: 64, chord: [48, 52, 55] }, // E4 - lamb
  { beat: 24, melody: 64, chord: [48, 52, 55] }, // E4
  // "whose fleece was white as snow" (D D E D | C...)
  { beat: 25, melody: 62, chord: [55, 59, 62] }, // D4 - whose
  { beat: 26, melody: 62, chord: [55, 59, 62] }, // D4 - fleece
  { beat: 27, melody: 64, chord: [48, 52, 55] }, // E4 - was
  { beat: 28, melody: 62, chord: [55, 59, 62] }, // D4 - white
  { beat: 29, melody: 60, chord: [48, 52, 55] }, // C4 - as (全音符)
  { beat: 30, melody: 60, chord: [48, 52, 55] }, // C4
  { beat: 31, melody: 60, chord: [48, 52, 55] }, // C4
  { beat: 32, melody: 60, chord: [48, 52, 55] }, // C4 - snow
];

export const songs: Record<string, Song> = {
  'Twinkle Twinkle': twinkle,
  'Tulip': tulip,
  'Mary Had a Little Lamb': mary,
};

export function allUsedMidi(song: Song): number[] {
  return [...new Set([
    ...song.map(note => note.melody),
    ...song.flatMap(note => note.chord),
  ])];
}

export function midiToNoteName(midi: number): string {
  const noteNames = ['C', 'C#', 'D', 'Eb', 'E', 'F', 'F#', 'G', 'Ab', 'A', 'Bb', 'B'];
  const octave = Math.floor(midi / 12) - 1;
  return `${noteNames[midi % 12]}${octave}`;
}
