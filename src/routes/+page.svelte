<script>
  import { onMount } from "svelte";
  var v = $state(10);
  import { HighlightAuto } from "svelte-highlight";
  import theme from "svelte-highlight/styles/zenburn";
  var code = $state('')
  var loaded = $state('src/menu.svelte')
  var sourcelist = ['src/home.svelte', 'src/amoba.svelte', 'src/menu.svelte', 'src/helloworld.c++']
  onMount(() => fetch(loaded).then(v => v.text()).then(v => code = v))
</script>
<svelte:head>
  {@html theme}
</svelte:head>
<button class="ui red button" onclick={() => {v++}}>Increment</button>
{#each sourcelist as source}
  {#if source != loaded}
  <button class="ui {source.split('.').pop() == 'c++' ? 'orange' : 'blue'} button" onclick={() => {
    fetch(source).then(res => res.text()).then(text => {
      code = text
      loaded = source
    })
  }}>{source.split('/').pop().split('.')[0]}</button>
  {:else}
  <button class="ui {loaded.split('.').pop() == 'c++' ? 'orange' : 'blue'} basic button">{loaded.split('/').pop().split('.')[0]}</button>
  {/if}
{/each}
<div class="ui divider"></div>
<h1>{v}</h1>
<hr>
<h1>{loaded.split('/').pop()}</h1>
<code>
<HighlightAuto {code} />
</code>