document.querySelectorAll(".activity-card").forEach(card => {
    const textElement = card.querySelector(".typing-text");
    const fullText = textElement.dataset.text;

    let hasTyped = false;

    card.addEventListener("mouseenter", () => {
        if (hasTyped) return;

        hasTyped = true;
        let i = 0;
        textElement.textContent = "";

        const typing = setInterval(() => {
            textElement.textContent += fullText.charAt(i);
            i++;

            if (i >= fullText.length) {
                clearInterval(typing);
            }
        }, 40);
    });
});