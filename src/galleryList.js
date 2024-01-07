const publicPath = import.meta.env.VITE_PUBLIC_URL;

export default [
  {
    src: `${publicPath}build_comparison.png`,
    title: "gallery.vue.title",
    detail: "gallery.vue.detail",
    imgs: [`${publicPath}build_comparison.png`]
  },
  {
    src: `${publicPath}chat_m.png`,
    title: "gallery.chat.title",
    detail: "gallery.chat.detail",
    imgs: [`${publicPath}chat_pc.png`, `${publicPath}chat_m.png`]
  },
  {
    src: `${publicPath}chat_pc.png`,
    title: "gallery.chat.title",
    detail: "gallery.chat.detail",
    imgs: [`${publicPath}chat_pc.png`, `${publicPath}chat_m.png`]
  },
  {
    src: `${publicPath}cancel-apply_partial.png`,
    title: "gallery.cancelApply.title",
    detail: "gallery.cancelApply.detail",
    imgs: [
      `${publicPath}cancel-apply_full.png`,
      `${publicPath}cancel-my104_full.png`
    ]
  },
  {
    src: `${publicPath}cancel-my104_partial.png`,
    title: "gallery.cancelApply.title",
    detail: "gallery.cancelApply.detail",
    imgs: [
      `${publicPath}cancel-apply_full.png`,
      `${publicPath}cancel-my104_full.png`
    ]
  },
  {
    src: `${publicPath}changejob_m.png`,
    title: "gallery.changeJob.title",
    detail: "gallery.changeJob.detail",
    imgs: [`${publicPath}changejob_pc.png`, `${publicPath}changejob_m.png`],
    url: "https://www.104.com.tw/jobs/main/changejob/"
  },
  {
    src: `${publicPath}changejob_pc.png`,
    title: "gallery.changeJob.title",
    detail: "gallery.changeJob.detail",
    imgs: [`${publicPath}changejob_pc.png`, `${publicPath}changejob_m.png`],
    url: "https://www.104.com.tw/jobs/main/changejob/"
  },
  {
    src: `${publicPath}csr_pc.png`,
    title: "gallery.csr.title",
    detail: "gallery.csr.detail",
    imgs: [`${publicPath}csr_pc.png`, `${publicPath}csr_m.png`],
    url: "https://www.104.com.tw/csr/"
  },
  {
    src: `${publicPath}csr_m.png`,
    title: "gallery.csr.title",
    detail: "gallery.csr.detail",
    imgs: [`${publicPath}csr_pc.png`, `${publicPath}csr_m.png`],
    url: "https://www.104.com.tw/csr/"
  },
  {
    src: `${publicPath}profile-portfolio_m.png`,
    title: "gallery.profilePortfolio.title",
    detail: "gallery.profilePortfolio.detail",
    imgs: [
      `${publicPath}profile-portfolio_pc.png`,
      `${publicPath}profile-portfolio_m.png`
    ],
    url: "https://profile.104.com.tw/portfolio"
  },
  {
    src: `${publicPath}profile-portfolio_pc.png`,
    title: "gallery.profilePortfolio.title",
    detail: "gallery.profilePortfolio.detail",
    imgs: [
      `${publicPath}profile-portfolio_pc.png`,
      `${publicPath}profile-portfolio_m.png`
    ],
    url: "https://profile.104.com.tw/portfolio"
  },
  {
    src: `${publicPath}profile-company_pc.png`,
    title: "gallery.profileCompany.title",
    detail: "gallery.profileCompany.detail",
    imgs: [
      `${publicPath}profile-portfolio_pc.png`,
      `${publicPath}profile-company_m.png`
    ],
    url: "https://profile.104.com.tw/company/12v3o7uw"
  },
  {
    src: `${publicPath}profile-company_m.png`,
    title: "gallery.profileCompany.title",
    detail: "gallery.profileCompany.detail",
    imgs: [
      `${publicPath}profile-portfolio_pc.png`,
      `${publicPath}profile-company_m.png`
    ],
    url: "https://profile.104.com.tw/company/12v3o7uw"
  },
  {
    src: `${publicPath}newestjob_pc.png`,
    title: "gallery.newestJob.title",
    detail: "gallery.newestJob.detail",
    imgs: [`${publicPath}newestjob_pc.png`, `${publicPath}newestjob_m.png`],
    url: "https://www.104.com.tw/jobs/main/newestjob/"
  },
  {
    src: `${publicPath}newestjob_m.png`,
    title: "gallery.newestJob.title",
    detail: "gallery.newestJob.detail",
    imgs: [`${publicPath}newestjob_pc.png`, `${publicPath}newestjob_m.png`],
    url: "https://www.104.com.tw/jobs/main/newestjob/"
  },
  {
    src: `${publicPath}feedback_pc.png`,
    title: "gallery.feedback.title",
    detail: "gallery.feedback.detail",
    imgs: [`${publicPath}feedback_pc.png`, `${publicPath}feedback_m.png`],
    url: "https://www.104.com.tw/feedback/"
  },
  {
    src: `${publicPath}feedback_m.png`,
    title: "gallery.feedback.title",
    detail: "gallery.feedback.detail",
    imgs: [`${publicPath}feedback_pc.png`, `${publicPath}feedback_m.png`],
    url: "https://www.104.com.tw/feedback/"
  }
];
