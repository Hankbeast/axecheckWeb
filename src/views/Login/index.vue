<template>
    <div class="container">
        <div class="register-box">
            <div class="login">Login</div>
            <a-form layout="vertical">
                <a-form-item label="Full Name" name="fullname">
                    <a-input></a-input>
                </a-form-item>
                <!-- <a-form-item label="Phone Number" name="phonenumber">
                    <a-input-group compact>
                        <a-select style="width: 30%">
                            
                        </a-select>
                        <a-input style="width: 70%"></a-input>
                    </a-input-group>
                </a-form-item> -->
                <a-form-item label="Password" name="password">
                    <a-input-password></a-input-password>
                </a-form-item>
            </a-form>
            <a-button type="link">Forgot Password? </a-button>
            <div>
                New User? 
                <a-button @click="toRegister" type="link">Create Account</a-button>
            </div>
            <a-button @click="toCheck" class="regBtn">Enter</a-button>
        </div>
        <div>
            <a-image :preview="false" src="./checklogin.png"></a-image>
        </div>
    </div>
</template>

<script setup>
import { useRouter } from 'vue-router'
const router = useRouter()

const toRegister = () => {
    router.push('/register')
}
const toCheck = () => {
    router.push('/check')
}
</script>

<style lang="less">
.container {
    display: flex;
    align-items: center;
    justify-content: space-evenly;
}
.register-box {
    border-radius: 10px;
    background: #FFF;
    box-shadow: 0px 8px 53px 0px rgba(0, 120, 240, 0.25), 0px 4px 9px 0px rgba(0, 0, 0, 0.10);
    padding: 95px 135px 65px 135px;
    text-align: center;
    .login {
        color: rgba(0, 120, 240, 0.50);
        font-family: Public Sans;
        font-size: 26px;
        font-weight: 400;
        margin-bottom: 32px;
    }
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