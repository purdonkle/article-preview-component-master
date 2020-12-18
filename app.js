window.addEventListener("DOMContentLoaded", () => {
  let isOpen = false;
  const shareButton = document.getElementById("share-button");
  const shareCard = document.getElementsByClassName("share-card");
  console.log(shareButton);

  shareButton.onclick = () => {
    if (isOpen === false) {
      shareCard[0].style.display = "block";
      isOpen = true;
    } else {
      shareCard[0].style.display = "none";
      isOpen = false;
    }
  };

  shareButton.onmouseover = () => {
    shareButton.style.transform = "scale(1.1)";
    shareButton.style.boxShadow = "0px 2px 2px rgba(0, 0, 0, 0.15)";
    shareButton.style.cursor = "pointer";
  };

  shareButton.onmouseout = () => {
    shareButton.style.transform = "scale(1)";
    shareButton.style.boxShadow = "none";
    shareButton.style.cursor = "pointer";
  };

  shareButton.onmousedown = () => {
    shareButton.style.transition =
      ".02s transform, .02s box-shadow ease-in-out";
    shareButton.style.transform = "scale(1)";
    return false;
  };

  shareButton.onmouseup = () => {
    if (isOpen === false) {
      shareButton.style.backgroundColor = "var(--dark-gray-blue)";
    } else {
      shareButton.style.backgroundColor = "var(--light-gray-blue)";
    }
    shareButton.style.transform = "scale(1.1)";
    setTimeout(() => {
      shareButton.style.transition =
        ".2s transform, .2s box-shadow ease-in-out";
    }, 150);
  };
});
