<script setup lang="ts">
import { PhArrowUpRight } from "@phosphor-icons/vue";
import SubTitle from "../SubTitle.vue";
import CarWinCard from "./CarWinCard.vue";
import lc1 from "/images/lottery/lc1.png";
import lc2 from "/images/lottery/lc2.png";
import lc3 from "/images/lottery/lc3.png";
import lc4 from "/images/lottery/lc4.png";
import lc5 from "/images/lottery/lc5.png";
const lotteryItems = [
  {
    image: lc1,
    title: "The Breeze Zodiac IX",
    soldPercentage: "27%",
    rating: 5,
    days: "03",
    remaining: "1750",
    price: "$8.00",
    serialNumber: "01",
  },
  {
    image: lc2,
    title: "Chiptuning Von ABT",
    soldPercentage: "23%",
    rating: 5,
    days: "05",
    remaining: "1950",
    price: "$5.00",
    serialNumber: "02",
  },
  {
    image: lc3,
    title: "Shelby Cobra",
    soldPercentage: "20%",
    rating: 5,
    days: "02",
    remaining: "1200",
    price: "$3.00",
    serialNumber: "03",
  },
  {
    image: lc4,
    title: "The Fabia Magnum",
    soldPercentage: "25%",
    rating: 4.5,
    days: "05",
    remaining: "1550",
    price: "$17.00",
    serialNumber: "04",
  },
  {
    image: lc5,
    title: "Porsche 917 Carrera",
    soldPercentage: "75%",
    rating: 4.5,
    days: "01",
    remaining: "1000",
    price: "$5.00",
    serialNumber: "05",
  },
  {
    image: lc1,
    title: "Mini Cooper",
    soldPercentage: "22%",
    rating: 4.5,
    days: "07",
    remaining: "2750",
    price: "$4.00",
    serialNumber: "06",
  },
];
</script>
<template>
  <section class="current-lottery pt-120 pb-120">
    <div class="container">
      <!-- Section Header  -->
      <div class="row g-xl-4 g-3 align-items-center justify-content-between mb-xxl-15 mb-xl-10 mb-8">
        <div class="col-lg-6 col-md-8 col-sm-8">
          <div class="section__title">
            <SubTitle text="Try your chance at winning" />
            <h2 class="display-four d-block n4-clr">
              Current
              <span class="act4-clr act4-underline" data-aos="zoom-in-left" data-aos-duration="1000"> Lottery </span>
              <span class="d-block" data-aos="zoom-in-right" data-aos-duration="1200"> Offering </span>
            </h2>
          </div>
        </div>
        <div class="col-xl-2 col-lg-2 col-md-2 col-sm-2">
          <div class="browse-more" data-aos="zoom-in" data-aos-duration="2000">
            <NuxtLink to="/contest" class="cmn__collection radius-circle s1-bg d-center position-relative ms-lg-auto">
              <span class="cmn-cont-box text-center position-relative">
                <span class="icon mb-1">
                  <PhArrowUpRight class="ph-bold ph-arrow-up-right n0-clr fs-three"></PhArrowUpRight>
                </span>
                <span class="d-block n0-clr fw_700"> Browse More </span>
              </span>
            </NuxtLink>
          </div>
        </div>
      </div>

      <!-- Win lottery body  -->
      <div class="row g-6">
        <CarWinCard v-for="(item, index) in lotteryItems" :key="`lottery-items-${index}`" v-bind="{ ...item }" />
      </div>
    </div>
  </section>
</template>

<style scoped></style>
