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
                <div class="col-3">
                    <div
                            class="sidebar-mask"
                            @click="toggleSidebar(false)"
                    />

                    <CustomSideBar :closeSidebar="closeSidebar" />

                </div>

                <div class="col-9 content-container">
                    <div class="main-content static-page-content">
<!--                        <h1 class="page-title">-->
<!--              <span-->
<!--                      v-if="$siteTitle"-->
<!--                      ref="siteName"-->
<!--                      class="site-name"-->
<!--                      :class="{ 'can-hide': $site.themeConfig.logo }">{{ $siteTitle }}</span>-->
<!--                        </h1>-->

                        <Home v-if="$page.frontmatter.home"/>

                        <Page
                                v-else
                                :sidebar-items="sidebarItems"
                        >
                            <template #top>
                                <slot name="page-top"/>
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
    import CustomSideBar from '../components/SearchSideBar.vue'
    import MainFooter from '../components/MainFooter.vue'

    export default {
        name: 'Layout',

        components: {
            Home,
            Page,
            Sidebar,
            Navbar,
            Adsbar,
            CustomSideBar,
            MainFooter,
        },

        data() {
            return {
                isSidebarOpen: false
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

        mounted() {
            this.$router.afterEach(() => {
                this.isSidebarOpen = false
            })
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
        }
    }
</script>
