<template>
	<main class="container p-4 mx-auto">
		<h1 class="text-3xl font-extrabold">Wifeapedia</h1>
    <p class="mt-2 mb-4">Wiki covering TV show 'Wife Swap' seasons, episodes, and participating families.</p>
    <div class="sm:no-flex flex">
      <div class="p-6">
        <h2 class="text-2xl font-black uppercase mb-2">Series</h2>
          <NuxtLink to="/us">
            <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
              US
            </button>
          </NuxtLink>
          <NuxtLink to="/uk">
            <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
              UK
            </button>
          </NuxtLink>
          <NuxtLink to="/celebrity-wife-swap">
            <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
              Celebrity Wife Swap
            </button>
          </NuxtLink>
      </div>
      <div class="p-6">
        <h2 class="text-2xl font-black uppercase mb-2">Theories</h2>
          <NuxtLink to="/theories">
            <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
              Theories
            </button>
          </NuxtLink>
      </div>
    </div>
		<p v-if="$nuxt.$route.query.becca">Hi Becca &#128525;</p>
	</main>
</template>
<script>
export default {
  head: {
    title: 'Wifeapedia',
    meta: [
      {
        hid: 'description',
        name: 'description',
        content: 'Wife Swap wiki covering Wife Swap US'
      }
    ],
  }
}
</script>