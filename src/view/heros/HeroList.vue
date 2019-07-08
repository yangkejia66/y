<template>
  <div class="col-sm-9 col-sm-offset-3 col-md-10 col-md-offset-2 main">
    <h2 class="sub-header">英雄管理</h2>
   <router-link class="btn btn-success" to="/hero/add">添加</router-link>
    <div class="table-responsive">
      <table class="table table-striped">
        <thead>
          <tr>
            <th>序号</th>
            <th>id</th>
            <th>姓名</th>
            <th>年龄</th>
            <th>性别</th>
            <th>操作</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(item,index) in list" :key="item.id">
            <td>{{index+1}}</td>
            <td>{{item.id}}</td>
            <td>{{item.name}}</td>
            <td>{{item.age}}</td>
            <td>{{item.gender}}</td>
            <td>
             <router-link :to="{name:'heroedit',params:{id:item.id}}">编辑</router-link>
              &nbsp;&nbsp;
              <a href="javascript:" @click="getDel(item.id)">删除</a>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      list: []
    };
  },
  mounted() {
      this.loData()
  },
  methods: {
    loData(){
      this.axios({
        method:'get',
        url:'http://localhost:3000/heroes',
      }).then((res)=>{
        if(res.status===200){
          this.list=res.data
          console.log(this.list)
        }else{
          alert('获取失败')
        }
      }).catch(()=>{
        alert('服务器异常')
      })
    },
    getDel(id){
       if(!confirm('are You?')){
         return 
       };
     this.axios
     .delete(`heroes/${id}`)
     .then((res)=>{
       if(res.status===200){
         alert('删除成功')
         this.loData()
       }else{
         alert('删除失败')
       }
     }).catch((err)=>{
       console.log(err)
     })
    }
  }
};
</script>

<style>
</style>
