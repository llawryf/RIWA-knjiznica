<template>
  <q-page padding>
    <h1>Prijavite se</h1>
    <div class="q-pa-md" style="max-width: 400px">
    <div>
      <h4>
        Ova stranica služi za prijavu
      </h4>
    </div>
<q-form
  @submit="onSubmit"
  @reset="onReset"
  class="q-gutter-md"
>
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
    label="Your password"
    lazy-rules
    :rules="[ val => val && val.length > 0 || 'Please type something']"
  />



  <div>
    <q-btn label="Submit" type="submit" color="primary" @click="loginUser"/>
    <q-btn label="Reset" type="reset" color="primary" flat class="q-ml-sm" />
  </div>
</q-form>

</div>
  </q-page>
</template>

<script>
import { useQuasar } from "quasar";
import { ref } from "vue";
import axios from "axios";
import { useRouter } from "vue-router";

export default {
  setup() {
    const $q = useQuasar();
    const router = useRouter();

    const username = ref(null);
    const password = ref(null);

    const loginUser = async (username, password) => {
      try {
        const response = await axios.post("http://localhost:3000/api/login", {
          username,
          password,
        });

        if (response.data.success) {
          $q.notify({
            color: "green-4",
            textColor: "white",
            icon: "cloud_done",
            message: "Login successful! Redirecting...",
          });

          router.push("/user");
        } else {
          $q.notify({
            color: "red-5",
            textColor: "white",
            icon: "warning",
            message: "Invalid username or password. Please try again.",
          });
        }
      } catch (error) {
        console.error("Error during login:", error.response || error.message);
        $q.notify({
          color: "red-5",
          textColor: "white",
          icon: "error",
          message: "Login failed. Please try again later.",
        });
      }
    };

    const onSubmit = async () => {
      if (!username.value || !password.value) {
        $q.notify({
          color: "red-5",
          textColor: "white",
          icon: "warning",
          message: "All fields are required for logging in, please fill them up.",
        });
        return;
      }

      await loginUser(username.value, password.value);
    };

    const onReset = () => {
      username.value = null;
      password.value = null;
    };

    return {
      username,
      password,
      onSubmit,
      onReset,
    };
  },
};
</script>

