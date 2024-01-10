<script setup>
import { useRouter, useRoute } from "vue-router";
import { onMounted, watch, reactive, computed } from "vue";
import { useI18n } from "vue-i18n";
import { PARAMS_MAPPING } from "./i18n";
import Lightbox from "./components/Lightbox.vue";
import useTypewriter from "./components/typewriter.js";
import works from "./works.js";
import { OPTION_VALUES, VIDEO_TYPES } from "./enum.js";
import keys from "lodash/keys";
import reverse from "lodash/reverse";
import cloneDeep from "lodash/cloneDeep";

const router = useRouter();
const route = useRoute();
const { t, locale } = useI18n();
const lightbox = reactive({
  show: false,
  imgs: [],
  title: "",
  detail: "",
  url: "",
  skills: [],
  video: ""
});
const sort = reactive({
  value: OPTION_VALUES.LATEST,
  options: [
    {
      text: "sort.latest",
      value: OPTION_VALUES.LATEST
    },
    {
      text: "sort.oldest",
      value: OPTION_VALUES.OLDEST
    }
  ]
});

const worksList = computed(() => {
  const worksClone = cloneDeep(works);
  return sort.value === OPTION_VALUES.LATEST ? worksClone : reverse(worksClone);
});

const { textHTML, typewriter } = useTypewriter([
  "Hi!",
  "I'm Tiffany Chen",
  "A Front-End Developer",
  "Based in Taiwan"
]);

onMounted(async () => {
  await router.isReady();
  validateLang(route.params.lang);
  typewriter();
});

watch(() => route.params.lang, validateLang);

function validateLang(val) {
  if (keys(PARAMS_MAPPING).indexOf(val) !== -1) {
    locale.value = PARAMS_MAPPING[val];
  } else {
    router.push("/en");
  }
}

function openLightbox({ imgs, title, detail, url, skills, video }) {
  lightbox.imgs = imgs;
  lightbox.title = title;
  lightbox.detail = detail;
  lightbox.url = url;
  lightbox.skills = skills;
  lightbox.video = video;
  lightbox.show = true;
}

function isMobileImg(img) {
  return img.indexOf("_m.png") !== -1;
}
</script>

<template>
  <div class="app position-relative">
    <h1 class="d-none">Hsin-I Tiffany Chen's Portfolio</h1>
    <div class="app__lang position-absolute">
      <RouterLink
        class="app__lang__item mr-2"
        :class="{ 'app__lang__item--active': route.params.lang === 'en' }"
        to="/en"
        >EN</RouterLink
      >
      <RouterLink
        class="app__lang__item"
        :class="{ 'app__lang__item--active': route.params.lang === 'ch' }"
        to="/ch"
        >CH</RouterLink
      >
    </div>
    <div class="app__intro" v-html="textHTML.html"></div>
    <div class="app__main m-auto">
      <div>
        <div class="d-flex justify-content-end align-items-center mt-3">
          <span class="mr-1">{{ t("sort.title") }}</span>
          <select class="ml-1" v-model="sort.value">
            <option
              v-for="option in sort.options"
              :key="option.value"
              :value="option.value"
            >
              {{ t(option.text) }}
            </option>
          </select>
        </div>
      </div>
      <div v-for="item in worksList" :key="item.year">
        <div class="app__main__year mb-2 d-inline-block">{{ item.year }}</div>
        <div class="row mb-2">
          <div
            v-for="(img, index) in item.list"
            :key="index"
            class="col-12 col-md-4 mb-3"
          >
            <div
              class="app__main__work position-relative overflow-hidden"
              :style="{ backgroundImage: `url(${img.src})` }"
            >
              <img
                :src="img.src"
                :alt="img.title"
                class="app__main__work__img w-100"
              />
              <div
                class="app__main__work__mask position-absolute d-flex align-items-center justify-content-center"
                @click="openLightbox(img)"
              >
                <div class="app__main__work__mask__text text-white p-2">
                  {{ t(img.title) }}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="app__main__contact position-absolute text-center p-2">
        <div class="app__main__contact__title mb-2">
          {{ t("contact") }}
        </div>
        <div class="app__main__contact__item">
          <a href="https://github.com/ItsTiffanyChen" target="_blank">Github</a>
        </div>
        <div class="app__main__contact__item">
          <a
            href="https://www.linkedin.com/in/hsin-i-tiffany-chen-015392194/"
            target="_blank"
            >LinkedIn</a
          >
        </div>
        <div class="app__main__contact__item">
          <a href="tel:0912529286" target="_blank">0912529286</a>
        </div>
        <div class="app__main__contact__item">
          <a href="mailto:hc3099@tc.columbia.edu" target="_blank"
            >hc3099@tc.columbia.edu</a
          >
        </div>
      </div>
      <Lightbox :show="lightbox.show" @on-close="lightbox.show = false">
        <div class="app__main__lightbox p-4 text-center">
          <div class="app__main__lightbox__title mb-2">
            {{ t(lightbox.title) }}
          </div>
          <div
            class="app__main__lightbox__detail text-left mb-2"
            v-html="t(lightbox.detail)"
          />
          <div class="d-flex flex-wrap align-items-center">
            <div class="mr-1">
              {{ t("skillsUsed") }}
            </div>
            <div
              v-for="(skill, index) in lightbox.skills"
              :key="index"
              class="app__main__lightbox__tag mr-1 p-1"
            >
              {{ skill }}
            </div>
          </div>
          <div v-if="lightbox.url" class="text-left">
            <a
              class="app__main__lightbox__link d-inline-block position-relative"
              :href="lightbox.url"
              target="_blank"
              >{{ t("linkToPage") }}</a
            >
          </div>
          <div class="mt-4">
            <div v-if="lightbox.video?.type === VIDEO_TYPES.IFRAME">
              <iframe
                class="app__main__lightbox__video"
                width="100%"
                height="315"
                :src="lightbox.video.url"
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowfullscreen
              />
            </div>
            <div
              class="text-center"
              v-else-if="lightbox.video?.type === VIDEO_TYPES.VIDEO"
            >
              <video class="app__main__lightbox__video w-100" controls>
                <source :src="lightbox.video.url" type="video/mp4" />
              </video>
            </div>
            <div>
              <img
                class="app__main__lightbox__img mb-2 w-100"
                v-for="(img, index) in lightbox.imgs"
                :class="{ 'app__main__lightbox__img--m': isMobileImg(img) }"
                :key="index"
                :src="img"
                :alt="t(lightbox.title)"
              />
            </div>
          </div>
        </div>
      </Lightbox>
    </div>
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
$bg-color: #2d2f3d;
$bg-color--dark: #232530;
$text-color: #e5e5e5;
$text-color--dark: #2d2f3d;
$link-color: #a1d8ed;
$link-color--hover: #5f828e;

