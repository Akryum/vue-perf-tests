<script>
import LocalVarWith from './LocalVarWith'
import LocalVarWithout from './LocalVarWithout'

export default {
  created () {
    this.$_data = []
    this.$_count = 1000
    this.$_optimize = true
    this.$_active = false
  },

  methods: {
    generate () {
      const data = []
      for (let i = 0; i < this.$_count; i++) {
        data.push(Math.random() * 300)
      }
      this.$_data = data
      this.$forceUpdate()
      this.$_active && requestAnimationFrame(this.generate)
    },

    toggle () {
      this.$_active = !this.$_active
      if (this.$_active) {
        this.generate()
      }
    }
  },

  render (h) {
    const Component = this.$_optimize ? LocalVarWith : LocalVarWithout
    return h('div', [
      h('section', [
        h('label', [
          h('input', {
            attrs: { type: 'checkbox' },
            domProps: { checked: this.$_optimize },
            on: {
              change: () => {
                this.$_optimize = !this.$_optimize
              },
            },
          }),
          'Optimize',
        ]),
        h('button', {
          on: { click: this.toggle }
        }, 'Play/Stop')
      ]),
      h('section', this.$_data.map(
        data => h(Component, { props: { start: data } })
      ))
    ])
  },
}
</script>
