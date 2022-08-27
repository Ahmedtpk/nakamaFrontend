<template>
    <button
      :id="id"
      :data-cy="id"
      v-on:click="$emit('button-clicked')"
      :type="type"
      :disabled="isDisabled"
      class="bg-nakama-pink hover:bg-white hover:text-nakama-pink text-white font-semibold py-2 px-4 border hover:border-nakama-pink rounded-xl shadow"
      :class="[isDisabled ? 'bg-nakama-gray' : 'bg-nakama-green hover:bg-nakama-green-dark']"
    >
      {{ text }}
    </button>
</template>

<script>
export default {
  name: 'Button-atom',
  props: {
    id: String,
    text: String,
    type: String,
    isDisabled: Boolean
  },
  emits: ['button-clicked']
}
</script>