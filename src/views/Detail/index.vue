<template>
    <div class="content">
        <a-button style="margin-bottom: 20px" @click="goBack">
            <template #icon>
                <LeftOutlined />
            </template>
            Back
        </a-button>
        <div class="check-item">
            <div>Inspection Report (1ST 2ND)</div>
            <div>Pre-shipment ON-LINE IN PROCESS FULL</div>
        </div>
        <a-descriptions bordered>
            <a-descriptions-item label="Product Name" :span="3"></a-descriptions-item>
            <a-descriptions-item label="Item Number" :span="3"></a-descriptions-item>
            <a-descriptions-item label="P/O Number" :span="3"></a-descriptions-item>
            <a-descriptions-item label="Quantity" :span="3"></a-descriptions-item>
            <a-descriptions-item label="Client name" :span="3"></a-descriptions-item>
            <a-descriptions-item label="Supplier name" :span="3"></a-descriptions-item>
            <a-descriptions-item label="Inspection date" :span="3"></a-descriptions-item>
            <a-descriptions-item label="Inspection location" :span="3"></a-descriptions-item>
            <a-descriptions-item label="Inspector" :span="3"></a-descriptions-item>
            <a-descriptions-item label="Inspection Results"></a-descriptions-item>
            <a-descriptions-item label="Results"></a-descriptions-item>
            <a-descriptions-item label="Remarks"></a-descriptions-item>
        </a-descriptions>
        <div class="overall" style="margin-top: 50px">
            <div style="padding: 36px;width: 50%">
                OVERALL CONCLUSION
            </div>
            <div style="width: 50%">
                <div class="result-item">Inspection Results</div>
                <div class="result-item">Inspection Results</div>
            </div>
        </div>
        <a-descriptions bordered layout="vertical" style="margin-top: 50px">
            <a-descriptions-item label="Remarks"></a-descriptions-item>
        </a-descriptions>
        <a-descriptions bordered title="Workmanship" layout="vertical" style="margin-top: 50px">
            <a-descriptions-item label="Remarks"></a-descriptions-item>
        </a-descriptions>
        <a-descriptions bordered :column="4" title="Testing/ Thecking" layout="vertical" style="margin-top: 50px">
            <a-descriptions-item label="Test project"></a-descriptions-item>
            <a-descriptions-item label="Sample Qty"></a-descriptions-item>
            <a-descriptions-item label="Test result"></a-descriptions-item>
            <a-descriptions-item label="Comment"></a-descriptions-item>
        </a-descriptions>
        <a-descriptions bordered :column="4" title="Data measurement" layout="vertical" style="margin-top: 50px">
            <a-descriptions-item label="Item Product1"></a-descriptions-item>
            <a-descriptions-item label="Cone Size (cm)"></a-descriptions-item>
            <a-descriptions-item label="Party blowers size(cm)"></a-descriptions-item>
            <a-descriptions-item label="Product weight(g)"></a-descriptions-item>
        </a-descriptions>
    </div>
</template>

<script setup>
import { useRouter } from 'vue-router'
import {
  LeftOutlined
} from '@ant-design/icons-vue';
const router = useRouter()

const goBack = () => {
    router.go(-1);
}
</script>

<style lang="less">
.content {
    background: #fff;
    padding: 24px 20%;
    font-family: PingFang SC;
    font-weight: 400;
    font-size: 14px;
    .overall {
        display: flex;
        align-items: center;
        border: 1px solid var(--border-color-light, #E4E7ED);
        .result-item {
            padding: 16px;
            border: 1px solid var(--border-color-light, #E4E7ED);
            background: #FFCF5F;
        }
    }
}
.check-item {
    border: 1px solid var(--border-color-light, #E4E7ED);
    padding: 16px;
}
</style>