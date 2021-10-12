<template>
	<div class="lg:grid grid-cols-3 gap-4 mt-4 p-6 border-t-2">
		<div class="quotes-blurb">
			<h4 class="font-extrabold text-2xl">Notable quotes from this episode</h4>
		</div>
		<div v-for="quote in quotes" class="quote-card rounded-md shadow-md p-4">
				<p v-html="`&quot;${$md.renderInline(quote.fields.quote)}&quot;`"></p>
				<small v-if="quote.fields.context" class="text-gray-500">{{ quote.fields.context }}</small>
				<p class="border-t-2 mt-2 pt-2"><strong>{{ quote.fields.attribution.fields.name}}</strong></p>
		</div>
	</div>
</template>

<script>
export default {
	name: 'quote-cards',
  props: [
    'quotes',
  ],
}
</script>
