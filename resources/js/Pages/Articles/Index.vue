<template>
    <div>
        <h1>Articles</h1>
        <div v-for="article in articles" :key="article.id">
            {{ article.title }}
        </div>
    </div>
</template>

<script>
export default {
    props: {
        articles: Array,
    },
};
</script>
