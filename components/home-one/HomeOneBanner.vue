<script setup lang="ts">
import { PhArrowRight, PhStar } from "@phosphor-icons/vue";
import CountUp from "vue-countup-v3";
import BannerOneSlider from "./BannerOneSlider.vue";
import customer1 from "/images/banner/customer1.png";
import customer2 from "/images/banner/customer2.png";
import customer3 from "/images/banner/customer3.png";
import customer4 from "/images/banner/customer4.png";
import kewtaArrow from "/images/banner/kewta-arrow.png";
import win from "/images/banner/win.png";

import VideoModal from "../VideoModal.vue";
const isOpen = ref(false);

const handleVideoModal = () => {
  isOpen.value = !isOpen.value;
};

watch(isOpen, (newValue) => {
  if (newValue) {
    document.body.style.overflow = "hidden";
  } else {
    document.body.style.overflow = "auto";
  }
});
</script>

<template>
  <div class="banner-section-v1 pt-70-fixed n4-bg position-relative overflow-hidden overflow-hidden">
    <!--Banner Content -->
    <div class="container">
      <div class="row justify-content-between">
        <div class="col-lg-8">
          <div class="banner-content-v1">
            <div class="d-flex mb-sm-3 mb-5 align-items-center gap-xxl-8 gap-lg-6 gap-4 flex-wrap">
              <ul class="entry-win d-flex align-items-center gap-3">
                <li id="{1}" class="entry-win-item" data-aos="fade-down-right" data-aos-duration="1000">
                  <NuxtLink to="#" class="fs-four p1-clr"> Entry </NuxtLink>
                </li>
                <li id="{2}" class="entry-win-item" data-aos="fade-down-right" data-aos-duration="1200">
                  <PhArrowRight class="ti ti-arrow-right fs-four p1-clr"></PhArrowRight>
                </li>
                <li id="{3}" class="entry-win-item" data-aos="fade-down-right" data-aos-duration="1400">
                  <NuxtLink to="#" class="fs-four p1-clr"> Draw </NuxtLink>
                </li>
                <li id="{4}" class="entry-win-item" data-aos="fade-down-right" data-aos-duration="1600">
                  <PhArrowRight class="ti ti-arrow-right fs-four p1-clr"></PhArrowRight>
                </li>
                <li id="{5}" class="entry-win-item">
                  <NuxtLink to="#" class="fs-four p1-clr"> Win </NuxtLink>
                </li>
              </ul>
              <NuxtLink to="/contest" class="custom-bigarrow">
                <span class="icon">
                  <svg width="137" height="16" viewBox="0 0 137 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M136.707 8.70712C137.098 8.31659 137.098 7.68343 136.707 7.29291L130.343 0.928944C129.953 0.538419 129.319 0.538419 128.929 0.928943C128.538 1.31947 128.538 1.95263 128.929 2.34316L134.586 8.00001L128.929 13.6569C128.538 14.0474 128.538 14.6806 128.929 15.0711C129.319 15.4616 129.953 15.4616 130.343 15.0711L136.707 8.70712ZM-8.74228e-08 9L136 9.00001L136 7.00001L8.74228e-08 7L-8.74228e-08 9Z"
                      fill="white"
                    />
                  </svg>
                </span>
              </NuxtLink>
            </div>
            <div class="custom-display n0-clr mb-6" data-aos="zoom-in-up" data-aos-duration="1000">
              Could you be our
              <div class="d-xxl-flex d-grid align-items-center justify-content-between winner-span gap-xxl-5 gap-4 flex-xxl-nowrap flex-wrap">
                <span class="wins nw1-clr d-flex align-items-center gap-6" data-aos="zoom-in-down" data-aos-duration="2000">
                  next
                  <span class="wins p1-clr">
                    winner?
                    <svg viewBox="0 0 355 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M0.92099 12.8063C56.8373 3.14121 205.75 -10.0362 354.071 14.5747" stroke="#AEFE3A" />
                    </svg>
                  </span>
                </span>
                <HomeOneBannerVideo :handle-video-modal="handleVideoModal" :is-open="isOpen" />
              </div>
            </div>

            <p class="nw2-clr bn-pra mb-xxl-10 mb-sm-8 mb-6" data-aos="zoom-out-up" data-aos-duration="1000">
              Now&apos;s your chance to win a car! Check out the prestige cars you can win in our car prize draws. Will you be our next lucky winner?
            </p>

            <div class="d-flex align-items-center gap-xl-8 gap-3 flex-wrap">
              <NuxtLink to="/contest" class="kewta-btn kewta-alt d-inline-flex align-items-center" data-aos="zoom-in-right" data-aos-duration="1000">
                <span class="kew-text s1-bg n4-clr act3-bg"> Participant Now </span>
                <div class="kew-arrow act3-bg">
                  <div class="kt-one">
                    <PhArrowRight class="ti ti-arrow-right n4-clr"></PhArrowRight>
                  </div>
                  <div class="kt-two">
                    <PhArrowRight class="ti ti-arrow-right n4-clr"></PhArrowRight>
                  </div>
                </div>
              </NuxtLink>

              <NuxtLink to="/howtoplay" class="how-cont nw1-clr fw_700" data-aos="zoom-in-left" data-aos-duration="800"> How It’s Works </NuxtLink>
            </div>
            <div class="bn1-odometer d-flex align-items-center gap-xxl-11 gap-xl-8 gap-lg-6 gap-5">
              <div class="odometer__items" data-aos="zoom-in-down" data-aos-duration="1000">
                <div class="cont d-flex align-items-center">
                  <span class="odometer display-four nw1-clr fw_800">
                    <count-up :end-val="1750"></count-up>
                  </span>
                  <span class="plus__icon display-four nw1-clr fw_800"> + </span>
                </div>
                <p>Verified Users</p>
              </div>
              <div class="odometer__items" data-aos="zoom-in-up" data-aos-duration="1000">
                <div class="cont d-flex align-items-center">
                  <span class="odometer display-four nw1-clr fw_800">
                    <count-up :end-val="15"></count-up>
                  </span>
                </div>
                <p>Years on the market</p>
              </div>
            </div>
          </div>
        </div>
        <div class="col-xl-2 col-lg-3">
          <div class="banner-content-v1customer">
            <ul class="customer-review cmn-style-flex d-inline-flex act3-border radius100 py-xxl-2 py-2 px-2">
              <li>
                <NuxtLink to="#" class="customer-revew-item n0-bg d-flex align-items-center justify-content-center">
                  <NuxtImg :src="customer1" alt="img" />
                </NuxtLink>
              </li>
              <li>
                <NuxtLink to="#" class="customer-revew-item n0-bg d-flex align-items-center justify-content-center">
                  <NuxtImg :src="customer2" alt="image" />
                </NuxtLink>
              </li>
              <li>
                <NuxtLink to="#" class="customer-revew-item n0-bg d-flex align-items-center justify-content-center">
                  <NuxtImg :src="customer3" alt="img" />
                </NuxtLink>
              </li>
              <li>
                <NuxtLink to="#" class="customer-revew-item n0-bg d-flex align-items-center justify-content-center">
                  <NuxtImg :src="customer4" alt="img" />
                </NuxtLink>
              </li>
              <li>
                <NuxtLink to="#" class="customer-revew-item n0-bg d-flex align-items-center justify-content-center">
                  <span class="d-grid customer-ratting text-center p-2 p1-bg align-items-center justify-content-center">
                    <PhStar weight="fill" class="ti ti-star-filled n4-clr"></PhStar>
                    <span class="d-block fs-eight fw_700 n4-clr"> 4.7 </span>
                  </span>
                </NuxtLink>
              </li>
            </ul>
            <span class="nw2-clr fs-eight fw_700 d-block text-uppercase mt-xxl-4 mt-3"> <span class="act3-clr fs-five">70k</span> CUSTOMER REVIEW </span>
            <NuxtLink to="/about" class="d-flex arrow-rotate justify-content-end me-5 mt-6">
              <NuxtImg :src="kewtaArrow" alt="img" />
            </NuxtLink>
          </div>
        </div>
      </div>
    </div>
    <!--Banner Content -->

    <NuxtImg :src="win" alt="img" class="shape-win" />

    <BannerOneSlider />
  </div>
  <VideoModal :handleVideoModal="handleVideoModal" :isOpen="isOpen" />
</template>
