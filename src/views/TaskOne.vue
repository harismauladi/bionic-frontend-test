<script setup></script>
<template>
  <div class="w-full min-h-fit bg-black p-1">
    <div
      class="w-full border-[3px] border-black bg-blue-600 min-w-[70px] flex text-white p-2 justify-center items-center min-h-[40px] mb-2"
    >
      1
    </div>
    <div class="flex flex-wrap w-full mb-2">
      <div
        class="sm:w-full max-[639px]:w-full md:w-full lg:w-1/2 border-[3px] border-black bg-blue-600 flex justify-center items-center min-h-[40px] text-white"
      >
        2
      </div>
      <div
        class="sm:w-full max-[639px]:w-full md:w-full lg:w-1/2 border-[3px] border-black bg-blue-600 flex justify-center items-center min-h-[40px] text-white"
      >
        3
      </div>
    </div>
    <div class="flex flex-wrap min-h-full">
      <div
        class="sm:w-full max-[639px]:w-full md:w-full lg:w-[70%] min-h-full border-[3px] border-black"
      >
        <div class="bg-blue-600 p-1 min-h-[180px]">
          <div
            class="bg-red-600 border-[3px] border-black min-h-[170px] flex justify-center items-center text-white"
          >
            4
          </div>
        </div>
        <div class="flex flex-row mt-2 gap-2">
          <div
            class="bg-blue-600 min-w-[32.33%] flex text-white p-2 justify-center items-center"
          >
            5
          </div>
          <div
            class="bg-blue-600 min-w-[32.33%] flex text-white p-2 justify-center items-center"
          >
            6
          </div>
          <div
            class="bg-blue-600 max-[900px]:min-w-[31%] min-w-[33.63%] flex text-white p-2 justify-center items-center"
          >
            7
          </div>
        </div>
      </div>
      <div
        class="sm:w-full max-[639px]:w-full md:w-full lg:w-[30%] min-h-full border-[3px] border-black"
      >
        <div
          class="bg-blue-600 h-full flex md:flex-col max-[700px]:flex-row max-[700px]:gap-2 p-3"
        >
          <div
            class="w-full min-h-[55px] bg-red-600 flex justify-center items-center text-white border-[3px] border-black mb-2"
          >
            8
          </div>
          <div
            class="w-full min-h-[55px] bg-red-600 flex justify-center items-center text-white border-[3px] border-black mb-2"
          >
            9
          </div>
          <div
            class="w-full min-h-[55px] bg-red-600 flex justify-center items-center text-white border-[3px] border-black mb-2"
          >
            10
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="w-full min-h-[200px] mt-8 flex gap-2 overflow-x-hidden">
    <div class="bg-blue-600 w-2/3 border-[5px] border-black max-h-[180px]">
      <div class="bg-red-600 max-w-[150px] min-h-[50px]"></div>
      <div
        class="bg-white rotate-90 relative left-16 max-w-[120px] min-h-[100px] bottom-8"
      ></div>
      <div
        class="bg-red-600 relative left-28 max-w-[150px] min-h-[80px] bottom-16"
      ></div>
    </div>
    <div class="w-[35%] max-h-[180px]">
      <div
        class="bg-red-600 min-h-[40px] top-2 max-w-[100px] relative right-16"
      ></div>
      <div
        class="bg-red-600 min-h-[40px] max-w-[100px] relative left-52 top-24"
      ></div>
    </div>
  </div>
</template>
