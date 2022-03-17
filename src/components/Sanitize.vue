<template>
  <div>
    <textarea v-model="input"></textarea>
  </div>
  <div>
    {{ sanitizedText}}
  </div>
</template>
<script lang="ts" setup>
import { computed, ref } from 'vue';
import { sanitizeToText } from '../utils/sanitize';

const input = ref('')
const sanitizedText = computed(() => sanitizeToText(input.value))

</script>