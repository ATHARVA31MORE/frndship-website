document.addEventListener('DOMContentLoaded', function() {
    const showFlowersButton = document.getElementById('showFlowers');
    const backButton = document.getElementById('back');

    if (showFlowersButton) {
        showFlowersButton.addEventListener('click', function() {
            window.location.href = 'flowers.html';
        });
    }

    if (backButton) {
        backButton.addEventListener('click', function() {
            window.location.href = 'index.html';
        });
    }
});