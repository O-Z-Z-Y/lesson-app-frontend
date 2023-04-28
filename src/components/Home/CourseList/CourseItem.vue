<template>
    <li class="mx-4 w-1/4 min-w-[15rem] max-w-lg h-96 flex flex-col items-center">
        <div class="thumbnail w-full h-60 bg-slate-500">{{ thumbnail }}</div>
        <h4 class="text-cyan-700 text-lg font-medium">{{ title }}</h4>
        <p>{{ description }}</p>
    </li>
</template>

<script>
export default {
    name: "CourseItem",
    props: {
        thumbnail: String,
        title: String,
        description: String,
    },
};
</script>

<style scoped></style>
