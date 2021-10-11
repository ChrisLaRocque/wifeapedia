<template>
  <div>
    <h1>{{ season.fields.title }}</h1>
    <p>{{ season.fields.description }}</p>
    <ul id="episodes-list">
			<li v-for="episode in episodes" :key="episode.fields.title">
						<NuxtLink :to="`${$nuxt.$route.path}episodes/${episode.fields.episodeNumber}/`">
              <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                {{ episode.fields.title }}
              </button>
            </NuxtLink>
			</li>
		</ul>
    <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
      <NuxtLink :to="`${$nuxt.$route.path}episodes/`">All episodes</NuxtLink>
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
          console.log(season)
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