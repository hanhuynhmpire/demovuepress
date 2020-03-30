<template>
  <router-link class="blog-tag" :to="tag.path">
    {{ tag.name }} ({{ tag.pages.length }})
  </router-link>
</template>

<script>
  export default {
    props: ['tag'],
  }
</script>

<style lang="stylus">
  @require '../styles/config'
  .blog-tag
    display inline-block
    height auto
    font-size 13px
    margin-right 13px
    margin-bottom 16px
    padding 5px 15px
    border-radius 50px
    font-weight normal
    transition background-color 0.3s
    color #fff
    text-decoration none
    transition all 0.5s
    background-color $colorSecondary
    max-width: 450px;
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;

    &:hover
      color #fff
      text-decoration none !important
      background-color $colorPrimary

  @media screen and (max-width: 768px)
    .blog-tag
      font-size 14px
      padding 3px 10px
      margin-bottom 10px
</style>