@mixin container-padding {
  padding-left: 20px;
  padding-right: 20px;

  @media screen and (min-width: 540px) {
    padding-left: 40px;
    padding-right: 40px;
  }

  @media screen and (min-width: 960px) {
    padding-left: 60px;
    padding-right: 60px;
  }

  @media screen and (min-width: 1300px) {
    padding-left: 80px;
    padding-right: 80px;
  }
}

@mixin custom-link {
  color: $link-color;
  transition: color 0.15s linear;
  text-decoration: none;

  &:hover {
    color: #86b7c9;
  }

  &--active,
  &--active:hover {
    color: $link-color--hover;
  }
}

.app {
  min-height: 100vh;
  min-width: 360px;
  font-family: monospace;
  padding-bottom: 132px;
  color: $text-color;

  &__lang {
    top: 8px;
    right: 8px;

    &__item {
      @include custom-link;
    }
  }

  &__intro {
    @include container-padding;

    letter-spacing: 2px;
    font-size: 18px;
    line-height: 1.5;
    height: 188px;
    background-color: $bg-color--dark;
    padding-top: 40px;
    padding-bottom: 40px;

    @media screen and (min-width: 960px) {
      height: 224px;
      font-size: 24px;
    }

    :deep(.caret) {
      margin-left: 2px;
      font-weight: bold;
      color: orange;
      animation: blink-caret 0.5s step-end infinite;
    }
  }

  &__main {
    @include container-padding;
    padding-top: 0;
    padding-bottom: 40px;

    &__year {
      border-bottom: 1px solid $text-color;
    }

    &__contact {
      bottom: 0;
      left: 0;
      right: 0;
      background-color: $bg-color--dark;

      &__title {
        font-size: 16px;
        font-weight: 500;
      }

      &__item {
        font-size: 14px;

        a {
          @include custom-link;
        }
      }
    }

    &__work {
      height: 200px;
      background-size: contain;
      background-position: center;
      background-repeat: no-repeat;
      background-color: rgba(#232530, 0.8);
      border-radius: 4px;

      &__img {
        visibility: hidden;
      }

      &__mask {
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        background-color: rgba(#6a6a6a, 0.8);
        cursor: pointer;

        @media screen and (min-width: 960px) {
          opacity: 0;
          transition: opacity 0.15s linear;

          &:hover {
            opacity: 0.9;
          }
        }

        &__text {
          font-size: 16px;
          font-weight: 500;
        }
      }
    }

    &__lightbox {
      font-size: 14px;
      color: $text-color--dark;

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

      &__tag {
        background-color: $bg-color;
        color: $text-color;
        border-radius: 8px;
        font-size: 14px;
      }

      iframe {
        max-width: 560px;
      }
    }
  }

  select {
    padding: 2px;
    border-radius: 4px;
    outline: none;
  }
}

@keyframes blink-caret {
  from,
  to {
    color: transparent;
  }
  50% {
    color: orange;
  }
}
</style>
