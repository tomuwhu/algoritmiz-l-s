<script>
  var t = Array.from({length: 10}).map(v => Array(10).fill(0))
</script>
Cica
<hr>
<table>
  <tbody>
  {#each t as row}
    <tr>
    {#each row as col}
      <td>{col}</td>
    {/each}
    </tr>
  {/each}
  </tbody>
</table>

