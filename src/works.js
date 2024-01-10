const publicPath = import.meta.env.VITE_PUBLIC_URL;
import { VIDEO_TYPES } from "./enum.js";

export default [
  {
    year: 2024,
    list: [
      {
        src: `${publicPath}build_comparison.png`,
        title: "gallery.vue.title",
        detail: "gallery.vue.detail",
        imgs: [`${publicPath}build_comparison.png`],
        skills: [
          "HTML",
          "CSS",
          "JavaScript",
          "Vue",
          "NodeJS",
          "Vite",
          "Webpack",
          "Bootstrap"
        ]
      }
    ]
  },
  {
    year: 2023,
    list: [
      {
        // 7
        src: `${publicPath}profile-company_pc.png`,
        title: "gallery.profileCompany.title",
        detail: "gallery.profileCompany.detail",
        imgs: [
          `${publicPath}profile-portfolio_pc.png`,
          `${publicPath}profile-company_m.png`
        ],
        url: "https://profile.104.com.tw/company/12v3o7uw",
        skills: ["HTML", "CSS", "JavaScript", "Vue", "Bootstrap", "SPA"]
      },
      {
        src: `${publicPath}game.png`,
        title: "gallery.game.title",
        detail: "gallery.game.detail",
        imgs: [],
        video: {
          type: VIDEO_TYPES.IFRAME,
          url: "https://www.youtube.com/embed/8i6MtHbogis?si=nQtx9CChpTh9ZPWi&mute=1"
        },
        skills: ["HTML", "CSS", "JavaScript", "Vue", "RWD", "CSS Sprites"]
      }
      // {
      //   // 7
      //   src: `${publicPath}profile-company_m.png`,
      //   title: "gallery.profileCompany.title",
      //   detail: "gallery.profileCompany.detail",
      //   imgs: [
      //     `${publicPath}profile-portfolio_pc.png`,
      //     `${publicPath}profile-company_m.png`
      //   ],
      //   url: "https://profile.104.com.tw/company/12v3o7uw"
      // }
    ]
  },
  {
    year: 2022,
    list: [
      {
        // 11
        src: `${publicPath}feedback_pc.png`,
        title: "gallery.feedback.title",
        detail: "gallery.feedback.detail",
        imgs: [`${publicPath}feedback_pc.png`, `${publicPath}feedback_m.png`],
        url: "https://www.104.com.tw/feedback/",
        skills: ["HTML", "CSS", "JavaScript", "Vue", "Bootstrap"]
      },
      // {
      //   // 11
      //   src: `${publicPath}feedback_m.png`,
      //   title: "gallery.feedback.title",
      //   detail: "gallery.feedback.detail",
      //   imgs: [`${publicPath}feedback_pc.png`, `${publicPath}feedback_m.png`],
      //   url: "https://www.104.com.tw/feedback/"
      // },
      // {
      //   // 11
      //   src: `${publicPath}changejob_m.png`,
      //   title: "gallery.changeJob.title",
      //   detail: "gallery.changeJob.detail",
      //   imgs: [`${publicPath}changejob_pc.png`, `${publicPath}changejob_m.png`],
      //   url: "https://www.104.com.tw/jobs/main/changejob/"
      // },
      {
        // 11
        src: `${publicPath}changejob_pc.png`,
        title: "gallery.changeJob.title",
        detail: "gallery.changeJob.detail",
        imgs: [`${publicPath}changejob_pc.png`, `${publicPath}changejob_m.png`],
        url: "https://www.104.com.tw/jobs/main/changejob/",
        skills: ["HTML", "CSS", "JavaScript", "Vue", "Bootstrap"]
      },
      {
        // 11
        src: `${publicPath}newestjob_pc.png`,
        title: "gallery.newestJob.title",
        detail: "gallery.newestJob.detail",
        imgs: [`${publicPath}newestjob_pc.png`, `${publicPath}newestjob_m.png`],
        url: "https://www.104.com.tw/jobs/main/newestjob/",
        skills: ["HTML", "CSS", "JavaScript", "Vue", "Bootstrap"]
      },
      // {
      //   // 11
      //   src: `${publicPath}newestjob_m.png`,
      //   title: "gallery.newestJob.title",
      //   detail: "gallery.newestJob.detail",
      //   imgs: [`${publicPath}newestjob_pc.png`, `${publicPath}newestjob_m.png`],
      //   url: "https://www.104.com.tw/jobs/main/newestjob/"
      // },
      // {
      //   // 4
      //   src: `${publicPath}profile-portfolio_m.png`,
      //   title: "gallery.profilePortfolio.title",
      //   detail: "gallery.profilePortfolio.detail",
      //   imgs: [
      //     `${publicPath}profile-portfolio_pc.png`,
      //     `${publicPath}profile-portfolio_m.png`
      //   ],
      //   url: "https://profile.104.com.tw/portfolio"
      // },
      {
        // 4
        src: `${publicPath}profile-portfolio_pc.png`,
        title: "gallery.profilePortfolio.title",
        detail: "gallery.profilePortfolio.detail",
        imgs: [
          `${publicPath}profile-portfolio_pc.png`,
          `${publicPath}profile-portfolio_m.png`
        ],
        url: "https://profile.104.com.tw/portfolio",
        skills: ["HTML", "CSS", "JavaScript", "Vue", "Bootstrap", "SPA"]
      }
    ]
  },
  {
    year: 2021,
    list: [
      // {
      //   // 9
      //   src: `${publicPath}chat_m.png`,
      //   title: "gallery.chat.title",
      //   detail: "gallery.chat.detail",
      //   imgs: [`${publicPath}chat_pc.png`, `${publicPath}chat_m.png`]
      // },
      {
        // 9
        src: `${publicPath}chat_pc.png`,
        title: "gallery.chat.title",
        detail: "gallery.chat.detail",
        imgs: [`${publicPath}chat_pc.png`, `${publicPath}chat_m.png`],
        video: {
          type: VIDEO_TYPES.VIDEO,
          url: `${publicPath}chat.mov`
        },
        skills: ["HTML", "CSS", "JavaScript", "Vue", "TailwindCss"]
      }
    ]
  },
  {
    year: 2020,
    list: [
      {
        // 12
        src: `${publicPath}csr_pc.png`,
        title: "gallery.csr.title",
        detail: "gallery.csr.detail",
        imgs: [`${publicPath}csr_pc.png`, `${publicPath}csr_m.png`],
        url: "https://www.104.com.tw/csr/",
        skills: ["HTML", "CSS", "JavaScript", "Vue", "Bootstrap", "SPA"]
      },
      // {
      //   // 12
      //   src: `${publicPath}csr_m.png`,
      //   title: "gallery.csr.title",
      //   detail: "gallery.csr.detail",
      //   imgs: [`${publicPath}csr_pc.png`, `${publicPath}csr_m.png`],
      //   url: "https://www.104.com.tw/csr/"
      // },
      {
        // 10
        src: `${publicPath}cancel-apply_partial.png`,
        title: "gallery.cancelApply.title",
        detail: "gallery.cancelApply.detail",
        imgs: [
          `${publicPath}cancel-apply_full.png`,
          `${publicPath}cancel-my104_full.png`
        ],
        skills: ["HTML", "CSS", "JavaScript", "Vue", "Bootstrap"]
      }
      // {
      //   // 10
      //   src: `${publicPath}cancel-my104_partial.png`,
      //   title: "gallery.cancelApply.title",
      //   detail: "gallery.cancelApply.detail",
      //   imgs: [
      //     `${publicPath}cancel-apply_full.png`,
      //     `${publicPath}cancel-my104_full.png`
      //   ]
      // }
    ]
  }
];
