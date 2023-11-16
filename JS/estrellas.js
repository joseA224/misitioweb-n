function updateStars() {
    var ratingInput = document.querySelector('.calificacion');
    var ratingValue = parseFloat(ratingInput.value);

    if (ratingValue >= 1 && ratingValue <= 5) {
        document.getElementById('starRating').querySelector('input[value="' + ratingValue + '"]').checked = true;
    }
}