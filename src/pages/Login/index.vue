<template>
  <div>
    <van-cell-group>
      <van-field @click="onC"
                 v-model="address"
                 label=""
                 placeholder="请选择地区" />

      <van-popup v-model="show2"
                 position="bottom"
                 :style="{ height: '40%' }">
        <van-area title=""
                  :area-list="areaList"
                  ref="myArea"
                  @cancel="onCancel"
                  @confirm="onOK"
                  @change="onChange" />
      </van-popup>
    </van-cell-group>
  </div>
</template>

<script>
import { areaList } from '@vant/area-data'
export default {
  data() {
    return {
      address: '',
      areaList,
      show2: false,
    }
  },
  methods: {
    onC() {
      this.show2 = true
    },
    onOK(value) {
      this.show2 = false
      this.address = ''
      value.forEach((element) => {
        this.address += element.name
      })
    },
    onCancel() {
      this.show2 = false
      this.$refs.myArea.reset() // 重置城市列表
    },
    onChange(picker, index, value) {
      console.log(picker, index, value)
    },
  },
}
</script>

<style>
</style>