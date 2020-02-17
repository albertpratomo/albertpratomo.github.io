<template>
    <div>
        <h3>Congrats, you are at the secret page!</h3>

        <p class="mb-4">
            If you come back tomorrow, there might be a jumping T-Rex here..
        </p>

        <b-btn to="/" size="sm">
            Back to safety
        </b-btn>
    </div>
</template>

<script>
export default {
    name: 'Error',
    props: {
        error: {
            type: Object,
            default: undefined,
        },
    },
};
</script>
