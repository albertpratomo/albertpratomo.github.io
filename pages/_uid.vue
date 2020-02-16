<template>
    <div>
        <prismic-rich-text :field="page.data.title" class="mb-3" />

        <slices-block :slices="page.data.body" />
    </div>
</template>

<script>
import SlicesBlock from '@/components/SlicesBlock';

export default {
    name: 'Page',
    components: {SlicesBlock},
    async asyncData({params, $prismic}) {
        const page = await $prismic.api.getByUID('page', params.uid);

        return {page};
    },
};
</script>
