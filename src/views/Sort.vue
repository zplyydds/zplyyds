<template>
    <div id="index">
        <van-nav-bar>
            <template #right>
                <div class="r">
                    <van-image round width="40px" src="/img/Ellipse 182.png" />
                    <p>菠萝派</p>
                </div>
            </template>
            <template #left>
                <van-image round width="40px" src="/img/图形.png" />
                <div class="l">

                    <p>salala</p>
                    <p>一站式女士购物平台</p>
                </div>
            </template>
        </van-nav-bar>
        <van-search v-model="value" placeholder="化妆品，衣服，首饰，数码..." />
    </div>
    <!-- 是头儿  -->
    <div>
        <div class="aside-left">
            <van-sidebar v-model="active" class="aside">
                <van-sidebar-item title="包包" />
                <van-sidebar-item title="配饰" />
                <van-sidebar-item title="护肤品" />
                <van-sidebar-item title="化妆品" />
                <van-sidebar-item title="香水" />
                <van-sidebar-item title="数码" />
                <van-sidebar-item title="衣服" />
                <van-sidebar-item title="裤子" />
                <van-sidebar-item title="鞋子" />
            </van-sidebar>
        </div>
        <div class="aside-right">
            <div id=img>
                <img class="img-img" src="/img/Main Post Card.png">
            </div>
            <div class="aside-right-img">
                <b class="b-b">推荐<span class="b-span">全部></span></b>
            </div>
            <div class="aside-right-buttom">
                <van-grid :border="false" :column-num="3">
                    
                    <van-grid-item v-for="item in imgArr" :key="item._id" class="van-grid-item">
                        <van-image  :src="item.imgUrl" />
                        <!-- <p class="buttom-p">特雷索午夜玫瑰</p> -->
                        <p class="money-p">{{item.list}}</p>
                    </van-grid-item>
              
                </van-grid>
                
            </div>
        </div>
    </div>

    <van-tabbar v-model="active" :fixed="fixed" active-color="#f60" inactive-color="#000">
        <van-tabbar-item icon="bag-o">首页</van-tabbar-item>
        <van-tabbar-item icon="apps-o">分类</van-tabbar-item>
        <van-tabbar-item icon="exchange">交易</van-tabbar-item>
        <van-tabbar-item icon="shopping-cart-o">购物车</van-tabbar-item>
        <van-tabbar-item icon="user-o">我的</van-tabbar-item>
    </van-tabbar>
</template>
<!-- 我是脚 -->
<script setup>
import { defineComponent } from 'vue'
import { ref } from 'vue'

// import "swiper/css";


defineComponent({
    name: 'MyIndex'

})
let fixed = ref(true)
let value = ref('')
let active = ref(1)
let imgArr = ref([
    {
        _id:1,list:'￥3100.50',imgUrl:'/img/Category_mobile2.png'
    },
     {
        _id:2,list:'￥3100.50',imgUrl:'/img/Category_mobile2.png'
    },
     {
        _id:3,list:'￥3100.50',imgUrl:'/img/Category_mobile2.png'
    },
     {
        _id:4,list:'￥3100.50',imgUrl:'/img/Category_mobile2.png'
    },
     {
        _id:4,list:'￥3100.50',imgUrl:'/img/Category_mobile2.png'
    },
     {
        _id:5,list:'￥3100.50',imgUrl:'/img/Category_mobile2.png'
    },
     {
        _id:6,list:'￥3100.50',imgUrl:'/img/Category_mobile2.png'
    },
    {
        _id:7,list:'￥3100.50',imgUrl:'/img/Category_mobile2.png'
    },
     
    {
        _id:8,list:'￥3100.50',imgUrl:'/img/Category_mobile2.png'
    },
    {
        _id:9,list:'￥3100.50',imgUrl:'/img/Category_mobile2.png'
    },
    {
        _id:10,list:'￥3100.50',imgUrl:'/img/Category_mobile2.png'
    },
    {
        _id:11,list:'￥3100.50',imgUrl:'/img/Category_mobile2.png'
    },
])
</script>

<style>
#index .van-nav-bar__left {
    margin-top: 50px;
}

#index .van-nav-bar__right {
    margin-top: 50px;

}

#index .van-search__content {
    border-radius: 20px;
    padding: 10px;
    margin: 10px;
}
</style>
<style lang="scss" scoped>
* {
    margin: 0;
    padding: 0;
}

.van-nav-bar {

    height: 100px;
    width: 100%;
}

.l :nth-child(1) {
    font-weight: bold;
    text-align: left;
    font-size: 20px;
    padding-left: 10px;
}

.l :nth-child(2) {
    font-weight: bold;
    text-align: left;
    font-size: 12px;
    padding-left: 10px;
    color: #444;
}

.r p {
    font-size: 12px;
    color: #444;
}

.van-sidebar-item {
    text-align: center;
    padding: 10px;
    height: 50px;
}

#img {
    // float: right;
    font-size: 14px;
    line-height: 21px;
    font-family: Noto Sans SC;
    color: rgb(102, 112, 133);
    // margin-left: 10px;
}

.img-img {
    margin-left: 20px;
}

.aside-left {
    float: left;
    // height: 100vh-174px;
}

.b-b {
    margin-left: 10px;
}

.b-span {
    float: right;
    margin-right: 10px;
    font-size: 11px;
    line-height: 16px;
    color: rgb(25, 66, 152);
    margin-top: 3px;
    font-weight: normal;
}


.aside-right-img {
    margin-top: 5px;
}

.buttom-p {
    font-size: 11px;
    line-height: 16px;

}
.money-p {
    font-size: 12px;
    color: #f60;
    margin-top: 5px;
}

.van-grid-item {
    padding: 0;
}

// .van-image{
//     width: 78px;
//     height: 72px;
// }
</style>

<style>
.van-grid-item__content--center {
    padding: 0 !important;
}
</style>

