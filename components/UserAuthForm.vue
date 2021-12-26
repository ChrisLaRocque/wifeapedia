<template>
  <div class="w-full max-w-sm">
    <form
      v-model="valid"
      class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
    >
      <div v-if="hasName" class="mb-4">
        <label class="block text-gray-700 text-sm font-bold mb-2" for="name">
          Name
        </label>
        <input
          id="username"
          v-model="userInfo.name"
          class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          type="text"
          placeholder="Username"
        />
      </div>
      <div class="mb-4">
        <label class="block text-gray-700 text-sm font-bold mb-2" for="email">
          Email
        </label>
        <input
          id="email"
          v-model="userInfo.email"
          class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          type="text"
          placeholder="Email"
        />
      </div>
      <div class="mb-6">
        <label
          class="block text-gray-700 text-sm font-bold mb-2"
          for="password"
        >
          Password
        </label>
        <input
          id="password"
          v-model="userInfo.password"
          class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
          type="password"
          placeholder="******************"
        />
        <!-- <p class="text-red-500 text-xs italic" v-if="notValid">Please choose a password.</p> -->
      </div>
      <div class="flex items-center justify-between">
        <button
          class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          type="button"
          :disabled="!valid"
          @click="submitForm(userInfo)"
        >
          {{ buttonText }}
        </button>
        <a
          class="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800"
          href="#"
        >
          Forgot Password?
        </a>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  props: ["submitForm", "buttonText", "hasName"],
  data() {
    return {
      valid: true,
      showPassword: false,
      userInfo: {
        email: "test@test.com",
        password: "123123",
      },
    };
  },
};
</script>
