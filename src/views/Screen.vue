<template>

    <van-nav-bar title="搜索" left-text="返回" left-arrow @click-left="onClickLeft" />


    <!-- 第三页搜索 -->
    <van-search class="my-search" v-model="value" show-action shape="round" disabled placeholder="请输入搜索关键词">
        <template #action>
            <div @click="onClickButton">
                <van-button class="my-button" round type="primary" size="small">搜索</van-button>
            </div>
        </template>
    </van-search>


    <!-- 搜索详情 -->
    <div id="all">
        <div class="allband">
            <p>推荐品牌</p>
        </div>
        <div class="band1">
            <van-icon name="arrow-down" class="iconfont" /><span class="left">茵特莱面膜</span><span
                class="right">&nbsp;-&nbsp;化妆品</span>
        </div>
        <div class="band2">
            <van-icon name="arrow-down" class="iconfont" /><span class="left">哈尼达斯植物精粹</span><span
                class="right">&nbsp;-&nbsp;化妆品</span>
        </div>
        <div class="band3">
            <van-icon name="arrow-down" class="iconfont" /><span class="left">克里斯汀手霜</span><span
                class="right">&nbsp;-&nbsp;化妆品</span>
        </div>
    </div>


    <!-- 折扣商品 -->
    <div id="discont">相关折扣商品</div>
    <van-card class="discountabout" num="2" price="328.50" desc="90%羊毛" title="仿羊毛长裤" origin-price="648"
        :thumb="image58">
        <template #tags>
            <van-tag plain type="danger">50%折扣</van-tag>
        </template>
        <template #footer>
            <van-button size="mini" class="shoppingcar">
                <van-icon name="cart-o" class="car-inconfont" />添加到购物车
            </van-button>
        </template>
    </van-card>
    <van-card class="discountabout" num="2" price="328.50" desc="提取动物，植物精华" title="阿曼达妮护肤精华" origin-price="648"
        :thumb="Depth">
        <template #tags>
            <van-tag plain type="danger">50%折扣</van-tag>
        </template>
        <template #footer>
            <van-button size="mini" class="shoppingcar">
                <van-icon name="cart-o" class="car-inconfont" />添加到购物车
            </van-button>
        </template>
    </van-card>



</template>

    

<script>
import { ref } from 'vue';
import image58 from "../assets/image58.png"
import Depth from "../assets/Depth.png"
export default {

    name: 'MyScreen',
    setup() {
        const onClickLeft = () => history.back();
        const active = ref(0);
        const value = ref("");

        return {
            onClickLeft,
            active,
            value,
            image58,
            Depth
        };


    }
}
</script>

<style lang="scss" scoped>
.my-button {
    width: 75px;
    height: 35px;
    background-color: rgb(255, 76, 44);
    border-radius: 1000px;
    border: 0;
}


#all {
    margin: 20px;
    margin-left: 40px;

}

#all .allband {
    height: 20px;
    font-size: 14px;
    color: #666;
}

#all div .iconfont {
    margin: 10px;
    margin-left: 0;
    color: #ccc;
}

#all div .right {
    color: #ccc;
    font-size: 14px;
}

#discont {
    margin: 20px;
    margin-top: 50px;
}

#discont .discountabout {
    border-radius: 25px;

}

.shoppingcar {
    width: 100%;
    border: 1px solid #f60;
    color: #f60;
    margin-top: 8px;
}

.shoppingcar .car-inconfont {
    margin-right: 5px;
    font-size: 12px;
}
</style>