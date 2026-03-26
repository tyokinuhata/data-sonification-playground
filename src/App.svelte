<script lang="ts">
  import DataSonification from './DataSonification.svelte';
  import MusicExperiment from './MusicExperiment.svelte';

  type Tab = 'data-sonification' | 'music-experiment';
  let activeTab: Tab = $state('data-sonification');
</script>

<main>
  <nav>
    <button onclick={() => (activeTab = 'data-sonification')}>Data Sonification</button>
    <button onclick={() => (activeTab = 'music-experiment')}>Music Experiment</button>
  </nav>

  {#if activeTab === 'data-sonification'}
    <DataSonification />
  {:else}
    <MusicExperiment />
  {/if}
</main>
