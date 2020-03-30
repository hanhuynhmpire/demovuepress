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
                    <div
                            class="sidebar-mask"
                            @click="toggleSidebar(false)"
                    />

                    <CustomSideBar :closeSidebar="closeSidebar" />

                </div>
                <div class="col-sm-12 col-md-8 col-lg-9 content-container">
                    <div class="main-content">
                        <Breadcrumb :dirList="this.dirList"/>
                        <!--                        <div id="vuepress-theme-blog__tags-layout">-->
                        <!--                            &lt;!&ndash; h2>Tags :</h2> &ndash;&gt;-->
                        <!--                            <BlogTags :tags="customTags" />-->
                        <!--                        </div>-->
                        <h2 class="page-title post_template"><span
                                v-if="$siteTitle"
                                ref="siteName"
                                class="site-name"
                                :class="{ 'can-hide': $site.themeConfig.logo }"
                        >{{ $siteTitle }}</span></h2>
                        <Home v-if="$page.frontmatter.home"/>

                        <Page
                                v-else
                                :sidebar-items="sidebarItems"
                        >
                            <template #top>
                                <slot name="page-top"/>
                                <div class="stats-download">
                                    <p class="fs-medium textColorHighlight">
                                        <strong>{{$page.frontmatter.bizhubCount}}</strong> results
                                    </p>
                                    <div class="download-btns">
                                        <a :href="$page.frontmatter.bizhubFullLink" target="_blank" class="btn btn-sm btn-primary">DOWNLOAD FULL LIST <i class="bd-icon ic_arrow_down"></i></a>
                                        <a @click.prevent="showCustomPopup()" href="javascript:void(0)" target="_blank" class="btn btn-sm btn-primary">DOWNLOAD (5) <i class="bd-icon ic_arrow_down"></i></a>
                                    </div>

                                </div>
                            </template>
                            <template #bottom>
                                <slot name="page-bottom"/>
                            </template>
                        </Page>
                    </div>

                    <Adsbar />

                    <MainFooter />
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
    import {Pagination} from '@vuepress/plugin-blog/lib/client/components.js'
    import BlogTags from '../components/BlogTags.vue'
    import CustomSideBar from '../components/SearchSideBar.vue'
    import MainFooter from '../components/MainFooter.vue'
    import Breadcrumb from '../components/Breadcrumb.vue'
    import event from '@cp-event'

    export default {
        name: 'Post',

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
            Breadcrumb
        },

        data() {
            return {
                customSideBar: [],
                customTags: [],
                isSidebarOpen: false,
                inputSearch: '',
                dirList: [],
            }
        },

        created() {
            this.customSideBar = this.sidebarItems;
            // console.log(this)
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

        mounted() {
            // console.log(showPopup, closePopup);
            const parsed = JSON.stringify(this.sidebarItems);
            localStorage.setItem('sidebar', parsed);
            this.$router.afterEach(() => {
                this.isSidebarOpen = false
            });

            // let tagsid = localStorage.getItem('tagsid');
            // if (this.$frontmatter.tag) {
            //     localStorage.setItem('tagsid', this.$frontmatter.tag)
            //     tagsid = this.$frontmatter.tag;
            // }
            // this.customTags = this['$' + tagsid].list;

            if (this.$frontmatter.dirlink) {
                this.dirList.push({
                    name: "Home",
                    link: "/",
                });
                let tempDir = this.$frontmatter.dirlink;
                let tempDirList = tempDir.split('/')
                tempDirList.forEach(dir => {
                    this.dirList.push({
                        name: dir.replace(/-/g, ' '),
                        link: "/" + dir,
                    });
                });
                this.dirList.push({
                    name: this.$page.title,
                    link: this.$page.path,
                })
            }
        },

        updated() {
            // if (this.$frontmatter.tag) {
            //     this.customTags = this['$' + this.$frontmatter.tag].list;
            // }
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

            showCustomPopup() {
                console.log("Triggered showPopup");
                event.$emit('showPopup', true);
            }
        }
    }
</script>

