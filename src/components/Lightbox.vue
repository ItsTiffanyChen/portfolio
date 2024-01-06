<script setup>
import VueTypes from "vue-types";
import { watch } from "vue";

const props = defineProps({
  show: VueTypes.bool.def(false)
});
const emit = defineEmits(["onClose"]);

watch(
  () => props.show,
  val => {
    if (val) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }
);
</script>

<template>
  <transition name="fade">
    <div
      v-if="show"
      class="lightbox position-fixed d-flex align-items-center justify-content-center"
      @click.self="$emit('onClose')"
    >
      <div class="lightbox__content overflow-auto">
        <slot />
      </div>
    </div>
  </transition>
</template>

<style lang="scss" scoped>
.lightbox {
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: rgba(#6a6a6a, 0.4);
  z-index: 2;

  &__content {
    border-radius: 6px;
    background-color: #fff;
    width: 80%;
    max-height: 90%;
  }
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.25s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
