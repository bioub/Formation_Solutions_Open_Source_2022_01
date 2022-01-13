<template>
  <form @submit="create($event)">
  <p>
    Prénom :
    <!-- <input type="text" name="prenom" :value="user.prenom" @input="user.prenom = $event.target.value" /> -->
    <input type="text" name="prenom" v-model="user.prenom" />
  </p>
  <p>
    Email :
    <!-- <input type="email" name="email" :value="user.email"  @input="updateEmail($event)" /> -->
    <input type="email" name="email" v-model="user.email" />
  </p>
  <p>
    Compte actif :
    <!-- <input type="checkbox" name="active" :checked="user.isActive" @change="user.isActive = $event.target.checked" :class="{active: user.isActive}" /> -->
    <input type="checkbox" name="active" v-model="user.isActive" :class="{active: user.isActive}" />
  </p>
  <p>
    <button>Envoyer</button>
  </p>
</form>

</template>

<script>
export default {
  name: 'UserForm',
  data() {
    return {
      user: {
        prenom: 'Romain',
        email: 'romain.bohdanowicz@formation.tech',
        isActive: true,
      },
    };
  },
  methods: {
    create(event) {
      event.preventDefault();
    },
    updateEmail(event) {
      this.user.email = event.target.value;
    }
  }
}
</script>
