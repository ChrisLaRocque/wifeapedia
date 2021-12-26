export { default as FamilyCards } from '../../components/FamilyCards.vue'
export { default as Nav } from '../../components/Nav.vue'
export { default as PeopleCards } from '../../components/PeopleCards.vue'
export { default as QuoteCards } from '../../components/QuoteCards.vue'
export { default as TableList } from '../../components/TableList.vue'
export { default as UserAuthForm } from '../../components/UserAuthForm.vue'

// nuxt/nuxt.js#8607
function wrapFunctional(options) {
  if (!options || !options.functional) {
    return options
  }

  const propKeys = Array.isArray(options.props) ? options.props : Object.keys(options.props || {})

  return {
    render(h) {
      const attrs = {}
      const props = {}

      for (const key in this.$attrs) {
        if (propKeys.includes(key)) {
          props[key] = this.$attrs[key]
        } else {
          attrs[key] = this.$attrs[key]
        }
      }

      return h(options, {
        on: this.$listeners,
        attrs,
        props,
        scopedSlots: this.$scopedSlots,
      }, this.$slots.default)
    }
  }
}
