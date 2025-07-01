document.getElementById('switch-to-signup').addEventListener('click', function(e) {
            e.preventDefault();
            document.querySelector('.signin-half').style.transform = 'translateX(-100%)';
            document.querySelector('.signup-half').style.transform = 'translateX(-100%)';
            setTimeout(() => {
                document.querySelector('.signin-half').style.display = 'none';
                document.querySelector('.signup-half').style.width = '100%';
                document.querySelector('.signup-half').style.transform = 'none';
            }, 500);
        });

        document.getElementById('switch-to-signin').addEventListener('click', function(e) {
            e.preventDefault();
            document.querySelector('.signin-half').style.display = 'flex';
            document.querySelector('.signin-half').style.transform = 'translateX(0)';
            document.querySelector('.signup-half').style.transform = 'translateX(100%)';
            setTimeout(() => {
                document.querySelector('.signup-half').style.transform = 'none';
                document.querySelector('.signin-half').style.transform = 'none';
            }, 500);
        });

        // Form submission handlers
        document.getElementById('signin-form').addEventListener('submit', function(e) {
            e.preventDefault();
            alert('Sign in functionality would be implemented here');
        });

        document.getElementById('signup-form').addEventListener('submit', function(e) {
            e.preventDefault();
            alert('Sign up functionality would be implemented here');
        });

        // Responsive behavior when switching between mobile and desktop
        function checkScreenSize() {
            if (window.innerWidth <= 768) {
                document.querySelector('.signin-half').style.display = 'flex';
                document.querySelector('.signin-half').style.transform = 'none';
                document.querySelector('.signup-half').style.transform = 'none';
                document.querySelector('.signup-half').style.width = 'auto';
            }
        }

        window.addEventListener('resize', checkScreenSize);
        checkScreenSize();