<script>
  import { onMount } from "svelte";
  var v = $state(10);
  import { HighlightSvelte, HighlightAuto } from "svelte-highlight";
  import theme from "svelte-highlight/styles/stackoverflow-dark";
  var code = $state('')
  onMount(() => {
    fetch('src/amoba.svelte').then(res => res.text()).then(text => {
      code = text
    })
  })
</script>
<svelte:head>
  {@html theme}
</svelte:head>
<!-- svelte-ignore a11y_consider_explicit_label -->
<button class="ui red button" onclick={() => {v++}}>Cica</button>
    <div class="ui divider"></div>
{v}
Cica fdg
<hr>
<code>
<HighlightAuto {code} />
</code>