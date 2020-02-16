<template>
    <div>
        <div v-for="(slice, index) in slices" :key="index">
            <rich-text
                v-if="slice.slice_type === 'text'"
                :slice="slice"
            />
        </div>
    </div>
</template>

<script>
import RichText from '@/components/slices/RichText';

export default {
    name: 'SlicesBlock',
    components: {RichText},
    props: {
        slices: {
            type: Array,
            required: true,
        },
    },
};
</script>
