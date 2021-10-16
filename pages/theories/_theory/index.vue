<template>
  <div class="container p-4 mx-auto">
		<h1 class="text-xl font-extrabold">{{theory.title}}</h1>
		<div class="mt-2 mb-4" v-html="$md.render(theory.body)"></div>
  </div>
</template>

<script>
  import { createClient } from '~/plugins/contentful.js';

  const client = createClient();

  export default {
    asyncData({ params }) {
      return Promise.all([
        client.getEntries({
          'sys.contentType.sys.id': 'theory',
					'include':5,
        })
      ])
        .then(([theories]) => {
					const theory = theories.items.filter(item => item.fields.slug == params.theory)[0].fields
          return {
						theory: theory
					}
        })
        .catch(console.error);
    },
		head() {
			return {
			title: `${this.theory.title} - Wife Swap Theories | Wifeapedia`,
			meta: [
				{
					hid: 'description',
					name: 'description',
					content: `Information related to the ${this.theory.title} conspiracy on Wife Swap`
				}
			],
			}
		}
  };
</script>