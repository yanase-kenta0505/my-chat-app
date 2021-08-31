<template>
  <div>
    <h1>helo world</h1>
    <v-btn @click="logout">logOut</v-btn>
  </div>
</template>

<script>
export default {
  methods: {
    logout() {
      const router = this.$router;
      this.$store.dispatch("logout/logout", router);
    },
  },
};
</script>
