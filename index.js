const openMenu = document.getElementById("open-menu");
const closeMenu = document.getElementById("close-menu");
const navMenu = document.getElementById("nav-bar-lists");

/* Open Menu */
openMenu.addEventListener("click", () => {
    navMenu.classList.add("active");
    openMenu.style.display = "none";
    closeMenu.style.display = "block";
});

/* Close Menu */
closeMenu.addEventListener("click", () => {
    navMenu.classList.remove("active");
    closeMenu.style.display = "none";
    openMenu.style.display = "block";
});

/* Close when clicking a menu link */
document.querySelectorAll(".nav-items a").forEach(link => {
    link.addEventListener("click", () => {
        navMenu.classList.remove("active");
        closeMenu.style.display = "none";
        openMenu.style.display = "block";
    });
});

/* ================= MODAL LOGIC ================= */
const eventModal = document.getElementById('eventModal');
const closeModalBtn = document.getElementById('closeModal');

// Open Modal
document.querySelectorAll('.view-btn').forEach(button => {
    button.addEventListener('click', () => {
        const data = button.dataset;
        
        document.getElementById('modalImg').src = data.image;
        document.getElementById('modalTitle').innerText = data.title;
        document.getElementById('modalType').innerText = data.type;
        document.getElementById('modalType').className = 'event-type ' + data.type.toLowerCase();
        document.getElementById('modalDate').innerText = '📅 ' + data.date;
        document.getElementById('modalStats').innerText = '👥 ' + data.participants + ' Participants';
        document.getElementById('modalDesc').innerText = data.desc;
        
        // Enriched fields
        document.getElementById('modalSpeakers').innerText = data.speakers || 'TBA';
        document.getElementById('modalHighlights').innerText = data.highlights || 'TBA';
        document.getElementById('modalVenue').innerText = data.venue || 'TBA';

        if (eventModal) {
            eventModal.classList.add('active');
            document.body.style.overflow = 'hidden'; // Prevent scroll
        }
    });
});

// Close Modal
if (closeModalBtn) {
    closeModalBtn.addEventListener('click', () => {
        eventModal.classList.remove('active');
        document.body.style.overflow = 'auto';
    });
}

// Close on Outside Click
window.addEventListener('click', (e) => {
    if (e.target === eventModal) {
        eventModal.classList.remove('active');
        document.body.style.overflow = 'auto';
    }
    if (e.target === document.getElementById('registrationModal')) {
        document.getElementById('registrationModal').classList.remove('active');
        document.body.style.overflow = 'auto';
    }
});

/* ================= REGISTRATION LOGIC ================= */
const registrationModal = document.getElementById('registrationModal');
const closeRegModal = document.getElementById('closeRegModal');
const regForm = document.getElementById('eventRegistrationForm');

window.registerEvent = function(eventTitle) {
    document.getElementById('regEventTitle').innerText = 'Register for ' + eventTitle;
    document.getElementById('regEventName').value = eventTitle;
    registrationModal.classList.add('active');
    document.body.style.overflow = 'hidden';
    
    // Reset form and success message
    regForm.style.display = 'flex';
    document.getElementById('regSuccess').style.display = 'none';
    regForm.reset();
};

if (closeRegModal) {
    closeRegModal.addEventListener('click', () => {
        registrationModal.classList.remove('active');
        document.body.style.overflow = 'auto';
    });
}

if (regForm) {
    regForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        // Mocking registration process
        regForm.style.display = 'none';
        document.getElementById('regSuccess').style.display = 'block';
        
        // Close modal after 2 seconds
        setTimeout(() => {
            registrationModal.classList.remove('active');
            document.body.style.overflow = 'auto';
        }, 2000);
    });
}

const viewDetailsRegForm = document.getElementById('viewDetailsRegForm');
if (viewDetailsRegForm) {
    viewDetailsRegForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        document.getElementById('viewDetailsRegSuccess').style.display = 'block';
        
        setTimeout(() => {
            document.getElementById('eventModal').classList.remove('active');
            document.body.style.overflow = 'auto';
            document.getElementById('viewDetailsRegSuccess').style.display = 'none';
            viewDetailsRegForm.reset();
        }, 2000);
    });
}