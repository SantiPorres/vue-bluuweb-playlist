<template>
    <div class="formulary mt-5">

        <h1>Forms</h1>

         <form>
            <b-row>
                <b-col md="6">
                    <b-form-input type="text" v-model="text"
                    :state="check"
                    ></b-form-input>
                    <small>At least 3 characters</small>
                    <p>Text: {{ text }}</p>
                </b-col>

                <b-col md="6">
                    <b-form-select v-model="selected" :options="animals"></b-form-select>
                    <p> Selected: {{ selected }}</p>
                </b-col>
            </b-row>
            <b-row class="mt-5">
                <b-col md="6">
                    <b-form-radio-group v-model="radio" :options="animalsRadio" stacked></b-form-radio-group>
                    <p> Selected: {{ radio }}</p>
                </b-col>

                <b-col md="6">
                    <b-form-checkbox-group v-model="checkedOptions"
                    :options="animalsRadio"
                    ></b-form-checkbox-group>
                    <p>{{ checkedOptions }}</p>
                </b-col>
            </b-row>


         </form>

    </div>

</template>

<script>
export default {
    name: 'Formulary',
    data() {
        return {
            text: '',
            selected: null,
            checkedOptions: [],
            radio: null,
            animals: [
                {
                    value: null, text: 'Seleccione un animal'
                },
                {
                    value: 'culebra', text: 'Culebra'
                },
                {
                    value: 'rata', text: 'Rata'
                },
                {
                    value: 'caballo', text: 'Caballo'
                }
            ],
            animalsRadio: [
                {
                    value: 'culebra', text: 'Culebra'
                },
                {
                    value: 'rata', text: 'Rata'
                },
                {
                    value: 'caballo', text: 'Caballo'
                }
            ]
        }
    },
    computed: {
        check() {
            return this.text.length < 3 ? false : true
        }
    }
}
</script>