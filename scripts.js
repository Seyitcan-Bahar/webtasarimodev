// Kullanıcıya özel mesaj göstermek için
window.onload = function() {
    alert('Web sitemize hoş geldiniz!');
}

// Açılır-Kapanır içerik için
document.addEventListener("DOMContentLoaded", function() {
    var projectDetails = document.querySelectorAll('.project');

    projectDetails.forEach(function(project) {
        var detail = project.querySelector('p');
        detail.style.display = 'none';

        project.querySelector('h3').addEventListener('click', function() {
            if (detail.style.display === 'none') {
                detail.style.display = 'block';
            } else {
                detail.style.display = 'none';
            }
        });
    });
});
