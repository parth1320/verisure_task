function nextStep(stepNumber, backgroundImg) {
  //postalcode validation
  if (stepNumber === 2) {
    const postalCodeInput = document.getElementById("postalCode");

    if (!postalCodeInput.value.match(/^\d{5}$/)) {
      return;
    }
  }

  // Hide the current step
  document.getElementById("step" + (stepNumber - 1)).style.display = "none";
  // Show the next step
  document.getElementById("step" + stepNumber).style.display = "block";

  // Update progress bar width based on step
  const progressBar = document.querySelector(".progress-bar");
  const width = (stepNumber - 1) * 50; // 3 steps, each taking 33.33% width
  progressBar.style.width = width + "%";

  //set the backgroung image in step 3 depend on step 2 options
  //dynamic addition of id
  const containerRed = document.getElementById("container-red");
  containerRed.style.backgroundImage = `url(${backgroundImg})`;
}

const bottomImageContainer = document.getElementById("bottom-image-container");
//Dynamically adjuct the position of the lop-level image
function adjustTopImagePosition() {
  const windowHeight = window.innerHeight;
  const containerRed = document.getElementById("container-red");
  const containerRedBottom = containerRed.getBoundingClientRect().bottom;
  const formElements = document.querySelectorAll(".step");

  //postion of the last form element
  let lastFormElementBottom = 0;
  formElements.forEach((formElement) => {
    const formElementBottom = formElement.getBoundingClientRect().bottom;
    if (formElementBottom > lastFormElementBottom) {
      lastFormElementBottom = formElementBottom;
    }
  });

  const distance = lastFormElementBottom - containerRedBottom;

  console.log(`D${distance}`);

  if (distance < 0) {
    const newBottom = containerRed - windowHeight + distance;
    bottomImageContainer.style.bottom = `${newBottom}px`;
    console.log(newBottom);
  } else {
    bottomImageContainer.style.bottom = "180px";
  }
}

// window.onload = adjustTopImagePosition;
// window.onresize = adjustTopImagePosition;
