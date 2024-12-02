<script setup lang="ts">
import { contestPageLotteryItems } from "@/../public/data/contestPageData";

import { PhCaretRight } from "@phosphor-icons/vue";
</script>
<template>
  <section class="contest-section pt-120 pb-120 n0-bg">
    <div class="container">
      <div class="showing-sort mb-xxl-18 mb-xl-15 mb-11 d-flex flex-wrap gap-3 align-items-center justify-content-sm-between justify-content-center">
        <span class="fs20 fw_600 n1-clr">Showing 1-7 of 75 result</span>
        <select name="sort-select">
          <option value="1">Sort by popularity</option>
          <option value="2">Car</option>
          <option value="3">Jewelry</option>
          <option value="4">Bicycle</option>
          <option value="5">Bike</option>
          <option value="6">Electronic</option>
        </select>
      </div>
      <div class="row g-6">
        <HomeOneCarWinCard v-for="(item, index) in contestPageLotteryItems" :key="`lottery-items-${index}`" v-bind="item" />
      </div>
      <ul class="custom-pagination pt-xxl-20 pt-xl-15 pt-10 d-flex align-items-center justify-content-center gap-xxl-3 gap-2">
        <li>
          <NuxtLink to="#" class="cmn-60 d-center radius-circle n4-clr pagi-bg fs20 fw_700"> 1 </NuxtLink>
        </li>
        <li>
          <NuxtLink to="#" class="cmn-60 d-center radius-circle n4-clr pagi-bg fs20 fw_700 active"> 2 </NuxtLink>
        </li>
        <li>
          <NuxtLink to="#" class="cmn-60 d-center radius-circle n4-clr pagi-bg fs20 fw_700"> 3 </NuxtLink>
        </li>
        <li>
          <NuxtLink to="#" class="cmn-60 d-center radius-circle nw1-clr pagi-bg">
            <PhCaretRight class="ph ph-caret-right n4-clr fs20"></PhCaretRight>
          </NuxtLink>
        </li>
      </ul>
    </div>
  </section>
</template>

<style scoped></style>

export default AllContests; export const lotteryItems = [ { image: lc1, title: "The Breeze Zodiac IX", soldPercentage: "27%", rating: 5, days: "03", remaining: "1750", price: "$8.00", serialNumber:
"01", }, { image: lc2, title: "Chiptuning Von ABT", soldPercentage: "23%", rating: 5, days: "05", remaining: "1950", price: "$5.00", serialNumber: "02", }, { image: lc3, title: "Shelby Cobra",
soldPercentage: "20%", rating: 5, days: "02", remaining: "1200", price: "$3.00", serialNumber: "03", }, { image: lc4, title: "The Fabia Magnum", soldPercentage: "25%", rating: 4.5, days: "05",
remaining: "1550", price: "$17.00", serialNumber: "04", }, { image: lc5, title: "Porsche 917 Carrera", soldPercentage: "75%", rating: 4.5, days: "01", remaining: "1000", price: "$5.00", serialNumber:
"05", }, { image: lc1, title: "Mini Cooper", soldPercentage: "22%", rating: 4.5, days: "07", remaining: "2750", price: "$4.00", serialNumber: "06", }, ];
