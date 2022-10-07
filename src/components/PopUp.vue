<template>
    <div class="popup">{{msg}}</div>
</template>

<script>
    export default {
        props: {
            msg: String
        }
    }
</script>

<style>
    .popup{
        position: absolute;
        top: 0px;
        right: 0px;
        border-radius: 20px;
        font-size: 20px;
        width: 100px;
        height: 40px;
        background-color: white;
    }
</style>