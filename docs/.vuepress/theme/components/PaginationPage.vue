<template>
    <div v-if="pagination.length > 0">
        <div class="stats-download">
            <p class="fs-medium textColorHighlight">
                <strong>{{pagination._matchedPages.length}}</strong> results
            </p>
            <div class="download-btns" v-if="level === 3">
                <a :href="$page.frontmatter.fullFile" target="_blank" class="btn btn-sm btn-primary">DOWNLOAD FULL LIST <i class="bd-icon ic_arrow_down"></i></a>
                <a @click.prevent="showCustomPopup()" href="javascript:void(0)" target="_blank" class="btn btn-sm btn-primary">DOWNLOAD FREE (5) <i class="bd-icon ic_arrow_down"></i></a>
            </div>
        </div>

        <div id="default-layout" class="list-pagination">
            <div v-for="(page, index) in pagination.pages">
                <div class="bd-item" v-if="level === 3">
                    <div class="item-content">
                        <h6 class="textColorPrimary item-title">
                            <router-link :to="page.path" class="textColorPrimary">
                                {{page.frontmatter.title}}</router-link>
                        </h6>
                        <h6 class="bd-label">Description</h6>
                        <p>{{page.frontmatter.description}}</p>
                        <h6 class="bd-label">Address</h6>
                        <p>{{page.frontmatter.address}}</p>
                        <p>
                            <router-link :to="page.path" class="btn btn-sm btn-primary">
                                DETAIL
                                <i class="bd-icon ic_arrow_back"></i></router-link>
                        </p>
                    </div>
                </div>
                <div class="bd-item" v-else>
                    <div class="item-content">
                        <h6 class="textColorPrimary item-title">
                            <div v-if="page.frontmatter.ishomepage == true">
                                <a :href="editLinkTagA(page.frontmatter.link)">
                                    {{ page.title }}
                                </a>
                            </div>
                            <div v-else>
                                <router-link :to="editLinkRouter(page.frontmatter.link)">
                                    {{ page.title }}
                                </router-link>
                            </div>

                            <div class="item-date">Updated date: {{ page.frontmatter.updatedDate }}</div>
                        </h6>
                        <p>{{ page.frontmatter.description }}</p>
                    </div>
                    <div class="item-rightblock" >
                        <p class="fw-semibold textColorThird item-statsnum">{{page.frontmatter.totalcompany}} <br>companies
                        </p>
                        <a :href="editLinkTagA(page.frontmatter.link)" class="btn btn-sm btn-primary" v-if="page.frontmatter.ishomepage == true">GO <i class="bd-icon ic_arrow_back"></i></a>
                        <div v-else>
                            <router-link class="btn btn-sm btn-primary" :to="editLinkRouter(page.frontmatter.link)">DETAIL
                                <i class="bd-icon ic_arrow_back"></i></router-link>
                        </div>
                    </div>
                </div>
                <div class="banner-wrap text-center" v-if="(index % 2) !== 0">
                    <a :href="imgLink(index)" class="banner-link">
                        <img alt="Asia DB" class="banner-img" :src="imgSrc(index)">
                    </a>
                </div>
            </div>
        </div>

        <Pagination v-if="pagination.length > 1"/>
    </div>
</template>

<script>
    import {Pagination} from '@vuepress/plugin-blog/lib/client/components.js'
    import event from '@cp-event'

    export default {
        name: "PaginationPage",

        components: {
            Pagination,
        },

        props: ['level', 'pagination', 'ads'],

        methods: {
            editLinkRouter(link) {
                return "/" + link
            },

            editLinkTagA(link) {
                let _link = link.split('/')
                return "/" + _link[0] + "/" + link
            },

            imgSrc(index) {
                let src = '';
                let num = Math.floor(index / 2);
                if (this.ads) {
                    if (this.ads[num]) {
                        src = this.ads[num].path;
                    }
                }
                return src;
            },

            imgLink(index) {
                let link = '';
                let num = Math.floor(index / 2);
                if (this.ads.length > 0) {
                    if (this.ads[num]) {
                        link = this.ads[num].fullLink;
                    }
                }
                return link;
            },
            showCustomPopup() {
                console.log(this)
                event.$emit('showPopup', true);
            }
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
