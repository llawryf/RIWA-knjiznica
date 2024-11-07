<template>
  <q-page padding>
    <h1>popis knjiga</h1>
    <br>
    <p>ovdje možete naći popis dostupnih knjiga</p>

    <table border="1" cellpadding="10" cellspacing="0">
  <thead>
    <tr>
      <th>ID</th>
      <th>Naslov</th>
      <th>Autor</th>
      <th>Opis</th>
      <th>Slika</th>
      <th>Stanje</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>6</td>
      <td>Pride and Prejudice</td>
      <td>Jane Austen</td>
      <td>Romantična priča o ljubavi i društvenim normama.</td>
      <td><img src="" alt="Pride and Prejudice"></td>
      <td>5</td>
    </tr>
    <tr>
      <td>7</td>
      <td>The Catcher in the Rye</td>
      <td>J.D. Salinger</td>
      <td>Priča o pubertetskoj potrazi za smislom života.</td>
      <td><img src="" alt="The Catcher in the Rye"></td>
      <td>4</td>
    </tr>
    <tr>
      <td>8</td>
      <td>The Odyssey</td>
      <td>Homer</td>
      <td>Ep o Odisejevom povratku kući nakon Trojanskog rata.</td>
      <td><img src="" alt="The Odyssey"></td>
      <td>3</td>
    </tr>
    <tr>
      <td>9</td>
      <td>Brave New World</td>
      <td>Aldous Huxley</td>
      <td>Dystopijska vizija futurističkog društva.</td>
      <td><img src="" alt="Brave New World"></td>
      <td>6</td>
    </tr>
    <tr>
      <td>10</td>
      <td>Crime and Punishment</td>
      <td>Fyodor Dostoevsky</td>
      <td>Psihološki roman o kriminalu i kajanju.</td>
      <td><img src="" alt="Crime and Punishment"></td>
      <td>7</td>
    </tr>
  </tbody>
</table>

  </q-page>
</template>

<script>
export default {
  // name: 'PageName',
}
</script>
