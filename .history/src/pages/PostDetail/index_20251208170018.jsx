function PostDetail() {
    return (
        <>
            <h1>Post Detail</h1>
            <section class="card-row">
  <div class="card">
    <img src="https://via.placeholder.com/300x180" alt="HTML Syntax" class="card-img" />
    <div class="card-body">
      <h2 class="card-title">HTML Syntax</h2>
      <p class="card-desc">
        Learn how HTML works and how to write clean syntax for modern websites.
      </p>
      <a href="#" class="card-btn">Read More</a>
    </div>
  </div>

  <!-- Lặp lại 3 card nữa -->
  <div class="card">
    <img src="https://via.placeholder.com/300x180" alt="CSS Basics" class="card-img" />
    <div class="card-body">
      <h2 class="card-title">CSS Basics</h2>
      <p class="card-desc">
        Understand the fundamentals of styling with CSS and responsive design.
      </p>
      <a href="#" class="card-btn">Read More</a>
    </div>
  </div>

  <div class="card">
    <img src="https://via.placeholder.com/300x180" alt="JavaScript Intro" class="card-img" />
    <div class="card-body">
      <h2 class="card-title">JavaScript Intro</h2>
      <p class="card-desc">
        Dive into JavaScript and learn how to make your site interactive.
      </p>
      <a href="#" class="card-btn">Read More</a>
    </div>
  </div>

  <div class="card">
    <img src="https://via.placeholder.com/300x180" alt="Web Accessibility" class="card-img" />
    <div class="card-body">
      <h2 class="card-title">Web Accessibility</h2>
      <p class="card-desc">
        Make your website usable for everyone with accessibility best practices.
      </p>
      <a href="#" class="card-btn">Read More</a>
    </div>
  </div>
</section>

        </>
    );
}
export default PostDetail;
