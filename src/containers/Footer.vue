<template>
    <footer class="page-footer text-center fixed-bottom">
        <div class="footer-content">
            <div class="container-fluid">
                <b-row class="h-100 align-items-center">
                    <b-col sm="1"></b-col>
                    <b-col sm="10">Copyright 2019 by ZETO-RZESZÓW Sp. z o.o. Wszelkie prawa zastrzeżone.</b-col>
                    <b-col sm="1 "><a href="https://zetorzeszow.pl" target="_blank"><img src="../img/zeto.jpg"/></a></b-col>
                </b-row>
            </div>
        </div>
    </footer>
</template>
<script>
export default {
  name: 'Footer'
}
</script>
<style lang="scss">
footer{
    background: #fff;
    position: absolute;
    bottom: 0;
    width: 100%;
    border-top: 1px solid rgba(0, 0, 0, 0.1);
}
</style>
