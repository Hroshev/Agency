document.addEventListener("DOMContentLoaded", () => {
    const lineAnimations = document.querySelectorAll('.line-animation');
    const windowHeight = window.innerHeight;
    const animatedElements = [];

    const animateElement = (element) => {
        element.querySelector('.line-animation--path').classList.add('animate');
        animatedElements.push(element);
    };

    const isElementVisible = (element) => {
        const position = element.getBoundingClientRect().top;
        return position - windowHeight <= 0;
    };

    const checkVisibility = () => {
        lineAnimations.forEach((element) => {
            if (isElementVisible(element) && !animatedElements.includes(element)) {
                animateElement(element);
            }
        });
    };

    const throttle = (func, delay) => {
        let timeout = null;
        return () => {
            if (!timeout) {
                timeout = setTimeout(() => {
                    func();
                    timeout = null;
                }, delay);
            }
        };
    };

    const throttledCheckVisibility = throttle(checkVisibility, 200);

    checkVisibility();

    window.addEventListener("scroll", throttledCheckVisibility);
});