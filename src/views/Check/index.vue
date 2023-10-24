<template>
    <div class="content">
        <a-table :dataSource="tableData" :columns="columns">
            <template #bodyCell="{ column }">
                <template v-if="column.key === 'operation'">
                    <a @click="toDetails">编辑</a>
                </template>
            </template>
        </a-table>
    </div>
</template>

<script setup>
import { ref } from "vue";
import { useRouter } from 'vue-router'
const router = useRouter()

const tableData = ref([
    {checkerName: 'testName', orderNum: '000112', insResults: true}
]);
const columns = ref([
    {title: '货物名称', dataIndex: 'checkerName', key: 'checkerName'},
    {title: '订单号', dataIndex: 'orderNum', key: 'orderNum'},
    {title: '验货状态', dataIndex: 'insResults', key: 'insResults'},
    {title: '操作', key: 'operation', fixed: 'right'},
]);
const toDetails = () => {
    router.push('/detail')
}

</script>

<style lang="less">
.content {
    background: #fff;
    padding: 24px 20%;
}
</style>