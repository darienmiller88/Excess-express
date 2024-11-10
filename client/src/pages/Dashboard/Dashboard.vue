<script setup lang="ts">
    import Card from '../../components/Card/Card.vue';
    import { listings } from '../../state/state';

</script>

<template>
    <h1>
        Dashboard
    </h1>
    <div class="dashboard">
        <div v-for="listing in listings" :key="listing.id" class="card">
            <Card :listing="listing" :isButtonDisabled="false"/>
        </div>
    </div>
</template>

<style scoped>
.dashboard {
    display: flex;
    flex-wrap: wrap;
    gap: 20px;
    background-color: #f9f9f9;
    padding: 20px 20px; /* Increased left and right padding */
    border-radius: 10px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    justify-content: center;
}


</style>
