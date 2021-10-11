<template>
  <div>
    <h1>Seasons for {{ series.fields.title }}</h1>
    <p>{{ series.fields.description }}</p>
		<ul id="seasons-list">
			<li v-for="season in seasons" :key="season.fields.title">
						<NuxtLink :to="`${$nuxt.$route.path}${season.fields.seasonNumber}/`">
							<button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
  							{{ season.fields.title }}
							</button>
						</NuxtLink>
			</li>
		</ul>
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
						seasons: currentSeries.fields.seasons.slice(0,5),
					}
        })
        .catch(console.error);
    },
		head() {
			return {
			title: `${this.series.fields.title} Wife Swap seasons list`,
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