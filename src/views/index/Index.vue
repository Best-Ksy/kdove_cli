<template>
    <div>
        <div>
            <el-input
                    type="textarea"
                    :rows="10"
                    placeholder="请输入内容"
                    v-model="textarea">
            </el-input>
            <el-input
                    placeholder="请输入内容"
                    v-model="input10"
                    clearable>
            </el-input>
            <el-button @click="submessage()" type="info">发送</el-button>

        </div>
    </div>
</template>

<script>
    export default {
        name: "Index",
        data() {
            return {
                websock: null,
                userid: '',
                matching: '',
                textarea: '',
                input10: ''
            }
        },
        created() {
            this.userid = this.$route.query.userid;
            this.matching = this.$route.query.matching;
            console.log(this.userid)
            console.log(this.matching)
            this.initWebSocket();
        },
        destroyed() {
            this.websock.close() //离开路由之后断开websocket连接
        },
        methods: {
            initWebSocket(){ //初始化weosocket
                const wsuri1 = "ws://127.0.0.1:8000/websocket/" + this.matching + "/" + this.userid;
                this.websock = new WebSocket(wsuri1);
                this.websock.onmessage = this.websocketonmessage;
                // this.websock.onopen = this.websocketonopen;
                this.websock.onerror = this.websocketonerror;
                this.websock.onclose = this.websocketclose;
            },
            websocketonopen(){ //连接建立之后执行send方法发送数据
                // let actions = {"test":"12345"};
                let actions = this.input10;
                this.websocketsend(JSON.stringify(this.userid+":"+actions));
            },
            websocketonerror(){//连接建立失败重连
                this.initWebSocket();
            },
            websocketonmessage(e){ //数据接收
                const redata = JSON.parse(e.data);
                this.textarea = this.textarea +"\n"+ redata
                console.log(redata)
            },
            websocketsend(Data){//数据发送
                this.websock.send(Data);
            },
            websocketclose(e){  //关闭
                console.log('断开连接',e);
            },
            submessage(){
                this.websocketonopen();
                this.input10 = '';
            }
        },
    }
</script>

<style scoped>

</style>