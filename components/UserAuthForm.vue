<template>
  <div class="w-full max-w-sm">
    <form class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4" v-model="valid">
      <div class="mb-4" v-if="hasName">
        <label class="block text-gray-700 text-sm font-bold mb-2" for="name">
          Name
        </label>
        <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="Username" v-model="userInfo.name">
      </div>
      <div class="mb-4">
        <label class="block text-gray-700 text-sm font-bold mb-2" for="email">
          Email
        </label>
        <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="email" type="text" placeholder="Email" v-model="userInfo.email">
      </div>
      <div class="mb-6">
        <label class="block text-gray-700 text-sm font-bold mb-2" for="password">
          Password
        </label>
        <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" id="password" type="password" placeholder="******************" v-model="userInfo.password" >
        <!-- <p class="text-red-500 text-xs italic" v-if="notValid">Please choose a password.</p> -->
      </div>
      <div class="flex items-center justify-between">
        <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button" v-on:click="submitForm(userInfo)" :disabled="!valid">
          {{ buttonText }}
        </button>
        <a class="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800" href="#">
          Forgot Password?
        </a>
      </div>
    </form>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        valid: true,
        showPassword: false,
        userInfo: {
          email: 'test@test.com',
          password: '123123'
        },
      }
    },
    props: ["submitForm", "buttonText", "hasName"]
  }
</script>