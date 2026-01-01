// ===== CONFIGURATION =====
const CONFIG = {
    whatsappNumber: '+1234567890',
    storeName: 'ChronoLuxe',
    productsPerLoad: 6,
    maxProducts: 30,
    animationSpeed: 300,
    protectionEnabled: true
};

// ===== PRODUCTS DATA =====
const PRODUCTS = [
    {
        id: 1,
        name: "Rolex Submariner Date",
        category: "watch",
        price: 12999,
        originalPrice: 14999,
        description: "Iconic diver's watch with date function",
        image: "https://images.unsplash.com/photo-1523170335258-f5ed11844a49?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
        specs: ["300m Waterproof", "Stainless Steel", "Ceramic Bezel"],
        badge: "Bestseller",
        limited: false
    },
    {
        id: 2,
        name: "Cartier Santos Diamond",
        category: "watch",
        price: 28999,
        originalPrice: 32999,
        description: "Luxury watch with diamond bezel",
        image: "https://images.unsplash.com/photo-1547996160-81f58c6a784c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
        specs: ["42 Diamonds", "18K Gold", "Automatic"],
        badge: "Limited",
        limited: true
    },
    {
        id: 3,
        name: "AP Royal Oak Chronograph",
        category: "watch",
        price: 45999,
        description: "Luxury sports chronograph watch",
        image: "https://images.unsplash.com/photo-1508685096489-7aacd43bd3b1?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
        specs: ["Stainless Steel", "Chronograph", "Sapphire Crystal"],
        badge: "Premium",
        limited: false
    },
    {
        id: 4,
        name: "24K Gold Cuban Chain",
        category: "chain",
        price: 8999,
        description: "Solid 24K gold Cuban link chain",
        image: "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
        specs: ["24K Gold", "30 inches", "45mm Width"],
        badge: "Popular",
        limited: false
    },
    {
        id: 5,
        name: "Platinum Diamond Chain",
        category: "chain",
        price: 24999,
        description: "Platinum chain with diamond accents",
        image: "https://images.unsplash.com/photo-1594576722512-582d5577dc56?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
        specs: ["Platinum", "25 Diamonds", "Custom Length"],
        badge: "Luxury",
        limited: true
    },
    {
        id: 6,
        name: "Rolex & Gold Chain Combo",
        category: "combo",
        price: 38999,
        originalPrice: 42999,
        description: "Complete luxury set with watch and chain",
        image: "https://images.unsplash.com/photo-1533139502658-0198f920d8e8?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
        specs: ["Rolex Watch", "Matching Chain", "Presentation Box"],
        badge: "Combo",
        limited: true
    },
    {
        id: 7,
        name: "Patek Philippe Nautilus",
        category: "watch",
        price: 89999,
        description: "Ultra-luxury sports watch",
        image: "https://images.unsplash.com/photo-1526045431048-f857369baa09?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
        specs: ["Stainless Steel", "Automatic", "Date Function"],
        badge: "Elite",
        limited: true
    },
    {
        id: 8,
        name: "Silver Rope Chain",
        category: "chain",
        price: 2999,
        description: "Classic silver rope chain",
        image: "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
        specs: ["925 Silver", "Rope Design", "24 inches"],
        badge: "Classic",
        limited: false
    },
    {
        id: 9,
        name: "Omega Speedmaster Moonwatch",
        category: "watch",
        price: 7999,
        originalPrice: 8999,
        description: "Legendary moonwatch chronograph",
        image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
        specs: ["Moonwatch", "Chronograph", "Manual Wind"],
        badge: "Iconic",
        limited: false
    },
    {
        id: 10,
        name: "Diamond Tennis Chain",
        category: "chain",
        price: 15999,
        description: "Diamond-set tennis chain",
        image: "https://images.unsplash.com/photo-1533139502658-0198f920d8e8?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
        specs: ["100 Diamonds", "White Gold", "Flexible"],
        badge: "Dazzling",
        limited: true
    }
];

