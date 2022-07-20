<template>
<div id="min">
<div id="index">
 <van-nav-bar >
     <template #right>
        <div class="r">
            <van-image
                round
                width="40px"
                src="/img/0dba5b017a084edf67cebba39e3ae12.png"
                />
                <p>菠萝派</p>
        </div>
     </template>
     <template #left>
        <van-image
            round
            width="40px"
            src="/img/1.png"
            />
            <div class="l">

                <p>salala</p>
                <p>一站式女士购物平台</p>
            </div>
     </template>
    </van-nav-bar>
   <van-search v-model="value" placeholder="化妆品，衣服，首饰，数码..." @click="GObACK"/>
</div>
<!-- 是头儿  -->

<div class="main">
<van-swipe class="my-swipe" :autoplay="3000" indicator-color="white" height="194" >
  <van-swipe-item><img src="/img/轮播图2.png" alt="" class="my-img1"></van-swipe-item>
  <van-swipe-item><img src="/img/轮播图1.png" alt="" class="my-img1"></van-swipe-item>
  <van-swipe-item><img src="/img/轮播图3.png" alt="" class="my-img1"></van-swipe-item>
</van-swipe>
<van-grid square>
<template v-for="item in arr" :key="item._id" >
    <van-grid-item><img :src="item.imgUrl"  class="my-img"><span>{{item.list}}</span></van-grid-item>
</template>   
</van-grid>
<div class="imgBox">
<img class="img" src="/img/111.png" alt="">
    <div class="BoxText">
    秋冬独立季节时尚美妆
    </div>
</div>
<el-icon class="icon"><Right /></el-icon>
</div>  
<div class="new">
    <h2>新品推荐</h2>
    <h4>全部></h4>
</div>
<div class="food">
    <swiper
    :slidesPerView="2"
    :spaceBetween="30"
  >
    <swiper-slide v-for="item in imgArr" :key="item._id">
    <div class="imgArr">
        <img :src="item.imgUrl" alt="">
        <p>{{item.name}}</p>
        <p>{{item.new}}</p>
        <del>{{item.old}}</del>
    <div class="myicon">
      <span class="iconfont icon-gouwuche">添加</span>
      <span class="iconfont icon-aixin"></span>
    </div>
    </div>
    </swiper-slide>
  </swiper>
</div>
<van-image
  width="100%"
  height="150"
  src="/img/Rectangle 131.png"
/>
<van-image
  width="100%"
  height="150"
  src="/img/Group 36313.png"
/>
<!-- 品牌馆 -->
<div class="pinpaiguan">
    <h2>品牌馆</h2>
<swiper
    :slidesPerView="5"
    :spaceBetween="30"
  >
    <swiper-slide v-for="item in pinpaiArr" :key="item._id">
    <div class="imgArr">
        <img :src="item.pinpaiUrl" alt="">
    </div>
    </swiper-slide>
  </swiper>
</div>
<!-- 优惠专区 -->
<div class="youhui">
   <h2>优惠专区</h2>
    <h5>全部></h5>
</div> 
<div class="youhuiAll">   
    <div class="youhuiAll-one">
        <div>
            <img src="/img/Group 1581.png" alt="" style="">
        </div>
        <div class="youhuiAll-tow">
            <h4>海棠工艺</h4>
            <p>圆滑三棱型设计，采用超纤维材质...</p>
            <p>￥23.50</p>
        </div>
    </div>
    <div class="myicon">
      <span class="iconfont icon-gouwuche">添加</span>
      <span class="iconfont icon-aixin"></span>
    </div>
</div>
<div class="youhuiAll">   
    <div class="youhuiAll-one">
        <div>
            <img src="/img/Group 1582.png" alt="" style="">
        </div>
        <div class="youhuiAll-tow">
            <h4>雅尔卓海绵粉扑</h4>
            <p>小果冻长方形粉底液化妆棉干湿两用...</p>
            <p>￥12.50</p>
        </div>
    </div>
    <div class="myicon">
      <span class="iconfont icon-gouwuche">添加</span>
      <span class="iconfont icon-aixin"></span>
    </div>
