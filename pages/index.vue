<template>
	<main class="container p-4 mx-auto">
		<h1 class="text-3xl font-extrabold">Wifeapedia</h1>
    <p class="mt-2 mb-4">Wiki covering TV show 'Wife Swap' seasons, episodes, and participating families.</p>
    <div class="mx-auto p-4">
      <h2 class="text-2xl font-black uppercase">Series</h2>
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
    </div>
		<p>Hi Becca &#128525;</p>
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