// ===== STATE MANAGEMENT =====
let state = {
    theme: localStorage.getItem('theme') || 'light',
    cart: JSON.parse(localStorage.getItem('cart')) || [],
    products: [],
    visibleProducts: CONFIG.productsPerLoad,
    currentFilter: 'all'
};

// ===== DOM ELEMENTS =====
const elements = {
    // Theme
    html: document.documentElement,
    themeToggle: document.getElementById('themeToggle'),
    
    // Navigation
    header: document.getElementById('header'),
    navMenu: document.getElementById('navMenu'),
    menuToggle: document.getElementById('menuToggle'),
    navLinks: document.querySelectorAll('.nav-link'),
    
    // Products
    productsGrid: document.getElementById('productsGrid'),
    filterButtons: document.getElementById('filterButtons'),
    loadMoreBtn: document.getElementById('loadMoreBtn'),
    
    // Cart
    cartIcon: document.getElementById('cartIcon'),
    cartModal: document.getElementById('cartModal'),
    cartClose: document.getElementById('cartClose'),
    cartItems: document.getElementById('cartItems'),
    cartCount: document.querySelector('.cart-count'),
    whatsappCheckout: document.getElementById('whatsappCheckout'),
    
    // Order Modal
    orderModal: document.getElementById('orderModal'),
    orderClose: document.getElementById('orderClose'),
    orderContent: document.getElementById('orderContent'),
    
    // Contact
    contactForm: document.getElementById('contactForm'),
    whatsappContact: document.getElementById('whatsappContact'),
    
    // Newsletter
    newsletterForm: document.getElementById('newsletterForm'),
    
    // Loading
    loadingScreen: document.getElementById('loadingScreen'),
    
    // Back to top
    backToTop: document.getElementById('backToTop'),
    
    // Background elements
    particles: document.getElementById('particles'),
    floatingWatch: document.getElementById('floatingWatch'),
    floatingChain: document.getElementById('floatingChain'),
    diamondShower: document.getElementById('diamondShower')
};

// ===== THEME MANAGEMENT =====
function initTheme() {
    // Set initial theme
    elements.html.setAttribute('data-theme', state.theme);
    
    // Theme toggle event
    elements.themeToggle.addEventListener('click', toggleTheme);
    
    // Add theme transition class
    setTimeout(() => {
        elements.html.classList.add('theme-transition');
    }, 100);
}

function toggleTheme() {
    state.theme = state.theme === 'light' ? 'dark' : 'light';
    elements.html.setAttribute('data-theme', state.theme);
    localStorage.setItem('theme', state.theme);
    
    // Add animation effect
    elements.themeToggle.style.transform = 'scale(0.9)';
    setTimeout(() => {
        elements.themeToggle.style.transform = '';
    }, 300);
}

// ===== PROTECTION SYSTEM =====
function initProtection() {
    if (!CONFIG.protectionEnabled) return;
    
    // Disable right-click
    document.addEventListener('contextmenu', (e) => {
        e.preventDefault();
        showProtectionWarning();
        return false;
    });
    
    // Disable keyboard shortcuts
    document.addEventListener('keydown', (e) => {
        // Disable F12, Ctrl+Shift+I, Ctrl+Shift+J, Ctrl+U
        if (
            e.key === 'F12' ||
            (e.ctrlKey && e.shiftKey && e.key === 'I') ||
            (e.ctrlKey && e.shiftKey && e.key === 'J') ||
            (e.ctrlKey && e.key === 'U')
        ) {
            e.preventDefault();
            showProtectionWarning();
            return false;
        }
    });
    
    // Disable text selection on protected elements
    const protectedElements = document.querySelectorAll('.product-card, .price-tag, .featured-content');
    protectedElements.forEach(el => {
        el.classList.add('protected');
    });
    
    // Blur content when leaving tab
    document.addEventListener('visibilitychange', () => {
        if (document.hidden) {
            document.body.style.filter = 'blur(5px)';
            document.body.style.transition = 'filter 0.3s';
        } else {
            setTimeout(() => {
                document.body.style.filter = '';
            }, 300);
        }
    });
}

