<template>
	<div class="newnode">
		<el-container>
		 <el-header height = "auto">
               <li><router-link :to = "{path:'/node'}"> <返回首页</router-link></li>
             </ul>
          </el-header>
          <el-main>
          	<div class="contents">
          		<div class="headers">
          			<span>{{detailPage.tops}}</span>
          			<h3>{{detailPage.title}}</h3>
          		</div>
          		<div class="per">
          			<span>
          				<span>发布于</span>
          				<span>{{detailPage.hourers}}</span>
          				<span>.作者{{detailPage.author.loginname}}</span>
          				<span>.</span>
          				<span>{{detailPage.visit_count}}</span>
          				<span>次浏览来自于</span>
          				<span>{{detailPage.tops}}</span>
          			</span>
          		</div>
          		<hr>
          		<div class="markdown">
          			<div v-html = "detailPage.content">
          		</div>
          		</div>
          	</div>
          	<hr>
          </el-main>
          <el-footer>
          	<div class="replies_titles">
          			<span>{{reply.length}} 回复</span>
           </div>
          	<div class="f-replies">
          		<div class="replies" v-for = "item in reply">
          		<div class="cell">
          			<div class="cell_title">
          				<div class="cell_img">
          				   <a href="#">
          					   <img :src="item.author.avatar_url" :title="item.author.loginname">
          				   </a>
          			   </div>
          			   <div>
          			   	   <a href="#" class="author_user">{{item.author.loginname}}</a>
          				   <a href="#" class="replies_news">{{item.replyTime}}</a>
          			   </div>
          			</div>
          			<div v-html = "item.content">
          			</div>
          		</div>
          	</div>
          	</div>
          	<div class="submitReply">
          		<input id="contentss" type="text" name="" value="">
          		<button id="submit">评论</button>
          	</div>
          </el-footer>
		</el-container>
		<div class="back_to_top" @click = "scrollTop">返回顶部</div>
	</div>
</template>
<script>
	import axios from 'axios';
	import $ from 'jquery';
   export default {
        data(){
           return{
           	id:"",
           	detailPage:{author:{avatar_url:"",loginname:""}},
           	reply:[]
           }
        },
        methods:{
        	add(){
               this.id = this.$route.params.id;
        	},
        	handle(){
        		var vm = this;
        		axios.get('https://cnodejs.org/api/v1/topic/'+this.id)
        		.then(function(data){
                  vm.detailPage = data.data.data;
                 var tops;
                 var item = data.data.data;
                 var time = new Date(item.create_at);
                     	var nowTime = new Date();
                     	var timeDifference = nowTime.getTime()-time.getTime();
                     	var leave1=timeDifference%(24*3600*1000); 
                     	var hours = Math.ceil(leave1/(3600*1000));
                     	var hourer;
                     	if(hours>=24){
                           hourer =Math.floor(hours/24)+"天前";
                     	}else{
                           hourer = hours +"小时前";
                     	};
                     	vm.detailPage.hourers = hourer;
                if(item.top==true){
               	vm.detailPage.tops = "置顶";
               }else{
               	switch(item.tab){
               		case 'ask':vm.detailPage.tops = "问答";
               		break;
               		case 'share':vm.detailPage.tops = "分享";
               		break;
               		case 'job':vm.detailPage.tops = "招聘";
               		break;
               		case 'good':vm.detailPage.tops = "精华";
               		break;
               	}
               }
             vm.reply = data.data.data.replies;
             vm.reply.length = data.data.data.replies.length;
             $.each(data.data.data.replies,function(index,item){
             	var nowTime1 = new Date();
                var time1 = new Date(item.create_at);
                var timeDifference1 = nowTime1.getTime()-time1.getTime();
                var leave2=timeDifference1%(24*3600*1000); 
                var hours1 = Math.ceil(leave2/(3600*1000));
                if(hours1>=24){
                          vm.reply[index].replyTime=Math.floor(hours1/24)+"天前";
                     	}else{
                          vm.reply[index].replyTime  = hours1 +"小时前";
                     	};
             })
        	}).catch(function(error){
                  console.log(error);
        		});
        	
        }, 
        scrollTop(){
        	document.body.scrollTop = 0;
        	document.documentElement.scrollTop = 0;
        } 
   },
   mounted(){
        	this.add(),
        	this.handle(),
        	this.scrollTop()
        },

}
</script>
<style scoped>
.newnode{
	background-color: #e1e1e1;
	/*overflow-y: scroll;*/
}
	.el-header{
  background-color: #444;
  display: flex;
  flex-wrap: wrap;
  height: 60px;
}

.el-header li{
  list-style: none;
  background-color: #444;
  color: white;
  line-height: 40px;
}

.el-header a{
  color: #999;
  cursor: pointer;
  display: block;
  width: 100px;
  height: 40px;
  text-decoration: none;

}
.header a:hover{
   color: #ccc;
}
h2{
	padding: 10px 0;
	margin: 0;
	color: #999;
	width: 233px;
	text-align: center;
}
.el-main{
	width: 100%;
	padding: 0;
	margin: 10px 0 0 0; 
	background-color: white;
}
.replies_titles{
	background-color: #f6f6f6;
	line-height: 40px;
}
.cell{
	position:relative;
	padding: 10px 0 10px 10px;
	background-color: #fff;
	border: solid 1px #f0f0f0;
}
.cell_img img{
	width: 30px;
	height: 30px;

}
.cell_title{
	display: flex;
    flex-direction: row;
    font-size: .5em;
}
.author_user{
	text-decoration: none;
	color:black;
}
.replies_news{
	text-decoration: none;
	color: #08c;

}

.markdown >>> img{
	height: auto;
	max-width: 100%;
}
.markdown>>> a{
	text-decoration: none;
	overflow: hidden;
}
.markdown >>> h2{
	border-bottom: solid 1px #e1e1e1;
}
.markdown >>> h3{
	border-bottom: solid 1px #e1e1e1;
}
.markdown >>> h4{
	border-bottom: solid 1px #e1e1e1;
}
.headers{
	display: flex;
	flex-direction: row;
	align-items: all;
	padding: 10px 10px;

}
.headers h3{
	padding: 10px 0;
	margin: 0;
	border-bottom: none;
}
.headers span{
	font-size: 11px;
	height: 20px;
	background-color: #80bd01;
	color: white;
	border-radius: 3px;
	padding: 0 10px;
	margin: 10px 0 0 0;
}
.per span{
	font-size: 13px;
}
.f-replies>>> img{
	height: auto;
	max-width: 100%;
}
.f-replies>>> a{
	text-decoration: none;
}
.el-footer{
	width: 100%;
	margin-top: 10px;
	padding: 0;
	background-color: white;
}
.submitReply input{
	border:solid 1px #999;
	width: 233px;
	height: 30px;
	border-radius: 5px;
	margin: 10px 10px;
	outline: none; 

}
.submitReply button{
	border:solid 1px #ccc;
	background-color: #80bd01;
	color: white;
	border-radius: 5px;
	padding: 6px 10px;
	outline: none;
}
.submitReply{
	background-color: #f6f6f6;
	position: fixed;
	bottom: 0;
	left: 0;
	width: 100%;

}
.back_to_top{
	position: fixed;
	bottom: 30px;
	right: 10px;
	width: 20px;
	height: 100px;
	color: #80bd01;
	text-align: center;
	background-color: #f6f6f6;
	padding: 5px 5px;
	border-radius: 3px;
}
</style>