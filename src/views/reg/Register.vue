<template>
    <div>
        <el-form ref="form" :model="form" label-width="80px" class="reg_form">
            <h2>手机登录</h2>
            <el-form-item label="手机号码">
                <el-input v-model="form.nickname" @blur="valPhone($event)"></el-input>
            </el-form-item>
            <el-form-item label="验证码" v-if="showInput">
                <el-input class="inp_class" v-model="form.password"></el-input>
                <el-button  class="inp_button" type="primary" size="small " round @click="getSms()">获取验证码</el-button>
            </el-form-item>

<!--            <el-form-item>-->
<!--                <el-button type="primary" @click="onSubmit">立即创建</el-button>-->
<!--            </el-form-item>-->
        </el-form>
    </div>
</template>

<script>
    import {getSmsCode} from '../../api/user_api'
    export default {
        name: "Register",
        data() {
            return {
                form: {
                    nickname: '',
                    username: '',
                    password: ''
                },
                showInput:false,
                errocount: 0
            }
        },
        methods: {
            onSubmit() {
                console.log('submit!');
            },
            cleanInput(){
                this.form = {nickname: '',username: "",password: ""}
            },
            valPhone(){
                var reg=/^1[3456789]\d{9}$/;
                if(reg.test(this.form.nickname)){
                    this.showInput = true;
                }else {
                    this.$message('手机号码错误');
                }
            },
            getSms(){
                console.log(this.form.nickname);
                getSmsCode(this.form.nickname).then(response => {
                    console.log(response.data.data)
                })
            }
        }
    }
</script>

<style scoped>
    .reg_form{
        width: 20%;
        margin: 10% auto;
        box-shadow: 0 2px 4px rgba(0, 0, 0, .12);
        padding: 30px 30px 10px 0px
    }
    .inp_class{
        width: 50%;
    }
    .inp_button{
        /*width: 40%;*/
        margin-left: 8%;
        /*margin-right: 5%;*/
    }
</style>