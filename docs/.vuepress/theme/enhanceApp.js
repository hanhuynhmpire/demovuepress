import 'bootstrap/dist/css/bootstrap.css';
import '../public/font-awesome/css/font-awesome.css';
export default ({
                    Vue,
                    options,
                    router,
                    siteData
                }) => {
    if (typeof window !== 'undefined') {
        import('vue-google-adsense')
            .then(module => {
                const Ads = module.default
                Vue.use(require('vue-script2'))
                Vue.use(Ads.Adsense)
                Vue.use(Ads.InArticleAdsense)
                Vue.use(Ads.InFeedAdsense)
            })
            .catch(e => {
                console.log(e)
            })
    }
    Vue.component('CustomPopup', () =>
        import('@CustomPopup')
    );
}
