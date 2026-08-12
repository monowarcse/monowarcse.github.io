// Global variables
let allPublications = [];
let showingSelected = true;

// Initialize the page
document.addEventListener('DOMContentLoaded', function () {
  // Load publications data
  loadPublications();

  // Initialize animation delays for sections
  const sections = document.querySelectorAll('section');
  sections.forEach((section, index) => {
    section.style.animationDelay = `${index * 0.1}s`;
  });

  // Add event listener for toggle button
  const toggleButton = document.getElementById('toggle-publications');
  if (toggleButton) {
    toggleButton.addEventListener('click', togglePublications);
  }
});

// Load publications from JSON file
function loadPublications() {
  fetch('publications.json')
    .then(response => {
      if (!response.ok) {
        throw new Error(`HTTP ${response.status}: ${response.statusText}`);
      }
      return response.json();
    })
    .then(data => {
      allPublications = data.publications;
      renderPublications(true);
    })
    .catch(error => {
      console.error('Error loading publications:', error);
      displayFallbackPublications();
    });
}

// Fallback if JSON loading fails
function displayFallbackPublications() {
  allPublications = [
    {
      "title": "MSLeafNet: Multi-Classes Classification with Transfer Learning of Imbalanced Malabar Spinach Leaf Diseases",
      "authors": [
        "M. Islam",
        "S. Shovo",
        "M. Faysal",
        "A. Topo",
        "S. Akter"
      ],
      "venue": "Proceedings of ECCT 2026 (Accepted)",
      "thumbnail": "images/thumbs/malabar.png",
      "selected": 1,
      "award": "",
      "links": {
        "pdf": "https://drive.google.com/file/d/1AkYrZbodp_-Ud5bSjQfse3K0yzTpixXV/view?usp=sharing"
      }
    },
    {
      "title": "Ideological Stance Detection in a Low-Resource Language: Polarization in Bangladeshi Public vs Private University Discourse on Social Media",
      "authors": [
        "S. Shovo",
        "M. Islam",
        "A. Hossain",
        "S. Akhter",
        "S. Islam"
      ],
      "venue": "Under review, IEEE SPICSCON 2026",
      "thumbnail": "images/thumbs/1.jpg",
      "selected": 1,
      "award": "",
      "links": {
        "pdf": "https://drive.google.com/file/d/1Eouh1yzZW7lCYjSQ_MrKA19jQr0jXEFo/view?usp=sharing"
      }
    },

    {
      "title": "Empowering Local Agriculture: A Deep Learning-Powered Web System for Identifying Bangladeshi Mango Varieties",
      "authors": [
        "M. Islam",
        "S. Shovo"
      ],
      "venue": "Journal of Bangladesh Academy of Science, Vol. 50, Supplement 1 (2026)",
      "thumbnail": "images/thumbs/Mango.png",
      "selected": 1,
      "award": "",
      "links": {
        "pdf": "https://bas.org.bd/storage/app/uploads/public/69d/059/2a1/69d0592a1ef95605755782.pdf"
      }
    },
    {
      "title": "A Hybrid Transformer–Sequential Model for Claim Checkworthiness and Sentiment Classification from News Headlines",
      "authors": [
        "S. Shovo",
        "M. Islam",
        "S. Akhter"
      ],
      "venue": "In preparation (2026)",
      "thumbnail": "images/thumbs/4.jpg",
      "selected": 0,
      "award": "",
      "links": {
        "pdf": "#"
      }
    }
  ];
  renderPublications(showingSelected);
}

// Toggle between showing all or selected publications
function togglePublications() {
  showingSelected = !showingSelected;
  renderPublications(showingSelected);

  // Update button text
  const toggleButton = document.getElementById('toggle-publications');
  toggleButton.textContent = showingSelected ? 'Show All' : 'Show Selected';
  const toggleHeader = document.getElementById('toggle-header');
  toggleHeader.textContent = showingSelected ? 'Selected Publications' : 'All Publications';
}

