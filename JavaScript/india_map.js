// document.addEventListener('DOMContentLoaded', function() {
//     const paths = document.querySelectorAll('svg path');

//     paths.forEach(path => {
//         path.addEventListener('mouseover', function() {
//             let descriptionBox;

//             // Determine which description box to show based on the path class
//             if (path.classList.contains('path1')) {
//                 descriptionBox = document.querySelector('.path1-description');
//             } else if (path.classList.contains('path2')) {
//                 descriptionBox = document.querySelector('.path2-description');
//             } else if (path.classList.contains('path3') || path.classList.contains('path4')) {
//                 descriptionBox = document.querySelector('.path3-4-description');
//             } else if (path.classList.contains('path5')) {
//                 descriptionBox = document.querySelector('.path5-description');
//             } else if (path.classList.contains('path6')) {
//                 descriptionBox = document.querySelector('.path6-description');
//             } else if (path.classList.contains('path7')) {
//                 descriptionBox = document.querySelector('.path7-description');
//             }

//             if (descriptionBox) {
//                 descriptionBox.style.display = 'block';
//             }
            
//             if (path.classList.contains('path3') || path.classList.contains('path4')) {
//                 document.querySelector('.path3').style.fill = '#000';
//                 document.querySelector('.path4').style.fill = '#000';
//             } else {
//                 path.style.fill = '#000';
//             }
//         });

//         path.addEventListener('mouseout', function() {
//             let descriptionBox;

//             // Determine which description box to hide based on the path class
//             if (path.classList.contains('path1')) {
//                 descriptionBox = document.querySelector('.path1-description');
//             } else if (path.classList.contains('path2')) {
//                 descriptionBox = document.querySelector('.path2-description');
//             } else if (path.classList.contains('path3') || path.classList.contains('path4')) {
//                 descriptionBox = document.querySelector('.path3-4-description');
//             } else if (path.classList.contains('path5')) {
//                 descriptionBox = document.querySelector('.path5-description');
//             } else if (path.classList.contains('path6')) {
//                 descriptionBox = document.querySelector('.path6-description');
//             } else if (path.classList.contains('path7')) {
//                 descriptionBox = document.querySelector('.path7-description');
//             }

//             if (descriptionBox) {
//                 descriptionBox.style.display = 'none';
//             }

//             if (path.classList.contains('path3') || path.classList.contains('path4')) {
//                 document.querySelector('.path3').style.fill = ''; // reset to original color
//                 document.querySelector('.path4').style.fill = ''; // reset to original color
//             } else {
//                 path.style.fill = ''; // reset to original color
//             }
//         });
//     });
// });

document.addEventListener('DOMContentLoaded', function() {
    const paths = document.querySelectorAll('svg path');

    paths.forEach(path => {
        path.addEventListener('mouseover', function() {
            const descriptionSelector = path.getAttribute('data-description');
            const descriptionBox = document.querySelector(descriptionSelector);

            if (descriptionBox) {
                descriptionBox.style.display = 'block';
                descriptionBox.style.opacity=1;
            }

            if (path.classList.contains('path3') || path.classList.contains('path4')) {
                document.querySelectorAll('.path3, .path4').forEach(p => p.style.fill = 'transparent');
                document.querySelectorAll('.path3, .path4').forEach(p => p.style.stroke = 'black');
            } else {
                path.style.fill = 'transparent';
                path.style.stroke = 'black';
            }
        });

        path.addEventListener('mouseout', function() {
            const descriptionSelector = path.getAttribute('data-description');
            const descriptionBox = document.querySelector(descriptionSelector);

            if (descriptionBox) {
                descriptionBox.style.display = 'none';
                descriptionBox.style.opacity=0;
            }

            if (path.classList.contains('path3') || path.classList.contains('path4')) {
                document.querySelectorAll('.path3, .path4').forEach(p => p.style.fill = '');
            } else {
                path.style.fill = '';
            }
        });
    });
});
