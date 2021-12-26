<template>
  <div class="container p-4 mx-auto">
		<div class="mx-auto w-72">
			<h1 class="text-3xl font-extrabold">Register</h1>
			<UserAuthForm buttonText="Register" :submitForm="registerUser" />
		</div>
	</div>
</template>

<script>
	
  export default {
		methods: {
			registerUser(registerInfo){
				console.info(registerInfo)
			}
		},
		head() {
			return {
			title: `Register | Wifeapedia`,
			meta: [
				{
					hid: 'description',
					name: 'description',
					content: 'Sign into your account to vote and contribute to wifeapedia.com'
				}
			],
			}
		}
  };
</script>