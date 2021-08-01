<template>
<figure class="imghvr-fade border border-1 border-primary">
    <img class="project-img" :src="img" alt="example-image">
    <figcaption class="text-white d-flex flex-column">
        <h3 class="ih-fade-down ih-delay-sm">{{title}}</h3>
        <p class="ih-zoom-in ih-delay-md">
            <i>{{description}}</i>
        </p>
        <button class="btn btn-success">See full</button>
    </figcaption>
</figure>
</template>

<script>
export default {
    props: {
        title: {
            type: String
        },
        img: {
            type: String
        },
        description: {
            type: String
        }
    }
}
</script>

<style>
@import url('../imagehover.css');

.imghvr-fade{
    border-radius: 5px;
}
.project-img{
    height: 250px;
    width: 400px;
}
</style>