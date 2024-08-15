<template>

    <RNodes />
   
</template>

<script setup lang="ts" >

const props = defineProps(['vnodes', 'test']);

const RNodes = ref<any>(props.vnodes)
const test = ref<any>(props.test)

</script>