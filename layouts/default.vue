<template>
	<div class="mx-auto">
		<Nav />
		<main class="container p-4">
			<div v-if="$auth.loggedIn">
				yeah buddy
			</div>
			<div v-else>Nah buddy</div>
			<Nuxt />
		</main>
		<script src="https://accounts.google.com/gsi/client" async defer></script>
	</div>
</template>
