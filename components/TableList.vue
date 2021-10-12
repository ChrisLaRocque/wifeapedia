<template>
	<table class="table-auto">
		<thead>
			<tr>
				<th class="px-4 py-2">#</th>
				<th class="px-4 py-2">Title</th>
				<th class="px-4 py-2">Link</th>
			</tr>
		</thead>
		<tbody>
			<tr v-for="data in tableData" :key="data.fields.title">
				<td class="border px-4 py-2">{{ data.fields.seasonNumber || data.fields.episodeNumber}}</td>
				<td class="border px-4 py-2">{{ data.fields.title }}</td>
				<td class="border px-4 py-2"><button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
      <NuxtLink :to="`${prepend ? `${prepend}/` : ''}${data.fields.seasonNumber || data.fields.episodeNumber}`">{{ctaText || 'Learn more'}}</NuxtLink>
    </button></td>
			</tr>
		</tbody>
	</table>
</template>
<style lang="scss">
	
</style>

<script>
export default {
	name: 'table-list',
  props: [
    'tableData',
		'prepend',
		'ctaText'
  ],
}
</script>
