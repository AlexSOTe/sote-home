const mainStore = {
  state: () => ({
    projectName: 'sote-home',
    documentTitle: '',
  }),
  mutations: {
    SetProjectName(state: IStoreStateType, projectName: string) {
      state.projectName = projectName;
    },
    SetDocumentTitle(state: IStoreStateType, documentTitle: string) {
      state.documentTitle = documentTitle;
    },
  },
  actions: {
  },
  getters: {
    getProjectName(state: IStoreStateType) {
      return state.projectName;
    },
    getDocumentTitle(state: IStoreStateType) {
      return state.documentTitle;
    },
  },
}
export default mainStore;