</div>
<van-image
  width="100%"
  height="150"
  src="/img/Group 361.png"
/>
<div>
    <h3>热卖推荐</h3>
</div>
<div class="food">
    <swiper
    :slidesPerView="2"
    :spaceBetween="30"
  >
    <swiper-slide v-for="item in imgArr" :key="item._id">
    <div class="imgArr">
        <img :src="item.imgUrl" alt="">
        <p>{{item.name}}</p>
        <p>{{item.new}}</p>
        <del>{{item.old}}</del>
    <div class="myicon">
      <span class="iconfont icon-gouwuche">添加</span>
      <span class="iconfont icon-aixin"></span>
    </div>
    </div>
    </swiper-slide>
  </swiper>
</div>


<van-tabbar v-model="active" :fixed="fixed" active-color="#f60" inactive-color="#000">
  <van-tabbar-item icon="bag-o">首页</van-tabbar-item>
  
  <router-link to="/screen">
    <van-tabbar-item icon="apps-o" >分类</van-tabbar-item>
  </router-link>
  <van-tabbar-item icon="exchange">交易</van-tabbar-item>
  <van-tabbar-item icon="shopping-cart-o">购物车</van-tabbar-item>
  <van-tabbar-item icon="user-o">我的</van-tabbar-item> 
</van-tabbar>
</div>
</template>
<!-- 我是脚 -->
<script setup>
    import {defineComponent} from 'vue'
    import {ref} from 'vue'
    import { Swiper, SwiperSlide } from "swiper/vue";
    import "swiper/css";
    import '@/assets/font_odlyqldfvzr/iconfont.css'
    import { useRouter } from "vue-router"
    const history =useRouter()

    defineComponent({
        name: 'MyIndex'
        
    })
    let fixed = ref(true)
    let value = ref('')
    let active = ref(0)
    let arr= ref([
        {_id:1 ,list:'香水',imgUrl:'/img/one.png'},
        {_id:2 ,list:'高跟鞋',imgUrl:'/img/two.png'},
        {_id:3 ,list:'时尚包',imgUrl:'/img/three.png'},
        {_id:4 ,list:'指套',imgUrl:'/img/four.png'},
        {_id:5 ,list:'连衣裙',imgUrl:'/img/five.png'},
        {_id:6 ,list:'高跟鞋',imgUrl:'/img/six.png'},
        {_id:7 ,list:'秋冬装',imgUrl:'/img/seven.png'},
        {_id:8 ,list:'香水',imgUrl:'/img/eight.png'}
    ]);
    let imgArr =ref([
        {_id:1,name:'浅色米黄长裤',new:'￥599.00',old:'￥648',imgUrl:'/img/bag.png'},
        {_id:2,name:'浅色米黄长裤',new:'￥599.00',old:'￥648',imgUrl:'/img/image 56.png'},
        {_id:3,name:'浅色米黄长裤',new:'￥599.00',old:'￥648',imgUrl:'/img/image 57.png'},
        {_id:4,name:'浅色米黄长裤',new:'￥599.00',old:'￥648',imgUrl:'/img/image 58.png'},
        {_id:5,name:'浅色米黄长裤',new:'￥599.00',old:'￥648',imgUrl:'/img/bag.png'}
    ]);
    let pinpaiArr = ref([
        {_id:1,pinpaiUrl:'/img/Brands1.png'},
        {_id:2,pinpaiUrl:'/img/Brands.png'},
        {_id:3,pinpaiUrl:'/img/Brands1.png'},
        {_id:4,pinpaiUrl:'/img/Brands.png'},
        {_id:5,pinpaiUrl:'/img/Brands1.png'},
        {_id:6,pinpaiUrl:'/img/Brands.png'},
    ])
    const GObACK = ()=>{
        // console.log(history);
        history.push('/screen')
    }
    // const gos=()=>{
    //     history.push('/screen')

    // }
