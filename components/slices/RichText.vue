<template>
    <prismic-rich-text :field="slice.primary.rtf" />
</template>

<script>
export default {
    name: 'RichText',
    props: {
        slice: {
            type: Object,
            required: true,
        },
    },
};
</script>
