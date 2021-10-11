<template>
	<main>
		<h1>Home</h1>
    <p>Hi Becca</p>
    <p style="font-size:100px">&#128525;</p>

		<NuxtLink to="/us"><button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
      US
    </button></NuxtLink>
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
        content: 'Wifeswap fan wiki'
      }
    ],
  }
}
</script>