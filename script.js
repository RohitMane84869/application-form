// Client-side validation and success message display
document.getElementById('applicationForm').addEventListener('submit', function (e) {
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const phone = document.getElementById('phone').value.trim();

    if (!name || !email || !phone) {
        alert("Please fill out all required fields.");
        e.preventDefault();
        return;
    }

    document.getElementById('successMessage').style.display = 'block';
});
