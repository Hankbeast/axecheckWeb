<template>
  <a-layout>
    <a-layout-header>
        <div class="header">
            <div>艾斯检测</div>
            <div style="display: flex">
              <div style="margin-right: 20px">name</div>
              <a>log out</a>
            </div>
        </div>
    </a-layout-header>
    <a-layout-content>
        <div>
            <router-view></router-view>
        </div>
    </a-layout-content>
  </a-layout>
</template>

<script setup>
import { ref } from 'vue'

defineProps({
  msg: String,
})

const count = ref(0)
</script>



<style scoped>
.header {
  color: #FFF;
  display: flex;
  justify-content: space-between;
}
</style>
