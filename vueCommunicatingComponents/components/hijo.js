Vue.component('hijo', {
    template: // html
    `
    <div class="p-5 bg-success text-white">
        <h4>Componente hijo: {{numero}}</h4>
        <h4>Nombre: {{nombre}}</h4>
        <button class="btn btn-danger" @click="numero++">+</button>
    </div>
    `,
    props: ['numero'],
    data () {
        return {
            nombre: 'Santiago'
        }
    },
    mounted() {
        this.$emit('nombreHijo', this.nombre);
    }
})