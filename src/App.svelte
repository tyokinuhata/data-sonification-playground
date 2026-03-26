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
  import npmDownloads from './assets/chart2music-npm-downloads.json';

  ChartJS.register(LineElement, PointElement, LinearScale, CategoryScale, Title, Tooltip, Legend);

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
</script>

<main>
  <div style="width: 800px">
    <Line {data} />
  </div>
</main>
