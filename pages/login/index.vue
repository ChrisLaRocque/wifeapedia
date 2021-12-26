<template>
  <div class="container p-4 mx-auto">
		<div class="mx-auto w-72">
			<h1 class="text-3xl font-extrabold">Login</h1>
			<UserAuthForm buttonText="Login" :submitForm="loginUser" />
		</div>
	</div>
</template>

<script>
	
  export default {
		methods: {
			loginUser(loginInfo){
				this.$auth.loginWith('social')
			}
		},
		head() {
			return {
			title: `Login | Wifeapedia`,
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