const tree = `
Cms_Admin
│  .browserslistrc
│  .editorconfig
│  .env.development
│  .env.production
│  .env.test
│  .eslintrc.js
│  .gitignore
│  .prettierignore
│  .prettierrc
│  babel.config.js
│  commitlint.config.js
│  package-lock.json
│  package.json
│  README.md
│  tsconfig.json
│  vue.config.js
│
├─.husky
│  │  commit-msg
│  │  pre-commit
│  │
│  └─
│          .gitignore
│          husky.sh
│
├─public
│      favicon.ico
│      index.html
│
└─src
    │  App.vue
    │  main.ts
    │  shims-vue.d.ts
    │
    ├─assets
    │  ├─css
    │  │      base.less
    │  │      index.less
    │  │      wangEditor.less
    │  │
    │  └─images
    │          background_img.jpg
    │          logo.png
    │
    ├─base-ui
    │  ├─breadcrumb
    │  │  │  index.ts
    │  │  │
    │  │  ├─src
    │  │  │      BreadCrumb.vue
    │  │  │
    │  │  └─types
    │  │          types.ts
    │  │
    │  ├─card
    │  │  │  index.ts
    │  │  │
    │  │  └─src
    │  │          AnCard.vue
    │  │
    │  ├─descriptions
    │  │  │  index.ts
    │  │  │
    │  │  └─src
    │  │          AnDescriptions.vue
    │  │
    │  ├─echarts
    │  │  │  index.ts
    │  │  │
    │  │  ├─hooks
    │  │  │      initECharts.ts
    │  │  │      mapCityToMap.ts
    │  │  │
    │  │  ├─map
    │  │  │      china.json
    │  │  │      city.ts
    │  │  │
    │  │  └─src
    │  │          AnEcharts.vue
    │  │
    │  ├─editor
    │  │  │  index.ts
    │  │  │
    │  │  └─src
    │  │          AnEditor.vue
    │  │
    │  ├─form
    │  │  │  index.ts
    │  │  │
    │  │  ├─src
    │  │  │      MsiForm.vue
    │  │  │
    │  │  └─types
    │  │          types.ts
    │  │
    │  ├─tabel
    │  │  │  index.ts
    │  │  │
    │  │  ├─src
    │  │  │      AnTabel.vue
    │  │  │
    │  │  └─types
    │  │          types.ts
    │  │
    │  └─upload
    │      │  index.ts
    │      │
    │      └─src
    │              AnUpload.vue
    │
    ├─components
    │  ├─nav-header
    │  │  │  index.ts
    │  │  │
    │  │  └─src
    │  │          NavHeader.vue
    │  │
    │  ├─nav-menu
    │  │  │  index.ts
    │  │  │
    │  │  └─src
    │  │          NavMenu.vue
    │  │
    │  ├─page-modal
    │  │  │  index.ts
    │  │  │
    │  │  ├─src
    │  │  │      PageModal.vue
    │  │  │
    │  │  └─types
    │  │          types.ts
    │  │
    │  ├─page-echart
    │  │  │  index.ts
    │  │  │
    │  │  └─src
    │  │          PageBarChart.vue
    │  │          PageChinaChart.vue
    │  │          PageLineChart.vue
    │  │          PagePicChart.vue
    │  │          PagePicLableChart.vue
    │  │          PageRoseChart.vue
    │  │
    │  ├─page-search
    │  │  │  index.ts
    │  │  │
    │  │  └─src
    │  │          PageSearch.vue
    │  │
    │  └─page-tabel
    │      │  index.ts
    │      │
    │      └─src
    │              PageTabel.vue
    │
    ├─global
    │      index.ts
    │      register-element.ts
    │      register-properties.ts
    │
    ├─hooks
    │      countAction.ts
    │      pageLinkage.ts
    │      permission.ts
    │
    ├─router
    │  │  index.ts
    │  │
    │  └─main
    │      ├─analysis
    │      │  ├─dashboard
    │      │  │      dashboard.ts
    │      │  │
    │      │  └─overview
    │      │          overview.ts
    │      │
    │      ├─product
    │      │  ├─category
    │      │  │      category.ts
    │      │  │
    │      │  └─goods
    │      │          goods.ts
    │      │
    │      ├─story
    │      │  ├─chat
    │      │  │      chat.ts
    │      │  │
    │      │  └─list
    │      │          list.ts
    │      │
    │      └─system
    │          ├─department
    │          │      department.ts
    │          │
    │          ├─menu
    │          │      menu.ts
    │          │
    │          ├─role
    │          │      role.ts
    │          │
    │          └─user
    │                  user.ts
    │
    ├─service
    │  │  index.ts
    │  │  types.ts
    │  │
    │  ├─login
    │  │      index.ts
    │  │      types.ts
    │  │
    │  ├─main
    │  │  ├─analysis
    │  │  │      index.ts
    │  │  │
    │  │  ├─story
    │  │  │      index.ts
    │  │  │
    │  │  └─system
    │  │          index.ts
    │  │
    │  └─request
    │          index.ts
    │          type.ts
    │
    ├─store
    │  │  index.ts
    │  │  types.ts
    │  │
    │  ├─analysis
    │  │      index.ts
    │  │      types.ts
    │  │
    │  ├─login
    │  │      index.ts
    │  │      types.ts
    │  │
    │  ├─product
    │  │      index.ts
    │  │      types.ts
    │  │
    │  └─system
    │          index.ts
    │          types.ts
    │
    ├─utils
    │      cache.ts
    │      date-format.ts
    │      map-menus.ts
    │
    └─views
        ├─login
        │  │  Login.vue
        │  │
        │  ├─cpns
        │  │      LoginPhone.vue
        │  │      LoginAccount.vue
        │  │
        │  └─config
        │          rules.ts
        │
        ├─main
        │  │  Main.vue
        │  │
        │  ├─analysis
        │  │  ├─dashboard
        │  │  │  │  dashboard.vue
        │  │  │  │
        │  │  │  ├─config
        │  │  │  │      showCountConfig.ts
        │  │  │  │
        │  │  │  ├─cpn
        │  │  │  │      ShowCharts.vue
        │  │  │  │      ShowCount.vue
        │  │  │  │
        │  │  │  └─hook
        │  │  └─overview
        │  │      │  overview copy.vue
        │  │      │  overview.vue
        │  │      │
        │  │      └─config
        │  │              dependencies.ts
        │  │              devDependencies.ts
        │  │              projectStandard.ts
        │  │              projectTree.ts
        │  │              technologyStacks.ts
        │  │
        │  ├─product
        │  │  ├─category
        │  │  │  │  category.vue
        │  │  │  │
        │  │  │  ├─config
        │  │  │  │      modal.config.ts
        │  │  │  │      content.config.ts
        │  │  │  │      search.config.ts
        │  │  │
        │  │  │
        │  │  └─goods
        │  │      │  goods.vue
        │  │      │
        │  │      └─configs
        │  │              modal.config.ts
        │  │              content.config.ts
        │  │
        │  ├─story
        │  │  ├─chat
        │  │  │      chat.vue
        │  │  │
        │  │  └─list
        │  │      │  list.vue
        │  │      │
        │  │      └─config
        │  │              tabel.config.ts
        │  │
        │  └─system
        │      ├─department
        │      │  │  department.vue
        │      │  │
        │      │  └─config
        │      │          modal.config.ts
        │      │          content.config.ts
        │      │          search.config.ts
        │      │
        │      ├─menu
        │      │  │  menu.vue
        │      │  │
        │      │  └─configs
        │      │          modal.config.ts
        │      │          content.config.ts
        │      │
        │      ├─role
        │      │  │  role.vue
        │      │  │
        │      │  └─config
        │      │          modal.config.ts
        │      │          content.config.ts
        │      │          search.config.ts
        │      │
        │      └─user
        │          │  user.vue
        │          │
        │          └─configs
        │                  modal.config.ts
        │                  content.config.ts
        │                  search.config.ts
        │
        └─not-found
            │  NotFound.vue
            │
            └─src
`

export default tree
