<template>
  <q-page padding>
    <div class="q-pa-md">
      <q-table
        separator="horizontal"
        title="Popis rezerviranih knjiga"
        title-class="text-h4 text-bold text-blue-9"
        :rows="reservedBooks"
        :columns="columns"
        row-key="id"
        table-class="text-black"
        table-style="border: 3px solid black;"
        table-header-style="height: 65px"
        table-header-class="bg-blue-2"
        bordered
        flat
        square
      >
        <template v-slot:header="props">
          <q-tr :props="props">
            <q-th
              v-for="col in props.cols"
              :key="col.name"
              :props="props"
            >
              {{ col.label }}
            </q-th>
          </q-tr>
        </template>
        <template v-slot:body="props">
          <q-tr :props="props">
            <q-td v-for="col in props.cols"
              :key="col.name"
              :props="props">
              <span v-if="col.name !='slika' && col.name!='opis'">
                {{ col.value }}
              </span>
              <div v-if="col.name=='opis'">
                <div class="tbl_opis">
                  {{ props.row.opis }}
                </div>
              </div>
              <q-img
                :src="props.row.slika"
                v-if="col.name =='slika'"
                size="100px" class="shadow-10">
              </q-img>
            </q-td>
          </q-tr>
        </template>
      </q-table>
    </div>
  </q-page>
</template>


<script>
import { ref, onMounted } from 'vue';
import axios from 'axios';

const style1 = {
  fontSize: '18px',
};

const style2 = {
  fontSize: '24px',
};

const columns = [

  {
    name: 'naslov',
    label: 'Naslov',
    field: 'naslov',
    align: 'left',
    sortable: true,
    style: style1,
    headerStyle: style2,
  },
  {
    name: 'autor',
    label: 'Autor',
    field: 'autor',
    align: 'left',
    style: style1,
    headerStyle: style2,
  },

  {
    name: 'datum_rez',
    label: 'Datum rezervacije',
    field: 'datum_rez',
    align: 'center',
    style: style1,
    headerStyle: style2,
  },
  {
    name: 'ime',
    label: 'Ime',
    field: 'ime',
    align: 'center',
    style: style1,
    headerStyle: style2,
  },
  {
    name: 'prezime',
    label: 'Prezime',
    field: 'prezime',
    align: 'center',
    style: style1,
    headerStyle: style2,
  }
];

export default {
  setup() {
    const reservedBooks = ref([]);
    const pagination = ref({
      rowsPerPage: 10,
    });

    const loadReservedBooks = async () => {
      try {

        const result = await axios.get(`http://localhost:3000/api/rezervirane_knjige/2`);
        if (Array.isArray(result.data)) {
          console.log(result.data);
          reservedBooks.value = result.data;
        } else {
          console.error('API response is not in the expected format:', result.data);
        }
      } catch (error) {
        console.error('Error loading reserved books:', error.response || error.message);
      }
    };

    onMounted(() => {
      loadReservedBooks();
    });

    return {
      columns,
      reservedBooks,  // Bind the reservedBooks data
      pagination,
    };
  },
};
</script>

