<template>
  <div class="blogtags_container">
    <div class="blog-tags">
      <BlogTag v-for="tag in tags" :key="tag.name" :tag="tag" />
    </div>
  </div>

</template>

<script>
  import BlogTag from './BlogTag.vue'

  export default {
    components: {
      BlogTag,
    },

    props: ['tags'],
    mounted () {
      if (document.readyState === "complete" || document.readyState === "interactive") {
        // call on next available tick
        setTimeout(tagsSize, 1);
      } else {
        document.addEventListener("DOMContentLoaded", tagsSize);
      }
      function tagsSize() {
        var blogTagWrap = document.getElementsByClassName("blog-tags"),
                blogTags = document.getElementsByClassName("blog-tag"),
                tagsWidth = 0;

        for(var i = 0; i < blogTags.length; i++)
        {
          tagsWidth += (blogTags[i].offsetWidth + 14);
        }
        blogTagWrap[0].style.width = tagsWidth+'px';
      }
    }
  }
  // if (document.readyState === "complete" || document.readyState === "interactive") {
  //     // call on next available tick
  //     setTimeout(tagsSize, 1);
  // } else {
  //     document.addEventListener("DOMContentLoaded", tagsSize);
  // }
  // function tagsSize() {
  //   var blogTagWrap = document.getElementsByClassName("blog-tags"),
  //       blogTags = document.getElementsByClassName("blog-tag"),
  //       tagsWidth = 0;

  //   for(var i = 0; i < blogTags.length; i++)
  //   {
  //      tagsWidth += (blogTags[i].offsetWidth + 10);
  //      console.log(tagsWidth);
  //   }
  //   blogTagWrap[0].style.width = tagsWidth+'px';
  //   console.log(blogTagWrap[0]);
  // }


</script>

<style lang="stylus">
  @require './config'
  .blog-tags
    display inline-block !important
  .blogtags_container
    overflow-x scroll
    display block !important
    margin-left: -15px;
    margin-right: -15px;
    padding-left: 15px;

</style>
