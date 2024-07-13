document.addEventListener('DOMContentLoaded', function() {
    const paths = document.querySelectorAll('svg path');

    paths.forEach(path => {
        path.addEventListener('mouseover', function() {
            const pathClass = path.getAttribute('class');

            // Select description box based on path's class
            const descriptionBox = document.querySelector(`.${pathClass}-description`);

            if (descriptionBox) {
                descriptionBox.style.display = 'block';
                path.style.fill='#000';
            }
        });

        path.addEventListener('mouseout', function() {
            const pathClass = path.getAttribute('class');

            // Select description box based on path's class
            const descriptionBox = document.querySelector(`.${pathClass}-description`);

            if (descriptionBox) {
                descriptionBox.style.display = 'none';
                path.style.fill='';
            }
        });
    });
});

// hello
// just to check

