<template>
    <div>
        <v-layout :wrap="true">
            <v-flex xs12>
                <v-card>
                    <v-date-picker 
                        v-model="date"
                        full-width
                        locale="es-co"
                        :min="minDate"
                        :max="maxDate"
                        @change="getDolar(date)"
                    ></v-date-picker>
                </v-card>
                <v-card color="success" dark>
                    <v-card-text class="display-1 text-sm-center">Dollar price in Colombian pesos (COP): ${{ valueInCOP }}</v-card-text>
                </v-card>
                <br>
                <v-btn depressed color="primary" @click="getDolar(maxDate)">Get today's price</v-btn>
            </v-flex>
        </v-layout>
    </div>
</template>

<script>

import axios from "axios";
import { mapMutations } from "vuex";

export default {
    name: 'Home',
    data() {
        const currentDate = new Date();
        const minDate = new Date();
        minDate.setDate(currentDate.getDate() - 14);

        return {
            date: currentDate.toISOString().substr(0, 10),
            maxDate: currentDate.toISOString().substr(0, 10),
            minDate: minDate.toISOString().substr(0, 10),
            valueInCOP: null
        }
    },
    methods: {
        async getDolar(requestedDate) {
            this.date = requestedDate

            const api_key = '55ff7ee1a7-c66524fe7d-s2fr44';
            const from = 'USD';

            try {

                this.displayLoading({'title': 'Accessing data'})

                let response = await axios.get(`https://api.fastforex.io/historical?date=${requestedDate}&from=${from}&api_key=${api_key}`);
                this.valueInCOP = response.data.results['COP'];

                const multiplier = Math.pow(10, 2)
                this.valueInCOP = Math.floor(this.valueInCOP * multiplier) / multiplier;
            }
            catch(error) {
                // console.error(error);
            }
            finally {
                this.hideLoading()
            }
        },
        ...mapMutations(['displayLoading', 'hideLoading'])            
    },
    created() {
        this.getDolar(this.date)
    }
}


</script>