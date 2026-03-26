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
  import { notes, allUsedMidi, midiToNoteName } from '../lib/music';
  import { play } from '../lib/audio';

  ChartJS.register(LineElement, PointElement, LinearScale, CategoryScale, Title, Tooltip, Legend);

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
<button onclick={() => play(notes[0].melody, notes[0].chord)}>▶ beat 1 を再生</button>
