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
  detail: "",
  url: ""
});

onMounted(async () => {
  await router.isReady();
  validateLang(route.params.lang);
});

watch(() => route.params.lang, validateLang);

function validateLang(val) {
  if (keys(PARAMS_MAPPING).indexOf(val) !== -1) {
    locale.value = PARAMS_MAPPING[val];
  } else {
    router.push("/en");
  }
}

function openLightbox({ imgs, title, detail, url }) {
  lightbox.imgs = imgs;
  lightbox.title = title;
  lightbox.detail = detail;
  lightbox.url = url;
  lightbox.show = true;
}

function isMobileImg(img) {
  return img.indexOf("_m.png") !== -1;
}
</script>

<template>
  <div class="app position-relative">
    <div class="p-2 text-right">
      <RouterLink
        class="app__lang mr-2"
        :class="{ 'app__lang--active': route.params.lang === 'en' }"
        to="/en"
        >EN</RouterLink
      >
      <RouterLink
        class="app__lang"
        :class="{ 'app__lang--active': route.params.lang === 'ch' }"
        to="/ch"
        >CH</RouterLink
      >
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
        <div v-if="lightbox.url" class="text-left mb-2">
          <a
            class="app__lightbox__link d-inline-block position-relative"
            :href="lightbox.url"
            target="_blank"
            >{{ t("linkToPage") }}</a
          >
        </div>
        <img
          class="app__lightbox__img mb-2 w-100"
          v-for="(img, index) in lightbox.imgs"
          :class="{ 'app__lightbox__img--m': isMobileImg(img) }"
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
.app {
  min-height: 100vh;
  min-width: 360px;

  &__lang {
    color: #a1d8ed;
    transition: color 0.15s linear;
    text-decoration: none;

    &:hover {
      color: #86b7c9;
    }

    &--active,
    &--active:hover {
      color: #5f828e;
    }
  }

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
  }

  &__lightbox {
    font-size: 14px;

    @media screen and (min-width: 960px) {
      font-size: 16px;
    }

    &__img {
      &--m {
        max-width: 360px;
      }
    }

    &__title {
      font-size: 16px;
      font-weight: 500;

      @media screen and (min-width: 960px) {
        font-size: 18px;
      }
    }

    &__detail {
      white-space: pre-wrap;
    }

    &__link {
      text-decoration: none;
      transition: color 0.15s linear;

      &::after {
        content: "";
        position: absolute;
        height: 1px;
        width: 0;

        bottom: 0;
        left: 0;
        background-color: #0270e5;
        transition: width 0.15s ease;
      }

      &:hover {
        color: #0270e5;

        &::after {
          width: 100%;
        }
      }
    }
  }
}
</style>
