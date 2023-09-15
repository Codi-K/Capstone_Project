<template>
  <div>
    <div class="about">
      <div class="container py-5 text-white ">
        <h1 class="brand">Brand Partners</h1>
      </div>
          <div class="container d-flex justify-content-center brand">
      <div class="container">
        <a href="https://www.rangerboats.com/" target="_blank">
          <img
            src="https://www.tritonboats.com/content/dam/boating-center/coreaem/logos/ranger-brand.jpg/jcr:content/renditions/cq5dam.web.1920.1920.jpeg"
            class="logo"
            alt="brands"
          />
        </a>
      </div>
      <div class="container">
        <a href="https://www.trackerboats.com/" target="_blank">
          <img
            src="https://www.ascendkayaks.com/content/dam/boating-center/coreaem/logos/tracker-brand.jpg/jcr:content/renditions/cq5dam.web.1920.1920.jpeg"
            class="logo"
            alt="brands"
          />
        </a>
      </div>
      <div class="container">
        <a href="https://www.nitro.com/" target="_blank">
          <img
            src="https://www.tritonboats.com/content/dam/boating-center/coreaem/logos/nitro-brand.jpg/jcr:content/renditions/cq5dam.web.1920.1920.jpeg"
            class="logo"
            alt="brands"
          />
        </a>
      </div>
      <div class="container">
        <a href="https://www.makoboats.com/" target="_blank">
          <img
            src="https://www.tritonboats.com/content/dam/boating-center/coreaem/logos/mako-brand.jpg/jcr:content/renditions/cq5dam.web.1920.1920.jpeg"
            class="logo"
            alt="brands"
          />
        </a>
      </div>
      <div class="container">
        <a href="https://www.tahoeboats.com/" target="_blank">
          <img
            src="https://www.tritonboats.com/content/dam/boating-center/coreaem/logos/tahoe-brand.jpg/jcr:content/renditions/cq5dam.web.1920.1920.jpeg"
            class="logo"
            alt="brands"
          />
        </a>
      </div>
    </div>
    </div>

    <!-- About Grandline Vessels -->
    <div class="container-fluid story">
      <h1>Our Story</h1>
      <div class="container story">
        <p class="border border-2 border-dark rounded p-5">
          Grandline Vessels is more than a company; it's a passionate maritime
          adventure. With a commitment to excellence, we're a trusted name in
          maritime services. Our diverse fleet, maintained to the highest safety
          standards, is ready to fulfill your maritime dreams. <br />
          Welcome to Grandline Vessels, where the sea meets excellence.
        </p>
        <div class="d-flex justify-content-center gap-5 my-2">
          <!-- Mission -->
          <div class="card border-dark" style="width: 18rem">
            <img
              src="https://www.makoboats.com/content/dam/wrmg/mako/2020/inshore-boats/pro-skiff-15-cc/lifestyle/M15Skiff_LS082_18.jpg/jcr:content/renditions/cq5dam.web.2080.2080.jpeg"
              class="card-img-top"
              alt="image"
            />
            <div class="card-body">
              <h5 class="card-title">Our Mission</h5>
              <p class="card-text">
                Grandline Vessels' mission is to connect individuals,
                businesses, and adventurers with top-quality vessels while
                ensuring safety, integrity, and customer satisfaction.
              </p>
            </div>
          </div>
          <!-- Vision -->
          <div class="card border-dark" style="width: 18rem">
            <img
              src="https://www.makoboats.com/content/dam/wrmg/mako/2020/inshore-boats/pro-skiff-19-top-drive/lifestyle/M19SkiffTD_F112_18.jpg/jcr:content/renditions/cq5dam.web.2080.2080.jpeg"
              class="card-img-top"
              alt="image"
            />
            <div class="card-body">
              <h5 class="card-title">Our Vision</h5>
              <p class="card-text">
                Grandline Vessels envisions global leadership in the maritime
                industry, setting standards for excellence, innovation,
                sustainability, and fulfilling maritime dreams.
              </p>
            </div>
          </div>
          <!-- Values -->
          <div class="card border-dark" style="width: 18rem">
            <img
              src="https://www.makoboats.com/content/dam/wrmg/mako/2020/offshore-boats/184-cc/lifestyle/M184_LS036_20V2.jpg/jcr:content/renditions/cq5dam.web.2080.2080.jpeg"
              class="card-img-top"
              alt="image"
            />
            <div class="card-body">
              <h5 class="card-title">Our Values</h5>
              <p class="card-text">
                Grandline Vessels is guided by a set of core values that shape
                our company culture and define our approach to serving our
                customers and the maritime community.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style  scoped>
@media (width< 800px) {
.brand{
  flex-direction: column;
  gap: 1rem;
  color: black;
}

.story{
  margin-top: 5rem;
}

.about{
  background-image: none;
}

}

</style>
