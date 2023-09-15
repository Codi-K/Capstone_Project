<template>
  <div class="home">
    <video
      class="video video1"
      style="width: 100%"
      loop="true"
      autoplay="autoplay"
      muted
      playsinline
    >
      <source
        type="video/mp4"
        src="https://player.vimeo.com/progressive_redirect/playback/699593615/rendition/1080p/file.mp4?loc=external&amp;signature=306e6968b2f215b9b1ed36cfbcb40369445e745ac50ce54ede249a8b480b6ee3"
      />
    </video>
    <div class="video-heading container">
      <div class="text-white my-5">
        <h1>WELCOME TO GRANDLINE VESSELS</h1>
      </div>
      <div class="container">
        <router-link
          to="/boats"
          type="button"
          class="btn btn-outline-light btn-lg animate__animated animate__bounce animate__delay-3s"
        >
          All Boats
        </router-link>
      </div>
    </div>
    <div class="container">
      <div class="d-flex justify-content-center m-5 gap-5">
        <!-- card 1 -->
        <div class="card mb-3 border-dark">
          <img
            src="https://www.regencyboats.com/content/dam/wrmg/regency/2020/pontoons/250-le3/lifestyle/Regency250LE3_R029_19rttcbw.jpg/jcr:content/renditions/cq5dam.web.2080.2080.jpeg"
            class="card-img-top"
            alt="news"
          />
          <div class="card-body">
            <h5 class="card-title">BOAT FINANCING BASICS</h5>
            <p class="card-text">
              Boat show season is coming soon, and with it the opportunity to
              take advantage of the best deals of the year. Avoid sensory
              overload on the showroom floor, or especially in the finance
              office by planning ahead.
            </p>
            <p class="card-text">
              <small class="text-body-secondary">Last updated 1 day ago</small>
            </p>
          </div>
        </div>
        <!-- card 2 -->
        <div class="card mb-3 border-dark">
          <img
            src="https://www.regencyboats.com/content/dam/wrmg/regency/2021/pontoons/250-le3-sport/studio/21_RE_250LE3SPORT_COV001-V3.jpg/jcr:content/renditions/cq5dam.web.2080.2080.jpeg"
            class="card-img-top"
            alt="news"
          />
          <div class="card-body">
            <h5 class="card-title">OUTERARMOR MOORING COVERS</h5>
            <p class="card-text">
              New for 2023 model year, we now offer an improved mooring cover
              that easily installs for storage and trailering.
            </p>
            <p class="card-text">
              <small class="text-body-secondary"
                >Last updated 12 hours ago</small
              >
            </p>
          </div>
        </div>
        <!-- card 3 -->
        <div class="card mb-3 border-dark">
          <img
            src="https://www.regencyboats.com/content/dam/wrmg/regency/2020/pontoons/250-le3-sport/lifestyle/Regency250LE3S_S045_19.jpg/jcr:content/renditions/cq5dam.web.2080.2080.jpeg"
            class="card-img-top"
            alt="news"
          />
          <div class="card-body">
            <h5 class="card-title">WHY BUY A PONTOON BOAT?</h5>
            <p class="card-text">
              Is a Pontoon right for you? From entertaining to cruising to
              watersports, pontoon boats are versatile, fun and
              comfortable—they’re like family rooms on the water that can do it
              all.
            </p>
            <p class="card-text">
              <small class="text-body-secondary">Last updated 3 days ago</small>
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  components: {},
};
</script>

<style scoped>
@media (width< 500px) {
  .video-heading {
    color: black;
    position: relative;
  }
}
</style>
