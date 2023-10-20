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
        :key="task.title"
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
export default {
  data() {
    return {
      newTask: '',
      tasks: [
        // {
        //   title: 'Get apples',
        //   done: false
        // },
        // {
        //   title: 'Wash the dishes',
        //   done: false
        // },
        // {
        //   title: 'Organize my room',
        //   done: false
        // }
      ]
    }
  },
  methods: {
    deleteTask(index) {
      this.$q.dialog({
        title: 'Confirm',
        message: 'Are you sure do you want to delete it?',
        cancel: true,
        persistent: true
      }).onOk(() => {
        this.tasks.splice(index, 1)
        this.$q.notify('Task deleted')
      })
    },
    addTask() {
      this.tasks.push({
        title: this.newTask,
        done: false
      })
      this.newTask = ''
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