<template>
   <div class="col-sm-9 col-sm-offset-3 col-md-10 col-md-offset-2 main">
        <h2 class="sub-header">Edit Hero</h2>
        <form>
          <div class="form-group">
            <label for="exampleInputEmail1">姓名</label>
            <input type="text" v-model="fromData.name" class="form-control" id="txtName" placeholder="姓名">
          </div>
           <div class="form-group">
            <label for="exampleInputEmail1">年龄</label>
            <input type="text" v-model="fromData.age" class="form-control" id="txtName" placeholder="年龄">
          </div>
          <div class="form-group">
            <label for="sex">性别</label>
            <select v-model="fromData.gender" class="form-control">
              <option value="男">男</option>
              <option value="女">女</option>
            </select>
          </div>
        <button type="button" class="btn btn-success" @click="getGai">Submit</button>
        </form>
      </div>
</template>

<script>

export default {
  props:['id'],
    data() {
      return {
        fromData:{
           name:'',
           age:'',
           gender:''
        }
      }
    },
    mounted() {
      this.loDataByid()
    },
    methods:{
        loDataByid(){
          this.axios.get(`heroes/${this.id}`)
          .then((res)=>{
            if(res.status===200){
              this.fromData=res.data
            }
          })
        },
        getGai(){
          this.axios.put(`heroes/${this.id}`,this.fromData,)
          .then((res)=>{
            if(res.status===200){
              alert('修改成功')
              this.$router.push({name:'hero'})
            }else{
              alert('修改失败')
            }
          })
        }
    }
}
</script>

<style>

</style>
