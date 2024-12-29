<template>
  <q-page padding>
    <h1>Registrirajte se</h1>
    <br>
    <div class="q-pa-md" style="max-width: 400px">
      <div>
      <h4>
        Ova stranica služi za registraciju
      </h4>
    </div>
<q-form
  @submit="onSubmit"
  @reset="onReset"
  class="q-gutter-md"
>
  <q-input
    filled
    v-model="name"
    label="Your name *"
    hint="Name"
    lazy-rules
    :rules="[ val => val && val.length > 0 || 'Please type something']"
  />

  <q-input
    filled

    v-model="surname"
    label="Your surname *"
     hint="surname"
    lazy-rules
    :rules="[ val => val && val.length > 0 || 'Please type something']"
  />

  <q-input
    filled
    v-model="mail"
    label="Your email *"
    hint="mail"
    lazy-rules
    :rules="[ val => val && val.length > 0 || 'Please type something']"
  />

  <q-input
    filled
    v-model="username"
    label="Your username *"
    hint="username"
    lazy-rules
    :rules="[ val => val && val.length > 0 || 'Please type something']"
  />

  <q-input
    filled
    v-model="password"
    label="Your password *"
    hint="password"
    lazy-rules
    :rules="[ val => val && val.length > 0 || 'Please type something']"
  />



  <div>
    <q-btn label="Submit" type="submit" color="primary"  @click="insert()"/>
    <q-btn label="Reset" type="reset" color="primary" flat class="q-ml-sm" />
  </div>
</q-form>

</div>
</q-page>
</template>

<script>

import axios from 'axios'
import { useQuasar } from 'quasar'
import { ref,onMounted } from 'vue'

export default {
setup () {
const $q = useQuasar()

const name = ref(null)
const surname = ref(null)
const username = ref(null)
const password = ref(null)
const mail=ref(null)

return {
  name,
  surname,
  mail,
  username,
  password,

  onSubmit () {
    if (!name.value|| !surname.value|| !username.value|| !password.value|| !mail.value) {
      $q.notify({
        color: 'red-5',
        textColor: 'white',
        icon: 'warning',
        message: 'All fields are required , please fill them out.'
      })
    }
    else {
      $q.notify({
        color: 'green-4',
        textColor: 'white',
        icon: 'cloud_done',
        message: 'Submitted'
      })
    }
  },

  onReset () {
    name.value = null
    surname.value = null
    username.value = null
    password.value = null
    mail.value = null
  }

}
},
methods:{
  async insertUser(){
    const userData={
      "ime":this.name,
      "prezime":this.surname,
      "korime":this.username,
      "lozinka":this.password,
      "mail":this.mail
    }
    await axios.post('http://localhost:3000/api/registracija_kor', userData)
    .then(result=>{
      console.log(result.data)
    })
    .catch(error=>{
      console.log(error)
    })
  }
},
}



</script>
