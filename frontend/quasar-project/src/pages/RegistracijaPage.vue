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
    <q-btn label="Submit" type="submit" color="primary"/>
    <q-btn label="Reset" type="reset" color="primary" flat class="q-ml-sm" />
  </div>
</q-form>

</div>
</q-page>
</template>

<script>
import { useQuasar } from 'quasar'
import { ref } from 'vue'

export default {
setup () {
const $q = useQuasar()

const name = ref(null)
const surname = ref(null)
const username = ref(null)
const password = ref(null)
const accept = ref(false)

return {
  name,
  surname,
  accept,
  username,
  password,

  onSubmit () {
    if (accept.value !== true) {
      $q.notify({
        color: 'red-5',
        textColor: 'white',
        icon: 'warning',
        message: 'You need to accept the license and terms first'
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
    accept.value = false
  }
}
}
}
</script>