function showProtectionWarning() {
    // Create warning element
    const warning = document.createElement('div');
    warning.innerHTML = `
        <div style="
            position: fixed;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            background: rgba(0,0,0,0.9);
            color: #d4af37;
            padding: 2rem;
            border-radius: 10px;
            text-align: center;
            z-index: 99999;
            border: 2px solid #d4af37;
            backdrop-filter: blur(10px);
            min-width: 300px;
        ">
            <div style="font-size: 3rem; margin-bottom: 1rem;">⚠️</div>
            <h3 style="margin: 0 0 1rem 0;">Content Protected</h3>
            <p style="margin: 0; opacity: 0.8;">This content is protected by intellectual property rights.</p>
        </div>
    `;
    
    document.body.appendChild(warning);
    
    // Remove warning after 3 seconds
    setTimeout(() => {
        warning.remove();
    }, 3000);
}

// ===== ANIMATION SYSTEM =====
function initAnimations() {
    // Initialize particles
    createParticles();
    
    // Initialize floating elements
    animateFloatingElements();
    
    // Initialize diamond shower
    createDiamondShower();
    
    // Initialize scroll animations
    initScrollAnimations();
    
    // Initialize counter animations
    initCounters();
}

function createParticles() {
    const particleCount = 50;
    
    for (let i = 0; i < particleCount; i++) {
        const particle = document.createElement('div');
        particle.classList.add('particle');
        
        // Random properties
        const size = Math.random() * 4 + 1;
        const posX = Math.random() * 100;
        const duration = Math.random() * 20 + 10;
        const delay = Math.random() * 20;
        
        // Apply styles
        particle.style.width = `${size}px`;
        particle.style.height = `${size}px`;
        particle.style.left = `${posX}%`;
        particle.style.animationDuration = `${duration}s`;
        particle.style.animationDelay = `${delay}s`;
        
        // Random color based on theme
        const colors = state.theme === 'light' 
            ? ['#d4af37', '#f7ef8a', '#c0a062'] 
            : ['#d4af37', '#8b7355', '#b8941f'];
        const color = colors[Math.floor(Math.random() * colors.length)];
        particle.style.background = color;
        
        elements.particles.appendChild(particle);
    }
}

function animateFloatingElements() {
    // Watch animation
    let watchAngle = 0;
    function animateWatch() {
        watchAngle += 0.5;
        const x = Math.sin(watchAngle * Math.PI / 180) * 50;
        const y = Math.cos(watchAngle * Math.PI / 180) * 30;
        elements.floatingWatch.style.transform = `translate(${x}px, ${y}px) rotate(${watchAngle}deg)`;
        
        requestAnimationFrame(animateWatch);
    }
    animateWatch();
    
    // Chain animation
    let chainAngle = 0;
    function animateChain() {
        chainAngle += 0.3;
        const x = Math.cos(chainAngle * Math.PI / 180) * 40;
        const y = Math.sin(chainAngle * Math.PI / 180) * 60;
        elements.floatingChain.style.transform = `translate(${x}px, ${y}px) rotate(${-chainAngle}deg)`;
        
        requestAnimationFrame(animateChain);
    }
    animateChain();
}

function createDiamondShower() {
    const diamondCount = 20;
    
    for (let i = 0; i < diamondCount; i++) {
        const diamond = document.createElement('div');
        diamond.classList.add('diamond');
        
        // Random properties
        const size = Math.random() * 20 + 10;
        const posX = Math.random() * 100;
        const duration = Math.random() * 10 + 5;
        const delay = Math.random() * 10;
        
        // Apply styles
        diamond.style.width = `${size}px`;
        diamond.style.height = `${size}px`;
        diamond.style.left = `${posX}%`;
        diamond.style.animationDuration = `${duration}s`;
        diamond.style.animationDelay = `${delay}s`;
        
        elements.diamondShower.appendChild(diamond);
    }
}

function initScrollAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '50px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animated');
            }
        });
    }, observerOptions);
    
    // Observe all animate-on-scroll elements
    document.querySelectorAll('.animate-on-scroll').forEach(el => {
        observer.observe(el);
    });
}

function initCounters() {
    const counters = document.querySelectorAll('.stat-number');
    
    counters.forEach(counter => {
        const target = parseInt(counter.getAttribute('data-count'));
        const increment = target / 100;
        let current = 0;
        
        const updateCounter = () => {
            if (current < target) {
                current += increment;
                counter.textContent = Math.floor(current);
                setTimeout(updateCounter, 20);
            } else {
                counter.textContent = target;
            }
        };
        
        // Start counter when in view
        const observer = new IntersectionObserver((entries) => {
            if (entries[0].isIntersecting) {
                updateCounter();
                observer.disconnect();
            }
        });
        
        observer.observe(counter);
    });
}

// ===== PRODUCTS MANAGEMENT =====
function initProducts() {
    state.products = [...PRODUCTS];
    renderProducts();
    
    // Filter buttons
    elements.filterButtons.addEventListener('click', (e) => {
        if (e.target.classList.contains('filter-btn')) {
            // Update active button
            document.querySelectorAll('.filter-btn').forEach(btn => {
                btn.classList.remove('active');
            });
            e.target.classList.add('active');
            
            // Update filter
            state.currentFilter = e.target.dataset.filter;
            state.visibleProducts = CONFIG.productsPerLoad;
            renderProducts();
        }
    });
    
    // Load more button
    elements.loadMoreBtn.addEventListener('click', loadMoreProducts);
}

function renderProducts() {
    elements.productsGrid.innerHTML = '';
    
    // Filter products
    const filteredProducts = state.products.filter(product => {
        if (state.currentFilter === 'all') return true;
        if (state.currentFilter === 'limited') return product.limited;
        return product.category === state.currentFilter;
    });
    
    // Get visible products
    const visibleProducts = filteredProducts.slice(0, state.visibleProducts);
    
    // Render products
    visibleProducts.forEach(product => {
        const productCard = createProductCard(product);
        elements.productsGrid.appendChild(productCard);
    });
    
    // Update load more button
    if (state.visibleProducts >= filteredProducts.length) {
        elements.loadMoreBtn.style.display = 'none';
    } else {
        elements.loadMoreBtn.style.display = 'flex';
    }
}

function createProductCard(product) {
    const card = document.createElement('div');
    card.className = 'product-card animate-on-scroll';
    card.dataset.category = product.category;
    card.dataset.limited = product.limited;
    
    const discountBadge = product.originalPrice 
        ? `<div class="product-badge">Save $${(product.originalPrice - product.price).toLocaleString()}</div>`
        : '';
    
    const originalPrice = product.originalPrice 
        ? `<span class="original">$${product.originalPrice.toLocaleString()}</span>`
        : '';
    
    card.innerHTML = `
        <div class="product-image-container">
            <img src="${product.image}" alt="${product.name}" class="product-img" loading="lazy">
            ${product.badge ? `<div class="product-badge">${product.badge}</div>` : ''}
            ${discountBadge}
        </div>
        <div class="product-content">
            <h3 class="product-title">${product.name}</h3>
            <p class="product-description">${product.description}</p>
            <div class="product-specs">
                ${product.specs.map(spec => `
                    <div class="spec-item">
                        <i class="fas fa-check"></i>
                        <span>${spec}</span>
                    </div>
                `).join('')}
            </div>
            <div class="product-footer">
                <div class="product-price">
                    $${product.price.toLocaleString()}
                    ${originalPrice}
                </div>
                <div class="product-actions">
                    <button class="action-btn btn-wishlist" title="Add to wishlist">
                        <i class="far fa-heart"></i>
                    </button>
                    <button class="action-btn btn-cart" title="Add to cart">
                        <i class="fas fa-shopping-bag"></i>
                    </button>
                    <button class="action-btn btn-order" data-product='${JSON.stringify(product)}' title="Order via WhatsApp">
                        <i class="fab fa-whatsapp"></i>
                    </button>
                </div>
            </div>
        </div>
    `;
    
    // Add event listeners
    card.querySelector('.btn-cart').addEventListener('click', () => addToCart(product));
    card.querySelector('.btn-order').addEventListener('click', (e) => {
        const productData = JSON.parse(e.target.closest('.btn-order').dataset.product);
        openOrderModal(productData);
    });
    card.querySelector('.btn-wishlist').addEventListener('click', (e) => {
        e.target.classList.toggle('far');
        e.target.classList.toggle('fas');
        e.target.classList.toggle('text-danger');
    });
    
    return card;
}

