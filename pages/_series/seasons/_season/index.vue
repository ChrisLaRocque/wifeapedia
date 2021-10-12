<template>
  <div class="container p-4 mx-auto">
    <h1 class="text-3xl font-extrabold">{{ season.fields.title }}</h1>
    <p v-html="$md.render(season.fields.description)" class="mt-2 mb-4"></p>
    <h2 class="text-2xl font-extrabold">Popular Episodes</h2>
    <TableList :table-data="episodes" :prepend="`${$nuxt.$route.path}/episodes/`" ctaText="Episode info"/>
    <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 mt-2 rounded">
      <NuxtLink :to="`${$nuxt.$route.path}/episodes/`">All episodes</NuxtLink>
    </button>
  </div>
</template>

<script>
  import { createClient } from '~/plugins/contentful.js';

  const client = createClient();

  export default {
    asyncData({ params }) {
      return Promise.all([
        client.getEntries({
          'sys.contentType.sys.id': 'season',
        }),
      ])
        .then(([seasons]) => {
					const season = seasons.items.filter(item => item.fields.seasonNumber == params.season)[0]
          const episodes = season.fields.episodes
          return {
						season: season,
            episodes: episodes.slice(0,5)
					}
        })
        .catch(console.error);
    },
		head() {
			return {
			title: this.season.fields.title,
			meta: [
				{
					hid: 'description',
					name: 'description',
					content: this.season.fields.description
				}
			],
			}
		}
  };
</script>