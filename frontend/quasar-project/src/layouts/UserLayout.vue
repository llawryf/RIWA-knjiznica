<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated>
      <q-toolbar>
        <q-btn
          flat
          dense
          round
          icon="menu"
          aria-label="Menu"
          @click="toggleLeftDrawer"
        />

        <q-toolbar-title class="text-h2">
          Knjižnica
        </q-toolbar-title>

        <div>Quasar v{{ $q.version }}</div>
      </q-toolbar>
    </q-header>

    <q-drawer
      v-model="leftDrawerOpen"
      show-if-above
      bordered
    >
      <q-list>
        <q-item-label
          header
        >
          Essential Links
        </q-item-label>

        <EssentialLink
          v-for="link in linksList"
          :key="link.title"
          v-bind="link"
        />
      </q-list>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script setup>
import { ref } from 'vue'
import EssentialLink from 'components/EssentialLink.vue'

defineOptions({
  name: 'MainLayout'
})



const linksList = [  //izbornik
  {
    title: 'Početna',
    caption: 'Početna stranica',
    icon: 'home',
    link: '#/user'
  },
  {
    title: 'popis knjiga',
    caption: 'popis svih knjiga u knjižnici',
    icon: 'book',
    link: '#/user/popisKnjiga'
  },
  {
    title: 'pretraživanje',
    caption: 'pretraživanje',
    icon: 'search',
    link: '#/user/pretrazivanje'
  },

  {
    title: 'Login',
    caption: 'login',
    icon: 'login',
    link: '#/user/login'
  },
  {
    title: 'Registracija',
    caption: 'registracija',
    icon: 'person_add',
    link: '#/user/registracija'
  },
  {
    title: 'Baza',
    caption: 'baza',
    icon: 'dataset',
    link: '#/user/baza'
  },
  {
    title: 'Rezervirane knjige',
    caption: 'rezervirane knjige',
    icon: 'library_add_check',
    link: '#/user/rezKnjige'
  }
]

const leftDrawerOpen = ref(false)

function toggleLeftDrawer () {
  leftDrawerOpen.value = !leftDrawerOpen.value
}
</script>
