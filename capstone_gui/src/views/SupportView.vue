<template>
  <div>
    <div class="support"></div>
    <div class="container my-5">
      <h1 class="text-white">Support</h1>
    </div>
    

    <div id="contact_page">
      <div id="get_in_touch">
        <img
          id="contact_us_logo"
          src="https://i.postimg.cc/qMdd8W2H/Grand-Line-1.gif"
          alt="logo"
        />

        <h4 class="my-3">codikader7@gmail.com</h4>
        <p id="get_in_touch_form_text">
          Get in touch with us using our email addresse or drop a few words in
          the following form.
        </p>
      </div>

      <div id="contact_form">
         <h2 >Get in touch with us...</h2>
        <form action="https://formspree.io/f/xnqkdzqw" method="POST">
          <div class="mb-3" id="form_position">
            <label for="exampleInputName" class="form-label">Full Name:</label>
            <input
              type="name"
              class="form-control"
              id="exampleInputNameame"
              placeholder=" Full Name..."
              name="name"
              required
              oninvalid="this.setCustomValidity('Please Enter Your Name😢')"
              oninput="this.setCustomValidity('')"
            />
          </div>

          <div class="mb-3" id="form_position">
            <label for="exampleInputEmail1" class="form-label"
              >Email Address:</label
            >
            <input
              type="email"
              class="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              placeholder="We'll never share your email..."
              name="email"
              required
              oninvalid="this.setCustomValidity('Please Enter Your Email Address😢')"
              oninput="this.setCustomValidity('')"
            />
          </div>

          <div class="mb-3" id="form_position">
            <label for="exampleInputComment" class="form-label"
              >Comments/Problems:</label
            >
            <input
              type="comment"
              class="form-control"
              id="exampleInputComment"
              placeholder="Comments..."
              name="comments_or_problems"
              required
              oninvalid="this.setCustomValidity('Please Insert Your Comment Or Problem😢')"
              oninput="this.setCustomValidity('')"
            />
          </div>

          <button type="button" class="btn btn-outline-dark btn-lg">
            <span id="flicker_2">Submit</span>
          </button>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
input {
    width: auto;
  }
  
  label {
    width: 10rem;
    text-align: left;
  }
</style>