function loadMoreProducts() {
    state.visibleProducts += CONFIG.productsPerLoad;
    renderProducts();
    
    // Scroll to new products
    elements.productsGrid.lastElementChild.scrollIntoView({
        behavior: 'smooth',
        block: 'nearest'
    });
}

// ===== CART MANAGEMENT =====
function initCart() {
    updateCartCount();
    
    // Cart icon click
    elements.cartIcon.addEventListener('click', openCart);
    elements.cartClose.addEventListener('click', closeCart);
    
    // Close cart on overlay click
    elements.cartModal.querySelector('.cart-overlay').addEventListener('click', closeCart);
    
    // WhatsApp checkout
    elements.whatsappCheckout.addEventListener('click', checkoutViaWhatsApp);
}

function addToCart(product) {
    // Check if product already in cart
    const existingItem = state.cart.find(item => item.id === product.id);
    
    if (existingItem) {
        existingItem.quantity += 1;
    } else {
        state.cart.push({
            ...product,
            quantity: 1
        });
    }
    
    // Update state and UI
    saveCart();
    updateCartCount();
    
    // Show notification
    showNotification(`${product.name} added to cart!`);
    
    // Animation effect
    const cartIcon = elements.cartIcon;
    cartIcon.style.transform = 'scale(1.2)';
    setTimeout(() => {
        cartIcon.style.transform = '';
    }, 300);
}

function removeFromCart(productId) {
    state.cart = state.cart.filter(item => item.id !== productId);
    saveCart();
    updateCartCount();
    renderCartItems();
}

function updateCartCount() {
    const totalItems = state.cart.reduce((sum, item) => sum + item.quantity, 0);
    elements.cartCount.textContent = totalItems;
}

function saveCart() {
    localStorage.setItem('cart', JSON.stringify(state.cart));
}

function openCart() {
    renderCartItems();
    elements.cartModal.classList.add('active');
    document.body.style.overflow = 'hidden';
}

function closeCart() {
    elements.cartModal.classList.remove('active');
    document.body.style.overflow = '';
}

function renderCartItems() {
    if (state.cart.length === 0) {
        elements.cartItems.innerHTML = `
            <div class="text-center" style="padding: 3rem;">
                <div style="font-size: 4rem; margin-bottom: 1rem; opacity: 0.3;">🛒</div>
                <h4 style="margin-bottom: 0.5rem;">Your cart is empty</h4>
                <p style="opacity: 0.7;">Add some luxury items to your cart</p>
            </div>
        `;
        return;
    }
    
    elements.cartItems.innerHTML = state.cart.map(item => `
        <div class="cart-item">
            <img src="${item.image}" alt="${item.name}" class="cart-item-img">
            <div class="cart-item-info">
                <div class="cart-item-title">${item.name}</div>
                <div class="cart-item-price">$${item.price.toLocaleString()} × ${item.quantity}</div>
            </div>
            <button class="cart-item-remove" data-id="${item.id}">
                <i class="fas fa-times"></i>
            </button>
        </div>
    `).join('');
    
    // Add remove event listeners
    elements.cartItems.querySelectorAll('.cart-item-remove').forEach(btn => {
        btn.addEventListener('click', (e) => {
            const productId = parseInt(e.currentTarget.dataset.id);
            removeFromCart(productId);
        });
    });
    
    // Update total
    const total = state.cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    document.querySelector('.total-amount').textContent = `$${total.toLocaleString()}`;
}

