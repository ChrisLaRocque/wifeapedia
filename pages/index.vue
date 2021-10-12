<template>
	<main class="container mx-auto">
		<h1>Home</h1>
    <p>Hi Becca</p>
    <p style="font-size:100px">&#128525;</p>
    <div class="container mx-auto p-4">
      <h2 class="text-2xl font-extrabold uppercase">Series</h2>
        <NuxtLink to="/us"><button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
      US
    </button></NuxtLink>
    </div>
		
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