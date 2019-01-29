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

            <v-btn flat color="secondary" @click="dialog = !dialog">
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
                <img src="https://vuetifyjs.com/apple-touch-icon-180x180.png" alt="avatar">
              </v-avatar>
            </v-btn>

            <v-list>
              <v-list-tile
                @click=""
                class="red--text"
              >
                <v-list-tile-title>Log Out</v-list-tile-title>
              </v-list-tile>
            </v-list>
          </v-menu>
    </v-toolbar>
    <v-navigation-drawer app class="primary hidden-md-and-up" v-model="drawer">
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
    <v-card>
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
          >
            Sign Up
          </v-btn>
        </v-card-actions>
      </v-card>
       </v-dialog>

</nav>

</template>

<script>

import { mapActions } from 'vuex';

export default {
  data () {
    
    return {
      drawer: false,
      dialog: false

    }
  },

  // computed: {
  //   links () { // located in store.js
  //     return this.$store.state.links
  //   }
  // },
  methods: mapActions('auth', ['login'])
}
</script>
