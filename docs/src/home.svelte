<script>
  import { onMount } from "svelte";
  var v = $state(10);
  import { HighlightSvelte, HighlightAuto } from "svelte-highlight";
  import theme from "svelte-highlight/styles/stackoverflow-dark";
  var code = $state('')
  var loaded = $state('src/menu.svelte')
  var sourcelist = ['src/home.svelte', 'src/amoba.svelte', 'src/menu.svelte']
  onMount(() => {
    fetch(loaded).then(res => res.text()).then(text => {
      code = text
    })
  })
</script>
<svelte:head>
  {@html theme}
</svelte:head>
<!-- svelte-ignore a11y_consider_explicit_label -->
<button class="ui red button" onclick={() => {v++}}>Increment</button>
{#each sourcelist as source}
  {#if source != loaded}
  <button class="ui blue button" onclick={() => {
    fetch(source).then(res => res.text()).then(text => {
      code = text
      loaded = source
    })
  }}>{source.split('/').pop().split('.')[0]}</button>
  {:else}
  <button class="ui blue basic button">{loaded.split('/').pop().split('.')[0]}</button>
  {/if}
{/each}
<div class="ui divider"></div>
<h1>{v}</h1>
<hr>
<h2>{loaded.split('/').pop()}</h2>
<code>
<HighlightAuto {code} />
</code>