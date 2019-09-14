<template>
  <v-ons-navigator :page-stack="pageStack" :pop-page="storePop">
  </v-ons-navigator>
</template>

<script>
  import AppTabbar from '@/pages/homeMenu/AppTabbar'

  export default {
    beforeCreate() {
      this.$store.commit('navigator/push', AppTabbar);
    },
    computed: {
      pageStack() {
        return this.$store.state.navigator.stack;
      },
      options() {
        return this.$store.state.navigator.options;
      }
    },
    methods: {
      storePop() {
        this.$store.commit('navigator/pop');
      }
    }
  };

</script>
<style lang="scss">
  * {
    box-sizing: border-box;
  }

  .list-item {
    padding: 0;
    &__center {
      padding: 0;
    }
  }

</style>
