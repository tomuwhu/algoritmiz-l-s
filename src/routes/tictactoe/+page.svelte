<script>
  const T = n => Array.from({length: n})
  var t = $state(T(20).map(_ => T(30).fill('')))
  var next = $state('X')
</script>
<style>
  table {
    border-spacing: 5px;
  }
  td {
    width: 30px;
    height: 30px;
    border: 1px solid black;
    border-radius: 10px;
    cursor: pointer;
  }
  .X {
    background-color: rgb(252, 170, 170);
  }
  .O {
    background-color: rgb(178, 178, 255);
  }
  td:hover {
    background-color: rgb(177, 177, 177);
  }
</style>
<h1>Amőba</h1>
<hr>
<table>
  <tbody>
  {#each t as row, i}
    <tr>
    {#each row as v, j}
      <td
        class="{v}"
        onclick={() => {
          t[i][j] = next = next == 'X' ? 'O' : 'X'
        }}
      >{v}</td>
    {/each}
    </tr>
  {/each}
  </tbody>
</table>

