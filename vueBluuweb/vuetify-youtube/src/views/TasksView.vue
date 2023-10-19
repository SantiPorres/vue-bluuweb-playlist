<template>
    <v-container>
        <v-row wrap>
            <v-col cols="12" md="6">
                <v-card class="mb-3" v-for="(task, index) in tasksList" :key="index">
                    <v-card-text>
                        <v-chip label color="green" text-color="white">
                            <v-icon left>label</v-icon>
                            {{ task.title }}
                        </v-chip>
                        <p>{{ task.description }}</p>
                    </v-card-text>
                    <v-card-actions>
                        <v-btn color="warning" @click="fillFields(index)">Edit</v-btn>
                        <v-btn color="error" @click="deleteTask(task.id)">Delete</v-btn>
                    </v-card-actions>
                </v-card>
                <!---<v-card class="mb-3">
                    <v-card-text>
                        <v-chip label color="Green" text-color="white">
                            <v-icon left>label</v-icon>
                            Title of the task
                        </v-chip>
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repellendus saepe itaque quas magni dolore, fuga aspernatur eius rerum sunt architecto tempora omnis optio natus ut nobis reprehenderit quae aperiam aliquam?</p>
                    </v-card-text>
                    <v-card-actions>
                        <v-btn color="warning">Edit</v-btn>
                        <v-btn color="error">Delete</v-btn>
                    </v-card-actions>
                </v-card>-->
            </v-col>

            <v-col cols="12" md="6" v-if="formAdd">
                <v-card class="mb-3 pa-3">
                    <v-form @submit.prevent="addTask">
                        <v-text-field label="Title of the task" v-model="title"></v-text-field>
                        <v-textarea label="Description of the task" v-model="description"></v-textarea>
                        <v-btn type="submit" color="success" block>Add task</v-btn>
                    </v-form>
                </v-card>
            </v-col>

            <v-col cols="12" md="6" v-if="!formAdd">
                <v-card class="mb-3 pa-3">
                    <v-form @submit.prevent="editTask(taskIndex)">
                        <v-text-field label="Title of the task" v-model="title"></v-text-field>
                        <v-textarea label="Description of the task" v-model="description"></v-textarea>
                        <v-row>
                            <v-col cols="8">
                                <v-btn type="submit" color="warning" block>Edit task</v-btn>
                            </v-col>
                            <v-col cols="4">
                                <v-btn @click="discardEditingTask" color="secondary" block>Discard</v-btn>
                            </v-col>
                        </v-row>
                    </v-form>
                </v-card>
            </v-col>
        </v-row>

        <v-snackbar v-model="snackbar">
            {{ message }}
            <v-btn 
                color="error"
                text
                @click="snackbar = false"
                block
            >
                Close
            </v-btn>
        </v-snackbar>

    </v-container>
</template>

<script>

export default {
    data() {
        return {
            taskIndex: '',
            title: '',
            description: '',
            snackbar: false,
            message: '',
            tasksList: [
                {id: 1, title: 'Title first task', description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repellendus saepe itaque quas magni dolore, fuga aspernatur eius rerum sunt architecto tempora omnis optio natus ut nobis reprehenderit quae aperiam aliquam?'},
                {id: 2, title: 'Title second task', description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repellendus saepe itaque quas magni dolore, fuga aspernatur eius rerum sunt architecto tempora omnis optio natus ut nobis reprehenderit quae aperiam aliquam?'},
                {id: 3, title: 'Title third task', description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repellendus saepe itaque quas magni dolore, fuga aspernatur eius rerum sunt architecto tempora omnis optio natus ut nobis reprehenderit quae aperiam aliquam?'}
            ],
            formAdd: true
        }
    },
    methods: {
        addTask() {
            if (this.title === '' || this.description === '') {
                this.snackbar = true;
                this.message = 'The fields cannot be empty';
            } else {
                this.tasksList.push({
                    id: this.tasksList.length+1,
                    title: this.title,
                    description: this.description
                });
                this.title = '';
                this.description = '';
            }
        },
        deleteTask(id) {
            this.tasksList = this.tasksList.filter(e => e.id != id);
        },
        fillFields(index) {
            this.formAdd = false;
            this.taskIndex = index;
            this.title = this.tasksList[index].title;
            this.description = this.tasksList[index].description;
        },
        editTask(index) {
            try {

                this.tasksList[index].title = this.title;
                this.tasksList[index].description = this.description;
                this.discardEditingTask();
                this.snackbar = true;
                this.message = 'Task edited successfully';
            }
            catch {
                this.discardEditingTask();
                this.snackbar = true;
                this.message = 'The task could not be edited';
            }
        },
        discardEditingTask() {
            this.formAdd = true;
            this.title = '';
            this.description = '';
        }
    }
}

</script>