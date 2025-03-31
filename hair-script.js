function selectStyle(style) {
    document.getElementById('style').value = style;
}

function submitBooking(event) {
    event.preventDefault();
    const name = document.getElementById('name').value;
    const date = document.getElementById('date').value;
    const style = document.getElementById('style').value;

    alert(`Booking confirmed for ${name} on ${date} for ${style}.`);
    // Here you would typically send this data to your server for processing
}
