import React from "react";

export const Contact = () => {
  return (
    <div>
      <section id="contact">
        <div class="container mt-5">
          <div class="row">
            <div class="col">
              <h2>Contact me</h2>
            </div>
          </div>
          <div class="row justify-content-center mt-4">
            <div class="col-md-6">
              <form>
                <div class="mb-3">
                  <label for="name" class="form-label">
                    Nama
                  </label>
                  <input type="text" class="form-control" id="name" aria-describedby="name" />
                </div>
                <div class="mb-3">
                  <label for="email" class="form-label">
                    E-mail
                  </label>
                  <input type="text" class="form-control" id="email" aria-describedby="email" />
                </div>
                <div class="mb-3">
                  <label for="pesan" class="form-label">
                    Pesan
                  </label>
                  <textarea class="form-control" id="pesan" rows="3"></textarea>
                </div>

                <button type="submit" class="btn btn-primary">
                  Kirim
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
