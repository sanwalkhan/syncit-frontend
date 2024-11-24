// $(document).ready(function () {
//   $('.nav-link').click(function () {
//     $('.nav-link').removeClass('active');
//     $(this).addClass('active');
//   });
// });

// Get elements
const prevButton = document.querySelector('.custom-carousel-control-prev');
const nextButton = document.querySelector('.custom-carousel-control-next');
const carouselInner = document.querySelector('.custom-carousel-inner');
let currentIndex = 0;

// Get total number of items (only count the first set)
const totalItems = document.querySelectorAll('.custom-carousel-item').length / 2;

// Show next item
nextButton.addEventListener('click', () => {
  if (currentIndex < totalItems - 1) {
    currentIndex++;
    updateCarousel();
  } else {
    // Reset to first set without transition
    setTimeout(() => {
      carouselInner.style.transition = 'none'; // Disable transition
      carouselInner.style.transform = `translateX(0)`;
      currentIndex = 0;
    }, 500); // Match the transition duration
  }
});

// Show previous item
prevButton.addEventListener('click', () => {
  if (currentIndex > 0) {
    currentIndex--;
    updateCarousel();
  } else {
    // Jump to the last set without transition
    setTimeout(() => {
      carouselInner.style.transition = 'none'; // Disable transition
      carouselInner.style.transform = `translateX(-${(totalItems - 1) * 20}%)`;
      currentIndex = totalItems - 1;
    }, 500); // Match the transition duration
  }
});

// Update carousel inner to move to the current index
function updateCarousel() {
  carouselInner.style.transition = 'transform 0.5s ease'; // Ensure smooth transition
  const offset = -currentIndex * 20; // Move the carousel by 20% per item
  carouselInner.style.transform = `translateX(${offset}%)`;
}


// Companies start
const scrollingText = document.querySelector('.scrolling-text');
    const scrollingTextContainer = document.querySelector('.scrolling-text-container');
    const totalWidth = scrollingText.scrollWidth; // Get total width of the text

    // Set initial position
    scrollingText.style.transform = 'translateX(0)';

    // GSAP animation for infinite scroll
    gsap.to(".scrolling-text", {
        x: -totalWidth, // Move to the left by the total width of the text
        duration: 30,  // Adjust duration for speed
        ease: "none",  // No easing for constant speed
        repeat: -1,    // Infinite loop
        start: "top",  // Ensure the animation starts immediately
    });
// Companies End

// workflow navbar Start

function changeContent(section) {
  const displayText = document.getElementById("display-text");
  const items = document.querySelectorAll(".nav-item");

  // Change the content based on the clicked section
  switch(section) {
    case "Connect":
      displayText.textContent = "Start an automation by connecting two apps — a trigger and an action. Zapier integrates instantly with over 7,000 different apps.";
      break;
    case "Automate":
      displayText.textContent = "Automate your workflows seamlessly.";
      break;
    case "Power with AI":
      displayText.textContent = "Enhance your processes with AI-driven tools.";
      break;
    case "Customize":
      displayText.textContent = "Customize your automation settings to fit your needs.";
      break;
    case "Visualize":
      displayText.textContent = "Visualize your workflows and monitor performance.";
      break;
    case "Scale":
      displayText.textContent = "Scale your automation effortlessly as your needs grow.";
      break;
  }

  // Update the active state
  items.forEach(item => item.classList.remove("active"));
  event.target.classList.add("active");
}

// workflow navbar end

// Category cards Start
   // JavaScript to filter cards
   const filterButtons = document.querySelectorAll('.filter-btn');
   const cardItems = document.querySelectorAll('.card-item');

   filterButtons.forEach(button => {
       button.addEventListener('click', () => {
           // Remove active class from all buttons and add to clicked button
           filterButtons.forEach(btn => btn.classList.remove('active'));
           button.classList.add('active');

           // Get selected category from button
           const category = button.getAttribute('data-category');

           // Show/hide cards based on category
           cardItems.forEach(card => {
               if (category === 'all' || card.getAttribute('data-category') === category) {
                   card.style.display = 'block';
               } else {
                   card.style.display = 'none';
               }
           });
       });
   });

   // Show all cards by default
   document.querySelector('.filter-btn[data-category="all"]').click();

// category cards End


// dashboard
const stepsContainer = document.getElementById('stepsContainer');
const popupTemplate = document.getElementById('popupTemplate');
const rightPanelContainer = document.getElementById('rightPanelContainer');
const selectedAppElement = document.getElementById('selectedApp');
const changeAppBtn = document.getElementById('changeAppBtn');

let selectedApp = '';

// Function to show the popup
function showPopup(callback) {
    const popupClone = popupTemplate.cloneNode(true);
    popupClone.style.display = 'block';
    document.body.appendChild(popupClone);

    // Handle option click
    const options = popupClone.querySelectorAll('.popup-option');
    options.forEach(option => {
        option.addEventListener('click', () => {
            selectedApp = option.textContent.trim(); // Get selected option text
            callback(selectedApp); // Pass the selected option to the callback
            document.body.removeChild(popupClone); // Remove the popup
        });
    });

    // Handle close popup
    const closePopup = popupClone.querySelector('.close-popup');
    closePopup.addEventListener('click', () => {
        document.body.removeChild(popupClone); // Close the popup
    });
}

