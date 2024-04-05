<template>
  <div>
    <span v-if="isPending">Loading...</span>
    <span v-if="isError">{{ error?.message }}</span>

    <ul v-else>
      <li v-for="todo in data" :key="todo.id">
        {{ todo.title }}
      </li>
      <button @click="onButtonClick">Add Todo</button>
    </ul>
  </div>
</template>

<script setup lang="ts">
import { useMutation, useQuery, useQueryClient } from "@tanstack/vue-query";

const queryClient = useQueryClient();

const { isPending, data, error, isError } = useQuery({
  queryKey: ["todos"],
  queryFn: async () => {
    const response = await fetch("https://jsonplaceholder.typicode.com/todos");
    return response.json();
  },
});

const mutation = useMutation({
  mutationFn: async (newTodo) => {
    const response = await fetch("https://jsonplaceholder.typicode.com/todos", {
      method: "POST",
      body: JSON.stringify(newTodo),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    });
    return response.json();
  },
  onSuccess: () => {
    queryClient.invalidateQueries({ queryKey: ["todos"] });
  },
});

const onButtonClick = () => {
  mutation.mutate({ title: "New Todo", completed: false });
};
</script>

<style lang="scss"></style>

edit to place ...
