<template>
  <div>
    <h1>{{ episode.title }}</h1>
    <p>{{ episode.description }}</p>
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
        })
      ])
        .then(([episodes]) => {
					const episode = episodes.items.filter(item => item.fields.episodeNumber == params.episode)[0].fields
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