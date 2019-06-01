
<meta name="viewport" content="width=device-width,initial-scale=1" />
<template>
<div class="registe">
	    <h2>TY注册</h2>
		<el-row type = "flex" justify = "center">
			<el-form :rules="rules" :model="form">
				<el-form-item prop="username">
					<el-input v-model="form.username" placeholder="请输入您的手机号">{{form.username}}
					</el-input>
				</el-form-item>
				<el-form-item prop ="pass">
					<el-input type = "password" v-model="form.pass"placeholder="请输入密码，全部小写" >{{form.pass}}</el-input>
				</el-form-item>
				<el-form-item prop="checkPass">
					<el-input v-model = "form.checkPass" type = "password" placeholder="请再次输入您的密码" ></el-input>
				</el-form-item>
				<el-form-item>
					<el-button @click ="submitForm" type = "submit" icon = "el-icon-circle-plus">注册</el-button>

				</el-form-item>
				<el-form-item>
					<el-button @click = "returnLogin" icon = "el-icon-back">返回登录</el-button>
				</el-form-item>
			</el-form>	
		</el-row>
</div>
</template>
<script>
	const jsonp = require('jsonp');
	import md5 from 'js-md5';
	import axios from 'axios';
	import $ from 'jquery';
	export default{
         data() {
    // 此处自定义校验手机号码js逻辑
    var phoneReg = /^[1][3,4,5,7,8][0-9]{9}$/
    var validatePhone = (rule, value, callback) => {
      if (!value) {
        return callback(new Error('号码不能为空!!'));

      }
      setTimeout(() => {
        if (!phoneReg.test(value)) {
          callback(new Error('格式有误'));
        } else {

          callback();
        }
      }, 1000)
    }
    var passReg =/^[a-z]{6,15}$/
    var validatePass = (rule, value, callback) => {
        if (!value) {
         return callback(new Error('请输入密码'));
        } 
        setTimeout(() => {
        if (!passReg.test(value)) {
         return callback(new Error('全部小写，在6~15位之间'));
        } else {
          callback()
        }
      }, 1000)
        };
      var validatePass2 = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请再次输入密码'));
        } else if (value !== this.form.pass) {
          callback(new Error('两次输入密码不一致!'));
        } else {
          callback();
        }
      };
    return {
      form: {    
        username: '',
        pass:'',
        checkPass:'',
      },
      // 校验规则
      rules: {
        // 校验手机号码，主要通过validator来指定验证器名称
        username: [{ required: true, validator: validatePhone, trigger: 'blur'}],
        pass:[{validator: validatePass, trigger: 'blur' }],
        checkPass: [
            { validator: validatePass2, trigger: 'blur' }
          ]
      },
    }
  },
  methods:{
      	submitForm(){
      		if(this.form.username==''||this.form.pass==''||this.form.checkPass==''){
      			alert("注册失败，用户名和密码不可以为空");
      		}else{
          $.ajax({
             url:'http://hb9.api.okayapi.com/?s=App.User.Register',
             type:'GET',          
             dataType:'jsonp', //指定为jsonp类型
             data:{app_key:"E0A52635859871C072A9B440A8352D61",
             username:this.form.username,
             password:md5(this.form.checkPass)
             }, //数据参数
             success:function(data){
             if(data.ret!==200){
             		console.log(data.ret);
             		alert("注册失败");
             	}else if(data.data.err_code == 1){
             		console.log(data);
            		alert("用户已注册，不能重复注册");
            	}else{
            		console.log(data);
            		alert("注册成功");

            	} 
             }
         });
      }
      },
      returnLogin(){
      	this.$router.push({name:'login'});
      }
  
}
}

</script>
<style scoped>
.registe{
	background-image: url('images/img2.jpg');
	background-position: center center;
	background-repeat: no-repeat;
	background-attachment: fixed;
	background-size: cover;
	width: 100%;
	height: 100%;
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