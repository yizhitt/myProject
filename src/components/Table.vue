<template>
  <div>
    <div v-if="books.length">
      <table>
        <thead>
          <th>编码</th>
          <th>名称</th>
          <th>日期</th>
          <th>价格</th>
          <th>数量</th>
          <th>操作</th>
        </thead>
        <tbody>
          <tr v-for="(item, index) in books" :key="item.id">
            <td>{{ item.id }}</td>
            <td>{{ item.name }}</td>
            <td>{{ item.date }}</td>
            <td>{{ item.price | showPrice }}</td>
            <td>
              <button @click="del(index)" :disabled="item.count <= 1">-</button>
              {{ item.count }}
              <button @click="add(index)">+</button>
            </td>
            <td>
              <button @click="remove(index)">移除</button>
            </td>
          </tr>
        </tbody>
      </table>
      <h1>总价格：{{ totalPrice }}</h1>
    </div>
    <h1 v-else>购物车为空</h1>
  </div>
</template>

<script>
export default {
  name: "Table",
  data() {
    return {
      books: [
        { id: 1, name: "阿萨德", date: "2020", price: 99, count: 1 },
        { id: 2, name: "自行车", date: "2020", price: 99, count: 1 },
        { id: 3, name: "去问", date: "2020", price: 99, count: 1 },
        { id: 4, name: "CVBS", date: "2020", price: 99, count: 1 },
      ],
    };
  },
  methods: {
    del(index) {
      this.books[index].count--;
    },
    add(index) {
      this.books[index].count++;
    },
    remove(index) {
      this.books.splice(index, 1);
    },
  },
  computed: {
    totalPrice() {
      let totalPrice = 0;
      for (let i in this.books) {
        totalPrice += this.books[i].price * this.books[i].count;
      }
      return totalPrice;
    },
  },
  filters: {
    showPrice(price) {
      return "$" + price.toFixed(2);
    },
  },
};
</script>