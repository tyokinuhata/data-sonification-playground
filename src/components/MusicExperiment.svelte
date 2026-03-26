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
    plugins: {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      chartjs2music: false as any,
    },
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

  let ccEl: HTMLElement;
  let chartWrapperEl: HTMLDivElement;

  onMount(() => {
    const canvas = chartWrapperEl.querySelector('canvas');
    if (!canvas) return;

    c2mChart({
      type: 'line',
      element: canvas,
      data: notes.map(n => n.melody),
      cc: ccEl,
      options: {
        enableSound: false,
        onFocusCallback: ({ index }) => {
          play(notes[index].melody, notes[index].chord);
          const chart = ChartJS.getChart(canvas);
          chart?.setActiveElements([{ datasetIndex: 0, index }]);
          chart?.update();
        },
      },
    });
  });

  function playAll() {
    const canvas = chartWrapperEl.querySelector('canvas');
    if (!canvas) return;
    canvas.focus();
    canvas.dispatchEvent(new KeyboardEvent('keydown', { key: 'End', shiftKey: true }));
  }
</script>

<div bind:this={chartWrapperEl} style="width: 800px">
  <Line {data} {options} />
</div>
<button onclick={playAll}>▶ Play</button>
<div bind:this={ccEl}></div>
