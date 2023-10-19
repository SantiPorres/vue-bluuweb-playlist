<template>
  <v-app>

    <v-app-bar app class="primary" dark>

      <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>

      <v-toolbar-title>Vuetify</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn class="success">Login</v-btn>
    </v-app-bar>

    <v-navigation-drawer app v-model="drawer" temporary>
      <v-list-item>
          <v-list-item-avatar>
            <v-img src="https://randomuser.me/api/portraits/men/85.jpg"></v-img>
          </v-list-item-avatar>

          <v-list-item-title>
            Juanito Perez
          </v-list-item-title>
      </v-list-item>

      <v-divider></v-divider>

      <v-list dense nav>
        <v-list-item link :to="{name: 'Home'}">
          <v-list-item-icon>
            <v-icon>home</v-icon>
          </v-list-item-icon>
          <v-list-item-content>
            Home
          </v-list-item-content>
        </v-list-item>
      </v-list>

      <v-container class="pa-2">
        <v-btn text block :to="{name: 'Grid'}">
          <v-row align="center" justify="start" dense>
            <v-col cols="2">
              <v-icon color="secondary">dashboard</v-icon>
            </v-col>
            <v-col cols="10" align-self="center">
              Grid
            </v-col>
          </v-row>
        </v-btn>
      </v-container>

      <v-list dense nav>
        <v-list-item link :to="{name: 'Buttons'}">
          <v-list-item-icon>
            <v-icon>gamepad</v-icon>
          </v-list-item-icon>
          <v-list-item-content>
            Buttons
          </v-list-item-content>
        </v-list-item>
      </v-list>

      <v-list dense nav>
        <v-list-item link :to="{name: 'Cards'}">
          <v-list-item-icon>
            <v-icon>sd</v-icon>
          </v-list-item-icon>
          <v-list-item-content>
            Cards
          </v-list-item-content>
        </v-list-item>
      </v-list>

      <v-list dense nav>
        <v-list-item link :to="{name: 'Tasks'}">
          <v-list-item-icon>
            <v-icon>list</v-icon>
          </v-list-item-icon>
          <v-list-item-content>
            Tasks
          </v-list-item-content>
        </v-list-item>
      </v-list>

    </v-navigation-drawer>

    <v-main>
      <router-view/>
    </v-main>

  </v-app>
</template>

<script>

export default {
  name: 'App',

  data: () => ({
    drawer: false
  }),
};
</script>
