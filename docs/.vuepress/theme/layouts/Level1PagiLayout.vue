<template>
    <PagiLayout :haveTags=false :haveBreadcrumb=false :level="1" />
</template>

<script>
    import PagiLayout from './PagiLayout.vue'

    export default {
        name: 'Level1PagiLayout',

        components: {
            PagiLayout,
        },
    }
</script>
