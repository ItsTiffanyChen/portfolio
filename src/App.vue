<script setup>
import { useRouter, useRoute } from "vue-router";
import { onMounted, watch, reactive, ref } from "vue";
import { useI18n } from "vue-i18n";
import { PARAMS_MAPPING } from "./i18n";
import keys from "lodash/keys";
import Gallery from "./components/Gallery.vue";
import Lightbox from "./components/Lightbox.vue";
import galleryList from "./galleryList.js";

const router = useRouter();
const route = useRoute();
const { t, locale } = useI18n();
const imgs = reactive(galleryList);
const galleryContainerRef = ref(null);
const lightbox = reactive({
  show: false,
  imgs: [],
  title: "",
  detail: ""
});

onMounted(async () => {
  await router.isReady();
});

watch(
  () => route.params.lang,
  val => {
    if (keys(PARAMS_MAPPING).indexOf(val) !== -1) {
      locale.value = PARAMS_MAPPING[val];
    } else {
      router.push("/en");
    }
  },
  {
    immediate: true
  }
);

function openLightbox({ imgs, title, detail }) {
  lightbox.imgs = imgs;
  lightbox.title = title;
  lightbox.detail = detail;
  lightbox.show = true;
}
</script>

<template>
  <div class="app position-relative">
    <div class="text-right">
      <RouterLink class="mr-2" to="/en">EN</RouterLink>
      <RouterLink to="/ch">CH</RouterLink>
    </div>
    <div class="app__main m-auto">
      <div ref="galleryContainerRef" class="main__portfolio">
        <Gallery
          :imgs="imgs"
          :containerElement="galleryContainerRef"
          :height-setting="1200"
          @onImgClick="openLightbox"
        />
      </div>
    </div>
    <Lightbox :show="lightbox.show" @on-close="lightbox.show = false">
      <div class="app__lightbox p-4 text-center">
        <div class="app__lightbox__title mb-2">
          {{ t(lightbox.title) }}
        </div>
        <div
          class="app__lightbox__detail text-left mb-4"
          v-html="t(lightbox.detail)"
        />
        <img
          class="app__lightbox__img mb-2"
          v-for="(img, index) in lightbox.imgs"
          :key="index"
          :src="img"
          :alt="t(lightbox.title)"
        />
      </div>
    </Lightbox>
  </div>
</template>

<style lang="scss">
@import "./base.scss";

html,
body {
  width: 100%;
  height: 100%;
}

body {
  background-color: #2d2f3d;
}
</style>
<style scoped lang="scss">
@mixin title {
  font-size: 20px;
  font-weight: 500;
}

.app {
  min-height: 100vh;
  padding: 20px;

  &__main {
    color: #e5e5e5;
    padding: 20px;

    @media screen and (min-width: 540px) {
      padding: 40px;
    }

    @media screen and (min-width: 960px) {
      padding: 60px;
    }

    @media screen and (min-width: 1300px) {
      padding: 80px;
    }

    &__about-me {
      &__title {
        @include title;
      }

      &__description {
        white-space: pre-wrap;
      }
    }
  }

  &__lightbox {
    &__img {
      max-width: 100%;
    }

    &__title {
      @include title;
    }

    &__detail {
      white-space: pre-wrap;
    }
  }

  a {
    color: #a1d8ed;
    transition: color 0.15s linear;
    text-decoration: none;

    &:hover {
      color: #86b7c9;
    }
  }
}
</style>
