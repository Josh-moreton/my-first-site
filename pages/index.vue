<script setup lang="ts">

useHead({
  title: "Home - Lottery & Giveaway NuxtJs Template",
  meta: [{ name: "description", content: "Lottery & Giveaway NuxtJs Template" }],
});

definePageMeta({
  layout: "landing-pages",
});</script>
<template>
  <NavbarBlack />
  <HomeOneBanner />
  <HomeOneLotteryService />
  <HomeOneLuxuryV1 />
  <HomeOneHowItSectionV1 />
  <HomeOneWinLotterySection />
  <HomeOneCarCategorySection />
  <HomeOneTestimonialSection />
  <HomeOneCallToSection />
  <HomeOneBlogSection />
  <Faq :bg-color="true" />
  <HomeOneSmartphoneSection />
  <HomeOneSponsorSection />
  <HomeOneFooter />
</template>

<style scoped></style>
