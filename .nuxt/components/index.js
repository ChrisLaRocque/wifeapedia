export const FamilyCards = () => import('../../components/FamilyCards.vue' /* webpackChunkName: "components/family-cards" */).then(c => wrapFunctional(c.default || c))
export const Nav = () => import('../../components/Nav.vue' /* webpackChunkName: "components/nav" */).then(c => wrapFunctional(c.default || c))
export const PeopleCards = () => import('../../components/PeopleCards.vue' /* webpackChunkName: "components/people-cards" */).then(c => wrapFunctional(c.default || c))
export const QuoteCards = () => import('../../components/QuoteCards.vue' /* webpackChunkName: "components/quote-cards" */).then(c => wrapFunctional(c.default || c))
export const TableList = () => import('../../components/TableList.vue' /* webpackChunkName: "components/table-list" */).then(c => wrapFunctional(c.default || c))

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
