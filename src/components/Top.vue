<template>
  <div>
    <ul>
      <li
        v-for="(m, index) in movies" :key="m"
        @click="get(index)"
        :class="{ red: currentindex == index }"
      >
        {{ m }} {{ index }}
      </li>
    </ul>

    <p v-if="isUser">
      <label for="user">账号</label>
      <input type="text" id="user" placeholder="请输入账号" key="a"/>
    </p>
    <p v-else>
      <label for="email">邮箱</label>
      <input type="text" id="email" placeholder="请输入邮箱" key="b"/>
    </p>
    <button @click="isBnt">切换</button>
  </div>
</template>

<script>
export default {
  name: "Top",
  data() {
    return {
      movies: ["A", "B", "C"],
      currentindex: "",
      isUser: true,
    };
  },
  methods: {
    get(index) {
      this.currentindex = index;
    },
    isBnt() {
      this.isUser = !this.isUser;
    },
  },
};
</script>

<style>
.red {
  color: red;
}
</style>