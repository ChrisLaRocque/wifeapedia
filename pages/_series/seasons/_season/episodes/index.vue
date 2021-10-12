<template>
  <div>
    <h1>{{ season.fields.title }} episodes</h1>
    <p>{{ season.fields.description }}</p>
    <TableList :table-data="episodes"/>
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
            episodes: episodes
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