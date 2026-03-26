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

  const data = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'],
    datasets: [
      {
        label: 'Temperature (°C)',
        data: [5, 8, 13, 18, 23, 26, 28],
      },
    ],
  };
</script>

<main>
  <div style="width: 800px">
    <Line {data} />
  </div>
</main>