function checkoutViaWhatsApp() {
    if (state.cart.length === 0) {
        showNotification('Your cart is empty!', 'warning');
        return;
    }
    
    let message = `Hello ${CONFIG.storeName}! I would like to place an order:\n\n`;
    
    state.cart.forEach((item, index) => {
        message += `${index + 1}. ${item.name} - $${item.price.toLocaleString()} × ${item.quantity}\n`;
    });
    
    const total = state.cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    message += `\nTotal: $${total.toLocaleString()}\n`;
    message += `\nPlease contact me to complete the order.`;
    
    const encodedMessage = encodeURIComponent(message);
    window.open(`https://wa.me/${CONFIG.whatsappNumber}?text=${encodedMessage}`, '_blank');
    
    // Clear cart after checkout
    state.cart = [];
    saveCart();
    updateCartCount();
    closeCart();
}

// ===== ORDER MODAL =====
function openOrderModal(product) {
    elements.orderContent.innerHTML = `
        <div class="order-details">
            <div class="order-image">
                <img src="${product.image}" alt="${product.name}" style="width: 100%; border-radius: 10px;">
            </div>
            <div class="order-info" style="margin-top: 1.5rem;">
                <h4 style="margin-bottom: 0.5rem;">${product.name}</h4>
                <p style="color: var(--text-secondary); margin-bottom: 1rem;">${product.description}</p>
                <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 1.5rem;">
                    <div style="font-size: 2rem; font-weight: bold; color: var(--primary-color);">
                        $${product.price.toLocaleString()}
                    </div>
                    <div style="display: flex; gap: 0.5rem;">
                        ${product.specs.map(spec => `
                            <span style="background: var(--surface-color); padding: 0.25rem 0.75rem; border-radius: 15px; font-size: 0.75rem;">
                                ${spec}
                            </span>
                        `).join('')}
                    </div>
                </div>
                <button class="btn btn-primary" id="confirmOrder" style="width: 100%;">
                    <i class="fab fa-whatsapp"></i>
                    <span>Confirm Order via WhatsApp</span>
                </button>
            </div>
        </div>
    `;
    
    elements.orderModal.classList.add('active');
    document.body.style.overflow = 'hidden';
    
    // Confirm order button
    document.getElementById('confirmOrder').addEventListener('click', () => {
        sendWhatsAppOrder(product);
        elements.orderModal.classList.remove('active');
        document.body.style.overflow = '';
    });
}

function sendWhatsAppOrder(product) {
    let message = `Hello ${CONFIG.storeName}! I would like to order:\n\n`;
    message += `Product: ${product.name}\n`;
    message += `Price: $${product.price.toLocaleString()}\n`;
    message += `Description: ${product.description}\n`;
    message += `\nPlease contact me to complete the order.`;
    
    const encodedMessage = encodeURIComponent(message);
    window.open(`https://wa.me/${CONFIG.whatsappNumber}?text=${encodedMessage}`, '_blank');
}

