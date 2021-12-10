<template lang="">
       <NuxtLink :to="linkUrls" class="h-auto w-auto bg-[#FFFFFF] rounded-md">
              <p class="text-[#405DC7] font-bold py-2 px-4 text-lg-bold">{{ buttonTitle }}</p>
       </NuxtLink>
</template>
<script>
export default {
       name: "SecondaryButton",
       props: ['buttonsTitle','linkUrl']
}
</script>
<style lang="">
       
</style>