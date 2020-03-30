<template>
    <PagiLayout :haveTags=true :haveBreadcrumb=true :level="2" />
</template>

<script>
    import PagiLayout from './PagiLayout.vue'

    export default {
        name: 'Level2PagiLayout',

        components: {
            PagiLayout,
        },
    }
</script>

