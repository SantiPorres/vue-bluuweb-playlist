<template>

    <v-container>
        <v-btn color="primary">Text</v-btn>
        <v-btn dark color="blue">Text</v-btn>

        <v-btn color="primary" text :disabled="false">Without background</v-btn>

        <v-btn dark>
            <v-icon>favorite</v-icon>
        </v-btn>
        <v-btn color="success" icon>
            <v-icon>forum</v-icon>
        </v-btn>
        <v-btn color="primary" fab>
            <v-icon>add</v-icon>
        </v-btn>
        <v-btn color="secondary">
            ADD
            <v-icon class="ml-2">forum</v-icon>
        </v-btn>
        <v-btn color="secondary">
            ADD
            <v-icon right>forum</v-icon>
        </v-btn>

        <v-btn color="primary" outlined block>
            ADD
            <v-icon right>forum</v-icon>
        </v-btn>
    </v-container>

</template>