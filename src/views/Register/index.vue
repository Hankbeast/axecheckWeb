<template>
    <div class="container">
        <div class="register-box">
            <a-form layout="vertical">
                <a-form-item label="Full Name" name="fullname">
                    <a-input></a-input>
                </a-form-item>
                <a-form-item label="Email Address" name="emailaddress">
                    <a-input></a-input>
                </a-form-item>
                <a-form-item label="Phone Number" name="phonenumber">
                    <a-input-group compact>
                        <a-select style="width: 30%">
                            
                        </a-select>
                        <a-input style="width: 70%"></a-input>
                    </a-input-group>
                </a-form-item>
                <a-form-item label="Password" name="password">
                    <a-input-password></a-input-password>
                </a-form-item>
            </a-form>
            <div style="display: flex;justify-content: center">
                <a-button class="regBtn" @click="goLogin">Register</a-button>
            </div>
        </div>
    </div>
</template>

<script setup>
import { useRouter } from 'vue-router'
const router = useRouter()

const goLogin = () => {
    router.push('/login')
}
</script>

<style lang="less">
.container {
    display: flex;
    justify-content: center;
}
.register-box {
    border-radius: 10px;
    background: #FFF;
    box-shadow: 0px 8px 53px 0px rgba(0, 120, 240, 0.25), 0px 4px 9px 0px rgba(0, 0, 0, 0.10);
    padding: 126px 135px 65px 135px;
    width: 20%;
    margin-top: 5%
}
.regBtn {
    width: 288px;
    height: 51px;
    border-radius: 10px;
    border: 1px solid #0078F0;
    background: rgba(0, 120, 240, 0.10);
    color: #0078F0;
    font-size: 15px;
    font-weight: 500;
}
</style>