// ===== CONTACT FORM =====
function initContactForm() {
    elements.contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        const formData = {
            name: document.getElementById('name').value,
            email: document.getElementById('email').value,
            phone: document.getElementById('phone').value,
            inquiryType: document.getElementById('inquiryType').value,
            message: document.getElementById('message').value,
            budget: document.getElementById('budget').value
        };
        
        // Show loading state
        const submitBtn = elements.contactForm.querySelector('.btn-submit');
        const originalText = submitBtn.innerHTML;
        submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Sending...';
        submitBtn.disabled = true;
        
        // Simulate API call
        setTimeout(() => {
            // Reset form
            elements.contactForm.reset();
            
            // Show success message
            showNotification('Message sent successfully! We\'ll contact you soon.', 'success');
            
            // Reset button
            submitBtn.innerHTML = originalText;
            submitBtn.disabled = false;
            
            // Send WhatsApp notification to business
            sendContactWhatsApp(formData);
        }, 1500);
    });
    
    // Direct WhatsApp contact
    elements.whatsappContact.addEventListener('click', () => {
        const message = encodeURIComponent(`Hello ${CONFIG.storeName}! I have an inquiry.`);
        window.open(`https://wa.me/${CONFIG.whatsappNumber}?text=${message}`, '_blank');
    });
}

function sendContactWhatsApp(formData) {
    let message = `📞 New Contact Form Submission\n\n`;
    message += `Name: ${formData.name}\n`;
    message += `Email: ${formData.email}\n`;
    message += `Phone: ${formData.phone}\n`;
    message += `Inquiry Type: ${formData.inquiryType}\n`;
    message += `Budget: ${formData.budget || 'Not specified'}\n`;
    message += `Message: ${formData.message}\n`;
    
    const encodedMessage = encodeURIComponent(message);
    window.open(`https://wa.me/${CONFIG.whatsappNumber}?text=${encodedMessage}`, '_blank');
}

// ===== NAVIGATION =====
function initNavigation() {
    // Mobile menu toggle
    elements.menuToggle.addEventListener('click', () => {
        elements.navMenu.classList.toggle('active');
        elements.menuToggle.classList.toggle('active');
    });
    
    // Smooth scroll for navigation links
    elements.navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            
            const targetId = link.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                // Close mobile menu if open
                elements.navMenu.classList.remove('active');
                elements.menuToggle.classList.remove('active');
                
                // Scroll to target
                const headerHeight = elements.header.offsetHeight;
                const targetPosition = targetElement.offsetTop - headerHeight;
                
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });
    
    // Header scroll effect
    window.addEventListener('scroll', () => {
        if (window.scrollY > 100) {
            elements.header.classList.add('scrolled');
        } else {
            elements.header.classList.remove('scrolled');
        }
        
        // Back to top button
        if (window.scrollY > 500) {
            elements.backToTop.classList.add('visible');
        } else {
            elements.backToTop.classList.remove('visible');
        }
    });
    
    // Back to top
    elements.backToTop.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
}

// ===== NEWSLETTER =====
function initNewsletter() {
    elements.newsletterForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        const email = elements.newsletterForm.querySelector('input[type="email"]').value;
        
        // Simple email validation
        if (!validateEmail(email)) {
            showNotification('Please enter a valid email address.', 'error');
            return;
        }
        
        // Show loading
        const btn = elements.newsletterForm.querySelector('.newsletter-btn');
        const originalIcon = btn.innerHTML;
        btn.innerHTML = '<i class="fas fa-spinner fa-spin"></i>';
        
        // Simulate API call
        setTimeout(() => {
            btn.innerHTML = originalIcon;
            elements.newsletterForm.reset();
            showNotification('Successfully subscribed to newsletter!', 'success');
        }, 1000);
    });
}

function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
}

