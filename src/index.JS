const inputColor = document.querySelector("input")
const container = document.querySelector(".conteiner")
const colorHex = document.querySelector("span")

function changeColorBackground(e){
    const colorSelected = e.target.value
    container.style.css.bacgroundColor  = colorSelected;

     colorHex.textContent = colorSelected;
    inputColor.HTMLInputElemen.taddEventListener("input",changColorBackgroud);
}

// Get the viewport width and height
function getViewportDimensions() {
    const viewportWidth = window.innerWidth || document.documentElement.clientWidth;
    const viewportHeight = window.innerHeight || document.documentElement.clientHeight;
    return { width: viewportWidth, height: viewportHeight };
  }
  
  // Add an event listener to handle screen size changes
  window.addEventListener('resize', () => {
    const { width, height } = getViewportDimensions();
    // Update your layout or styles based on the new dimensions
    // For example, you can toggle a mobile menu or adjust font sizes
    if (width < 768) {
      // Mobile layout
      document.body.classList.add('mobile');
    } else {
      // Desktop layout
      document.body.classList.remove('mobile');
    }
  });
  
  // Initialize the layout on page load
  getViewportDimensions();