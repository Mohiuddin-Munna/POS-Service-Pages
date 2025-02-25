// Dropdown  ######

document.querySelector('.dropbtn').addEventListener('click', function() {
    let dropdownContent = document.querySelector('.dropdown-content');
    dropdownContent.style.display = dropdownContent.style.display === 'block' ? 'none' : 'block';
});

// Modal ######

document.getElementById('openModal').onclick = function() {
    document.getElementById('modal').style.display = 'block';
}

document.querySelector('.close').onclick = function() {
    document.getElementById('modal').style.display = 'none';
}

window.onclick = function(event) {
    if (event.target == document.getElementById('modal')) {
        document.getElementById('modal').style.display = 'none';
    }
}

document.getElementById('serviceTypeForm').onsubmit = function(event) {
    event.preventDefault();
    // Perform submission actions here
    alert('Service Type Added!');
    document.getElementById('modal').style.display = 'none';
}