<template>
    <div
            class="theme-container"
            :class="pageClasses"
            @touchstart="onTouchStart"
            @touchend="onTouchEnd"
    >
        <Navbar
                v-if="shouldShowNavbar"
                @toggle-sidebar="toggleSidebar"
        />

        <div class="container-fluid main-container">
            <div class="row">
                <div class="col-sm-12 col-md-4 col-lg-3">
                    <CustomSideBar :closeSidebar="closeSidebar" />

                </div>
                <div class="col-sm-12 col-md-8 col-lg-9 content-container">
                    <div class="main-content">
                        <Breadcrumb v-if="haveBreadcrumb" :dirList="dirList"/>
                        <div v-if="level !== 3">
                            <h1 class="page-title"><span
                                    v-if="$siteTitle"
                                    ref="siteName"
                                    class="site-name"
                                    :class="{ 'can-hide': $site.themeConfig.logo }"
                            >{{ $siteTitle }}</span></h1>
                            <!--
                            <p class="page-des mb-5">To-be-defined</p>
                            -->
                        </div>
                        <Home v-if="$page.frontmatter.home"/>

                        <Page
                                v-else
                                :sidebar-items="sidebarItems"
                        >

                            <template #top>
                                <slot name="page-top"/>
                                <div class="theme-default-content content__default">
                                    <div id="vuepress-theme-blog__tags-layout" v-if="haveTags">
                                        <BlogTags :tags="$tags.list" style="display: contents" />
                                    </div>
                                    <h1 v-if="level === 3" class="page-title level-3"><span
                                            v-if="$siteTitle"
                                            ref="siteName"
                                            class="site-name"
                                            :class="{ 'can-hide': $site.themeConfig.logo }"
                                    >{{ $siteTitle }}</span></h1>
                                    <div v-if="level == 3" class="item-date">Updated date: {{ $site.updatedDate }}</div>
                                    <PaginationPage :level="level" :ads="adsList" :pagination="paginationPage" />
                                </div>
                            </template>
                            <template #bottom>
                                <slot name="page-bottom"/>
                            </template>
                        </Page>
                    </div>

                    <Adsbar />

                    <MainFooter />

                    <CustomPopup popupTitle="ENTER EMAIL TO DOWNLOAD" popupSubTitle="The companies data will be sent to your inbox. Please enter your email."
                                 :free="this.$frontmatter.previewFile"
                                 :paid="this.$frontmatter.fullFile"
                                 count="5"/>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import Home from '@parent-theme/components/Home.vue'
    import Navbar from '../components/Navbar.vue'
    import Page from '../components/Page.vue'
    import Sidebar from '@parent-theme/components/Sidebar.vue'
    import {resolveSidebarItems} from '@parent-theme/util'
    import Adsbar from '../components/Adsbar.vue'
    import { Pagination } from '@vuepress/plugin-blog/lib/client/components.js'
    import BlogTags from '../components/BlogTags.vue'
    import CustomSideBar from '../components/SearchSideBar.vue'
    import MainFooter from '../components/MainFooter.vue'
    import Breadcrumb from '../components/Breadcrumb.vue'
    import PaginationPage from '../components/PaginationPage.vue'

    const axios = require('axios')

    export default {
        name: 'PagiLayout',

        components: {
            Home,
            Page,
            Sidebar,
            Navbar,
            Adsbar,
            Pagination,
            BlogTags,
            CustomSideBar,
            MainFooter,
            Breadcrumb,
            PaginationPage
        },

        props: ['haveTags', 'haveBreadcrumb', 'level'],

        data() {
            return {
                isSidebarOpen: false,
                dirList: [],
                adsList: [],
                paginationPage: [],
            }
        },

        beforeMount() {
            let url = 'https://adb2b.online/resources/ADS_COUNTRY_REPLACE/link';
            for (let i = 1; i <= 5; i++) {
                let _url = url + i;
                axios.get(_url)
                    .then(response => {
                        this.adsList.push({
                            path: response.data.path,
                            fullLink: response.data.full_link,
                        });
                    })
                    .catch(error => {
                        console.log(error)
                    })
            }
        },

        mounted() {
            const parsed = JSON.stringify(this.sidebarItems);
            localStorage.setItem('sidebar', parsed);
            this.$router.afterEach(() => {
                this.isSidebarOpen = false
            });

            if ((this.level === 2 || this.level === 3) && this.haveBreadcrumb === true) {
                this.dirList.push({
                    name: "Home",
                    link: "/",
                });
                let tempDir = this.$frontmatter.dir;
                let tempDirList = tempDir.split('/')
                tempDirList.forEach(dir => {
                    this.dirList.push({
                        name: dir.replace(/-/g, ' '),
                        link: "/" + dir,
                    });
                })
            }

            if (this.$pagination) {
                this.paginationPage = this.$pagination;
            }
        },

        updated() {
            if (this.$pagination) {
                this.paginationPage = this.$pagination;
            }
        },

        computed: {
            shouldShowNavbar() {
                const {themeConfig} = this.$site
                const {frontmatter} = this.$page
                if (
                    frontmatter.navbar === false
                    || themeConfig.navbar === false) {
                    return false
                }
                return (
                    this.$title
                    || themeConfig.logo
                    || themeConfig.repo
                    || themeConfig.nav
                    || this.$themeLocaleConfig.nav
                )
            },

            shouldShowSidebar() {
                const {frontmatter} = this.$page
                return (
                    !frontmatter.home
                    && frontmatter.sidebar !== false
                    && this.sidebarItems.length
                )
            },

            sidebarItems() {
                return resolveSidebarItems(
                    this.$page,
                    this.$page.regularPath,
                    this.$site,
                    this.$localePath
                )
            },

            pageClasses() {
                const userPageClass = this.$page.frontmatter.pageClass
                return [
                    {
                        'no-navbar': !this.shouldShowNavbar,
                        'sidebar-open': this.isSidebarOpen,
                        'no-sidebar': false
                    },
                    userPageClass
                ]
            }
        },

        methods: {
            toggleSidebar(to) {
                this.isSidebarOpen = typeof to === 'boolean' ? to : !this.isSidebarOpen
                this.$emit('toggle-sidebar', this.isSidebarOpen)
            },

            // side swipe
            onTouchStart(e) {
                this.touchStart = {
                    x: e.changedTouches[0].clientX,
                    y: e.changedTouches[0].clientY
                }
            },

            onTouchEnd(e) {
                const dx = e.changedTouches[0].clientX - this.touchStart.x
                const dy = e.changedTouches[0].clientY - this.touchStart.y
                if (Math.abs(dx) > Math.abs(dy) && Math.abs(dx) > 40) {
                    if (dx > 0 && this.touchStart.x <= 80) {
                        this.toggleSidebar(true)
                    } else {
                        this.toggleSidebar(false)
                    }
                }
            },

            closeSidebar() {
                this.toggleSidebar(false)
            },

            editLinkRouter(link) {
                return '/' + link;
            },
        }
    }
</script>

<style lang="stylus">
    .item-pagination
        border 1px solid black
        padding 5px
        margin 3px

    .list-pagination
        list-style-type: none

</style>
