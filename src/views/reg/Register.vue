<template>
    <div>
        <el-form ref="form" :model="form" label-width="80px" class="reg_form">
            <h2>欢迎注册</h2>
            <el-form-item label="昵称">
                <el-input v-model="form.nickname"></el-input>
            </el-form-item>
            <el-form-item label="用户名">
                <el-input v-model="form.username"></el-input>
            </el-form-item>
            <el-form-item label="密码">
                <el-input v-model="form.password"></el-input>
            </el-form-item>
            <el-form-item label="验证密码">
                <el-input v-model="form.password"></el-input>
            </el-form-item>
            <el-form-item>
                <el-button type="primary" @click="onSubmit">立即创建</el-button>
                <el-button @click="cleanInput">重新输入</el-button>
            </el-form-item>
        </el-form>

    </div>
</template>

<script>
    export default {
        name: "Register",
        data() {
            return {
                form: {
                    nickname: '',
                    username: '',
                    password: ''
                }
            }
        },
        methods: {
            onSubmit() {
                console.log('submit!');
            },
            cleanInput(){
                this.form = {nickname: '',username: "",password: ""}
            }
        }
    }
</script>

<style scoped>
    .reg_form{
        width: 30%;
        margin: 10% auto;
        box-shadow: 0 2px 4px rgba(0, 0, 0, .12);
        padding: 30px 30px 10px 0px
    }
</style>