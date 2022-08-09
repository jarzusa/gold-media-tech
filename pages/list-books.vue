<template>
  <div>
    <div>
      <v-data-table
        :headers="headers"
        :items="books"
        class="elevation-0"
        :loading="loading"
        loading-text="Cargando... Espere un momento"
      >
        <template v-slot:[`item.actions`]="{ item }">
          <v-icon small class="mr-2" @click="viewItem(item)"> mdi-eye </v-icon>
          <v-icon :color="getColor(item.fav)" small class="mr-2" @click="addToFavorite(item)">
            mdi-star
          </v-icon>
        </template>
      </v-data-table>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      headers: [
        {
          text: "Titulo",
          align: "start",
          sortable: false,
          value: "title",
        },
        {
          text: "Autor",
          align: "start",
          sortable: false,
          value: "author_name",
        },
        {
          text: "Primera publicacion",
          align: "start",
          sortable: false,
          value: "first_publish_year",
        },
        { text: "Actions", value: "actions", sortable: false },
      ],
    };
  },
  computed: {
    loading() {
      return this.$store.getters["getLoadingData"];
    },
    books() {
      return this.$store.getters["getListAll"];
    },
  },
  methods: {
    viewItem(item){
        this.$store.dispatch("setBook", { book: item });
        this.$router.push("/book/"+ item.title)
    },
    addToFavorite(item){
        this.$store.dispatch("newFavorite", { cover_edition_key: item.cover_edition_key });
        this.books = this.$store.getters["getListAll"];
    },
    getColor(fav) {
      if (fav) {
        return "#ECA539";
      } else {
        return "grey lighten-1";
      }
    },
  }
};
</script>