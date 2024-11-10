<script setup lang="ts">

</script>

<template>
    <h1>
        About Us
    </h1>
    <div class="content-box">
        

        <div class="fullteam-box">
            <img src="/public/team_profiles/theTeam.jpg" alt="Group photo" class="wide-photo">
            <div class="overlay-text">
                <h2>Excess Express</h2>
                <p>From humble beginnings to a thriving team, we are proud of our journey.</p>
            </div>
        </div>
        
        <p>
            Meet the Team
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
                <img src="/public/team_profiles/myHeadshot.jpg" alt="Team member photo">
                <div class="photo-caption">
                <h3>Team Member 2</h3>
                <p>Role: Role 2</p>
                <p>Bio: This is a short bio for team member 2.</p>
                </div>
            </div>
            </div>
            <div class="team-body">
            <div class="photo-caption">
                <img src="/public/team_profiles/chris_yuen_headshot_zoom.jpg" alt="Team member photo">
                <div class="photo-caption">
                <h3>Team Member 3</h3>
                <p>Role: Role 3</p>
                <p>Bio: This is a short bio for team member 3.</p>
                </div>
            </div>
            </div>
            <div class="team-body">
            <div class="photo-caption">
                <img src="/public/team_profiles/photo_darien_miller.jpg" alt="Team member photo">
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
        width: 150px; /* Set a fixed width */
        height: 150px; /* Set a fixed height */
        object-fit: cover; /* Ensure the image covers the area while maintaining aspect ratio */
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
    .fullteam-box {
        width: 60%;
        margin: 0 auto;
        position: relative;
        text-align: center;
    }
    .wide-photo {
        width: 100%;
        height: auto;
        border-radius: 10px;
        filter: drop-shadow(0 0 10px rgba(0, 0, 0, 0.5));
    }
    .overlay-text {
        position: absolute;
        top: 15%; /* Adjusted to move the text up */
        left: 50%;
        transform: translate(-50%, -50%);
        color: black;
        text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.7);
        background: linear-gradient(to right, rgba(255, 255, 255, 0.7), rgba(255, 255, 255, 0.001), rgba(255, 255, 255, 0.7)); /* Gradient background */
        backdrop-filter: blur(5px); /* Background blur */
        width: 100%; /* Full width */
        padding: 10px;
        border-radius: 10px;
        box-sizing: border-box; /* Ensure padding is included in the element's total width and height */
    }

</style>