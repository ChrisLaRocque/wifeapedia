<template>
	<div class="grid grid-cols-3 gap-4 mt-4 pt-2 border-t-2">
		<div class="family-blurb">
			<h4 class="font-extrabold text-2xl">Families from this episode</h4>
			<p>Learn about the participating families and where they are now.</p>
		</div>
		<div v-for="family in families" :key="family.fields.slug" class="family-card rounded-md shadow-md hover:shadow-lg p-4">
			<NuxtLink :to="`${$nuxt.$route.path}/${family.fields.slug}`">
				<p><strong class="text-xl mb-4 border-b-2">{{ family.fields.title }} family</strong></p>
				<div class="grid grid-cols-2 gap-2 mt-2 family-members">
					<div v-for="member in family.fields.members" :key="member.fields.name" class="member rounded-full bg-gray-400 px-3 py-2 mr-2">
						{{ member.fields.name }}
					</div>
				</div>
			</NuxtLink>
		</div>
	</div>
</template>

<style lang="scss">
	.family-members {
		
	}
</style>

<script>
export default {
	name: 'family-cards',
  props: [
    'families',
  ],
}
</script>