// Render publications based on selection state
function renderPublications(selectedOnly) {
  const publicationsContainer = document.getElementById('publications-container');
  publicationsContainer.innerHTML = '';

  const pubsToShow = selectedOnly ?
    allPublications.filter(pub => pub.selected === 1) :
    allPublications;

  pubsToShow.forEach(publication => {
    const pubElement = createPublicationElement(publication);
    publicationsContainer.appendChild(pubElement);
  });
}

// Create HTML element for a publication
function createPublicationElement(publication) {
  const pubItem = document.createElement('div');
  pubItem.className = 'publication-item';

  // Create thumbnail
  const thumbnail = document.createElement('div');
  thumbnail.className = 'pub-thumbnail';
  thumbnail.onclick = () => openModal(publication.thumbnail);

  const thumbnailImg = document.createElement('img');
  thumbnailImg.src = publication.thumbnail;
  thumbnailImg.alt = `${publication.title} thumbnail`;
  thumbnail.appendChild(thumbnailImg);

  // Create content container
  const content = document.createElement('div');
  content.className = 'pub-content';

  // Add title
  const title = document.createElement('div');
  title.className = 'pub-title';
  title.textContent = publication.title;
  content.appendChild(title);

  // Add authors with highlight
  const authors = document.createElement('div');
  authors.className = 'pub-authors';

  // Format authors with highlighting
  let authorsHTML = '';
  publication.authors.forEach((author, index) => {
    if (author.includes('M. Islam')) {
      authorsHTML += `<span class="highlight-name">${author}</span>`;
    } else {
      authorsHTML += author;
    }

    if (index < publication.authors.length - 1) {
      authorsHTML += ', ';
    }
  });

  authors.innerHTML = authorsHTML;
  content.appendChild(authors);

  // Add venue with award if present
  const venueContainer = document.createElement('div');
  venueContainer.className = 'pub-venue-container';

  const venue = document.createElement('div');
  venue.className = 'pub-venue';
  venue.textContent = publication.venue;
  venueContainer.appendChild(venue);

  // Add award if it exists
  if (publication.award && publication.award.length > 0) {
    const award = document.createElement('div');
    award.className = 'pub-award';
    award.textContent = publication.award;
    venueContainer.appendChild(award);
  }

  content.appendChild(venueContainer);

  // Add links if they exist
  if (publication.links) {
    const links = document.createElement('div');
    links.className = 'pub-links';

    if (publication.links.pdf) {
      const pdfLink = document.createElement('a');
      pdfLink.href = publication.links.pdf;
      pdfLink.textContent = '[PDF]';
      links.appendChild(pdfLink);
    }

    if (publication.links.code) {
      const codeLink = document.createElement('a');
      codeLink.href = publication.links.code;
      codeLink.textContent = '[Code]';
      links.appendChild(codeLink);
    }

    if (publication.links.project) {
      const projectLink = document.createElement('a');
      projectLink.href = publication.links.project;
      projectLink.textContent = '[Project Page]';
      links.appendChild(projectLink);
    }

    content.appendChild(links);
  }

  // Assemble the publication item
  pubItem.appendChild(thumbnail);
  pubItem.appendChild(content);

  return pubItem;
}

// Modal functionality for viewing original images
function openModal(imageSrc) {
  const modal = document.getElementById('imageModal');
  const modalImg = document.getElementById('modalImage');
  modal.style.display = "block";
  setTimeout(() => {
    modal.classList.add('show');
  }, 10);
  modalImg.src = imageSrc;
}

function closeModal() {
  const modal = document.getElementById('imageModal');
  modal.classList.remove('show');
  setTimeout(() => {
    modal.style.display = "none";
  }, 300);
}

// Close modal when clicking outside the image
window.onclick = function (event) {
  const modal = document.getElementById('imageModal');
  if (event.target == modal) {
    closeModal();
  }
}
