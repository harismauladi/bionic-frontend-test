<script setup>
import { onMounted, ref, computed } from "vue";
import { useRoute } from "vue-router";
import InputForm from "../components/InputForm.vue";
import { postData } from "../services/applyJob";
import Swal from "sweetAlert2";
onMounted(() => {
  console.log(data);
});
const route = useRoute();
const { id } = route.params;
const getData = JSON.parse(localStorage.getItem("datas") || "[]");
const data = getData.find((item) => item.id === id);
const name = ref("");
const email = ref("");
const mobile = ref("");
const message = ref("");

const isDisable = computed(() => {
  return (
    name.value === "" ||
    email.value === "" ||
    mobile.value === "" ||
    message.value === ""
  );
});

const submitForm = async () => {
  try {
    const body = {
      displayName: name.value,
      subject: data.job,
      email: email.value,
      phone: mobile.value,
      message: message.value,
      ptJobApplyType: "APPLICATION",
      isActive: false,
      ptJobPost: {
        id,
      },
    };
    const post = await postData(body);
    if (post) {
      Swal.fire({
        icon: "success",
        title: "Your work has been saved",
        showConfirmButton: false,
        timer: 1500,
      });
    }
  } catch (e) {
    console.log(e);
  }
};
</script>
<template>
  <div class="p-2">
    <div class="mt-2">
      <h1 class="text-green-500 font-semibold text-4xl mb-2">{{ data.job }}</h1>
    </div>
    <span class="font-semibold">Job Description :</span>
    <div class="mt-1 mb-1">
      <ul>
        <li>• {{ data.description }}</li>
      </ul>
    </div>
    <div class="mb-1">
      <span class="font-semibold">Skill :</span>
    </div>
    <div class="mb-6">
      <ul>
        <li>• {{ data.skill }}</li>
      </ul>
    </div>
    <div class="mb-4">
      <span class="font-semibold">Send Your Job Application</span>
    </div>
    <div class="w-full flex flex-wrap mt-2 gap-2">
      <div class="">
        <div class="mb-8">
          <InputForm
            v-model="name"
            :label="'Your Name'"
            :placeholder="'Enter your name'"
          />
        </div>
        <InputForm
          v-model="email"
          :label="'Email Address'"
          :placeholder="'Enter your email'"
        />
      </div>
      <div class="ml-3">
        <div class="mb-8">
          <InputForm
            v-model="mobile"
            :label="'Mobile Number'"
            :placeholder="'Enter your mobile number'"
          />
        </div>
        <InputForm
          v-model="message"
          :label="'Write your message here...'"
          :placeholder="'Write your message..'"
        />
      </div>
    </div>
    <div class="mt-3 font-semibold">File</div>
    <div
      class="bg-yellow-400 rounded max-w-[40px] max-h-[40px] p-2 cursor-pointer mt-2"
    >
      <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
        <g
          id="SVGRepo_tracerCarrier"
          stroke-linecap="round"
          stroke-linejoin="round"
        ></g>
        <g id="SVGRepo_iconCarrier">
          <path
            d="M17 17H17.01M15.6 14H18C18.9319 14 19.3978 14 19.7654 14.1522C20.2554 14.3552 20.6448 14.7446 20.8478 15.2346C21 15.6022 21 16.0681 21 17C21 17.9319 21 18.3978 20.8478 18.7654C20.6448 19.2554 20.2554 19.6448 19.7654 19.8478C19.3978 20 18.9319 20 18 20H6C5.06812 20 4.60218 20 4.23463 19.8478C3.74458 19.6448 3.35523 19.2554 3.15224 18.7654C3 18.3978 3 17.9319 3 17C3 16.0681 3 15.6022 3.15224 15.2346C3.35523 14.7446 3.74458 14.3552 4.23463 14.1522C4.60218 14 5.06812 14 6 14H8.4M12 15V4M12 4L15 7M12 4L9 7"
            stroke="#ffffff"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          ></path>
        </g>
      </svg>
    </div>
    <button
      :class="
        isDisable
          ? 'mt-3 bg-gray-600 p-2 text-white rounded min-w-[200px]'
          : 'mt-3 bg-blue-600 p-2 text-white rounded min-w-[200px]'
      "
      :disabled="isDisable"
      @click="submitForm"
    >
      Send Message
    </button>
  </div>
</template>
