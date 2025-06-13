<script>
  const T = n => Array.from({length: n})
  var t = $state(T(16).map(_ => T(25).fill('')))
  var next = $state('X')
  var end = $state(false)
  const check = (x, y, next) => {
    var c;
    [[1, 1], [1, -1], [1, 0], [0, 1]].forEach(ir => {
      c = 0
      let [ix, iy] = ir
      let [xp, yp] = [x, y]
      while (t[xp] && t[xp][yp] == next) xp += ix, yp += iy, c++
      [xp, yp] = [x, y]
      while (t[xp] && t[xp][yp] == next) xp -= ix, yp -= iy, c++
      if (c > 5) end = true
    })
  }
</script>

<table>
  <tbody>
  {#each t as row, i}
    <tr>
    {#each row as v, j}
      <td
        class="{v}"
        onclick={() => {
          if (!end) {
            t[i][j] = next
            check(i, j, next)
            if (!end) next = next == 'X' ? 'O' : 'X'
          }
        }}
      >{v}</td>
    {/each}
    </tr>
  {/each}
  </tbody>
</table>
{#if end}
  <h3>Nyert "{next}"</h3>
{/if}

<style>
  table { border-spacing: 5px; }
  td {
    width: 30px;
    height: 30px;
    border: 1px solid rgb(195, 195, 195);
    border-radius: 10px;
    cursor: pointer;
  }
  .X { background-color: rgb(252, 170, 170); }
  .O { background-color: rgb(178, 197, 255); }
  td:hover { background-color: rgb(177, 177, 177); }
</style>