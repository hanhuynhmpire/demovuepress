<template>
    <PagiLayout :haveTags=true :haveBreadcrumb=false :level="2" />
</template>

<script>
    import PagiLayout from './PagiLayout.vue'

    export default {
        name: 'TagPage',

        components: {
            PagiLayout,
        },
    }
</script>

