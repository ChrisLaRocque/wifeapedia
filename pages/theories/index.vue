<template>
  <div class="container p-4 mx-auto">
    <h1 class="text-3xl font-extrabold">Theories</h1>
	 <p>Fan theories related to television show Wife Swap.</p>
		<div class="theories-container p-2">
			<h2 class="text-2xl font-extrabold my-4">All theories</h2>
			<div v-if="theories" class="sm:no-flex flex">
				<div v-for="theory in theories" :key="theory.fields.title" class="rounded-md shadow-md hover:shadow-lg p-4">
					<h3 class="text-xl font-extrabold">{{theory.fields.title}}</h3>
					<div class="mt-2 mb-4" v-html="$md.render(theory.fields.body)"></div>
					<button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
						<NuxtLink :to="`${$nuxt.$route.path}/${theory.fields.slug}/`">Read more</NuxtLink>
					</button>
				</div>
			</div>
		</div>
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
        }),
      ])
        .then(([theories]) => {
					const theoryItems = theories.items
					return {
						theories: theoryItems,
					}
        })
        .catch(console.error);
    },
		head() {
			return {
			title: `Wife Swap fan theories`,
			meta: [
				{
					hid: 'description',
					name: 'description',
					content: 'Fan theories surrounding the television show Wife Swap'
				}
			],
			}
		}
  };
</script>