// Function to create or update the right panel
//         function createOrUpdateRightPanel(selectedApp) {
//             selectedAppElement.textContent = selectedApp;
//             rightPanelContainer.style.display = 'block';
//         }



//         stepsContainer.addEventListener('click', (event) => {
//     if (event.target.classList.contains('add-step-btn')) {
//         showPopup((selectedApp) => {
//             const step = document.createElement('div');
//             step.className = 'step mb-3';
//             step.innerHTML = `
//                 <div class="left-panel-box">
//                     <button class="btn btn-secondary trigger-btn">Trigger</button>
//                     <ol class="mb-1">
//                         <li>Select the event that starts your zap</li>
//                     </ol>
//                 </div>
//                 <div class="d-flex flex-column align-items-center justify-content-center">
//                     <img class="step-icon m-0" width="20" height="20" src="https://img.icons8.com/material-two-tone/20/vertical-line.png" alt="vertical-line"/>
//                     <div class="d-flex flex-column align-items-center justify-content-center">
//                         <button class="btn btn-primary add-step-btn">+</button>
//                     </div>
//                 </div>
//             `;
//             stepsContainer.appendChild(step);
//             createOrUpdateRightPanel(selectedApp);
//         });
//     } else if (event.target.classList.contains('trigger-btn')) {
//         const triggerButton = event.target;
//         showPopup((selectedApp) => {
//             triggerButton.textContent = selectedApp;
//             createOrUpdateRightPanel(selectedApp);
//         });
//     }
// });

// Function to create or update the right panel
function createOrUpdateRightPanel(selectedApp) {
    const rightPanelTitle = document.getElementById('rightPanelTitle'); // Get the title element
    selectedAppElement.textContent = selectedApp; // Update the app in the right panel
    rightPanelTitle.textContent = selectedApp; // Set the title to the selected option
    rightPanelContainer.style.display = 'block'; // Show the right panel
}

// Event delegation for dynamically created buttons
stepsContainer.addEventListener('click', (event) => {
    if (event.target.classList.contains('add-step-btn')) {
        // Show popup and create a new step
        showPopup((selectedApp) => {
            const step = document.createElement('div');
            step.className = 'step mb-3';
            step.innerHTML = `
        <div class="left-panel-box">
            <button class="btn btn-secondary trigger-btn">Trigger</button>
            <ol class="mb-1">
                <li>Select the event that starts your zap</li>
            </ol>
        </div>
        <div class="d-flex flex-column align-items-center justify-content-center">
            <img class="step-icon m-0" width="20" height="20" src="https://img.icons8.com/material-two-tone/20/vertical-line.png" alt="vertical-line"/>
            <div class="d-flex flex-column align-items-center justify-content-center">
                <button class="btn btn-primary add-step-btn">+</button>
            </div>
        </div>
    `;
            stepsContainer.appendChild(step);
            createOrUpdateRightPanel(selectedApp);
        });
    } else if (event.target.classList.contains('trigger-btn')) {
        // Show popup to select app and update the trigger button text
        const triggerButton = event.target; // Get the clicked button
        showPopup((selectedApp) => {
            triggerButton.textContent = selectedApp; // Update button text
            createOrUpdateRightPanel(selectedApp);
        });
    }
    // Change button should trigger the same functionality as the Trigger button
changeAppBtn.addEventListener('click', () => {
  showPopup((selectedApp) => {
      createOrUpdateRightPanel(selectedApp);
  });
});
// Close button for the right panel
const closeRightPanelBtn = document.getElementById('closeRightPanelBtn');

closeRightPanelBtn.addEventListener('click', () => {
  rightPanelContainer.style.display = 'none'; // Hide the right panel
});

let currentStep = 1;

function showStep(step) {
  // Update the visibility of the steps
  document.querySelectorAll('.step-section').forEach((section) => {
      section.classList.remove('active');
  });
  document.getElementById(`step-${step}`).classList.add('active');

  // Update the step tracker
  document.querySelectorAll('.step-dot').forEach((dot, index) => {
      if (index < step) {
          dot.classList.add('completed');
      } else {
          dot.classList.remove('completed');
      }
  });

  document.querySelectorAll('.step-name').forEach((name, index) => {
      if (index < step) {
          name.classList.add('completed');
      } else {
          name.classList.remove('completed');
      }
  });
}

function nextStep() {
  currentStep++;
  if (currentStep > 3) currentStep = 3; // Max steps
  showStep(currentStep);
}

function prevStep() {
  currentStep--;
  if (currentStep < 1) currentStep = 1; // Min step
  showStep(currentStep);
}
// dashboard End
});



