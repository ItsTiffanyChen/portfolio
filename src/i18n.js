import { createI18n } from "vue-i18n";

const messages = {
  en: {
    linkToPage: "Link to Page",
    gallery: {
      vue: {
        title: "Vue, Bundler, and Node Migration",
        detail:
          "- Shifted Node version from 10 to 20\n- Successfully migrated 17 pages from Vue2 to Vue3\n- Replaced previous bundler Webpack with Vite\n- Reduced 30~50% build time"
      },
      chat: {
        title: "Live-Chat Service",
        detail:
          "- Implemented Websocket-based APIs to accomplish live-chat service\n- Co-developed a chat component library for the company to use across different teams"
      },
      cancelApply: {
        title: "Job Application Cancelling",
        detail: "- Collaborated with backend developers and project managers"
      },
      feedback: {
        title: "Feedback Page",
        detail: "- Collaborated with backend developers and project managers"
      },
      changeJob: {
        title: "Career-Changing Page",
        detail: "- Collaborated with backend developers and project managers"
      },
      csr: {
        title: "Corporation-Social-Responsibility Page",
        detail: "- Collaborated with backend developers and project managers"
      },
      newestJob: {
        title: "Newest-Jobs Page",
        detail: "- Collaborated with backend developers and project managers"
      },
      profilePortfolio: {
        title: "Portfolio List Page",
        detail: "- Collaborated with backend developers and project managers"
      },
      profileCompany: {
        title: "Company-to-Employees Page",
        detail: "- Collaborated with backend developers and project managers"
      },
      game: {
        title: "Block-Clearing Game",
        detail:
          "- Collaborated with another front-end developer in developing a block-clearing game which involves processing animation, utilizing css sprites, score checking, and calculating element positions."
      }
    },
    contact: "Contact Me",
    sort: {
      title: "Sort by",
      latest: "Latest",
      oldest: "Oldest"
    },
    skillsUsed: "Skills/Technology: "
  },
  zhTW: {
    linkToPage: "前往頁面",
    gallery: {
      vue: {
        title: "Vue、打包工具、Node 環境升版",
        detail:
          "- 將 Node 從 v10 升版至 v20\n- 成功把 17 個 Vue2 頁面改為 Vue3\n- 打包工具成功由 Webpack 轉移至 Vite\n- 打包時間減少了 30~50%"
      },
      chat: {
        title: "即時聊天室",
        detail:
          "- 和後端工程師協作串接 Websocket API 來達成即時聊天功能\n- 共同開發共用的聊天室元件供公司內部團隊使用"
      },
      cancelApply: {
        title: "取消應徵功能",
        detail: "- 與後端工程師以及產品經理協作專案"
      },
      feedback: {
        title: "意見回饋頁",
        detail: "- 與後端工程師以及產品經理協作專案"
      },
      changeJob: {
        title: "轉職專區頁",
        detail: "- 與後端工程師以及產品經理協作專案"
      },
      csr: {
        title: "企業社會責任頁",
        detail: "- 與後端工程師以及產品經理協作專案"
      },
      newestJob: {
        title: "最新工作頁",
        detail: "- 與後端工程師以及產品經理協作專案"
      },
      profilePortfolio: {
        title: "個人品牌 - 作品集頁",
        detail: "- 與後端工程師以及產品經理協作專案"
      },
      profileCompany: {
        title: "公司員工頁",
        detail: "- 與後端工程師以及產品經理協作專案"
      },
      game: {
        title: "方塊消除遊戲",
        detail:
          "- 與另一位前端工程師協作開發方塊消除遊戲，包含處理動畫、使用 css sprites、計算分數、計算元素位置等等"
      }
    },
    contact: "聯絡方式",
    sort: {
      title: "排序",
      latest: "最新",
      oldest: "最舊"
    },
    skillsUsed: "使用技術："
  }
};

export const PARAMS_MAPPING = {
  ch: "zhTW",
  en: "en"
};

export default createI18n({
  locale: "en",
  fallbackLocale: "en",
  messages,
  legacy: false
});
