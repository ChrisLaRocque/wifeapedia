<template>
  <div class="container p-4 mx-auto">
    <h1 class="text-3xl font-extrabold">All seasons for Wife Swap {{ series.fields.title }}</h1>
    <p class="mt-2 mb-4" v-html="$md.render(series.fields.description)"></p>
		<TableList :table-data="seasons" ctaText="Season info"/>
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