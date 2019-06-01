<template>
     <div class="f-information">
       <div class="information">
        <div class="header">
          <li><a href="/node"><返回主页</a></li>
          <li>个人中心</li>
          <li class="changes">修改资料</li>
        </div>
        <div class="all_infor">
          <div class="befores  before">基本信息</div>
          <div>
            <div class="befores">
              <div>用户名:{{inner.username}}</div>
            </div>
            <form class="change">
              <label>用户名:</label>
              <input  class="inputs"  type="text" name="" v-model = "inner.username">
            </form>
          </div>
          <div>
            <div class="befores">用户角色:{{inner.role}}
            </div>
            <form class="change">
              <label>用户角色</label>
              <input class="inputs"   type="text" name="" v-model = "inner.role" disabled>

            </form>
          </div>
          <div class="befores  before">详细信息</div>
          <div>
            <div class="befores">年龄:{{inner.ext_info.age==undefined?"未填写":inner.ext_info.age}}</div>
            <form class="change">
              <label>年龄:</label>
              <input class="inputs"  type="text" name="" v-model = "inner.ext_info.age">
            </form>
          </div>
          <div>
            <div class="befores">
              所在地:{{inner.ext_info.location==undefined?"未填写":inner.ext_info.location}}
            </div>
            <form  class="change">
              <label>所在地:</label>
              <input class="inputs" type="text" name="" v-model = "inner.ext_info.location">
            </form>
          </div>
          <div>
            <div class="befores">性别:{{inner.ext_info.sex==undefined?"未填写":inner.ext_info.sex}}</div>
            <form class="change">
              <label>性别:</label>
              <input class="inputs"  type="text" name="" v-model = "inner.ext_info.sex">
            </form>
          </div>
          <div>
            <div class="befores">个性签名:{{inner.ext_info.sign==undefined?"未填写":inner.ext_info.sign}}</div>
            <form class="change">
              <label>个性签名:</label>
              <input class="inputs"  type="text" name="" v-model = "inner.ext_info.sign">
            </form>
          </div>
          <div>
            <div class="befores">电话:{{inner.ext_info.phone==undefined?"未填写":inner.ext_info.phone}}</div>
            <form class="change">
              <label>电话:</label>
              <input class="inputs"  type="text" name="" v-model = "inner.ext_info.phone">
            </form>
          </div>
          
        </div>
        <button class="change keep">保存</button>

     </div>
     </div>
</template>
<script>
  import $ from 'jquery';
  import axios from 'axios';
export default {

    data(){
       return {
        uuid:"",
        token:"",
        inner:{ext_info:{age:"",location:"",email:"",sex:"",sign:"",phone:""}},
       }
    },
    methods:{
      add(){
        this.uuid = this.$route.params.uuid;
        this.token = this.$route.params.token;
      },
      change(){
        $('.changes').click(function(){
          $('.change').show();
          $('.befores').hide();
        })
      },
      information(){
         var vm = this;
      $.ajax({
        url:'http://hb9.api.okayapi.com/?s=App.User.Profile',
        type:'GET',
        dataType:'jsonp',
        data:{
          app_key:'E0A52635859871C072A9B440A8352D61',
          uuid:vm.uuid,
          token:vm.token
        },
        success:function(data){
          console.log(data);
          vm.inner = data.data.info;
        }

      });
      },
      exchange(){
        var tt = this;
        $('.keep').click(function(){
          $('.change').hide();
          $('.befores').show();
         $.ajax({
        url:'http://hb9.api.okayapi.com/?s=App.User.UpdateExtInfo',
        type:'POST',
        dataType:'jsonp',
        data:{
          app_key:'E0A52635859871C072A9B440A8352D61',
          uuid:tt.uuid,
          token:tt.token,
          ext_info:tt.inner.ext_info
        },
        success:function(data){
          console.log(data);
        }

      });
      });
      }
    },
    mounted(){
      this.change();
      this.add();
      this.exchange();
      this.information();
      


    }
}
</script>
<style scoped>
a{
  text-decoration: none;
  color:white;
}
.f-information{
  width: 100%;
  height: 100%;
  padding: 0;
  margin: 0;
  background-color: #f0f0f0;
}
  .header{
    display: flex;
    justify-content: space-between;
    background-color: #444;
    color: white;

  }
  .header li{
    line-height: 40px;
    list-style: none;
  }
  .change{
    display: none;
     background-color: white;
    font-size: 15px;
    border-bottom: solid .5px #f0f0f0;
    padding: 10px 10px;
  }
  .befores{
    background-color: white;
    font-size: 15px;
    border-bottom: solid 1px #f0f0f0;
    padding: 10px 10px;
    margin-top: 2px;

  }
  .before{
    background-color: #f0f0f0;
    font-size: 11px;
  }
.inputs{
  /*margin:0 0 0 70px;*/
  height:30px;
  width: 230px;
  font-size: 13px;
  outline: none;
}
.keep{
margin-top:30px;
margin-left: 130px;
}
.tip{
float: right;
}
</style>