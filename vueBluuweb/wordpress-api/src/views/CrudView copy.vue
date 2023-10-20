<template>
    <div>
        <h1>Crud</h1>
        <ul v-for="(item, index) in entries" :key="index">
            <li>{{ item.title }}</li>
            <li>{{ item.content }}</li>
            <li>{{ item.date }}</li>
            <li>{{ item.status }}</li>
        </ul>
    </div>
</template>

<script>

export default {
    name: 'Crud',
    data() {
        return {
            entries: []
        }
    },
    methods: {
        clean(value) {
            return value.replace(/<\/?[^>]+(>|$)/g, "")
        },
        async getEntries() {
            try {
                const dbEntries = await this.axios.get('wp/v2/posts');

                await dbEntries.data.forEach(element => {
                    let item = {};
                    item.id = element.id;
                    item.title = element.title.rendered;
                    item.content = this.clean(element.content.rendered);
                    item.date = element.date;
                    item.status = element.status;

                    this.entries.push(item);
                });
            }
            catch (error) {
                console.log(error)
            }
        }
    },
    created() {
        this.getEntries()
    }
}

</script>