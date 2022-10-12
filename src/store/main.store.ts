import { defineStore } from "pinia";

export const useMainStore = defineStore('mainStore', {
  state: () => ({
    projectName: 'sote-home',
    documentTitle: '',
  }),
  getters: {
    getProjectName(state) {
      return state.projectName;
    },
    getDocumentTitle(state) {
      return state.documentTitle;
    },
  },
  actions: {
    SetProjectName(projectName: string) {
      this.projectName = projectName;
    },
    SetDocumentTitle(documentTitle: string) {
      this.documentTitle = documentTitle;
    },
  }
});
