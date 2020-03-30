<template>
    <nav aria-label="breadcrumb" class="bizbreadcrumb">
        <ol class="breadcrumb">
            <li class="breadcrumb-item" v-for="(dir, index) in dirList" :key="index"
                v-if="(dirList.length - 1) !== index">
                <a>
                    <router-link :to="customLink(index)">
                        {{dir.name}}
                    </router-link>
                </a>
            </li>
            <li class="breadcrumb-item active" aria-current="page" v-else>
                <a>
                    {{dir.name}}
                </a>
            </li>
        </ol>
    </nav>
</template>

<script>
    export default {
        name: 'Breadcrumb',

        props: ['dirList'],

        methods: {
            customLink(index) {
                let link = "";
                for (let i = 0; i < index + 1; i++) {
                    if (i === 1) {
                        link = "";
                    }
                    link += this.dirList[i].link;
                }
                return link
            }
        }
    }
</script>
