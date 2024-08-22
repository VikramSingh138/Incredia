document.addEventListener('DOMContentLoaded', function() {
    const paths = document.querySelectorAll('svg path');
    const defaultBox = document.querySelector('#default-box');

    paths.forEach(path => {
        path.addEventListener('mouseover', function() {
            const descriptionSelector = path.getAttribute('data-description');
            const descriptionBox = document.querySelector(descriptionSelector);

            if (descriptionBox) {
                descriptionBox.style.display = 'block';
                descriptionBox.style.opacity = 1;
                // descriptionBox.style.backgroundColor = 'transparent';
            }

            // Hide the default box
            if (defaultBox) {
                defaultBox.style.display = 'none';
            }

            if (path.classList.contains('path3') || path.classList.contains('path4')) {
                document.querySelectorAll('.path3, .path4').forEach(p => p.style.fill = 'darkblue');
                // document.querySelectorAll('.path3, .path4').forEach(p => p.style.fill = '#f1f4de');
                // document.querySelectorAll('.path3, .path4').forEach(p => p.style.stroke = 'black');
            } else {
                path.style.fill = 'darkblue';
                // path.style.fill = "#f1f4de";
                // path.style.stroke = 'black';
            }
        });

        path.addEventListener('mouseout', function() {
            const descriptionSelector = path.getAttribute('data-description');
            const descriptionBox = document.querySelector(descriptionSelector);

            if (descriptionBox) {
                descriptionBox.style.display = 'none';
                descriptionBox.style.opacity = 0;
            }

            if (path.classList.contains('path3') || path.classList.contains('path4')) {
                document.querySelectorAll('.path3, .path4').forEach(p => p.style.fill = '');
            } else {
                path.style.fill = '';
            }

            // Check if any description box is still visible
            const anyVisible = Array.from(document.querySelectorAll('svg path'))
                .some(p => {
                    const selector = p.getAttribute('data-description');
                    const box = document.querySelector(selector);
                    return box && box.style.display === 'block';
                });

            // Show the default box if none are visible
            if (defaultBox && !anyVisible) {
                defaultBox.style.display = 'block';
            }
        });
    });
});
