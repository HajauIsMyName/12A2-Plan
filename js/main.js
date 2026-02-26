const titleText = "KỶ YẾU LỚP 12A2";
const subText = "Thanh xuân không lưu lại. Nhưng website thì có.";

let titleIndex = 0;
let subIndex = 0;

function typeTitle() {
    if (titleIndex < titleText.length) {
        document.getElementById("typing-title").innerHTML +=
            titleText.charAt(titleIndex);
        titleIndex++;
        setTimeout(typeTitle, 80);
    } else {
        setTimeout(typeSubText, 300);
    }
}

function typeSubText() {
    if (subIndex < subText.length) {
        document.getElementById("typing-text").innerHTML +=
            subText.charAt(subIndex);
        subIndex++;
        setTimeout(typeSubText, 40);
    }
}

window.onload = function () {
    typeTitle();
};
