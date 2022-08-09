<template>
  <div v-if="book" class="mt-5">
    <v-row>
      <v-col cols="12">
        <p class="text-h2">
            {{ book.title }}
        </p>
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="12">
        <p>
          <strong>Temas: </strong>
          <span
            class="leading-4 text-decoration-underline"
            v-for="(item, i) in book.subject"
            :key="i"
          >
            {{ item }},</span
          >
        </p>
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="12">
        <p>
          <strong>Personas: </strong>
          <span
            class="leading-4 text-decoration-underline"
            v-for="(item, i) in book.person"
            :key="i"
          >
            {{ item }},</span
          >
        </p>
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="12">
        <p>
          <strong>Lugares: </strong>
          <span
            class="leading-4 text-decoration-underline"
            v-for="(item, i) in book.place"
            :key="i"
          >
            {{ item }},</span
          >
        </p>
      </v-col>
    </v-row>
  </div>
</template>
<script>
export default {
  computed: {
    book() {
      return this.$store.getters["getBook"];
    },
  },
  created() {
    if (!this.book) {
      this.$router.push("/search");
    }
  },
};
</script>