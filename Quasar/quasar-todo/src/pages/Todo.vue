<template>
  <q-page class="bg-grey-3 column">
    <div class="row q-pa-sm bg-primary">
      <q-input
        v-model="newTask"
        @keyup.enter="addTask"
        class="col"
        square
        filled
        bg-color="white"
        placeholder="Add task" 
        dense
      >

        <template v-slot:append>
          <q-btn 
            round 
            dense 
            flat 
            icon="add"
            @click="addTask"
          />
        </template>
      </q-input>
    </div>

    <q-list 
      class="bg-white"
      separator
      bordered
    >
      <q-item 
        v-ripple 
        v-for="(task, index) in tasks"
        :key="task.id"
        @click="task.done = !task.done"
        clickable
        :class="{'done bg-blue-1': task.done}"
      >
        <q-item-section avatar>
          <q-checkbox 
            v-model="task.done"
            class="no-pointer-events"
            color="primary" 
          />
        </q-item-section>
        <q-item-section>
          <q-item-label>{{ task.title }}</q-item-label>
        </q-item-section>

        <q-item-section
          v-if="task.done"
          side
        >
          <q-btn
            @click.stop="deleteTask(index)"
            flat 
            round
            dense 
            color="primary" 
            icon="delete" 
          />
        </q-item-section>
      </q-item>
    </q-list>

    <div
      v-if="!tasks.length" 
      class="no-tasks absolute-center"
    >
      <q-icon
        name="check"
        size="100px"
        color="primary"
      />
      <div class="text-h5 text-primary text-center">
        No tasks
      </div>
    </div>

  </q-page>
</template>

<script>

import { db } from 'boot/firebase';

export default {
  data() {
    return {
      newTask: '',
      tasks: []
    }
  },
  created() {
    this.listTasks();
  },
  methods: {
    async listTasks() {
      try {
        const dbResponse = await db.collection('todo_tasks').get();

        dbResponse.forEach(element => {
          const task = {
            id: element.id,
            title: element.data().title,
            done: element.data().done
          }
          this.tasks.push(task);
        });
      } catch (error) {
        console.log(error);
      }
    },
    deleteTask(index) {
      const id = this.tasks[index].id
      console.log(id)
      this.$q.dialog({
        title: 'Confirm',
        message: 'Are you sure do you want to delete it?',
        cancel: true,
        persistent: true
      }).onOk(async () => {
        try {
          await db.collection('todo_tasks').doc(id).delete();
          this.tasks.splice(index, 1)
        } catch (error) {
          console.log(error);
        }

        this.$q.notify('Task deleted')
      })
    },
    async addTask() {
      try {
        const dbResponse = await db.collection('todo_tasks').add({
          title: this.newTask,
          done: false
        })

        this.tasks.push({
          id: dbResponse.id,
          title: this.newTask,
          done: false
        })
        this.newTask = ''
        this.$q.notify('Task created')
      } catch (error) {
        console.log(error)
      }
    }
  }
}
</script>

<style lang="scss">

  .done {
    .q-item__label {
      text-decoration: line-through;
      color: #bbb;
    }
  }

  .no-tasks {
    opacity: 0.5;
  }

</style>