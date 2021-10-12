<template>
	<div class="flex-none md:flex mt-4 pt-2 border-t-2">
		<div v-for="person in people" :key="person.fields.name" class="family-card rounded-md shadow-md p-4">
				<img v-if="person.fields.photo" class="object-contain h-48 w-full" :src="person.fields.photo.fields.file.url" :alt="`Photo of ${person.fields.name}`" /> 
				<p class="mb-2 border-b-2"><strong class="text-xl">{{ person.fields.name }}</strong><span v-if="person.fields.age"> | {{ person.fields.age }}</span></p>
				<p>{{ person.fields.bio }}</p>
				<div class="flex links">
					<a v-for="link in person.fields.links" :key="link.fields.type" :href="link.fields.link" :title="link.fields.title">
						<button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">{{ link.fields.text}}</button>
					</a>
				</div>
		</div>
	</div>
</template>

<script>
export default {
	name: 'people-cards',
  props: [
    'people',
  ],
}
</script>
