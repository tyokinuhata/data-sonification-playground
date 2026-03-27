<script lang="ts">
  import { onMount } from 'svelte';
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
  import { c2mChart } from 'chart2music';
  import { type Song, allUsedMidi, midiToNoteName } from '../lib/music';
  import { play } from '../lib/audio';

  ChartJS.register(LineElement, PointElement, LinearScale, CategoryScale, Title, Tooltip, Legend);

  let { song }: { song: Song } = $props();

  const chartData = $derived({
    labels: song.map(note => note.beat),
    datasets: [
      { label: 'melody',  data: song.map(note => note.melody),   borderColor: '#e85d04', pointRadius: 5 },
      { label: 'chord 1', data: song.map(note => note.chord[0]), borderColor: '#4361ee', pointRadius: 3 },
      { label: 'chord 2', data: song.map(note => note.chord[1]), borderColor: '#4895ef', pointRadius: 3 },
      { label: 'chord 3', data: song.map(note => note.chord[2]), borderColor: '#90e0ef', pointRadius: 3 },
    ],
  });

  const chartOptions = $derived({
    plugins: {
      chartjs2music: false as any,
    },
    scales: {
      y: {
        ticks: {
          callback: (value: number | string) => typeof value === 'number' ? midiToNoteName(value) : value,
        },
        min: Math.min(...allUsedMidi(song)) - 1,
        max: Math.max(...allUsedMidi(song)) + 1,
      },
    },
  });

  let ccEl: HTMLElement;
  let chartWrapperEl: HTMLDivElement;

  onMount(() => {
    const canvas = chartWrapperEl.querySelector('canvas');
    if (!canvas) return;

    c2mChart({
      type: 'line',
      element: canvas,
      data: song.map(note => note.melody),
      cc: ccEl,
      options: {
        enableSound: false,
        onFocusCallback: ({ index }) => {
          play(song[index].melody, song[index].chord);
          const chart = ChartJS.getChart(canvas);
          chart?.setActiveElements([{ datasetIndex: 0, index }]);
          chart?.update();
        },
      },
    });
  });

  export function playAll() {
    const canvas = chartWrapperEl?.querySelector('canvas');
    if (!canvas) return;
    canvas.focus();
    // E key slows down playback (SPEEDS: [1000, 250, 100, 50, 25]ms, default index=1)
    // Send 4 times to ensure slowest speed (index 0 = 1000ms) from any state
    for (let i = 0; i < 4; i++) {
      canvas.dispatchEvent(new KeyboardEvent('keydown', { key: 'e' }));
    }
    canvas.dispatchEvent(new KeyboardEvent('keydown', { key: 'End', shiftKey: true }));
  }
</script>

<div bind:this={chartWrapperEl} style="width: 800px">
  <Line data={chartData} options={chartOptions} />
</div>
<div bind:this={ccEl}></div>
