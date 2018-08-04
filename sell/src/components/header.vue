<template>
    <div class="Vheader">
        <div class="wrapper">
            <div class="content-wrapper">
                <div class="logo">
                    <img :src="sellerMsg.avatar" alt="">
                </div>
                <div class="content">
                    <div class="title">
                        <span class="t-icon bg-image"></span>
                        <span class="name">{{sellerMsg.name}}</span>
                    </div>
                    <div class="dispatch">{{sellerMsg.description}}/{{sellerMsg.deliveryTime}}分钟送达</div>
                    <div class="discount" v-if="sellerMsg.supports">
                        <span class="dis-icon" :class="classMap[sellerMsg.supports[0].type]"></span>
                        <span class="dis-mes" >{{sellerMsg.supports[0].description}}</span>
                    </div>
                </div>
            </div>
            <div class="num-wrapper" v-if="sellerMsg.supports">
                <span class="num-msg">{{sellerMsg.supports.length}}个</span>
                <span class="icon-keyboard_arrow_right num-icon"></span>
            </div>
            <div class="bulletin-wrapper">
                <span class="bulletin-icon-one"></span>
                <!-- dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd -->
                <span class="bulletin-msg">{{sellerMsg.bulletin}}}</span>
                <span class="icon-keyboard_arrow_right bulletin-icon-two"></span>
            </div>
            <div class="background">
                <img :src="sellerMsg.avatar" alt="">
            </div>
        </div>
        
    </div>
</template>

<script>

export default {
    props:{
        sellerMsg:{
            type:Object
        }
    },
    name:'Vheader',
    data(){
        return {
            msg:'Vheader',
            // classMap:['subtraction', 'discount', 'meal', 'invoice', 'guarantee']
        }
    },
    created(){
        this.classMap = ['subtraction', 'discount_1', 'meal', 'invoice', 'guarantee']
    }
}
</script>

<style  lang='stylus' ref="stylesheet/stylus">
@import '../assets/stylus/index.styl'
.Vheader
    .wrapper
        position relative
        background-color rgba(7, 17, 27, 0.5)
        .content-wrapper
            
            padding 24px 0px 18px 24px
            .logo
                float left
                img
                    set-img(64px)
                    border-radius 4px
            .content
                padding 4px 0px 4px 96px 
                .title
                    .t-icon
                        display inline-block
                        width 30px
                        height 18px
                        background-size 100% 100%
                        bg-image('brand')
                        vertical-align top
                    .name 
                        font-size 16px
                        line-height 18px
                        color rgb(255, 255, 255)
                        font-weight bold
                .dispatch 
                    font-size 14px
                    line-height 14px
                    color rgb(255, 255, 255)
                    font-weight 200
                    margin-top 8px
                .discount
                    color rgb(255, 255, 255)
                    margin-top 10px
                    font-size 10px
                    font-weight 200
                    line-height 12px
                    .dis-icon
                        display inline-block
                        vertical-align middle
                        width 16px
                        height 16px
                        background-size 100% 100%
                        &.subtraction
                            bg-image('decrease_1')
                        &.discount_1
                            bg-image('discount_1')
                        &.meal
                            bg-image('special_1')
                        &.invoice
                            bg-image('invoice_1')
                        &.guarantee
                            bg-image('guarantee_1')
                    .dis-mes
                        display inline-block
                        vertical-align middle
        .num-wrapper
            display inline-block
            position absolute 
            padding 7px 8px
            right 24px
            bottom 44px
            height 14px
            background-color rgba(0, 0, 0, 0.2)
            color rgb(255, 255, 255)
            font-size 10px
            font-weight 200
            line-height 14px
            border-radius 12px
            span
                display inline-block
                vertical-align middle
            .num-icon
                margin-left 2px
        .bulletin-wrapper
            position relative
            height 28px
            padding 0 12px
            font-size 10px
            line-height 28px
            font-weight 200
            white-space nowrap
            overflow hidden
            text-overflow ellipsis
            background-color rgba(7, 17, 27, 0.2)
            color rgb(255, 255, 255)
            span
                vertical-align middle
                display inline-block
            .bulletin-icon-one
                width 22px
                height 12px
                background-size 100% 100%
                bg-image('bulletin')
            .bulletin-msg
                margin-left 4px
                margin-right 4px
                
            // .bulletin-icon-two
                
                
        .background
            position absolute
            top 0px
            left 0px
            width 100%
            height 100%
            filter blur(10px)
            z-index -1
            img 
                width 100%
    
            

                        
                        
                        
                        
                        
                    




</style>

