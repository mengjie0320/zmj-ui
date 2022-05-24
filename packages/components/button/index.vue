<template>
  <button :class="classSet" @click="handleClick">
    <slot></slot>  
  </button>  
</template>


<script>
export default {
  name: 'ckButton',
  props: {
    type: {
      type: String,
      default: 'primary'
    }
  },
  computed: {
    classSet() {
      let classResult = `cookie-button cookie-button--${this.type}`;
      return classResult;
    }
  },
  methods: {
    handleClick() {
      this.$emit('click');
    }
  }
}
</script>
