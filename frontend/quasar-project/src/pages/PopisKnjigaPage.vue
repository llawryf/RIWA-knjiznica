<template>
  <q-page padding>
    <div class="q-pa-md">
      <q-table
        separator="horizontal"
        title="Popis knjiga"
        title-class="text-h4 text-bold text-red-9"
        :rows="rows"
        :columns="columns"
        row-key="id"
        table-class="text-black"
        table-style="border: 3px solid black;"
        table-header-style="height: 65px"
        table-header-class="bg-red-2"
        bordered
        flat
        square
      >
      </q-table>

    </div>
  </q-page>
</template>

<script>
import { ref } from 'vue'

const columns = [
  {
    name:'id',
    label:'id',
    field:'id',
    align:'left',
    sortable: true,
    style: {
      fontSize:'18px'
    },
    headerStyle: {
      fontSize: '24px'
    }
  },
  {
    name: 'naslov',
    label: 'naslov',
    field: 'naslov',
    align:'left',
    sortable: true,
    style: {
      fontSize:'18px'
    },
    headerStyle: {
      fontSize: '24px'
    }
  },
  {
    name: 'autor',
    label: 'autor',
    field: 'autor',
    align:'left',
    style: {
      fontSize:'18px'
    },
    headerStyle: {
      fontSize: '24px'
    }
  },
//  { name: 'opis', label: 'opis', field: 'opis', align:'center' },
//  { name: 'slika', label: 'slika', field: 'slika', align:'center' },
  {
    name: 'stanje',
    label: 'stanje',
    field: 'stanje',
    align:'center',
    style: {
      fontSize:'18px'
    },
    headerStyle: {
      fontSize: '24px'
    }
  }
]

const rows = [
  {
    id:'1',
    naslov: 'Pride and Prejudice',
    autor: 'Jane Austen',
    opis: 'Pride and Prejudice follows the turbulent relationship between Elizabeth Bennet, the daughter of a country gentleman, and Fitzwilliam Darcy, a rich aristocratic landowner.',
    slika: 'https://cdn.thestorygraph.com/w0ej4okqipva0xu2jclwfp0xmfdo.jpg',
    stanje: '4'
  },
  {
    id:'2',
    naslov: 'The Catcher in the Rye',
    autor: 'J. D. Salinger',
    opis: 'The Catcher in the Rye is an all-time classic in coming-of-age literature- an elegy to teenage alienation, capturing the deeply human need for connection ',
    slika: 'https://m.media-amazon.com/images/I/7125+5E40JL._SL1500_.jpg',
    stanje: '5'
  },
  {
    id:'3',
    naslov: 'Brave New World',
    autor: 'Aldous Huxley',
    opis: 'Brave New World is a searching vision of an unequal, technologically-advanced future where humans are genetically bred, socially indoctrinated, and pharmaceutically anesthetized to passively uphold an authoritarian ruling order–all at the cost of our freedom, full humanity, and perhaps also our souls.',
    slika: 'https://m.media-amazon.com/images/I/81BXnTqH7-L._SL1500_.jpg',
    stanje: '2'
  },
  {
    id:'4',
    naslov: 'The Odyssey',
    autor: 'Homer',
    opis: 'Odyssey, epic poem in 24 books traditionally attributed to the ancient Greek poet Homer. The poem is the story of Odysseus, king of Ithaca, who wanders for 10 years (although the action of the poem covers only the final six weeks) trying to get home after the Trojan War.',
    slika: 'https://m.media-amazon.com/images/I/71DUtMXVRuL._SL1490_.jpg',
    stanje: '6'
  },
  {
    id:'5',
    naslov: 'Crime and Punishment',
    autor: 'Fyodor Dostoevsky',
    opis: 'First published in 1866, Crime and Punishment is the excruciatingly-detailed psycho-epic about the murder of a pawn shop owner (and her sister). ',
    slika: 'https://m.media-amazon.com/images/I/71DUtMXVRuL._SL1490_.jpg',
    stanje: '2'
  },
]

export default {
  setup () {
    return {
      columns,
      rows,
      pagination: ref({
        rowsPerPage: 10
      }),
    }
  }
}

</script>
