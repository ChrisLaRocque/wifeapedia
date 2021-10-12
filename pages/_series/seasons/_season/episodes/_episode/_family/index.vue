<template>
  <div class="container mx-auto">
    <h1 class="text-3xl">{{ family.title }} family</h1>
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