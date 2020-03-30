<template>
    <div>
        <div v-for="banner in bannerList" class="banner-wrap text-center">
            <a :href="banner.fullLink"
               target="_blank" class="banner-link">
                <img alt="Asia DB" :src="banner.path">
            </a>
        </div>
        <div id="google-adsense-1"></div>
    </div>
</template>

<script>
    const axios = require('axios')

    export default {
        name: 'GoogleAdsense',
        data() {
            return {
                bannerList: [],
            }
        },
        beforeMount() {
            let url = 'https://adb2b.online/resources/ADS_COUNTRY_REPLACE/banner';
            for (let i = 1; i <= 3; i++) {
                let _url = url + i;
                axios.get(_url)
                    .then(response => {
                        this.bannerList.push({
                            path: response.data.path,
                            fullLink: response.data.full_link,
                        });
                    })
                    .catch(error => {
                        console.log(error)
                    })
            }
        },
    }
</script>
