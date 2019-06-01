<meta name="viewport" content="width=device-width,initial-scale=1" />
<template>
	<div class="nodeer">
	<el-container>
       <el-header height = "auto">
       	<h2>TY论坛</h2>
          	<input class="el-input" type="text" placeholder="请输入内容">
         <ul class="header">
           <li><router-link :to = "{path:'/node'}"> 首页</router-link></li>
           <li><router-link :to = "{name:'information',params:{token:this.token,uuid:this.uuid}}">个人</router-link></li>
           <li><a href="#">关于</a></li>
           <li><a href="#">注册</a></li>
           <li><a href="/">登陆</a></li>
         </ul>
       </el-header>
       <div class="meiyou">
       	   <div></div>
       	   <div></div>
       	   <div></div>
       </div>
       <el-main>
       	<div class="panel">
       		<el-tabs v-model="activeName" @tab-click="handleClick">
            <el-tab-pane label="全部" name="first" style = "display: block;">
            	<div class="inner">
       			<div class="topic_list" id="inner" v-for= "item in inner">
                    <div class="cell">
                    	<a href="#" class="cell_img pull_left">
                    		<img :src="item.author.avatar_url">
                    	</a>
                    	<span class="pull_left reply_count">
                    		<span>{{item.reply_count}}</span>
                    		<span>/</span>
                    		<span>{{item.visit_count}}</span>
                    	</span>
                    	<a href="#" class="last_time pull_right">
                    		<span>{{item.hourers}}</span>
                    	</a>
                    	<div class="topic_title_wrapper">
                    		<span>{{item.tops}}</span>
                    		<router-link class = "topic_title" :to = "{path:'/newnode/'+item.id}">
                    			{{item.title}}
                    		</router-link>
                    	</div>
                    </div>
       			</div>
       		</div>
       		
            </el-tab-pane>
            <el-tab-pane label="精华" name="second" class = "second">
            	<div class="inner">
       			<div class="topic_list" id="inner" v-for= "item in good">
                    <div class="cell">
                    	<a href="#" class="cell_img pull_left">
                    		<img :src="item.author.avatar_url">
                    	</a>
                    	<span class="pull_left reply_count">
                    		<span>{{item.reply_count}}</span>
                    		<span>/</span>
                    		<span>{{item.visit_count}}</span>
                    	</span>
                    	<a href="#" class="last_time pull_right">
                    		<span>{{item.hourers}}</span>
                    	</a>
                    	<div class="topic_title_wrapper">
                    		<span>{{good.tops}}</span>
                    		<router-link class = "topic_title" :to = "{path:'/newnode/'+item.id}">
                    			{{item.title}}
                    		</router-link>
                    	</div>
                    </div>
       			</div>
       		</div>
            </el-tab-pane>
            <el-tab-pane label="分享" name="third">
            	<div class="inner">
       			<div class="topic_list" id="inner" v-for= "item in share">
                    <div class="cell">
                    	<a href="#" class="cell_img pull_left">
                    		<img :src="item.author.avatar_url">
                    	</a>
                    	<span class="pull_left reply_count">
                    		<span>{{item.reply_count}}</span>
                    		<span>/</span>
                    		<span>{{item.visit_count}}</span>
                    	</span>
                    	<a href="#" class="last_time pull_right">
                    		<span>{{item.hourers}}</span>
                    	</a>
                    	<div class="topic_title_wrapper">
                    		<span>{{share.tops}}</span>
                    		<router-link class = "topic_title" :to = "{path:'/newnode/'+item.id}">
                    			{{item.title}}
                    		</router-link>
                    	</div>
                    </div>
       			</div>
       		</div>
            </el-tab-pane>
            <el-tab-pane label="问答" name="fourth">
            	<div class="inner">
       			<div class="topic_list" id="inner" v-for= "item in ask">
                    <div class="cell">
                    	<a href="#" class="cell_img pull_left">
                    		<img :src="item.author.avatar_url">
                    	</a>
                    	<span class="pull_left reply_count">
                    		<span>{{item.reply_count}}</span>
                    		<span>/</span>
                    		<span>{{item.visit_count}}</span>
                    	</span>
                    	<a href="#" class="last_time pull_right">
                    		<span>{{item.hourers}}</span>
                    	</a>
                    	<div class="topic_title_wrapper">
                    		<span>{{ask.tops}}</span>
                    		<router-link class = "topic_title" :to = "{path:'/newnode/'+item.id}">
                    			{{item.title}}
                    		</router-link>
                    	</div>
                    </div>
       			</div>
       		</div>
            </el-tab-pane>
            <el-tab-pane label="招聘" name="fifth">
            	<div class="inner">
       			<div class="topic_list" id="inner" v-for= "item in job">
                    <div class="cell">
                    	<a href="#" class="cell_img pull_left">
                    		<img :src="item.author.avatar_url">
                    	</a>
                    	<span class="pull_left reply_count">
                    		<span>{{item.reply_count}}</span>
                    		<span>/</span>
                    		<span>{{item.visit_count}}</span>
                    	</span>
                    	<a href="#" class="last_time pull_right">
                    		<span>{{item.hourers}}</span>
                    	</a>
                    	<div class="topic_title_wrapper">
                    		<span>{{job.tops}}</span>
                    		<router-link class = "topic_title" :to = "{path:'/newnode/'+item.id}">
                    			{{item.title}}
                    		</router-link>
                    	</div>
                    </div>
       			</div>
       		</div>
            </el-tab-pane>
  </el-tabs>
       	</div>

       </el-main>
     </el-container>
     <div class="back_to_top" @click = "scrollTop">返回顶部</div>
	</div>
