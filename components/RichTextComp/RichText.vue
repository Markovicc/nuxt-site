<template>

    <RNodes />
   
</template>

<script setup lang="ts" >

const props = defineProps(['vnodes', 'test']);

console.log('vnodes:', props.vnodes)

const RNodes = ref<any>(props.vnodes)
const test = ref<any>(props.test)

</script>