<template>
  <div>
    <div>
      <input
        type="number"
        v-model.number="count"
        placeholder="Item count"
      >
      <label>
        <input type="checkbox" v-model="split">
        Split
      </label>
      <label>
        <input type="checkbox" v-model="optimize">
        Optimize
      </label>
      <button @click="onClick">Fetch items</button>
    </div>

    <div v-if="loading" class="loading">
      <div>Loading...</div>
      <div class="loader"></div>
    </div>

    <h1>{{ itemCount }} items</h1>

    <div>
      <label>
        <input type="checkbox" v-model="vscroll">
        Virtual scroller
      </label>
      <label>
        <input type="checkbox" v-model="scrollVisible">
        Visible
      </label>
    </div>

    <div v-if="!loading && scrollVisible">
      <virtual-scroller
        v-if="vscroll"
        class="items"
        :items="items"
        key-field="username"
        item-height="24"
        buffer="0"
        poll-size="600"
      >
        <FetchItemView
          slot-scope="{ item }"
          :key="item.username"
          :item="item"
          @vote="voteItem(item)"
        />
      </virtual-scroller>

      <div
        v-else
        class="items no-v"
      >
        <FetchItemView
          v-for="item of items"
          :key="item.username"
          :item="item"
          @vote="voteItem(item)"
        />
      </div>
    </div>
  </div>
</template>

<script>
import { mapState, mapGetters, mapMutations, mapActions } from 'vuex'
import FetchItemView from './FetchItemView'

export default {
  components: {
    FetchItemView,
  },

  data () {
    return {
      count: 1000,
      split: false,
      optimize: false,
      vscroll: false,
      scrollVisible: false,
    }
  },

  computed: {
    ...mapState([
      'loading',
      'items',
    ]),
    ...mapGetters([
      'itemCount'
    ]),
  },

  methods: {
    ...mapMutations([
      'voteItem',
    ]),
    ...mapActions([
      'fetchItems',
    ]),

    onClick () {
      this.fetchItems({
        count: this.count,
        split: this.split,
        optimize: this.optimize,
      })
    },
  },
}
</script>

<style lang="stylus" scoped>
.loading
  display flex
  flex-direction column
  align-items center
  justify-content center

  .loader
    width 42px
    height @width
    border-radius (@width / 2)
    border solid 0 #42b983
    border-right-width 2px
    animation loader .5s infinite linear

.items
  height calc(100vh - 200px)

  &.no-v
    overflow-x hidden
    overflow-y auto

@keyframes loader
  0%
    transform rotate(0deg)
  100%
    transform rotate(360deg)
</style>
