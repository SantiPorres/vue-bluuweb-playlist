const app = new Vue({
    el: '#app',
    data: {
        titulo: 'Hola mundo con Vue',
        fruits: [
            {
                name: 'Apple',
                weight: 55
            },
            {
                name: 'Grape',
                weight: 17
            },
            {
                name: 'Banana',
                weight: 55
            },
            {
                name: 'Strawberry',
                weight: 17
            }
        ],
        newFruit: {
            name: '',
            weight: 0
        },
        totalWeight: 0
    },
    methods: {
        agregarFruta () {
            this.fruits.push({
                name: this.newFruit.name,
                weight: this.newFruit.weight
            });
        }
    },
    computed: {
        sumarFrutas() {
            this.totalWeight = 0;
            for (fruit of this.fruits) {
                this.totalWeight += fruit.weight;
            }
            return this.totalWeight;
        }
    }
})