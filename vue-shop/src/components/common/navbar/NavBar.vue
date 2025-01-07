<template>
    <div class = 'nav-bar'>
        <div class="left"><slot name="left"></slot></div>
        <div class="center"><slot name="center"></slot></div>
        <div class="right"><slot name="right"></slot></div>
    </div>
</template>
<script>
export default {
    name: 'NavBar',
    beforeCreate() {
        console.log('44444444');
        
    },
    created() {
        console.log('555555555');
        
    },
    mounted() {
        console.log('66666666');
        
    },
}
</script>
<style>
    .nav-bar {
        display: flex;
        height: 44px;
        line-height: 44px;
        text-align: center;
        box-shadow: 0 1px 1px rgba(100, 100, 100, .4);
    }

    .left, .right {
        width: 60px;
    }

    .center {
        flex: 1;
    }
</style>