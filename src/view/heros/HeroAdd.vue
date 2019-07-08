<template>
     <div class="col-sm-9 col-sm-offset-3 col-md-10 col-md-offset-2 main">
        <h2 class="sub-header">Add Hero</h2>
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
        <button type="button" class="btn btn-success" @click="getAdd">Submit</button>
        </form>
      </div>
</template>
<script>


export default {
   data() {
     return {
       fromData:{
         name:'',
         age:'',
         gender:'男'
       }
     }
   },
   methods:{
      getAdd(){
        this.axios({
          method:'post',
          url:'heroes',
          data:this.fromData
        }).then((res)=>{
          if(res.status===201){
            alert('添加成功')
            this.$router.push({name:'hero'})
          }
        })
      }
   }
}
</script>

<style>

</style>
