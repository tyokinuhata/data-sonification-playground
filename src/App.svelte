<script lang="ts">
  import { onMount } from 'svelte';
  import DataSonification from './components/DataSonification.svelte';
  import MusicExperiment from './components/MusicExperiment.svelte';

  type Tab = 'data-sonification' | 'music-experiment';

  function getTabFromHash(): Tab {
    const hash = window.location.hash.slice(1);
    if (hash === 'music-experiment') return 'music-experiment';
    return 'data-sonification';
  }

  let activeTab: Tab = $state(getTabFromHash());

  function setTab(tab: Tab) {
    activeTab = tab;
    window.location.hash = tab;
  }

  onMount(() => {
    if (!window.location.hash) {
      window.location.hash = 'data-sonification';
    }
    const onHashChange = () => { activeTab = getTabFromHash(); };
    window.addEventListener('hashchange', onHashChange);
    return () => window.removeEventListener('hashchange', onHashChange);
  });
</script>

<main>
  <nav>
    <button onclick={() => setTab('data-sonification')}>Data Sonification</button>
    <button onclick={() => setTab('music-experiment')}>Music Experiment</button>
  </nav>

  {#if activeTab === 'data-sonification'}
    <DataSonification />
  {:else}
    <MusicExperiment />
  {/if}
</main>
