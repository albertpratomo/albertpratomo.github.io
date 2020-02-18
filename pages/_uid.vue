<template>
    <div>
        <prismic-rich-text :field="page.title" class="mb-3" />

        <slices-block :slices="page.body" />
    </div>
</template>

<script>
import SlicesBlock from '@/components/SlicesBlock';

export default {
    name: 'Page',
    components: {SlicesBlock},
    async asyncData({$prismic, params, redirect, error}) {
        if (params.uid === 'home') { redirect('/'); }

        try {
            const page = await $prismic.api.getByUID('page', params.uid);

            return {page: page.data};
        } catch (e) {
            error({statusCode: 404, message: 'Page not found'});
        }
    },
};
</script>
