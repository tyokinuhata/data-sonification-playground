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
  import chartjs2music from 'chartjs-plugin-chart2music';
  import npmDownloads from '../assets/chart2music-npm-downloads.json';

  ChartJS.register(LineElement, PointElement, LinearScale, CategoryScale, Title, Tooltip, Legend, chartjs2music);

  type Week = { label: string; downloads: number };

  function aggregateWeekly(entries: { day: string; downloads: number }[]): Week[] {
    return entries.reduce<Week[]>((acc, entry, i) => {
      if (i % 7 === 0) acc.push({ label: entry.day, downloads: 0 });
      acc[acc.length - 1].downloads += entry.downloads;
      return acc;
    }, []);
  }

  const weekly = aggregateWeekly(npmDownloads.downloads);

  const data = {
    labels: weekly.map((w) => w.label),
    datasets: [
      {
        label: 'chart2music npm downloads (weekly)',
        data: weekly.map((w) => w.downloads),
        borderColor: '#e85d04',
      },
    ],
  };

  let ccEl: HTMLElement;
  let chartWrapperEl: HTMLDivElement;

  // chartjs-plugin-chart2music does not augment Chart.js types
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const options: any = {
    plugins: {
      chartjs2music: {
        cc: ccEl!,
      },
    },
  };

  function play() {
    const canvas = chartWrapperEl.querySelector('canvas');
    if (!canvas) return;
    canvas.focus();
    canvas.dispatchEvent(new KeyboardEvent('keydown', { key: 'End', shiftKey: true }));
  }
</script>

<div bind:this={chartWrapperEl} style="width: 800px">
  <Line {data} {options} />
</div>
<button onclick={play}>▶ Play</button>
<div bind:this={ccEl}></div>
