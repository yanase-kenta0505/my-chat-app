<template>
  <div>
    <v-btn @click="login">login</v-btn>
    <!-- <v-container>
    <v-row style="height:200px; background-color:pink;">
      <v-col style="background-color:blue" cols="4" >
        <v-btn>login</v-btn>
      </v-col>
    </v-row>
  </v-container> -->
  </div>
</template>

<script>
export default {
  methods: {
    login() {
      const router = this.$router
      this.$store.dispatch('login/login',router);
    },
  },
};
</script>