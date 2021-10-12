<template>
  <div class="container p-4 mx-auto">
		<div class="flex">
			<div class="family-text">
				<h1 class="text-3xl font-extrabold">{{ family.title }} family</h1>
				<p class="mt-2 mb-4" v-html="$md.render(family.bio)"></p>
			</div>
			<img v-if="family.photo" :src="family.photo.fields.file.url" class="object-contain h-72 w-full" alt="">
		</div>
		<PeopleCards :people="family.members" />
  </div>
</template>

<script>
  import { createClient } from '~/plugins/contentful.js';

  const client = createClient();

  export default {
    asyncData({ params }) {
      return Promise.all([
        client.getEntries({
          'sys.contentType.sys.id': 'family',
					'include':5,
        })
      ])
        .then(([families]) => {
					const family = families.items.filter(item => item.fields.slug == params.family)[0].fields
          return {
						family: family
					}
        })
        .catch(console.error);
    },
		head() {
			return {
			title: `${this.family.title} family`,
			meta: [
				{
					hid: 'description',
					name: 'description',
					content: this.family.description
				}
			],
			}
		}
  };
</script>