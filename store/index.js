import Backend from "@/services/BackendService.js";
// State
export const state = () => ({
    list: [],
    book: null,
    loadingData: true
})

// Getters
export const getters = {
    getListFavorites(state) {
        return state.list?.filter((item) => item.fav === true)
    },
    getListAll(state) {
        return state.list
    },
    getLoadingData(state) {
        return state.loadingData
    },
    getBook(state) {
        return state.book
    }
}

// Actions
export const actions = {
    newFavorite({ commit }, value) {
        commit('addFavorite', value);
    },
    setBook({ commit }, value) {
        commit('setBook', value.book);
    },
    searchBooks({ commit }, value) {
        Backend.searchBooks(value.text)
            .then((response) => {
                let books = response.data.docs;
                commit('createList', books)
            })
            .catch((error) => {
                console.error(error);
            });
    },
}
// Mutattions
export const mutations = {
    createList(state, books) {
        state.loadingData = false
        for (let i = 0; i < books.length; i++) {
            const element = books[i];
            element["fav"] = false;
        }
        state.list = books
    },
    addFavorite(state, favorite) {
        state.list.forEach((item, i) => {
            if (item.cover_edition_key === favorite.cover_edition_key) {
                item.fav = !item.fav;
            }
        });
    },
    setBook(state, value) {
        state.book = value
    },
    setAllBooksList(state) {
        state.list = listAll
    },
}
