<template>
<nav>
    <v-toolbar flat app color="primary" :height="100">
        <v-toolbar-side-icon class="secondary--text hidden-md-and-up" v-model= "drawer" @click="drawer = !drawer"></v-toolbar-side-icon>
          <v-toolbar-title class="white--text mr-4">
            <router-link tag="button" to="/">
            <img src="@/assets/drxsailingletters.png" :height="100" class="hidden-sm-and-down">
            <img src="@/assets/drxsailingletters.png" :height="75" class="hidden-md-and-up">
            </router-link>
            </v-toolbar-title>
              <v-spacer></v-spacer>
            <v-toolbar-items class="hidden-sm-and-down">
                <v-btn
                    flat
                    class="secondary--text font-weight-light"
                    v-for="link in links"
                    :key="link.text"
                    router
                    :to="link.route"
                    >{{ link.text }}
                </v-btn>
            </v-toolbar-items>

            <v-btn flat color="secondary" @click="dialog = !dialog" v-show="!isLoggedIn">
                <span>Sign Up</span>
                <v-icon right>exit_to_app</v-icon>
            </v-btn>
            <v-menu offset-y>
            <v-btn
              slot="activator"
              dark
              icon
            >
              <v-avatar
                :tile="tile"
                :size="avatarSize"
                color="grey lighten-4"
              >
                <!-- <img src="https://vuetifyjs.com/apple-touch-icon-180x180.png" alt="avatar"> -->
              </v-avatar>
            </v-btn>

            <v-list v-show="isLoggedIn">
              <v-list-tile
                @click=""
                class="red--text"
              >
                <v-list-tile-title @click="logout()" >Log Out</v-list-tile-title>
              </v-list-tile>
            </v-list>
          </v-menu>
    </v-toolbar>
    <v-navigation-drawer app class="primary hidden-md-and-up" v-model="drawer" disable-resize-watcher>
        <v-list>
            <v-list-tile v-for="link in links" :key="link.text" router :to="link.route">
                <v-list-tile-action>
                    <v-icon class="white--text">{{ link.icon }}</v-icon>
                </v-list-tile-action>
                <v-list-tile-content>
                    <v-list-tile-title class="white--text">{{ link.text }}</v-list-tile-title>
                </v-list-tile-content>
            </v-list-tile>
        </v-list>
    </v-navigation-drawer>
 <v-dialog v-model="dialog" width="50%">
    <v-card >
        <v-card-title
          class="headline grey lighten-2"
          primary-title
        >
          Sign up
        </v-card-title>
        <v-card ref="form" class="pa-3">
            <v-icon>mdi-mail</v-icon>
        <v-text-field
                v-model="email"
                :rules="emailRules"
                label="E-mail"
                placeholder="wavy@drexel.edu"
                required
              ></v-text-field>
              <v-text-field
                v-model="password"
                :rules="passwordRules"
                label="Password"
                placeholder="password"
                required
              ></v-text-field>
              <v-btn
                color="primary"
                flat
                @click="login()"
              >
              Google
            </v-btn>
        </v-card>

        <v-divider></v-divider>

        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn
            color="primary"
            flat
            @click="loginWithPassword({email: email, password: password})"
          >
            Sign Up
          </v-btn>
        </v-card-actions>
      </v-card>
       </v-dialog>

</nav>

</template>

<script>

import { mapActions, mapState } from 'vuex';

export default {
  data () {

    return {
      drawer: false,
      dialog: false,
      email: '',
      password: ''


    }
  },

  // computed: {
  //   links () { // located in store.js
  //     return this.$store.state.links
  //   }
  // },
  computed: mapState('auth', ['user', 'isLoggedIn']),
  methods:  mapActions('auth', ['login', 'logout', 'loginWithPassword']),

}
</script>
