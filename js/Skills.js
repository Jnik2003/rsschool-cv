class Skills {
    constructor(selector, text, coloredStars) {
        this.selector = document.querySelector(`.${selector}`);
        this.text = text;
        this.coloredStars = coloredStars;
    }

    render() {
        function transformText(text) {
            return text.replace(/ /g, '-');
        }

        const element = document.createElement('div');

        element.innerHTML = `
        <div class="left-side__skills-block">
        <p class="text text-white">${this.text}</p>
                        <li class="left-side__skills-stars">
                            <div class="left-side__skills-star" data-text=${transformText(this.text)}></div>
                            <div class="left-side__skills-star" data-text=${transformText(this.text)}></div>
                            <div class="left-side__skills-star" data-text=${transformText(this.text)}></div>
                            <div class="left-side__skills-star" data-text=${transformText(this.text)}></div>
                            <div class="left-side__skills-star" data-text=${transformText(this.text)}></div>
                        </li>
        </div>
        `;
        this.selector.append(element);
        let stars = document.querySelectorAll(`[data-text="${transformText(this.text)}"]`);
        for (let i = 0; i < this.coloredStars; i++) {
            stars[i].classList.add('skill-colored');
        }


    }
}