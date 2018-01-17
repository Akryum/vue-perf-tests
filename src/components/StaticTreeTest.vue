<script>
import faker from 'faker'
import StaticTreeWith from './StaticTreeWith'
import StaticTreeWithout from './StaticTreeWithout'

export default {
  created () {
    this.$_data = []
    this.$_optimize = true
    this.$_count = 10000
  },

  methods: {
    generate () {
      const count = this.$_count
      const data = []
      for (let i = 0; i < count; i++) {
        data.push(faker.fake("{{name.lastName}}, {{name.firstName}} {{name.suffix}}"))
      }
      this.$_data = data
      this.$forceUpdate()
    },
  },

  render (h) {
    const Component = this.$_optimize ? StaticTreeWith : StaticTreeWithout
    console.log(this.$_optimize, this.$_count)
    return h('div', [
      h('section', [
        h('input', {
          attrs: { type: 'number' },
          domProps: {
            'value': this.$_count,
          },
          on: {
            input: (e) => {
              this.$_count = this._n(e.target.value)
            }
          }
        }),
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
          on: { click: this.generate }
        }, 'Generate')
      ]),
      h('section', this.$_data.map(
        data => h(Component, { props: { message: data } })
      ))
    ])
  },
}
</script>
