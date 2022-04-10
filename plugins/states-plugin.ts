import { defineNuxtPlugin } from "#app"
import { getters, mutations, state } from "../store"

export default defineNuxtPlugin(() => ({
  provide: {
    getUser: () => getters.selectedUser(state),
    changePage: () => mutations.updatePage,
    changeUser: () => mutations.changeUser,
  },
}))
