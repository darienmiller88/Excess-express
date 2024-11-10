<script setup lang="ts">

</script>

<template>
    <h1>
        About Us
    </h1>
    <div class="content-box">
        <p>
            We are Excess Express.
        </p>
        
        <div class="team-member" v-for="n in 4" :key="n">            
            <div class="photo-caption">
            <img :src="'/path/to/photo' + n + '.jpg'" alt="Team member photo">
            <div class="photo-caption">
            <h3>Team Member {{ n }}</h3>
            <p>Role: Role {{ n }}</p>
            <p>Bio: This is a short bio for team member {{ n }}.</p>
        </div>
    </div>
    </div>
    </div>
</template>

<style scoped>
    h1{
        color: antiquewhite;
        text-align: center;
    }
    p{
        text-align: center;
    }
    .team-member {
        display: inline-block;
        width: 23%;
        margin: 1%;
        vertical-align: top;
        text-align: center;
    }

</style>