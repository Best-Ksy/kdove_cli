<template>
    <div>
        <el-form ref="form" :model="form" label-width="80px" class="reg_form">
            <h2>手机登录</h2>
            <el-form-item label="手机号码">
                <el-input v-model="form.username" @blur="valPhone($event)" @keyup.native="phoneFlag()"></el-input>
            </el-form-item>
            <el-form-item label="验证码" v-if="showInput">
                <el-input class="inp_class" v-model="form.smscode" @keyup.native="submit()"></el-input>
                <el-button  class="inp_button" type="primary" size="small " round @click="getSms()">获取验证码</el-button>
<!--                <el-button class="sub_button" type="primary" @click="onSubmit">确定</el-button>-->
            </el-form-item>


        </el-form>
    </div>
</template>

<script>
    import {getSmsCode,smsVerification} from '../../api/user_api';
    import {setXcode} from "../../utils/auth";

    export default {
        name: "Register",
        data() {
            return {
                form: {
                    username: '',
                    smscode: ''
                },
                showInput:false,
                errocount: 0
            }
        },
        methods: {
            submit() {
                if (this.form.smscode.length === 5){
                    const Data = {"phoneNumber":this.form.username,"smsCode":this.form.smscode};
                    smsVerification(Data).then(response => {
                        if (response.data.code === 201){
                            const respData = response.data.data;
                            setXcode(respData.xcode);
                            location.reload();
                        }else {
                            this.$message('验证码错误');
                            this.form.smscode = '';
                        }
                    })
                }if (this.form.smscode.length > 5){
                    this.form.smscode = '';
                }
            },
            valPhone(){
                var reg=/^1[3456789]\d{9}$/;
                if(reg.test(this.form.username)){
                    this.showInput = true;
                }else {
                    this.$message('手机号码错误');
                }
            },
            phoneFlag(){
                var reg=/^1[3456789]\d{9}$/;
                if(reg.test(this.form.username)){
                    this.showInput = true;
                }
            },
            getSms(){
                console.log(this.form.username);
                getSmsCode(this.form.username).then(response => {
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
        margin-left: 8%;
    }
    /*.sub_button{*/
    /*    width: 100%;*/
    /*    margin-top: 10px;*/

    /*}*/
</style>