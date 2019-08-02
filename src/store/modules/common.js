/**
 * Created by xuanjinliang on 2019/03/21.
 */

export default {
  state: {
    // 语言
    language: localStorage.getItem('language') || 'en'
  },
  mutations: {
    SET_LANGUAGE: (state, language) => {
      localStorage.setItem('language', language)
      state.language = language
    }
  },
  actions: {
    setLanguage({ commit }, language) {
      commit('SET_LANGUAGE', language)
    }
  }
}
