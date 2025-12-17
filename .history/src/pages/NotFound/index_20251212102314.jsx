function NotFound() {
    return (
        <div class="container">
            <div class="text">
                <h1>404</h1>
                <p>Sorry we couldn't find this page.</p>
                <p>
                    But don't worry, you can find plenty of other things on our
                    homepage.
                </p>
                <a href="/" class="btn">
                    back to homepage
                </a>
            </div>

            <div class="scene">
                <div class="shelf"></div>
                <div class="vase">
                    <div class="flower">
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>
                </div>

                <div class="dog">
                    <div class="head">
                        <div class="ear left"></div>
                        <div class="ear right"></div>
                        <div class="eye left"></div>
                        <div class="eye right"></div>
                        <div class="nose"></div>
                        <div class="tongue"></div>
                    </div>
                    <div class="body"></div>
                    <div class="paw front left"></div>
                    <div class="paw front right"></div>
                    <div class="paw back left"></div>
                    <div class="paw back right"></div>
                    <div class="tail"></div>
                </div>
            </div>
        </div>
    );
}
export default NotFound;
