<template>
    <slices-block :slices="page.data.body" />
</template>

<script>
import SlicesBlock from '@/components/SlicesBlock';

export default {
    name: 'Home',
    components: {SlicesBlock},
    async asyncData({$prismic}) {
        const page = await $prismic.api.getByUID('page', 'home');

        return {page};
    },
};
</script>
