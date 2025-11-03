<script setup>
import { onMounted, ref } from "vue";
import userService from "../service/userService";
defineProps({
  msg: {
    type: String,
    required: true,
  },
});

const users = ref([]);
const error = ref(null);

onMounted(async () => {
  try {
    const response = await userService.getUsers();
    users.value = response;
  } catch (error) {
    error.value = "Failed to fetch users";
    console.error(error);
  }
});
</script>

<template>
  <div class="greetings px-4 sm:px-8 pt-20 z-50 shadow-md">
    <div class="">
      <div>
        <h1 class="text-2xl text-amber-300">HelloWorld {{ msg }}</h1>
      </div>

      <!-- list DATA user (responsive) -->
      <div class="flex justify-center">
        <div class="w-full max-w-5xl">
          <ul class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 m-6">
            <li v-for="user in users" :key="user.id" class="list-none bg-white p-3 rounded shadow">
              {{ user.first }}
            </li>
          </ul>
          <div v-if="error" class="error text-red-500 mt-2 ml-6">{{ error }}</div>
        </div>
      </div>

      <!-- cards DATA user (responsive) -->
      <div class="flex justify-center mt-6">
        <div class="w-full max-w-6xl">
          <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 p-4">
            <div
              class="card card-border bg-base-100 w-full max-w-sm mx-auto"
              v-for="user in users"
              :key="user.id"
            >
              <div class="card-body">
                <h2 class="card-title">{{ user.first }} {{ user.lastname }}</h2>
                <p>{{ user.address }}</p>
                <p>{{ user.email }}</p>
                <p>{{ user.phone }}</p>
                <p>{{ user.hobbie }}</p>
                <div class="card-actions justify-end">
                  <button class="btn btn-primary">Buy Now</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
