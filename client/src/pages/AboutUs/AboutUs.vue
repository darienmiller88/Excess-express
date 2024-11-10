<script setup lang="ts">

</script>

<template>
    <div class="about-section">
        <h1>About us</h1>
        <p>A little intro to the team.</p>
    </div>

    <h2>Our Team</h2>
    <div class="row">
        <div class="column">
            <div class="card">
                <img src="" alt="image " style="width:100%">
                <div class="container">
                    <h2>Jane Doe</h2>
                    <p class="title">CEO & Founder</p>
                    <p>School attended</p>
                </div>
            </div>
        </div>
        <div class="column">
            <div class="card">
                <img src="" alt="" style="width:100%">
                <div class="container">
                    <h2>Jane Doe</h2>
                    <p class="title">CEO & Founder</p>
                    <p>School attended</p>
                </div>
            </div>
        </div>
        <div class="column">
            <div class="card">
                <img src="" alt="" style="width:100%">
                <div class="container">
                    <h2>Jane Doe</h2>
                    <p class="title">CEO & Founder</p>
                    <p>School attended</p>
                </div>
            </div>
        </div>
        <div class="column">
            <div class="card">
                <img src="" alt="" style="width:100%">
                <div class="container">
                    <h2>Jane Doe</h2>
                    <p class="title">CEO & Founder</p>
                    <p>School attended</p>
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