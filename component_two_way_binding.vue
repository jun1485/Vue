// 네이티브 엘리먼트에서의 v-model
<input v-model="searchText" />

// 위와 같은 동작.
<input
  :value="searchText"
  @input="searchText = $event.target.value"
/>
