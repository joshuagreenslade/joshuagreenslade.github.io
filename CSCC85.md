---
title: Introduction to Embedded Systems
layout: default
---

<p class="col-md-10 col-md-offset-1">In this class we learned about the importance of embedded systems and the different types of embedded systems. We also learned about how to uses noisy sensors by trying to eliminate the interference using various techniques including sampling, Kalman filters, among others. In addition, we covered the importance of reliability and how to improve it with redundancy and consensus. In this class we demonstrated our new knowledge in three major assignments; each project required us to create a system that would be able to operate by itself, with no human interference. Unfortunately, I do not have permission to share the code for any of these projects.</p>

<div class="textVideo col-md-10 col-md-offset-1">
<p class="col-md-6">The first project was about robot localization. The task was to create a robot that, when placed on a map, would figure out where on the map it was and then move to a specific location on the map. This required a fair bit of thinking about how to build the robot in order to reduce as much noise as possible for the sensor. I have included a video of our robot localizing itself. The robot drives on the black line and when it arrives at a yellow intersection it scans the surrounding squares to determine which intersection it is at, making a different sound for each different colour. It continues doing this until it has determined which intersection it is at, at which point it stops and beeps twice then drives to its final destination.</p>

<div class="video col-md-6 container-fluid">
  <div align="center" class="embed-responsive embed-responsive-16by9 ">
    <video id="localization" preload="auto" controls="true" class="embed-responsive-item">
      <source src="./media/localization.mp4" type="video/mp4">
        Your browser does not support mp4 videos
    </video>
  </div>
</div>
</div>

<p class="col-md-10 col-md-offset-1">The second project was about fault tolerance. We were given a landing simulator and we first created an autopilot that would land the craft. We then created a failsafe so that, in the event that one or two of the engines or sensors failed, the craft would still land successfully. Here are two videos. The first video is where the main and right thrusters fail and the second video is where the left and right thrusters fail. In both instances the lander successfully lands onto the landing pad despite the fact that two major components of the lander have failed.</p>

<div class="video container-fluid col-md-5 col-md-offset-1 topVideo">
<div align="center" class="embed-responsive embed-responsive-1by1">
  <video id="main_right_thruster_fail" preload="auto" controls="true" class="embed-responsive-item">
    <source src="./media/main_right_thruster_fail.mp4" type="video/mp4">
      Your browser does not support mp4 videos
  </video>
</div>
</div>

<div class="video container-fluid col-md-5">
<div align="center" class="embed-responsive embed-responsive-1by1">
  <video id="left_right_thruster_fail" preload="auto" controls="true" class="embed-responsive-item">
    <source src="./media/left_right_thruster_fail.mp4" type="video/mp4">
      Your browser does not support mp4 videos
  </video>
</div>
</div>

<div class="textVideo col-md-10 col-md-offset-1">
<p class="col-md-6">The final project was about artificial intelligence. The task was to create a robot that would play soccer against other robots. We had to decide in which situations our robot would try to score and when it would try to defend. One of the major difficulties we had was the camera because it was noisy so the robot did not know its exact location, only a general location. We had to get around this in order for the robot to shoot the ball. Our robot also had to deal with the ball and the opponent moving around and had to react accordingly. Unfortunately, I do not have a video of our robot playing against another robot however I do have a video below testing our robot taking a penalty shot.</p>

<div class="video container-fluid col-md-6">
  <div align="center" class="embed-responsive embed-responsive-16by9">
    <video id="penalty_shot" preload="auto" controls="true" class="embed-responsive-item">
      <source src="./media/penalty_shot.mp4" type="video/mp4">
        Your browser does not support mp4 videos
    </video>
  </div>
</div>
</div>

<p class="col-md-10 col-md-offset-1">Overall this class showed me that there is a lot of work that goes into making an embedded system that is fault tolerant and works without human interaction. It also showed me how to deal with problems that may arise when designing these types of systems, and also furthered my experience with programming languages such as C.</p>

<script src="videos.js"></script>