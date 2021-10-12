<template>
  <div class="container p-4 mx-auto">
    <h1 class="text-3xl font-extrabold">{{ series.fields.title }}</h1>
    <p class="mt-2 mb-4">{{ series.fields.description }}</p>
    <NuxtLink :to="`${$nuxt.$route.path}/seasons/`">
      <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
        Seasons
      </button>
    </NuxtLink>
  </div>
</template>

<script>
  import { createClient } from '~/plugins/contentful.js';

  const client = createClient();

  export default {
    asyncData({ params }) {
      return Promise.all([
        client.getEntries({
          'sys.contentType.sys.id': 'series',
        }),
      ])
        .then(([series]) => {
					const currentSeries = series.items.filter(item => item.fields.slug == params.series)[0]
          return {
						series: currentSeries,
					}
        })
        .catch(console.error);
    },
		head() {
			return {
			title: this.series.fields.title,
			meta: [
				{
					hid: 'description',
					name: 'description',
					content: this.series.fields.description
				}
			],
			}
		}
  };
</script>