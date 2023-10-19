<template>
    <div class="photos">
        <h1>Galeria de fotos:</h1>

        <router-link :to="{ name: 'photos', params: {id: photo} }" 
        v-for="(photo, index) of photosArray" :key="index">
            <button>foto {{ photo }}</button>
        </router-link>

        <Photography/>

        <button @click="home">Home</button>
        <button @click="previous">Previous</button>
        <button @click="next">Next</button>
    </div>
</template>

<script>

import Photography from "@/components/photography.vue"

export default {
    name: 'Photos',
    components: {
        Photography
    },
    data() {
        return {
            photosArray: [1, 2, 3]
        }
    },
    methods: {
        home() {
            this.$router.push('/');
        },
        previous() {
            this.$router.go(-1);
        },
        next() {
            this.$router.go(1)
        }
    }
}
</script>