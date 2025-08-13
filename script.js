const timeline = document.getElementById('timeline');
const modal = document.getElementById('modal');
const closeModal = document.getElementById('closeModal');

const modalImage = document.getElementById('modalImage');
const modalTitle = document.getElementById('modalTitle');
const modalYear = document.getElementById('modalYear');
const modalCategory = document.getElementById('modalCategory');
const modalDescription = document.getElementById('modalDescription');

// Sample events data
const events = [
  { year: 2000, title: "Y2K", description: "Millennium bug scare.", imageURL: "https://via.placeholder.com/300", category: "Technology" },
  { year: 2004, title: "Facebook Launch", description: "Social media revolution.", imageURL: "https://via.placeholder.com/300", category: "Social" },
  { year: 2007, title: "iPhone Release", description: "Changed mobile phones forever.", imageURL: "https://via.placeholder.com/300", category: "Technology" },
  { year: 2012, title: "Curiosity Rover", description: "Mars exploration milestone.", imageURL: "https://via.placeholder.com/300", category: "Space" },
  { year: 2016, title: "Pokemon Go", description: "Augmented reality gaming.", imageURL: "https://via.placeholder.com/300", category: "Gaming" },
  { year: 2020, title: "COVID-19 Pandemic", description: "Global health crisis.", imageURL: "https://via.placeholder.com/300", category: "Health" },
  { year: 2021, title: "James Webb Telescope", description: "Advanced space observation.", imageURL: "https://via.placeholder.com/300", category: "Space" },
  { year: 2024, title: "AI Boom", description: "AI adoption everywhere.", imageURL: "https://via.placeholder.com/300", category: "Technology" }
];

// Render event markers
events.forEach((ev, index) => {
  const marker = document.createElement('div');
  marker.className = 'event-marker';
  marker.textContent = ev.year;
  marker.addEventListener('click', () => {
    modalImage.src = ev.imageURL;
    modalTitle.textContent = ev.title;
    modalYear.textContent = `Year: ${ev.year}`;
    modalCategory.textContent = `Category: ${ev.category}`;
    modalDescription.textContent = ev.description;
    modal.classList.remove('hidden');
  });
  timeline.appendChild(marker);
});

// Close modal
closeModal.addEventListener('click', () => modal.classList.add('hidden'));
modal.addEventListener('click', (e) => {
  if (e.target === modal) modal.classList.add('hidden');
});
