<script>
  import { afterNavigate } from '$app/navigation';
  import { page } from '$app/stores';
  let { children } = $props();
  let active = $state(0)
  let v = $page.url.pathname
  let base = '/algoritmiz-l-s'
  const menu = [
    {name: "Home", link: base + "/"},
    {name: "Amőba", link: base + "/tictactoe"},
  ]
  const refresh = () => {
    v = $page.url.pathname
    menu.forEach((item, index) => {
      if (v == item.link) active = index
    })
  }
  afterNavigate(refresh)
  refresh()
</script>
<div class="ui pointing menu">
{#each menu as item}
    <a class="item {active === menu.indexOf(item) ? 'active' : ''}"
      onclick={() => {active = menu.indexOf(item)}} href={item.link}>
      {item.name}
    </a>
{/each}
</div>

{@render children()}
<style>
  .ui.menu a.item {
    cursor: pointer;
  }
  .ui.menu a.item:hover {
    background-color: #d9a9a9;
  }
</style>