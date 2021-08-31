<template>
  <div>
    <h1>helo world</h1>
    <p>おはようございます{{ loginUserName }}さん</p>
    <v-btn @click="logout">logOut</v-btn>
  </div>
</template>

<script>
export default {
  computed: {
    loginUserName() {
      return this.$store.state.loginUserName;
    },
  },
  methods: {
    logout() {
      const router = this.$router;
      this.$store.dispatch("logout/logout", router);
    },
  },
  mounted() {
    const router = this.$router;
    this.$store.dispatch("stateChange", router);
  },
};
</script>
