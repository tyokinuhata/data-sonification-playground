<script lang="ts">
  import { songs, type Song } from '../lib/music';
  import SongChart from './SongChart.svelte';

  let selectedSong = $state(Object.keys(songs)[0]);
  let song: Song = $derived(songs[selectedSong]);
  let songChart: SongChart | undefined = $state();
</script>

<select bind:value={selectedSong}>
  {#each Object.keys(songs) as songName}
    <option value={songName}>{songName}</option>
  {/each}
</select>
{#key selectedSong}
  <SongChart {song} bind:this={songChart} />
{/key}
<button onclick={() => songChart?.playAll()}>▶ Play</button>
