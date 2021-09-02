<template>
  <div>
    <h1>hello world</h1>
    <p>おはようございます{{ loginUserName }}さん</p>
    <v-textarea
      v-model="comment"
      name="input-7-4"
      filled
      label="comment"
      auto-grow
    ></v-textarea>

    <v-btn @click="post">POST</v-btn>
    <v-btn @click="logout" class="mt-10">logOut</v-btn>
  </div>
</template>

<script>
export default {
  data() {
    return {
      comment: "",
    };
  },
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
    post(){
      this.$store.dispatch('chat/post', this.comment);
      this.comment = ""
    }
  },
  mounted() {
    const router = this.$router;
    this.$store.dispatch("stateChange", router);
    this.$store.dispatch('chat/snapshot');

  },
};
</script>
