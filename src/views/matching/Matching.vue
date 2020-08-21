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
            this.userid = this.$store.getters.getId;
        },
        methods: {
            matching(){
                console.log(this.$store.getters.getId)
                this.axios.get("http://localhost:8088/user/matching/getmatching/"+this.userid).then((response) => {
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