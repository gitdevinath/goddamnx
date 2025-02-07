gsap.registerPlugin(ScrollTrigger);


// newnew
const cards = document.querySelectorAll(".card1");
const container = document.querySelector(".i_two_content");
const iTwo = document.querySelector(".i_two"); // Get the i_two section

let totalWidth = 0;
cards.forEach(card => {
  totalWidth += card.offsetWidth;
});

// Calculate extra padding for start and end
const padding = window.innerWidth * 0.2; // 20% of viewport width (adjust as needed)
const amountToScroll = totalWidth - window.innerWidth + 2 * padding; // Add padding

gsap.timeline({
  scrollTrigger: {
    trigger: iTwo, // Trigger on the entire i_two section
    pin: true,
    scrub: 1,
    start: "top top", // Start at the very top
    end: `+=${amountToScroll}`, // Dynamic end based on padding
    //markers: true, // Helpful for debugging
    invalidateOnRefresh: true, // Important for responsiveness
    refreshPriority: 1 // Ensure refresh happens early
  }
}).to(cards, {
  x: -amountToScroll + padding, // Adjust x position to account for start padding
  duration: 1,
  ease: "none"
});


// Responsive adjustments (important!)
window.addEventListener("resize", () => {
  totalWidth = 0;
  cards.forEach(card => {
    totalWidth += card.offsetWidth;
  });
  const padding = window.innerWidth * 0.2;
  const amountToScroll = totalWidth - window.innerWidth + 2 * padding;

  gsap.timeline({
    scrollTrigger: {
      trigger: iTwo,
      pin: true,
      scrub: 1,
      start: "top top",
      end: `+=${amountToScroll}`,
      invalidateOnRefresh: true,
      refreshPriority: 1
    }
  }).to(cards, {
    x: -amountToScroll + padding,
    duration: 1,
    ease: "none"
  });

  ScrollTrigger.refresh(); // Refresh ScrollTrigger after resize
});


ScrollTrigger.refresh(); // Initial refresh
// newnew


//I_FOUR-------------------------------------------------------------------------------------------

const cardo = document.querySelectorAll(".card2");
const container2 = document.querySelectorAll(".i_four_content");
const iFour = document.querySelector(".i_four");

let totalWidths = 0;
cardo.forEach(card => {
    totalWidths += card.offsetWidth;
});

const padding1 = window.innerWidth * 0.2;
const amountToScroll1 = totalWidths - window.innerWidth + 2 * padding1;

gsap.timeline({
    scrollTrigger: {
        trigger: iFour,
        pin: true,
        scrub: 1,
        start: "top 10%",
        //markers: true,
        end: `+=${amountToScroll1}`,
        invalidateOnRefresh: true,
        refreshPriority: 1
    }
}).to(cardo, {
    x: -amountToScroll1 + padding1,
    duration: 1,
    ease: "none"
});

window.addEventListener("resize", () => {
    totalWidths = 0;
    cardo.forEach(card => {
        totalWidths += card.offsetWidth;
});
const padding1 = window.innerWidth * 0.2;
const amountToScroll1 = totalWidths - window.innerWidth + 2 * padding;

gsap.timeline({
    scrollTrigger: {
        trigger: iFour,
        pin: true,
        scrub: 1,
        start: "top top",
        end: `+=${amountToScroll1}`,
        invalidateOnRefresh: true,
        refreshPriority: 1
    }
}).to(cardo, {
    x: -amountToScroll1 + padding1,
    duration: 1,
    ease: "none"
});

ScrollTrigger.refresh();

});

ScrollTrigger.refresh();
