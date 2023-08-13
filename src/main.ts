import { createApp } from 'vue'
import Notifications from '@kyvg/vue3-notification'
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import {
  faCheck,
  faPen,
  faTrashCan,
  faFloppyDisk,
  faXmark
} from '@fortawesome/free-solid-svg-icons'

import { openDb } from './servises/indedxDB'
import { store, key } from './store'
import App from './App.vue'

import { directives } from './derectives'

openDb()

library.add(faCheck, faPen, faTrashCan, faFloppyDisk, faXmark)

const app = createApp(App)

directives.forEach((directive) => app.directive(directive.name, directive))

app.component('font-awesome-icon', FontAwesomeIcon).use(Notifications).use(store, key).mount('#app')
