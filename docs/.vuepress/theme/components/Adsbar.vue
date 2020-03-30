<template>
    <aside class="right-sidebar">
        <!--<ul class="banner-links" v-if="adsLinks">-->
            <!--<div-->
                    <!--v-for="item in adsLinks"-->
                    <!--:key="item.text"-->
                    <!--class="nav-item"-->
            <!--&gt;-->
                <!--<img v-bind:src="item.imagePath" width="50%">-->
            <!--</div>-->
        <!--</ul>-->
        <GoogleAdsense />
    </aside>

</template>
​
<script>
    import GoogleAdsense from "./GoogleAdsense";

    export default {
        name: 'Adsbar',

        components: {GoogleAdsense},

        props: ['items'],
        computed: {
            adsLinks() {
                let {bannerAds} = this.$themeConfig;
                if (bannerAds.length > 0) {
                    return bannerAds;
                }
            }
        }
    }
</script>
​
<style lang="stylus">
    .right-sidebar {
        font-size: 14px;
        z-index: 10;
        margin-left: 30px;
        box-sizing: border-box;
        -ms-flex: 0 0 auto;
        flex: 0 0 auto;
        width: auto;
        max-width: 100%;
    }

    ​.page {
        padding-left: 0;
    }

</style>
