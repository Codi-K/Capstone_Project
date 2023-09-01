<template>
  <div class="container-fluid footer">
    <div class="d-flex justify-content-center gap-2 my-1">
        <!-- Facebook -->
      <a href="https://www.facebook.com/" target="_blank">
        <img
          src="https://i.postimg.cc/fTjWnfLt/facebook.png"
          class="footerI"
          loading="lazy"
          alt="Facebook"
      /></a>
      <p class="lead my-0">CopyRight &copy; {{ cYear }}</p>
      <!-- Twitter -->
      <a href="https://www.twitter.com/" target="_blank">
        <img
          src="https://i.postimg.cc/WzBWbZ1h/twitter.png"
          class="footerI"
          loading="lazy"
          alt="twitter"
      /></a>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      cYear: new Date().getUTCFullYear(),
    };
  },
};
</script>

<style scoped></style>