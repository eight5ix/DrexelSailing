<template>
  <v-app>
    <v-content>
      <Nav/>
      <router-view></router-view>
      <GoogleMap></GoogleMap>
    </v-content>
  </v-app>
</template>

<script>
import Nav from './components/Nav';
import GoogleMap from "./components/GoogleMap";

export default {
  name: 'App',
   components: {
     Nav,
     GoogleMap
   },
  data () {
    return {
      //
    }
  }
}
</script>
