<template>
  <div>
    <v-container class="mt-3 flex flex-wrap">
      <v-row>
        <v-col cols="12">
          <v-text-field
            v-model="textSearch"
            outlined
            dense
            placeholder="Buscar por titulo, autor o tema"
            clearable
          ></v-text-field>
        </v-col>
        <v-col cols="12" class="flex justify-center">
          <v-btn color="orange" dark elevation="0" @click="searchByTittleAuthorOrTheme()">Buscar</v-btn>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>
<script>
export default {
  data(){
    return {
      textSearch: "",
    }
  },
  methods: {
    searchByTittleAuthorOrTheme(){
      this.$store.dispatch("searchBooks", { text: this.textSearch });
      this.$router.push("/list-books")
    }
  }
};
</script>