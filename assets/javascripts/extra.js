// Custom JavaScript for BigCommerce Semantic Search & Filters Documentation

document.addEventListener('DOMContentLoaded', function() {
    // Add smooth scrolling to anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    // Add copy button to code blocks
    document.querySelectorAll('.highlight').forEach(function(block) {
        const button = document.createElement('button');
        button.className = 'copy-button';
        button.innerHTML = '📋 Copy';
        button.style.cssText = `
            position: absolute;
            top: 8px;
            right: 8px;
            background: rgba(0, 102, 204, 0.8);
            color: white;
            border: none;
            padding: 4px 8px;
            border-radius: 4px;
            font-size: 12px;
            cursor: pointer;
            opacity: 0;
            transition: opacity 0.3s ease;
        `;

        block.style.position = 'relative';
        block.appendChild(button);

        block.addEventListener('mouseenter', () => {
            button.style.opacity = '1';
        });

        block.addEventListener('mouseleave', () => {
            button.style.opacity = '0';
        });

        button.addEventListener('click', function() {
            const code = block.querySelector('code');
            if (code) {
                navigator.clipboard.writeText(code.textContent).then(() => {
                    button.innerHTML = '✅ Copied!';
                    setTimeout(() => {
                        button.innerHTML = '📋 Copy';
                    }, 2000);
                });
            }
        });
    });

    // Add external link indicators
    document.querySelectorAll('a[href^="http"]').forEach(link => {
        if (!link.hostname.includes(window.location.hostname)) {
            link.innerHTML += ' <span style="font-size: 0.8em; opacity: 0.7;">↗</span>';
            link.setAttribute('target', '_blank');
            link.setAttribute('rel', 'noopener noreferrer');
        }
    });

    // Add reading progress indicator
    const progressBar = document.createElement('div');
    progressBar.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        width: 0%;
        height: 3px;
        background: linear-gradient(90deg, #667eea 0%, #764ba2 100%);
        z-index: 9999;
        transition: width 0.3s ease;
    `;
    document.body.appendChild(progressBar);

    window.addEventListener('scroll', () => {
        const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
        const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
        const scrolled = (winScroll / height) * 100;
        progressBar.style.width = scrolled + '%';
    });

    // Add table of contents highlighting
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            const id = entry.target.getAttribute('id');
            if (id) {
                const tocLink = document.querySelector(`.md-nav a[href="#${id}"]`);
                if (tocLink) {
                    if (entry.isIntersecting) {
                        tocLink.classList.add('active');
                    } else {
                        tocLink.classList.remove('active');
                    }
                }
            }
        });
    }, {
        rootMargin: '-20% 0% -35% 0%'
    });

    document.querySelectorAll('h1, h2, h3, h4, h5, h6').forEach(heading => {
        observer.observe(heading);
    });

    // Add keyboard shortcuts
    document.addEventListener('keydown', function(e) {
        // Ctrl/Cmd + K to focus search
        if ((e.ctrlKey || e.metaKey) && e.key === 'k') {
            e.preventDefault();
            const searchInput = document.querySelector('.md-search__input');
            if (searchInput) {
                searchInput.focus();
            }
        }

        // Escape to close search
        if (e.key === 'Escape') {
            const searchInput = document.querySelector('.md-search__input');
            if (searchInput && document.activeElement === searchInput) {
                searchInput.blur();
            }
        }
    });

    // Add print button
    const printButton = document.createElement('button');
    printButton.innerHTML = '🖨️ Print';
    printButton.className = 'print-button';
    printButton.style.cssText = `
        position: fixed;
        bottom: 20px;
        right: 20px;
        background: var(--bc-gradient, linear-gradient(135deg, #667eea 0%, #764ba2 100%));
        color: white;
        border: none;
        padding: 12px 16px;
        border-radius: 50px;
        cursor: pointer;
        box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
        font-weight: 600;
        z-index: 1000;
        transition: all 0.3s ease;
    `;

    printButton.addEventListener('click', () => {
        window.print();
    });

    printButton.addEventListener('mouseenter', () => {
        printButton.style.transform = 'translateY(-2px)';
        printButton.style.boxShadow = '0 6px 20px rgba(0, 0, 0, 0.2)';
    });

    printButton.addEventListener('mouseleave', () => {
        printButton.style.transform = 'translateY(0)';
        printButton.style.boxShadow = '0 4px 12px rgba(0, 0, 0, 0.15)';
    });

    document.body.appendChild(printButton);

    // Add image zoom functionality
    document.querySelectorAll('img').forEach(img => {
        img.style.cursor = 'zoom-in';
        img.addEventListener('click', function() {
            const overlay = document.createElement('div');
            overlay.style.cssText = `
                position: fixed;
                top: 0;
                left: 0;
                width: 100%;
                height: 100%;
                background: rgba(0, 0, 0, 0.9);
                display: flex;
                justify-content: center;
                align-items: center;
                z-index: 10000;
                cursor: zoom-out;
            `;

            const zoomedImg = img.cloneNode();
            zoomedImg.style.cssText = `
                max-width: 90%;
                max-height: 90%;
                object-fit: contain;
                border-radius: 8px;
                box-shadow: 0 10px 30px rgba(0, 0, 0, 0.5);
            `;

            overlay.appendChild(zoomedImg);
            document.body.appendChild(overlay);

            overlay.addEventListener('click', () => {
                document.body.removeChild(overlay);
            });

            document.addEventListener('keydown', function escapeHandler(e) {
                if (e.key === 'Escape') {
                    document.body.removeChild(overlay);
                    document.removeEventListener('keydown', escapeHandler);
                }
            });
        });
    });

    // Add feedback widget
    const feedbackWidget = document.createElement('div');
    feedbackWidget.innerHTML = `
        <div style="margin-bottom: 10px; font-weight: 600;">Was this page helpful?</div>
        <button class="feedback-btn" data-feedback="yes">👍 Yes</button>
        <button class="feedback-btn" data-feedback="no">👎 No</button>
        <div class="feedback-thanks" style="display: none; color: #28a745; font-weight: 600; margin-top: 10px;">
            Thank you for your feedback!
        </div>
    `;
    feedbackWidget.style.cssText = `
        background: #f8f9fa;
        border: 1px solid #dee2e6;
        border-radius: 8px;
        padding: 20px;
        margin: 30px 0;
        text-align: center;
    `;

    feedbackWidget.querySelectorAll('.feedback-btn').forEach(btn => {
        btn.style.cssText = `
            background: white;
            border: 1px solid #dee2e6;
            padding: 8px 16px;
            margin: 0 5px;
            border-radius: 4px;
            cursor: pointer;
            transition: all 0.3s ease;
        `;

        btn.addEventListener('click', function() {
            const feedback = this.getAttribute('data-feedback');
            // Here you could send feedback to analytics or feedback service
            console.log('User feedback:', feedback);

            feedbackWidget.querySelector('.feedback-thanks').style.display = 'block';
            feedbackWidget.querySelectorAll('.feedback-btn').forEach(b => b.style.display = 'none');
        });

        btn.addEventListener('mouseenter', () => {
            btn.style.background = '#e9ecef';
        });

        btn.addEventListener('mouseleave', () => {
            btn.style.background = 'white';
        });
    });

    // Add feedback widget to the end of main content
    const mainContent = document.querySelector('.md-content__inner');
    if (mainContent) {
        mainContent.appendChild(feedbackWidget);
    }

    console.log('📚 BigCommerce Semantic Search & Filters Documentation loaded successfully!');
});