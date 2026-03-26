<script lang="ts">
  import { Line } from 'svelte-chartjs';
  import {
    Chart as ChartJS,
    LineElement,
    PointElement,
    LinearScale,
    CategoryScale,
    Title,
    Tooltip,
    Legend,
  } from 'chart.js';

  ChartJS.register(LineElement, PointElement, LinearScale, CategoryScale, Title, Tooltip, Legend);

  type Note = {
    beat: number;
    melody: number;
    chord: number[];
  };

  const notes: Note[] = [
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

  function midiToNoteName(midi: number): string {
    const noteNames = ['C', 'C#', 'D', 'Eb', 'E', 'F', 'F#', 'G', 'Ab', 'A', 'Bb', 'B'];
    const octave = Math.floor(midi / 12) - 1;
    return `${noteNames[midi % 12]}${octave}`;
  }

  const allUsedMidi = [...new Set([
    ...notes.map(n => n.melody),
    ...notes.flatMap(n => n.chord),
  ])];

  const data = {
    labels: notes.map(n => n.beat),
    datasets: [
      { label: 'melody',  data: notes.map(n => n.melody),   borderColor: '#e85d04', pointRadius: 5 },
      { label: 'chord 1', data: notes.map(n => n.chord[0]), borderColor: '#4361ee', pointRadius: 3 },
      { label: 'chord 2', data: notes.map(n => n.chord[1]), borderColor: '#4895ef', pointRadius: 3 },
      { label: 'chord 3', data: notes.map(n => n.chord[2]), borderColor: '#90e0ef', pointRadius: 3 },
    ],
  };

  const options = {
    scales: {
      y: {
        ticks: {
          callback: (value: number | string) => typeof value === 'number' ? midiToNoteName(value) : value,
        },
        min: Math.min(...allUsedMidi) - 1,
        max: Math.max(...allUsedMidi) + 1,
      },
    },
  };
</script>

<div style="width: 800px">
  <Line {data} {options} />
</div>
