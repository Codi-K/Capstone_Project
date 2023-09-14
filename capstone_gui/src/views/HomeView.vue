<template>
  <div class="home">
    <video
      class="video"
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
    <div class=" video-heading container">
      <div class=" text-white my-5">
        <h1>WELCOME TO GRANDLINE VESSELS</h1>
      </div>
      <div class="container">
        <router-link to="/boats" type="button" class="btn btn-outline-light btn-lg">
          All Boats
        </router-link>
      </div>
    </div>
    <div class="container">
      <div class="d-flex justify-content-center m-5 gap-5">
        <!-- card 1 -->
        <div class="card mb-3 border-dark">
          <img
            src="https://i.postimg.cc/sXQRcrns/wp3410914-luxury-yachts-wallpapers.jpg"
            class="card-img-top"
            alt="news"
          />
          <div class="card-body">
            <h5 class="card-title">Card title</h5>
            <p class="card-text">
              This is a wider card with supporting text below as a natural
              lead-in to additional content. This content is a little bit
              longer.
            </p>
            <p class="card-text">
              <small class="text-body-secondary">Last updated 3 mins ago</small>
            </p>
          </div>
        </div>
        <!-- card 2 -->
        <div class="card mb-3 border-dark">
          <img
            src="https://i.postimg.cc/sXQRcrns/wp3410914-luxury-yachts-wallpapers.jpg"
            class="card-img-top"
            alt="news"
          />
          <div class="card-body">
            <h5 class="card-title">Card title</h5>
            <p class="card-text">
              This is a wider card with supporting text below as a natural
              lead-in to additional content. This content is a little bit
              longer.
            </p>
            <p class="card-text">
              <small class="text-body-secondary">Last updated 3 mins ago</small>
            </p>
          </div>
        </div>
        <!-- card 3 -->
        <div class="card mb-3 border-dark">
          <img
            src="https://i.postimg.cc/sXQRcrns/wp3410914-luxury-yachts-wallpapers.jpg"
            class="card-img-top"
            alt="news"
          />
          <div class="card-body">
            <h5 class="card-title">Card title</h5>
            <p class="card-text">
              This is a wider card with supporting text below as a natural
              lead-in to additional content. This content is a little bit
              longer.
            </p>
            <p class="card-text">
              <small class="text-body-secondary">Last updated 3 mins ago</small>
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

<style scoped></style>
