import { defineNuxtPlugin } from "#app"
import { getters, mutations } from "../store"

export default defineNuxtPlugin(() => ({
  provide: {
    getUser: () => getters.selectedUser,
    changePage: () => mutations.updatePage,
    changeUser: () => mutations.changeUser,
  },
}))
