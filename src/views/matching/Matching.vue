<template>
    <div>
        <el-button @click="matching()" type="primary">开始匹配</el-button>
    </div>
</template>

<script>

    export default {
        name: "Matching",
        data(){
            return{
                userid: ""
            }
        },
        created() {
            this.userid = this.$route.query.userid;
            console.log(this.userid);
        },
        methods: {
            matching(){
                this.axios.get("http://192.168.1.110:8000/user/matching/getmatching/"+this.userid).then((response) => {
                    console.log(response.data);
                    if (response.data.code == 104){
                        this.$router.push({path:'/index',query:{userid:this.userid,matching:response.data.data.matching}})
                        console.log("op")
                    }
                }).catch((response) => {
                    console.log(response)
                })
            }
        }
    }
</script>

<style scoped>

</style>