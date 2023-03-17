<script lang="ts">
  import WaterDrop from '$lib/WaterDrop.svelte';
</script>

<header class="header">
  <div class="brand">
    <div class="brand-top">
      <WaterDrop fill={'#222222'} />
    </div>
    <div class="brand-btm">
      <h1>ColorDrop</h1>
      <p>Color Palettes Made Easy</p>
    </div>
  </div>
</header>

<style>
  .brand {
    padding: 5px;
    display: flex;
    align-items: center;
    gap: 5px;
  }
  h1 {
    font-size: 32px;
  }
</style>