</script>

<style>
 #index .van-nav-bar__left{
        margin-top: 50px;
    }
   #index  .van-nav-bar__right{
        margin-top: 50px;

   }
   #index .van-search__content{
    border-radius:20px;
    padding: 10px;
    margin: 10px;
   }
</style>
<style lang="scss" scoped>
*{margin: 0;padding: 0;}
#min{background:#eee !important}
.van-nav-bar{
    height: 100px;
    width: 100%;
    }
.l :nth-child(1){
   font-weight: bold;
   text-align: left; 
   font-size: 20px; 
   padding-left: 10px;
}
.l :nth-child(2){
   font-weight: bold;
   text-align: left; 
   font-size: 12px; 
   padding-left: 10px;
   color: #444;
}
.r p{
    font-size: 12px;
    color: #444;
}



 .main{
    margin:0;
    padding: 0;
    position: relative;
}
 .my-swipe{ margin: 10px;}
 .my-swipe .van-swipe-item {
    color: #fff;
    font-size: 20px;
    line-height: 250px;
    text-align: center;
  }
  .van-swipe-item{
     text-align: end !important;
  }
.img{
     width: 343px;
     height: 360.24px;
     top: 646px;
     left: 16px;
     margin: 16px;
    
}
.icon{
    position:absolute;
    right: 55px;
    top: 435px;
    font-size: 50px;
}
.imgBox{
    position: relative;
}
.BoxText{

position: absolute;
width: 175px;
height: 43px;
top: 45px;
left: 38px;
color: rgb(255, 255, 255);
font-family: Noto Sans SC;
font-size: 29px;
font-weight: 400;
line-height: 43px;
letter-spacing: 0px;
text-align: left;
}
.my-img1{
width:100%;
}
.new {
    padding-left: 16px;
    padding-right: 16px;
    display: flex;
    justify-content:space-between;
}
.commend{
position: relative;
width: 181px;
overflow: hidden;
height: 314px;
left: 16px;
box-sizing: border-box;
background: rgb(255, 255, 255);
border: 1px solid rgb(252, 252, 252);
border-radius: 8px;
} 
.imgArr{
    background:#fff;
    border-radius:10px;
    width:165px;
}
.imgArr :nth-child(2){
   font-size:14px;
   line-height:10px;
   padding:10px
}
.imgArr :nth-child(3){
   font-size:20px;
   line-height:24px;
   padding:10px;
   color:#f60;
   font-weight:bold;
}
.imgArr :nth-child(4){
   font-size:12px;
   line-height:16px;
   padding:10px;
   color:#ccc
}
.myicon{
    box-sizing:border-box;
    padding:10px;
    display:flex;
    justify-content:space-between
}
.myicon :nth-child(2){
   line-height:12px;
   color:#ccc;
}
.myicon :nth-child(1){
   text-align:center;
   color:#f60;
}
.van-image{
    margin-bottom:20px;
}
.pinpaiguan{
    box-sizing:border-box;
    padding:10px;
    margin-bottom:30px
}
.youhui{
    padding-left: 16px;
    padding-right: 16px;
    display: flex;
    justify-content:space-between;
}
.youhuiAll{
    box-sizing:border-box;
    padding:10px;
    /* border:1px solid #ccc; */
    border-radius:5px;
    background:#fff;
    margin:10px ;
}
.youhuiAll-one{
    display:flex;
    justify-content:space-between;
    border-bottom:1px solid #ccc;
}
.food{
    box-sizing:border-box;
    padding:10px
}
.youhuiAll-tow :nth-child(2){
  color:#444
}
.youhuiAll-tow :nth-child(3){
  color:#f60;
  font-weight:bold;
  
}
</style>

