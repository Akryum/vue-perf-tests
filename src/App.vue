<template>
  <div id="app">
    <nav>
      <router-link :to="{ name: 'static-tree' }">Static tree</router-link>
    </nav>

    <main>
      <router-view/>
    </main>
  </div>
</template>

<style lang="stylus">
body
  background #28282a

#app
  font-family: 'Avenir', Helvetica, Arial, sans-serif
  -webkit-font-smoothing: antialiased
  -moz-osx-font-smoothing: grayscale
  color: #c8c8ca

a
  color: #42b983
</style>
