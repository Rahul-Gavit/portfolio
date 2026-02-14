<script setup lang="ts">
import { ref } from "vue";

const isSignup = ref(false);
const submitted = ref(false);

const submitHandler = async (formData: any) => {
  submitted.value = true;

  console.log("Form Data:", formData);

  try {
    const baseUrl = process.env.NUXT_PUBLIC_API_URL || "http://localhost:3000";
    const endpoint = isSignup.value ? "/api/auth/signup" : "/api/auth/login";
    const response = await fetch(`${baseUrl}${endpoint}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });

    if (!response.ok) {
      throw new Error(isSignup.value ? "Signup failed" : "Login failed");
    }

    const result = await response.json();
    console.log("Success:", result);
    submitted.value = false;
  } catch (error) {
    console.error("Error:", error);
    submitted.value = false;
  }
};
</script>

<template>
  <div class="max-w-md mx-auto mt-10 p-6 bg-white rounded-lg shadow-md">
    <div class="flex justify-center mb-6">
      <button
        @click="isSignup = false"
        :class="!isSignup ? 'bg-blue-500 text-white' : 'bg-gray-200'"
        class="px-4 py-2 rounded-l-md transition"
      >
        Login
      </button>
      <button
        @click="isSignup = true"
        :class="isSignup ? 'bg-blue-500 text-white' : 'bg-gray-200'"
        class="px-4 py-2 rounded-r-md transition"
      >
        Signup
      </button>
    </div>

    <FormKit
      v-if="!isSignup"
      type="form"
      id="login-form"
      @submit="submitHandler"
      :actions="false"
    >
      <h1 class="text-2xl font-bold mb-4">Login</h1>
      <FormKit
        type="text"
        name="username"
        label="Username"
        validation="required"
      />
      <FormKit
        type="password"
        name="password"
        label="Password"
        validation="required"
      />
      <FormKit type="submit" label="Login" />
    </FormKit>

    <FormKit
      v-if="isSignup"
      type="form"
      id="signup-form"
      @submit="submitHandler"
      :actions="false"
    >
      <h1 class="text-2xl font-bold mb-4">Signup</h1>
      <FormKit
        type="text"
        name="username"
        label="Username"
        validation="required"
      />
      <FormKit
        type="email"
        name="email"
        label="Email"
        validation="required|email"
      />
      <FormKit
        type="password"
        name="password"
        label="Password"
        validation="required|length:6"
      />
      <FormKit type="submit" label="Signup" />
    </FormKit>
  </div>
</template>
