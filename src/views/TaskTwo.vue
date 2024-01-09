<script setup>
import { getData } from "../services/job.api";
import { getDataDummy } from "../services/dummy.api";
import { onMounted, ref } from "vue";
import JobCard from "../components/JobCard.vue";
onMounted(() => {
  getDataFromAPI();
  getDataFromDummyAPI();
});
const datas = ref([]);
const getDataFromAPI = async () => {
  try {
    const res = await getData();
    console.log(res);
  } catch (e) {
    console.log(e);
  }
};

const getDataFromDummyAPI = async () => {
  try {
    const res = await getDataDummy();
    localStorage.setItem('datas', JSON.stringify(res.data));
    datas.value = res.data;
  } catch (e) {
    console.log(e);
  }
};
</script>
<template>
  <div class="fle">
    <JobCard :datas="datas" />
  </div>
</template>
