import { createApp } from 'vue'

// components
import App from './App.vue'

// vue-query
import { VueQueryPlugin } from 'vue-query'

// Vuetify
import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'

const vuetify = createVuetify({
  components,
  directives
})

// initialize vue
createApp(App)
  .use(VueQueryPlugin)
  .use(vuetify)
  .mount('#app')
