<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div>
    <router-view/>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import router from './router';

@Component({
  router,
  props: ['inputData'],
})
export default class App extends Vue {
  readonly inputData!: string;

  created() {
    this.$nextTick(() => {
      this.$emit('dataChanged', 'child app initialized');
    });
  }

  updated() {
    console.log('child-app, input binding from main app : ', this.inputData);
  }
}
</script>

<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
