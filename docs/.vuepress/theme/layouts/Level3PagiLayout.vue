<template>
    <PagiLayout :haveTags=true :haveBreadcrumb=true :level="3" />
</template>

<script>
    import PagiLayout from './PagiLayout.vue'

    export default {
        name: 'Level3PagiLayout',

        components: {
            PagiLayout,
        },
    }
</script>

