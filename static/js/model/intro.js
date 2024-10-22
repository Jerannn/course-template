const holderContainer = document.getElementById("holder-container");

export function displayIntro() {
  holderContainer.innerHTML = "";

  const introTemplate = `
    <div class="intro">
        <div class="two-column">
            <div class="left-col">
                <h1 class="intro__title">
                The Pursuit of Knowledge: A Journey Through Space and Time
                </h1>

                <p>
                In the vast expanse of the universe, the pursuit of knowledge
                has driven humanity's most profound discoveries and
                advancements. From the earliest observations of the stars to the
                intricate theories of relativity, our understanding of space and
                time has evolved, challenging our perceptions and inspiring
                endless curiosity. This journey invites us to explore the
                interplay between scientific inquiry and the human experience,
                illuminating how knowledge transcends boundaries and reshapes
                our reality.
                </p>
                <button class="btn start-btn btn-rounded">Start Course</button>
            </div>
            <div class="right-col">
                <img
                src="./static/image/hero-image.png"
                alt="hero-image"
                class="intro__image"
                />
                <span>@by megane🍀</span>
            </div>
        </div>
    </div>
    `;

  holderContainer.innerHTML = introTemplate;
}