</template>
<script>
	import $ from 'jquery';
	import axios from 'axios';
	var  pageNo = 1;
          var pagesize = 13;
         var page = 13;
         var page1 = 13;
         var pageNo1 = 1;
         var pageNo2 = 1;
export default {
	   
	data(){
		return{
          inner:{},
          activeName:'',
          uuid:"",
          token:"",
          good:{},
          share:{},
          ask:{},
          job:{}
          

		}
	},
	methods:{
		add(){
			this.uuid = this.$route.params.uuid;
			this.token = this.$route.params.token;
		},
		times(reply){//计算时间的函数，返回一个小时数
			var hourer;
             	var time = new Date(reply);
                var nowTime = new Date();
              	var timeDifference = nowTime.getTime()-time.getTime();
               	var leave1=timeDifference%(24*3600*1000);                
               	var hours = Math.ceil(leave1/(3600*1000));
               	
                if(hours>=24){
                   hourer =Math.floor(hours/24)+"天前";
                 }else{
                   hourer = hours+"小时前";
                }
             return hourer;
		},
        loadData(pageNo,pagesize){//加载全部页面
        	var ss = this;
        	axios.get('https://cnodejs.org/api/v1/topics',{
        		params:{
        		page:pageNo,
                limit:pagesize
        	}
        })
        	.then(function(data){
        		// console.log(data);
        	 ss.inner = data.data.data;
             $.each(data.data.data,function(index,item){
                ss.inner[index].hourers=ss.times(item.last_reply_at);
               if(item.top==true){
               	ss.inner[index].tops = "置顶";
               }else{
               	switch(item.tab){
               		case 'ask':ss.inner[index].tops = "问答";
               		break;
               		case 'share':ss.inner[index].tops = "分享";
               		break;
               		case 'job':ss.inner[index].tops = "招聘";
               		break;
               		case 'good':ss.inner[index].tops = "精华";
               		break;
               	}
               }
             });
        	}).catch(function(error){
              console.log(error);
        	})
        },
		handleClick(tab,event){//elment-ui的方法，选项卡
		},
		pg_add1(){//全部页面的懒加载
			var tm  = this;
		  $(document).scroll(function(){
		  	 if ($(document).scrollTop()>=$(document).height()-$(window).height()){
		  	 	page+=pagesize;
		  	 	pageNo++;
		  	 	axios.get('https://cnodejs.org/api/v1/topics',{
		  	 		params:{
		  	 			page:pageNo,
		  	 			limit:pagesize
		  	 		}
		  	 	}).then(function(data){
		  	 		let datas =  data.data.data;
		  	 		datas.hourers = "";
		  	 		tm.inner = tm.inner.concat(datas);
                   $.each(tm.inner,function(index,item){
                   	   tm.inner[index].hourers=tm.times(item.last_reply_at);
                   	   if(item.top==true){
               	tm.inner[index].tops = "置顶";
               }else{
               	switch(item.tab){
               		case 'ask':tm.inner[index].tops = "问答";
               		break;
               		case 'share':tm.inner[index].tops = "分享";
               		break;
               		case 'job':tm.inner[index].tops = "招聘";
               		break;
               		case 'good':tm.inner[index].tops = "精华";
               		break;
               	}
               }
                   });
		  	 	})

		  	 }
		  })
		},
		scrollTop(){//回到顶部
        	document.body.scrollTop = 0;
        	document.documentElement.scrollTop = 0;
        },
        loadGood(){//加载精华页面
        	var we = this;
        	axios.get('https://cnodejs.org/api/v1/topics',{
        		params:{
        			tab:'good',
        			page:pageNo1,
        			limit:pagesize
        		}
        	}).then(function(data){
        		
              we.good = data.data.data;
              
               $.each(data.data.data,function(index,item){
               	we.good[index].hourers = we.times(item.last_reply_at);

               });
               we.good.tops = "精华";
           });
                 
               	
        } ,
        loadShare(){//加载分享页面
        	var hs = this;
        	axios.get('https://cnodejs.org/api/v1/topics',{
        		params:{
        			tab:'share',
        			page:pageNo1,
        			limit:pagesize
        		}
        	}).then(function(data){
        		// console.log(data.data.data);
              hs.share = data.data.data;
              
               $.each(data.data.data,function(index,item){
               	hs.share[index].hourers = hs.times(item.last_reply_at);

               });
               hs.share.tops = "分享";
           });
                 
               	
        } ,
        loadAsk(){//加载问答页面
        	var we = this;
        	axios.get('https://cnodejs.org/api/v1/topics',{
        		params:{
        			tab:'ask',
        			page:pageNo1,
        			limit:pagesize
        		}
        	}).then(function(data){
        		
              we.ask = data.data.data;
              
               $.each(data.data.data,function(index,item){
               	we.ask[index].hourers = we.times(item.last_reply_at);

               });
               we.ask.tops = "问答";
           });
                 
               	
        } ,
        loadJob(){//加载招聘页面
        	var we = this;
        	axios.get('https://cnodejs.org/api/v1/topics',{
        		params:{
        			tab:'job',
        			page:pageNo1,
        			limit:pagesize
        		}
        	}).then(function(data){
        		
              we.job = data.data.data;
              
               $.each(data.data.data,function(index,item){
               	we.job[index].hourers = we.times(item.last_reply_at);
               	// console.log(we.job[index].hourers);

               });
               we.job.tops = "招聘";
           });
                 
               	
        } ,
       
		

	},
	mounted(){
		this.loadData(pageNo,pagesize);
		this.pg_add1();
		this.scrollTop();
		this.add();

		this.loadGood();
		this.loadShare();
		this.loadAsk();
		this.loadJob();
		// this.pg_add2();
	},



}  
</script>
<style scoped>
.nodeer{
	/*width: 100%;*/
	height: auto;
	padding: 0;
	margin: 0;
	background-color: #e1e1e1;
}
.el-header{
  background-color: #444;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 999;
}
.header{
  text-align: center;
  display: flex;
  width: 233px;
  height: 30px;
  padding: 0;
}
.header li{
  list-style: none;
  background-color: #444;
  color: white;
  line-height: 30px;
}

