<template>
  <div ref="el">
    <div class="gallery d-flex flex-wrap">
      <div
        v-for="(img, index) in state.imgsClone"
        :key="img.id"
        class="gallery__img mb-2 position-relative mx-1"
        :style="getImgStyles(img.id)"
      >
        <img :src="img.src" loading="lazy" />
        <div
          class="gallery__img__mask position-absolute d-flex align-items-center justify-content-center"
          @click="$emit('onImgClick', img)"
        >
          <div class="gallery__img__mask__text text-white p-2">
            {{ t(img.title) }}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
import { useI18n } from "vue-i18n";
import VueTypes from "vue-types";
import ResizeObserver from "resize-observer-polyfill";
import { v4 as uuidv4 } from "uuid";
import { reactive, watch, onMounted, onUnmounted, ref, nextTick } from "vue"

const props = defineProps({
  imgs: VueTypes.arrayOf(
      VueTypes.shape({
        src: VueTypes.string.def("")
      }).def({ src: "" })
    ).def([]).loose,
    heightSetting: VueTypes.number.def(0),
    containerElement: VueTypes.instanceOf(HTMLDivElement)
})
const emit = defineEmits(["onImgClick"])
const { t } = useI18n();

const state = reactive({
  imgsClone: [],
  resizeObserver: null,
  timeout: null
})

const el = ref(null)

onMounted(async() => {
  await nextTick()
  state.resizeObserver = new ResizeObserver(entries => {
    // console.log("resized");
    debouncedCalcImgSize();
  });
  console.log(el.value);
  state.resizeObserver.observe(el.value);
  initImgs();
})

onUnmounted(() => {
  state.resizeObserver.unobserve(el.value);
})

watch(() => props.heightSetting, () => {
  debouncedCalcImgSize()
})

watch(() => props.imgs, () => {
  updateImgs()
})

async function initImgs() {
  const imgsClone = props.imgs.map(img => ({
    ...img,
    loading: true,
    id: uuidv4()
  }));
  await Promise.all(
    imgsClone.map((img, index) => {
      return new Promise(resolve => {
        const image = new Image();
        image.src = img.src;
        image.onload = () => {
          (imgsClone[index].width = image.width),
            (imgsClone[index].height = image.height),
            resolve();
        };
      });
    })
  );
  state.imgsClone = imgsClone;
  loadImgs();
  debouncedCalcImgSize();
}

function getValueWithoutUnit(val) {
  return +val.replace("px", "");
}

function getImgStyles(id) {
  const img = state.imgsClone.find(img => img.id === id);
  return `width: ${img.displayWidth ? `${img.displayWidth}px` : ""};`;
}

function debouncedCalcImgSize() {
  if (state.timeout) {
    clearTimeout(state.timeout);
    state.timeout = null;
  } 
  state.timeout = setTimeout(() => {
      calcImgSize();
    }, 300);
}

function calcImgSize() {
  const containerEl = props.containerElement;
  const { paddingLeft, paddingRight, borderWidth } =
    window.getComputedStyle(containerEl);
  const containerWidth =
    containerEl.clientWidth -
    getValueWithoutUnit(paddingLeft) -
    getValueWithoutUnit(paddingRight) -
    getValueWithoutUnit(borderWidth) * 2;
  if (!containerWidth) return;
  
  const totalImgs = state.imgsClone.length;
  let ratioSumMax = containerWidth / props.heightSetting;
  let ratioSum,
    ratio,
    row,
    i = 0;
  let newImgList = [];

  for (i; i < totalImgs; ) {
    // console.log("out");
    ratioSum = 0;
    row = new Array();

    while (i < totalImgs && ratioSum < ratioSumMax) {
      // console.log("in");
      const photo = { ...state.imgsClone[i] };
      const { width, height } = photo;
      ratio = width / height;
      photo.isFirst = ratioSum === 0;
      ratioSum += ratio;

      row.push(photo);
      i++;

      if (i === totalImgs - 1) ratioSumMax = 999;
    }
    // 每張圖片的左右 margin 為 8px
    const unitWidth = (containerWidth - 8 * row.length) / ratioSum;
    row.forEach(function (elem) {
      elem.displayWidth = Math.floor(
        (unitWidth * elem.width) / elem.height
      );
    });
    newImgList = [...newImgList, ...row];
  }
  state.imgsClone = newImgList;
}

function loadImgs() {
  state.imgsClone.forEach(img => {
    const image = new Image();
    image.src = img.src;
    const imageHandler = () => {
      state.imgsClone = state.imgsClone.map(item => ({
        ...item,
        loading: item.id === img.id ? false : item.loading
      }));
    };
    image.onload = imageHandler;
    image.onerror = imageHandler;
  });
}

function updateImgs() {
  state.imgsClone = props.imgs.map(img => {
    const existingImg = state.imgsClone.find(item => item.id === img.id);
    return existingImg ? { ...existingImg } : { ...img, loading: true };
  });
  loadImgs();
  debouncedCalcImgSize();
}
</script>
<style lang="scss" scoped>
.gallery {
  &__img {
    transition: margin linear 0.1s, width linear 0.1s;

    img {
      width: 100%;
    }

    &__mask {
      top: 0;
      bottom: 0;
      left: 0;
      right: 0;
      background-color: rgba(#6a6a6a, 0.8);
      cursor: pointer;
      transition: background-color 0.15s linear;

      &__text {
        font-size: 16px;
        font-weight: 500;
        opacity: 0.8;
        transition: opacity 0.15s linear;

        @media screen and (min-width: 960px) {
          font-size: 20px;
        }
      }

      &:hover {
        background-color: rgba(#6a6a6a, 0.3);

        .gallery__img__mask__text {
          display: block;
          opacity: 0;
        }
      }
    }
  }

  .cursor-pointer {
    cursor: pointer;
  }
}
</style>
