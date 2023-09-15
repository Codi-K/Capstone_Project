<template>
  <div>
    <button
      type="button"
      class="btn btn-outline-light animate__animated animate__bounce animate__delay-3s"
      data-bs-toggle="modal"
      data-bs-target="#exampleModal"
    >
      Request Tour
    </button>
    <!-- Modal -->
    <div class="container">
      <div
        class="modal fade"
        id="exampleModal"
        tabindex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header text-center">
              <h1 class="modal-title fs-5" id="exampleModalLabel">
                Tour Request
              </h1>
              <button
                type="button"
                class="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <form action="https://formspree.io/f/xnqkzdvl" method="POST">
              <div class="modal-body">
                <p class="title m-1">Full Name</p>
                <input
                  type="name"
                  name="name"
                  class="w-100 rounded p-1"
                  placeholder="Full Name..."
                  required
                />
                <p class="title m-1">Email Address</p>
                <input
                  type="email"
                  name="email"
                  class="w-100 rounded p-1"
                  placeholder="Email Address..."
                  required
                />
                <p class="title m-1">Cell Phone Number</p>
                <input
                  type="tel"
                  name="tel"
                  class="w-100 rounded p-1"
                  placeholder="Cell Phone Number..."
                  required
                />
                <p class="title m-1">Tour Date</p>
                <input
                  type="date"
                  name="date"
                  class="w-100 rounded p-1"
                  placeholder="date..."
                  required
                />
              </div>
              <div class="modal-footer">
                <button
                  type="button"
                  class="btn btn-outline-dark"
                  data-bs-dismiss="modal"
                >
                  Close
                </button>
                <button type="submit" class="btn btn-outline-dark animate__animated animate__bounce animate__delay-3s">
                  Submit Request
                </button>
                <button type="reset" class="btn btn-outline-dark">Clear</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped></style>
