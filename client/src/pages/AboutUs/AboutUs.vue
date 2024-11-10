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
        
        <div class="team-container">
            <div class="team-body">
            <div class="photo-caption">
                <img src="/public/team_profiles/chris_yuen_headshot.jpg" alt="Team member photo">
                <div class="photo-caption">
                <h3>Team Member 1</h3>
                <p>Role: Role 1</p>
                <p>Bio: This is a short bio for team member 1.</p>
                </div>
            </div>
            </div>
            <div class="team-body">
            <div class="photo-caption">
                <img src="/public/team_profiles/chris_yuen_headshot.jpg" alt="Team member photo">
                <div class="photo-caption">
                <h3>Team Member 2</h3>
                <p>Role: Role 2</p>
                <p>Bio: This is a short bio for team member 2.</p>
                </div>
            </div>
            </div>
            <div class="team-body">
            <div class="photo-caption">
                <img src="/public/team_profiles/chris_yuen_headshot.jpg" alt="Team member photo">
                <div class="photo-caption">
                <h3>Team Member 3</h3>
                <p>Role: Role 3</p>
                <p>Bio: This is a short bio for team member 3.</p>
                </div>
            </div>
            </div>
            <div class="team-body">
            <div class="photo-caption">
                <img src="/public/team_profiles/chris_yuen_headshot.jpg" alt="Team member photo">
                <div class="photo-caption">
                <h3>Team Member 4</h3>
                <p>Role: Role 4</p>
                <p>Bio: This is a short bio for team member 4.</p>
                </div>
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
    .team-container {
        display: flex;
        justify-content: center;
        flex-wrap: wrap;
        padding: 0 5%; /* Add padding to the left and right ends */
    }
    .team-body {
        display: inline-block;
        width: 23%;
        margin: 1%;
        vertical-align: top;
        text-align: center;
    }
    .photo-caption img {
        width: 80%;
        height: auto;
        border-radius: 20%;
        filter: drop-shadow(0 0 10px rgba(0, 0, 0, 0.5));
    }
    .photo-caption {
        padding: 15px;
        border-radius: 10px;
        background-color: rgba(249, 249, 249, 0.3); /* Set background to be semi-transparent */
        margin-top: 10px;
        box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1); /* Add shadow */
    }

</style>