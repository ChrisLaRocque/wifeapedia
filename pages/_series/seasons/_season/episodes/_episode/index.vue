<template>
  <div class="container p-4 mx-auto">
    <h1 class="text-3xl font-extrabold">S{{ $nuxt.$route.params.season}} E{{ $nuxt.$route.params.episode }} - {{ episode.title }}</h1>
    <p v-if="episode.airDate"><em>{{ `Original air date: ${episode.airDate.toLocaleDateString()}` }}</em></p>
    <p class="mt-2 mb-4">{{ episode.description }}</p>
    <FamilyCards v-if="episode.families" :families="episode.families" />
    <QuoteCards v-if="episode.notableQuotes" :quotes="episode.notableQuotes" />
  </div>
</template>

<script>
  import { createClient } from '~/plugins/contentful.js';

  const client = createClient();

  export default {
    asyncData({ params }) {
      return Promise.all([
        client.getEntries({
          'sys.contentType.sys.id': 'episode',
          'include':10,
        })
      ])
        .then(([episodes]) => {
					const episode = episodes.items.filter(item => item.fields.episodeNumber == params.episode)[0].fields
          if(episode.airDate){
            episode.airDate = new Date(episode.airDate)
          }
          return {
						episode: episode
					}
        })
        .catch(console.error);
    },
		head() {
			return {
			title: this.episode.title,
			meta: [
				{
					hid: 'description',
					name: 'description',
					content: this.episode.description
				}
			],
			}
		}
  };
</script>