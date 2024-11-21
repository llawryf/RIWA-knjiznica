<template>
  <div class="q-pa-md">
    <h3>Tražilica</h3>

    <div>
      <h4>
        Ova stranica služi za pretrazivanje knjiga
      </h4>
    </div>

    <div class="q-pa-md">
      <div class="q-gutter-md" style="max-width: 300px">
        <q-input
          square
          outlined
          v-model="text"
          label="Unesite pojam za pretragu"
        />
      </div>

      <div class="q-mb-md">
        <div>
          <q-checkbox
            left-label
            v-model="poAutoru"
            label="Autor"
          />
        </div>
        <div>
          <q-checkbox
            left-label
            v-model="poNazivu"
            label="Naziv"
          />
        </div>
      </div>

      <div class="q-pa-md q-gutter-sm">
        <q-btn color="primary" label="Traži" @click="filterBooks" />
      </div>
    </div>

    <q-table
      title="Knjige"
      :rows="filteredRows"
      :columns="columns"
      row-key="id"
    />
  </div>
</template>

<script>
export default {
  data() {
    return {
      // Search text input and filter conditions
      text: '',
      poAutoru: false,
      poNazivu: false,

      // Initial rows of books
      rows: [
        { id: 6, title: 'Pride and Prejudice', author: 'Jane Austen', year: 1813, genre: 'Romance' },
        { id: 7, title: 'The Catcher in the Rye', author: 'J.D. Salinger', year: 1951, genre: 'Fiction' },
        { id: 8, title: 'The Odyssey', author: 'Homer', year: -800, genre: 'Epic' },
        { id: 9, title: 'Brave New World', author: 'Aldous Huxley', year: 1932, genre: 'Dystopian' },
        { id: 10, title: 'Crime and Punishment', author: 'Fyodor Dostoevsky', year: 1866, genre: 'Psychological Fiction' }
      ],

      columns: [
        { name: 'title', label: 'Naziv knjige', align: 'left', field: row => row.title },
        { name: 'author', label: 'Autor', align: 'left', field: row => row.author },
        { name: 'year', label: 'Godina izdavanja', align: 'center', field: row => row.year },
        { name: 'genre', label: 'Žanr', align: 'left', field: row => row.genre }
      ],

      // Filtered rows will be stored here
      filteredRows: []
    };
  },
  watch: {
    // Watch for changes in the search input or filter checkboxes
    text() {
      this.filterBooks();
    },
    poAutoru() {
      this.filterBooks();
    },
    poNazivu() {
      this.filterBooks();
    }
  },
  methods: {
    // Filter books based on search conditions
    filterBooks() {
      const searchText=this.text.toLowerCase();

      if(!this.poNazivu&&!this.poAutoru)
    {
      this.filteredRows=this.rows.filter(book=>
        {
          return(
            book.title.toLowerCase().includes(searchText) || book.author.toLowerCase().includes(searchText)
          );
        });
    }else{
      if(this.poNazivu&&!this.poAutoru){
        this.filteredRows=this.rows.filter(book=>
        book.title.toLowerCase().includes(searchText)
        );
      }
    }

    if(!this.poNazivu&&this.poAutoru){
      this.filteredRows=this.rows.filter(book=>
        book.author.toLowerCase().includes(searchText)
      )
    }

    if(this.poAutoru&&this.poNazivu){
      this.filteredRows=this.rows.filter(book=>
        book.title.toLowerCase().includes(searchText) || book.author.toLowerCase().includes(searchText)
      )
    }


    }
  },
  created() {
    // Initialize filteredRows with all books when component is created
    this.filteredRows = this.rows;
  }
};
</script>
