<script setup>
import { useRouter } from "vue-router";
const props = defineProps({
  datas: {
    type: Array,
    required: true,
  },
});

const router = useRouter();

const getJobDetail = (jobId) => {
  router.push(`/task-2/detail/${jobId}`);
};
</script>
<template>
  <div
    class="flex justify-between items-center max-w-[450px] mb-2 bg-yellow-200 rounded p-2"
    v-for="data in datas"
  >
    <span class="text-green-500 font-semibold">{{ data.job }}</span>
    <button
      class="bg-orange-400 text-white p-1 rounded-md min-w-[100px]"
      @click="getJobDetail(data.id)"
    >
      See Job
    </button>
  </div>
</template>
