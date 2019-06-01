<meta name="viewport" content="width=device-width,initial-scale=1" />
<template>
<div class="Login">
		<h2>TY论坛</h2>
		<el-row   type = "flex" justify = "center">
			<el-form class="login-container" status-icon  :model="form">
				<el-form-item>
					<el-input v-model="form.username" placeholder="请输入您的用户名" >{{form.username}}
					</el-input>
				</el-form-item>
				<el-form-item>
					<el-input v-model="form.password" type = "password" placeholder="请输入您的密码" >{{form.password}}</el-input>
				</el-form-item>
				<el-form-item>
					<el-button @click="login" type = "submit" icon = "el-icon-upload">登陆</el-button>
				</el-form-item>
				<el-form-item>
					<el-button @click="registe" type = "#303133" icon = "el-icon-circle-plus">注册</el-button>
				</el-form-item>
				<span style="float: right;color: #A9A9AB">忘记密码？</span>
			</el-form>	
		</el-row>
</div>
</template>
<script>
	const jsonp = require('jsonp');
	import md5 from 'js-md5';
	import axios from 'axios';
	import $ from 'jquery';
	import { mapMutations } from 'vuex';
	export default{
		 data () {
            return{
             form: {    
             username:'',
             password:'',
             newpassword:''
          }}},
          methods:{
             // ...mapMutations(['changeLogin']),
			check:function(event){
				//获取值
				
				var username = this.username;
				var password = this.password;
				if(username == '' || password == ''){
					this.$message({
						message : '账号或密码为空！',
						type : 'error'
					})
					return;
				    }
				},
				//前端分享的demo
				 demo(){
				 	var student = {
					user:{
						name:"杨彤",
					    grade:1
					   }
				    };
				    student = JSON.stringify(student);//将JSON转为字符串存到变量里面
				    localStorage.setItem("student",student);
				    var newStudents =JSON.parse(localStorage.getItem("student"));
                    console.log(newStudents);
			    },
				registe(){
                   this.$router.push({name:'registe'});
				},
			    login(){
			    	var ss = this;
			    	if(this.form.username==''||this.form.password==''){
      			alert("注册失败，用户名密码不可以为空");
      		}else{
				$.ajax({
                   url:'http://hb9.api.okayapi.com/?s=App.User.Login',
                   type:'GET',          
                   dataType:'jsonp', //指定为jsonp类型
                   data:{
                   	app_key:"E0A52635859871C072A9B440A8352D61",
                    username:this.form.username,
                    password:md5(this.form.password)
                   }, //数据参数
                   success:function(data){
                     if(data.data.err_code==1||data.data.err_code==2){
             		    console.log(data);
             		     alert("登录失败,用户名不存在或者密码错误");
             	     }else{
            		console.log(data);
            		alert("登陆成功");
                     ss.$router.push({name:'node',params:{token:data.data.token,uuid:data.data.uuid}});
            	     } 
                  }
                });
			}
		}

		},
		mounted(){
			this.demo();
		}

}

</script>
<style scoped>
.Login{
	width: 100%;
	height: 100%;
	margin: 0 auto;
	padding: 0;
	background-image: url('images/img2.jpg');
	background-position: center center;
	background-repeat: no-repeat;
	background-attachment: fixed;
	background-size: cover;
	position: absolute;
	top: 0;
}

.el-button{
	width:100%;
}
h2{
	color: white;
	display: flex;
	justify-content: center;
}
</style>