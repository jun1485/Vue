<template>
  <div>
    <span v-if="isPending">Loading...</span>
    <span v-if="isError">{{ error?.message }}</span>
    <ul v-else>
      <li v-for="todo in data" :key="todo.id">{{ todo.title }}</li>
      <button @click="onButtonClick">Add Todo</button>
    </ul>
  </div>
</template>

<script setup lang="ts">
import { useMutation, useQuery, useQueryClient } from "@tanstack/vue-query";
import { ref } from "vue";

const queryClient = useQueryClient();
const todos = ref<Array<{ id: number; title: string; completed: boolean }>>([]);

const { isPending, data, error, isError } = useQuery({
  queryKey: ["todos"],
  queryFn: async () => {
    const response = await fetch("https://jsonplaceholder.typicode.com/todos");
    const data = await response.json();
    todos.value = data;
    return data;
  },
});

const mutation = useMutation<
  { title: string; completed: boolean },
  unknown,
  Error,
  unknown
>({
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
  onSuccess: (data) => {
    todos.value.push(data);
  },
});

const onButtonClick = () => {
  mutation.mutate({ title: "New Todo", completed: false });
};
</script>
<style lang="scss"></style>


// searchValue.value가 변경될 때마다 새로운 쿼리 키가 생성되어 쿼리가 재실행.
// searchValue.value가 비어있지 않을 경우에만 쿼리를 실행하도록 enabled 옵션 설정.
const { data: searchedNotices } = useQuery({
  queryKey: ["searchedNotices", searchValue.value],
  queryFn: () => fetchSearchedNotices(searchValue.value),
  enabled: !!searchValue.value
});

