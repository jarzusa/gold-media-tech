<template>
  <div>
    <div>
      <v-data-table
        :headers="headers"
        :items="books"
        class="elevation-0"
      >
        <template v-slot:[`item.actions`]="{ item }">
          <v-icon :color="getColor(item.fav)" small class="mr-2">
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
    books() {
      return this.$store.getters["getListFavorites"];
    },
  },
  created() {
    if (this.books.length < 1) {
      this.$router.push("/search");
    }
  },
  methods: {
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