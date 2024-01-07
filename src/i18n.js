import { createI18n } from "vue-i18n";

const messages = {
  en: {
    linkToPage: "Link to Page",
    gallery: {
      vue: {
        title: "Vue, Bundler, and Node Migration",
        detail:
          "- Shifted Node version from 10 to 20\n- Successfully migrated 17 pages from Vue2 to Vue3\n- Replaced previous bundler Webpack with Vite\n- Reduced 30~50% build time\n- Skills & Technology used: HTML, CSS, JavaScript, Vue, NodeJS, Vite, Webpack, Bootstrap"
      },
      chat: {
        title: "Live-Chat Service",
        detail:
          "- Implemented Websocket-based APIs to accomplish live-chat service\n- Co-developed a chat component library for the company to use across different teams\n- Skills & Technology used: HTML, CSS, JavaScript, Vue, TailwindCss"
      },
      cancelApply: {
        title: "Job Application Cancelling",
        detail:
          "- Collaborated with backend developers and project managers\n- Skills & Technology used: HTML, CSS, JavaScript, Vue, Bootstrap"
      },
      feedback: {
        title: "Feedback Page",
        detail:
          "- Collaborated with backend developers and project managers\n- Skills & Technology used: HTML, CSS, JavaScript, Vue, Bootstrap"
      },
      changeJob: {
        title: "Career-Changing Page",
        detail:
          "- Collaborated with backend developers and project managers\n- Skills & Technology used: HTML, CSS, JavaScript, Vue, Bootstrap"
      },
      csr: {
        title: "Corporation-Social-Responsibility Page",
        detail:
          "- Collaborated with backend developers and project managers\n- Skills & Technology used: HTML, CSS, JavaScript, Vue, Bootstrap, SPA"
      },
      newestJob: {
        title: "Newest-Jobs Page",
        detail:
          "- Collaborated with backend developers and project managers\n- Skills & Technology used: HTML, CSS, JavaScript, Vue, Bootstrap"
      },
      profilePortfolio: {
        title: "Portfolio List Page",
        detail:
          "- Collaborated with backend developers and project managers\n- Skills & Technology used: HTML, CSS, JavaScript, Vue, Bootstrap, SPA"
      },
      profileCompany: {
        title: "Company-to-Employees Page",
        detail:
          "- Collaborated with backend developers and project managers\n- Skills & Technology used: HTML, CSS, JavaScript, Vue, Bootstrap, SPA"
      }
    }
  },
  zhTW: {
    linkToPage: "前往頁面",
    gallery: {
      vue: {
        title: "Vue、打包工具、Node 環境升版",
        detail:
          "- 將 Node 從 v10 升版至 v20\n- 成功把 17 個 Vue2 頁面改為 Vue3\n- 打包工具成功由 Webpack 轉移至 Vite\n- 打包時間減少了 30~50%\n- 使用技術：HTML, CSS, JavaScript, Vue, NodeJS, Vite, Webpack, Bootstrap"
      },
      chat: {
        title: "即時聊天室",
        detail:
          "- 和後端工程師協作串接 Websocket API 來達成即時聊天功能\n- 共同開發共用的聊天室元件供公司內部團隊使用\n- 使用技術：HTML, CSS, JavaScript, Vue, TailwindCss"
      },
      cancelApply: {
        title: "取消應徵功能",
        detail:
          "- 與後端工程師以及產品經理協作專案\n- 使用技術：HTML, CSS, JavaScript, Vue, Bootstrap"
      },
      feedback: {
        title: "意見回饋頁",
        detail:
          "- 與後端工程師以及產品經理協作專案\n- 使用技術：HTML, CSS, JavaScript, Vue, Bootstrap"
      },
      changeJob: {
        title: "轉職專區頁",
        detail:
          "- 與後端工程師以及產品經理協作專案\n- 使用技術：HTML, CSS, JavaScript, Vue, Bootstrap"
      },
      csr: {
        title: "企業社會責任頁",
        detail:
          "- 與後端工程師以及產品經理協作專案\n- 使用技術：HTML, CSS, JavaScript, Vue, Bootstrap, SPA"
      },
      newestJob: {
        title: "最新工作頁",
        detail:
          "- 與後端工程師以及產品經理協作專案\n- 使用技術：HTML, CSS, JavaScript, Vue, Bootstrap"
      },
      profilePortfolio: {
        title: "個人品牌 - 作品集頁",
        detail:
          "- 與後端工程師以及產品經理協作專案\n- 使用技術：HTML, CSS, JavaScript, Vue, Bootstrap, SPA"
      },
      profileCompany: {
        title: "公司員工頁",
        detail:
          "- 與後端工程師以及產品經理協作專案\n- 使用技術：HTML, CSS, JavaScript, Vue, Bootstrap, SPA"
      }
    }
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
