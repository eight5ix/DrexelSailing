<template>
    <div class="home">
            <v-parallax src="https://thetriangle.org/wp-content/uploads/2011/05/SailingTeam2_WEB.jpg" :height="400" class="hidden-sm-and-down">
    <v-flex class="pt-5">
            <v-btn class="secondary primary--text font-weight-black" large>Learn More</v-btn>
            <v-btn class="secondary primary--text font-weight-black" large>Join the Team</v-btn>
    </v-flex>
    </v-parallax>
    <button type="button" name="button" @click="login()">Google</button>
    <v-layout row wrap>
    <v-card class="ma-4" color="transparent" elevation="0" max-width="500">
        <h1 class="display-3 font-weight-heavy text-md-left grey--text pb-2">What We're About</h1>
        <p class="subheading font-weight-heavy text-md-left  grey--text">Drexel Sailing is open to everyone. The team consists of sailors with a wide range of skill and experience. Not sure about what its like to sail in college? Contact us and we can show you first hand! Its not difficult, its fun, and can open you to a world of experience.</p>
    </v-card><v-spacer></v-spacer><v-card>hello</v-card><v-spacer></v-spacer>
    <v-card class="ma-4" color="transparent" elevation="0" max-width="500">
        <h1 class="display-3 font-weight-heavy text-md-left grey--text pb-2">What We're About</h1>
        <p class="subheading font-weight-heavy text-md-left  grey--text">Drexel Sailing is open to everyone. The team consists of sailors with a wide range of skill and experience. Not sure about what its like to sail in college? Contact us and we can show you first hand! Its not difficult, its fun, and can open you to a world of experience.</p>
    </v-card>
    </v-layout>
    <div class="pa-5">
    <v-btn fab dark large outline color="primary"></v-btn>
    </div>
    </div>
</template>

<script>
import { mapActions } from 'vuex'
export default {
  data () {
    return {

    }
  },
  methods: mapActions('auth', ['login'])
}
</script>
