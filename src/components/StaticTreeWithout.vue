<script>
export default {
  props: ['message'],
  render () {
    var _vm = this;
    var _h = _vm.$createElement;
    var _c = _vm._self._c || _h;
    return _c('div', [
      _c('section', [
        _c('h2', [
          _vm._v("Static section")
        ]),
        _vm._v(" "),
        _c('p', [
          _vm._v("Neque est aut assumenda. Natus eos nulla consequatur natus eligendi. Quos praesentium et quia velit vero quia quo quo.")
        ]),
        _vm._v(" "),
        _c('p', [
          _vm._v("Explicabo at et repellendus voluptates sunt. Quia quos quos consequatur quibusdam. Magni vel facilis sed dolores debitis.")
        ]),
        _vm._v(" "),
        _c('p', [
          _vm._v("Accusamus eveniet velit qui excepturi est. Rerum est sequi neque doloremque non. Eos repellat tenetur occaecati similique.")
        ]),
        _vm._v(" "),
        _c('p', [
          _vm._v("Ut perspiciatis omnis reprehenderit et rerum accusamus facilis. Ut aut beatae eveniet veniam minima. Voluptas sit expedita similique blanditiis. Esse consectetur suscipit provident vitae laudantium.")
        ]),
        _vm._v(" "),
        _c('p', [
          _vm._v("Omnis cum atque sequi sit quasi corporis. Culpa quis error qui nesciunt et. Doloremque pariatur enim placeat quaerat aperiam.")
        ])
      ]),
      _vm._v(" "),
      _c('section', [
        _c('h2', [
          _vm._v("Dynamic tree")
        ]),
        _vm._v(" "),
        _c('p', [
          _vm._v(_vm._s(_vm.message))
        ])
      ])
    ])
  }
}
</script>
