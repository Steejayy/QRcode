<template>
  <div id='app'>
    <v-app>
      <v-navigation-drawer v-model='drawer'
                           fixed
                           app
      >
        <v-list dense>
          <router-link :to='{name: "home"}'>
            <v-list-tile>
              <v-list-tile-action>
                <v-icon>home</v-icon>
              </v-list-tile-action>
              <v-list-tile-content>
                <v-list-tile-title>{{$t('home')}}</v-list-tile-title>
              </v-list-tile-content>
            </v-list-tile>
          </router-link>

          <router-link :to='{name: "dashboard"}'>
            <v-list-tile>
              <v-list-tile-action>
                <v-icon>contact_mail</v-icon>
              </v-list-tile-action>
              <v-list-tile-content>
                <v-list-tile-title>{{$t('dashboard')}}</v-list-tile-title>
              </v-list-tile-content>
            </v-list-tile>
          </router-link>

        </v-list>
      </v-navigation-drawer>

      <v-toolbar color='indigo' dark fixed app>
        <v-toolbar-side-icon @click.stop='drawer = !drawer'></v-toolbar-side-icon>
        <v-toolbar-title>{{$t('welcome_message')}}</v-toolbar-title>
        <v-chip color='green' text-color='white'>{{$t('customs')}}</v-chip>
        <v-spacer></v-spacer>
        <v-toolbar-items>
          <v-select v-model='language'
                    :items='items'
                    label='Select language'
                    single-line
                    autocomplete
                    @change='setLanguage'
          ></v-select>
        </v-toolbar-items>
      </v-toolbar>

      <router-view/>

      <v-footer color='indigo' app>
        <span class='white--text'> &copy; 2018</span>
      </v-footer>
    </v-app>

  </div>
</template>

<script>
import {mapGetters} from 'vuex'

export default {
  data: () => ({
    drawer: null,
    items: [
      {text: 'English', 'lang': 'en'},
      {text: 'French', 'lang': 'fr'}
    ],
    language: null
  }),
  computed: {
    ...mapGetters(['offers'])
  },
  methods: {
    setLanguage(value) {
      this.$i18n.locale = value.lang
    }
  },
  created() {
    this.language = this.items[0]
  }
}
</script>

<style lang='scss'>
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;

    a {
      text-decoration: none;
    }

    .layout {
      display: inline-block;
      width: 100%;
    }
  }
</style>