.el-input{
  background-color: #ccc;
  border-radius: 15px;
  width: 233px;
  height: 26px;
  margin-top:10px;
  outline: none;
}
.el-header input:focus{
  background-color: white;
}
.header a{
  color: #999;
  cursor: pointer;
  display: block;
  width: 46.59px;
  height: 30px;
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

}
.panel{
	width: 100%;
	overflow: auto;
}
.main_header{
	background-color: #f6f6f6;
	display: flex;
	justify-content: space-around;
	padding: 10px;
}
.main_header a{
	display: flex;
	text-decoration: none;
	color: #80bd01;
	width: 40px;
}
#page_control{
	display: flex;
	justify-content: space-around;
	padding: 0;
	list-style: none;
}
#page_control a{
	text-decoration: none;
	color: #80bd01;
	cursor: pointer;
}
#page_control li{
	cursor: pointer;
}
.cell{
	background-color: white;
	padding: 10px;
	position: relative;
	border-bottom:solid .5px #e1e1e1;
	height: 40px;
	overflow: hidden;
}
.cell img{
	width: 35px;
	height: 35px;
}
.topic_list{
	display: flex;
	flex-direction: column;
}
.pull_left{
	float: left;
}
.cell a{
	text-decoration: none;
	color: #999;
}
.pull_right{
	float: right;
}
.last_time{
	position: absolute;
	bottom:0;
	right: 10px;
	font-size: .8em;
}
.topic_title_wrapper{
	padding-left: 40px;
	width:100%;
	white-space: nowrap;
}
.topic_title{
	font-size: 1em;
	width: 100px;
}
.reply_count{
	position: absolute;
	bottom:0;
	left: 85px;
	text-align: center;
	line-height: 2em;
	font-size: 10px;
}
.el-tabs{
	background-color: white;

}
.meiyou{
	display: flex;
	justify-content: space-around;
	flex-wrap: wrap;
}
.meiyou div{
	width: 233px;
	height: 54px;
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