// ===== NOTIFICATION SYSTEM =====
function showNotification(message, type = 'info') {
    // Remove existing notification
    const existing = document.querySelector('.notification');
    if (existing) existing.remove();
    
    // Create notification
    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    
    // Colors based on type
    const colors = {
        success: '#28a745',
        error: '#dc3545',
        warning: '#ffc107',
        info: '#17a2b8'
    };
    
    notification.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        background: ${colors[type] || colors.info};
        color: white;
        padding: 1rem 1.5rem;
        border-radius: 10px;
        box-shadow: 0 10px 30px rgba(0,0,0,0.2);
        z-index: 9999;
        transform: translateX(150%);
        transition: transform 0.3s ease;
        display: flex;
        align-items: center;
        gap: 0.75rem;
        max-width: 400px;
    `;
    
    notification.innerHTML = `
        <i class="fas fa-${type === 'success' ? 'check-circle' : type === 'error' ? 'exclamation-circle' : type === 'warning' ? 'exclamation-triangle' : 'info-circle'}"></i>
        <span>${message}</span>
    `;
    
    document.body.appendChild(notification);
    
    // Animate in
    setTimeout(() => {
        notification.style.transform = 'translateX(0)';
    }, 10);
    
    // Auto remove after 5 seconds
    setTimeout(() => {
        notification.style.transform = 'translateX(150%)';
        setTimeout(() => {
            notification.remove();
        }, 300);
    }, 5000);
}

// ===== LOADING =====
function initLoading() {
    // Simulate loading time
    setTimeout(() => {
        elements.loadingScreen.classList.add('loaded');
        
        // Initialize animations after loading
        setTimeout(() => {
            initScrollAnimations();
            initCounters();
        }, 100);
    }, 2000);
}

// ===== INITIALIZATION =====
function init() {
    // Initialize all modules
    initTheme();
    initProtection();
    initNavigation();
    initAnimations();
    initProducts();
    initCart();
    initContactForm();
    initNewsletter();
    initLoading();
    
    // Close order modal
    elements.orderClose.addEventListener('click', () => {
        elements.orderModal.classList.remove('active');
        document.body.style.overflow = '';
    });
    
    // Close order modal on overlay click
    elements.orderModal.querySelector('.order-overlay').addEventListener('click', () => {
        elements.orderModal.classList.remove('active');
        document.body.style.overflow = '';
    });
    
    // Add scroll event for animations
    window.addEventListener('scroll', () => {
        document.querySelectorAll('.animate-on-scroll').forEach(el => {
            const rect = el.getBoundingClientRect();
            const viewHeight = Math.max(document.documentElement.clientHeight, window.innerHeight);
            
            if (!(rect.bottom < 0 || rect.top - viewHeight >= 0)) {
                el.classList.add('animated');
            }
        });
    });
    
    // Initialize scroll animations immediately for elements in view
    setTimeout(() => {
        document.querySelectorAll('.animate-on-scroll').forEach(el => {
            const rect = el.getBoundingClientRect();
            const viewHeight = Math.max(document.documentElement.clientHeight, window.innerHeight);
            
            if (!(rect.bottom < 0 || rect.top - viewHeight >= 0)) {
                el.classList.add('animated');
            }
        });
    }, 100);
}

// ===== START APPLICATION =====
document.addEventListener('DOMContentLoaded', init);

// ===== ERROR HANDLING =====
window.addEventListener('error', (e) => {
    console.error('Application error:', e.error);
    showNotification('An error occurred. Please refresh the page.', 'error');
});

// ===== PERFORMANCE OPTIMIZATION =====
// Debounce scroll events
let scrollTimeout;
window.addEventListener('scroll', () => {
    clearTimeout(scrollTimeout);
    scrollTimeout = setTimeout(() => {
        // Update animations only after scrolling stops
        document.querySelectorAll('.animate-on-scroll').forEach(el => {
            const rect = el.getBoundingClientRect();
            const viewHeight = Math.max(document.documentElement.clientHeight, window.innerHeight);
            
            if (!(rect.bottom < 0 || rect.top - viewHeight >= 0)) {
                el.classList.add('animated');
            }
        });
    }, 100);
});

// Lazy load images
if ('IntersectionObserver' in window) {
    const imageObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src;
                img.classList.add('loaded');
                imageObserver.unobserve(img);
            }
        });
    });
    
    document.querySelectorAll('img[data-src]').forEach(img => {
        imageObserver.observe(img);
    });
}