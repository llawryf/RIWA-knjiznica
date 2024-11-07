<template>
  <q-page padding>
  
    <q-toolbar>
      <q-toolbar-title>Pretraži knjige</q-toolbar-title>
    </q-toolbar>
    
    <div class="q-mb-md">
   
      <q-input
        v-model="searchQuery"
        label="Unesi pojam za pretragu"
        outlined
        debounce="300"
        class="q-mb-md"
      />

     
      <div class="q-mb-md">
        <q-checkbox
          v-model="searchByAuthor"
          label="Pretraži po autoru"
          color="primary"
        />
        <q-checkbox
          v-model="searchByTitle"
          label="Pretraži po naslovu"
          color="primary"
        />
      </div>

      
      <q-btn @click="searchBooks" label="Traži" color="primary" />
    </div>

    
    <q-table
      :rows="filteredBooks"
      :columns="columns"
      row-key="id"
      :pagination="pagination"
    >
      <template v-slot:top>
        <q-toolbar>
          <q-toolbar-title>Popis knjiga</q-toolbar-title>
        </q-toolbar>
      </template>
    </q-table>
  </q-page>
</template>

<script>
export default {
  name: 'BooksPage',

  data() {
    return {
      searchQuery: '', 
      searchByAuthor: false,
      searchByTitle: true,
      
      
      books: [
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
        { name: 'genre', label: 'Žanr', align: 'left', field: row => row.genre },
      ],

      
      pagination: {
        rowsPerPage: 5,
      },
      
     
      filteredBooks: [],
    };
  },

  methods: {
    
    searchBooks() {
      if (!this.searchQuery) {
        
        this.filteredBooks = this.books;
        return;
      }
      
      this.filteredBooks = this.books.filter(book => {
        let matches = false;

      
        if (this.searchByTitle && book.title.toLowerCase().includes(this.searchQuery.toLowerCase())) {
          matches = true;
        }
        if (this.searchByAuthor && book.author.toLowerCase().includes(this.searchQuery.toLowerCase())) {
          matches = true;
        }

        return matches;
      });
    },
  },


  mounted() {
    this.filteredBooks = this.books;
  },
};
</script>