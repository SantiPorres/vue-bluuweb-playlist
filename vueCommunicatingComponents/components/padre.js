Vue.component('padre', {
    template: // html
    `
    <div class="p-5 bg-dark text-white">
        <h2>Componente padre: {{numeroPadre}}</h2>
        <hijo :numero="numeroPadre" @nombreHijo="nombrePadre = $event"></hijo>
        <h4>Nombre padre: {{nombrePadre}}</h4>
        <button class="btn btn-danger" @click="numeroPadre++">+</button>
    </div>
    `,
    data () {
        return {
            numeroPadre: 0,
            nombrePadre: ''
        }
    }
})