// Extract author name and affiliation from the title slide and inject into footer
document.addEventListener('DOMContentLoaded', function() {
  // Get author name from title slide
  const authorElement = document.querySelector('#title-slide .quarto-title-author-name');
  const authorName = authorElement ? authorElement.textContent.trim() : 'Author Name';

  // Get affiliation from title slide
  const affiliationElement = document.querySelector('#title-slide .quarto-title-affiliation');
  let department = 'Department';

  if (affiliationElement) {
    const affiliationText = affiliationElement.textContent.trim();
    // Extract department name (text before comma or "University")
    const match = affiliationText.match(/Department of ([^,]+)/i) ||
                  affiliationText.match(/^([^,]+)/);
    if (match) {
      department = match[0].trim();
    }
  }

  // Update CSS custom properties
  document.documentElement.style.setProperty('--footer-left-text', `"${department}"`);
  document.documentElement.style.setProperty('--footer-right-text', `"${authorName}"`);
});
