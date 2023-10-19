<template>

  <v-container grid-list-lg>
    <v-row>
      <v-col cols="12" sm="6" md="6" lg="3">
        <v-card>
          <v-img src="https://cdn.vuetifyjs.com/images/cards/cooking.png">

          </v-img>

          <v-card-title>
            Lets travel
          </v-card-title>

          <v-card-text>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ratione repudiandae odio in consectetur molestiae officia aliquam doloremque quas. Non, quisquam ullam iste rem atque excepturi accusantium architecto molestiae deleniti qui!</p>
          </v-card-text>

          <v-card-actions>
            <v-btn color="primary" text @click="dialog = !dialog">
              Action
            </v-btn>
          </v-card-actions>

        </v-card>
      </v-col>

      <v-col cols="12" sm="6" md="6" lg="3">
        <v-card>
          <v-img src="https://cdn.vuetifyjs.com/images/cards/cooking.png">
            <v-container fill-height>
              <v-row>
                <v-col>
                  <span class="headline white--text">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Qui quidem blanditiis fugit minus similique tenetur quis et consequatur, magnam corrupti consectetur, non accusantium necessitatibus vel deserunt debitis ullam quasi iure.</span>
                </v-col>
              </v-row>
            </v-container>

          </v-img>

          <v-card-title>
            Lets travel
          </v-card-title>

          <v-card-text>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ratione repudiandae odio in consectetur molestiae officia aliquam doloremque quas. Non, quisquam ullam iste rem atque excepturi accusantium architecto molestiae deleniti qui!</p>
          </v-card-text>

          <v-card-actions>
            <v-btn color="primary" text @click="dialog = !dialog">
              Action
            </v-btn>
          </v-card-actions>

        </v-card>
      </v-col>

      <v-col cols="12" sm="6" md="6" lg="3">
        <v-card>
          <v-img src="https://cdn.vuetifyjs.com/images/cards/cooking.png">

          </v-img>

          <v-card-title>
            Lets travel
          </v-card-title>

          <v-card-text>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ratione repudiandae odio in consectetur molestiae officia aliquam doloremque quas. Non, quisquam ullam iste rem atque excepturi accusantium architecto molestiae deleniti qui!</p>
          </v-card-text>

          <v-card-actions>
            <v-btn color="primary" text @click="dialog = !dialog">
              Action
            </v-btn>
          </v-card-actions>

        </v-card>
      </v-col>
    </v-row>

    <v-dialog v-model="dialog" persistent>
      <v-card>
        <v-card-title>Title of the dialog</v-card-title>
        <v-card-text>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repudiandae reiciendis quasi adipisci. Necessitatibus doloribus rem eius, tenetur aspernatur laborum nesciunt voluptatibus saepe delectus officia veniam sequi excepturi cupiditate, consequatur atque!</v-card-text>
        <v-divider></v-divider>
        <v-card-actions>
          <v-btn @click="dialog = false">Close</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>

  </v-container>

</template>

<script>

  export default {
    name: 'Home',
    data() {
      return {
        dialog: false
      }
    }
  }
</script>
