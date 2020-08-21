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
                usercode: ""
            }
        },
        created() {
            this.usercode = this.$store.getters.getUcode;
        },
        methods: {
            matching(){
                console.log(this.$store.getters.getId)
                this.axios.get("http://localhost:8088/user/matching/getmatching/"+this.usercode).then((response) => {
                    console.log(response.data);
                    if (response.data.code == 104){
                        this.$router.push({path:'/index',query:{matching:response.data.data.matching}})
                        console.log("op")
                    }else{
                        this.$message('匹配失败');
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