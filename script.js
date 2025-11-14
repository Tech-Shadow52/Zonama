// E-commerce Application Logic
class ECommerceApp {
    constructor() {
        this.currentUser = null;
        this.cart = [];
        this.products = [];
        this.currentStep = 1;
        
        this.init();
    }

    init() {
        this.loadProducts();
        this.setupEventListeners();
        this.updateCartDisplay();
        
        // Ensure all modals are hidden on page load
        this.hideAllModals();
        
        // Setup accessibility features
        this.setupImageLightbox();
        this.setupKeyboardNavigation();
        this.lastFocusedElement = null;
    }

    hideAllModals() {
        const modals = ['authModal', 'cartModal', 'checkoutModal', 'productModal', 'sellerModal'];
        modals.forEach(modalId => {
            const modal = document.getElementById(modalId);
            if (modal) {
                modal.style.display = 'none';
            }
        });
        document.body.style.overflow = 'auto';
    }

    // Complete Product Catalog
    loadProducts() {
        this.products = [
            // Electronics Category
            {
                id: 1,
                title: "Laptop Gaming Pro",
                brand: "TechMaster",
                price: 1299.99,
                type: "physical",
                category: "electronics",
                available: true,
                image: "https://images.unsplash.com/photo-1603302576837-37561b2e2302?w=400&h=300&fit=crop&auto=format",
                description: "High-performance gaming laptop with RTX 4070, Intel i7 processor, 16GB RAM, and 1TB SSD. Perfect for gaming, streaming, and professional work.",
                rating: 4.5,
                specs: "Intel i7, RTX 4070, 16GB RAM, 1TB SSD",
                warranty: "2 years",
                brand: "TechMaster"
            },
            {
                id: 2,
                title: "Smartphone Ultra",
                brand: "PhoneTech",
                price: 899.99,
                type: "physical",
                category: "electronics",
                available: true,
                image: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=400&h=300&fit=crop&auto=format",
                description: "Latest flagship smartphone with 108MP camera, 5G connectivity, 256GB storage, and all-day battery life.",
                rating: 4.3,
                specs: "108MP Camera, 5G, 256GB, 4500mAh",
                warranty: "1 year",
                brand: "PhoneTech"
            },
            {
                id: 3,
                title: "Auriculares Bluetooth Pro",
                brand: "AudioMax",
                price: 159.99,
                type: "physical",
                category: "electronics",
                available: true,
                image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400&h=300&fit=crop&auto=format",
                description: "Premium wireless headphones with active noise cancellation, 30-hour battery life, and studio-quality sound.",
                rating: 4.4,
                specs: "ANC, 30h Battery, Wireless",
                warranty: "1 year",
                brand: "AudioMax"
            },
            {
                id: 4,
                title: "Smartwatch Fitness",
                brand: "WearTech",
                price: 249.99,
                type: "physical",
                category: "electronics",
                available: false,
                image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=400&h=300&fit=crop&auto=format",
                description: "Advanced fitness tracker with heart rate monitoring, GPS, sleep tracking, and 7-day battery life.",
                rating: 4.2,
                specs: "GPS, Heart Rate, 7-day Battery",
                warranty: "1 year",
                brand: "WearTech"
            },

            // Clothing Category
            {
                id: 20,
                title: "Camiseta Premium Cotton",
                brand: "StyleWear",
                price: 29.99,
                type: "physical",
                category: "clothing",
                available: true,
                image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=400&h=300&fit=crop&auto=format",
                description: "100% organic cotton t-shirt with premium fit and feel. Available in multiple colors and sizes.",
                rating: 4.3,
                material: "100% Organic Cotton",
                sizes: "XS, S, M, L, XL, XXL",
                brand: "StyleWear"
            },
            {
                id: 21,
                title: "Jeans Clásicos",
                brand: "DenimCo",
                price: 79.99,
                type: "physical",
                category: "clothing",
                available: true,
                image: "https://images.unsplash.com/photo-1542272604-787c3835535d?w=400&h=300&fit=crop&auto=format",
                description: "Classic fit jeans made from premium denim. Comfortable, durable, and stylish for everyday wear.",
                rating: 4.1,
                material: "Premium Denim",
                sizes: "28-42 waist",
                brand: "DenimCo"
            },
            {
                id: 22,
                title: "Sudadera con Capucha",
                brand: "ComfortWear",
                price: 49.99,
                type: "physical",
                category: "clothing",
                available: true,
                image: "https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=400&h=300&fit=crop&auto=format",
                description: "Cozy hoodie made from soft cotton blend. Perfect for casual wear and layering.",
                rating: 4.4,
                material: "Cotton Blend",
                sizes: "XS, S, M, L, XL",
                brand: "ComfortWear"
            },
            {
                id: 23,
                title: "Zapatillas Deportivas",
                brand: "SportFlex",
                price: 89.99,
                type: "physical",
                category: "clothing",
                available: true,
                image: "https://images.unsplash.com/photo-1549298916-b41d501d3772?w=400&h=300&fit=crop&auto=format",
                description: "Comfortable athletic sneakers with cushioned sole and breathable mesh upper. Great for running and casual wear.",
                rating: 4.2,
                material: "Mesh Upper, Cushioned Sole",
                sizes: "6-13 US",
                brand: "SportFlex"
            },

            // Home Category
            {
                id: 30,
                title: "Lámpara LED Inteligente",
                brand: "SmartHome",
                price: 79.99,
                type: "physical",
                category: "home",
                available: true,
                image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=300&fit=crop&auto=format",
                description: "Smart LED lamp with app control, color changing, dimming, and voice assistant compatibility.",
                rating: 4.3,
                features: "App Control, Color Changing, Voice Control",
                compatibility: "Alexa, Google Home",
                brand: "SmartHome"
            },
            {
                id: 31,
                title: "Difusor de Aromas",
                brand: "AromaLife",
                price: 45.99,
                type: "physical",
                category: "home",
                available: true,
                image: "https://images.unsplash.com/photo-1544735716-392fe2489ffa?w=400&h=300&fit=crop&auto=format",
                description: "Ultrasonic essential oil diffuser with LED lights, timer settings, and whisper-quiet operation.",
                rating: 4.5,
                features: "Ultrasonic, LED Lights, Timer",
                capacity: "300ml",
                brand: "AromaLife"
            },
            {
                id: 32,
                title: "Cojines Decorativos Set",
                brand: "HomeDecor",
                price: 34.99,
                type: "physical",
                category: "home",
                available: true,
                image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=400&h=300&fit=crop&auto=format",
                description: "Set of 4 decorative throw pillows with removable covers. Perfect for sofas, beds, and chairs.",
                rating: 4.1,
                material: "Cotton Blend Covers",
                size: "18x18 inches",
                brand: "HomeDecor"
            },
            {
                id: 33,
                title: "Planta Artificial Decorativa",
                brand: "GreenSpace",
                price: 24.99,
                type: "physical",
                category: "home",
                available: false,
                image: "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=400&h=300&fit=crop&auto=format",
                description: "Realistic artificial plant that adds greenery to any space without maintenance. Perfect for offices and homes.",
                rating: 4.0,
                features: "No Maintenance, Realistic Look",
                size: "24 inches tall",
                brand: "GreenSpace"
            },

            // Books Category - Colleen Hoover Collection
            {
                id: 5,
                title: "It Ends with Us",
                author: "Colleen Hoover",
                price: 14.99,
                type: "physical",
                category: "books",
                available: true,
                image: "https://i.imgur.com/CCeS9XN.jpeg",
                description: "A powerful story about love, resilience, and the courage it takes to break the cycle. Lily hasn't always had it easy, but that's never stopped her from working hard for the life she wants.",
                rating: 4.4,
                pages: 384,
                publisher: "Atria Books",
                isbn: "9781501110368",
                genre: "Contemporary Romance"
            },
            {
                id: 9,
                title: "It Starts with Us",
                author: "Colleen Hoover",
                price: 15.99,
                type: "physical",
                category: "books",
                available: true,
                image: "https://images-na.ssl-images-amazon.com/images/I/81h2gWPTYJL._SY522_.jpg",
                description: "The sequel to It Ends with Us. Lily and her ex-husband, Ryle, have just settled into a civil coparenting rhythm when she suddenly bumps into her first love, Atlas, again.",
                rating: 4.3,
                pages: 336,
                publisher: "Atria Books",
                isbn: "9781668001226",
                genre: "Contemporary Romance"
            },
            {
                id: 10,
                title: "Verity",
                author: "Colleen Hoover",
                price: 13.99,
                type: "physical",
                category: "books",
                available: true,
                image: "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1634158558i/59344312.jpg",
                description: "A psychological thriller about a struggling writer who accepts the job of completing the remaining books in a successful series, only to uncover dark secrets.",
                rating: 4.5,
                pages: 336,
                publisher: "Grand Central Publishing",
                isbn: "9781538724736",
                genre: "Psychological Thriller"
            },
            {
                id: 11,
                title: "November 9",
                author: "Colleen Hoover",
                price: 14.99,
                type: "physical",
                category: "books",
                available: true,
                image: "https://images-na.ssl-images-amazon.com/images/I/81YkqyaFVEL._SY522_.jpg",
                description: "A love story about Fallon and Ben, who meet by chance and agree to meet on the same date every year. But when Fallon becomes the inspiration for Ben's novel, they realize that fiction and reality begin to blur.",
                rating: 4.2,
                pages: 320,
                publisher: "Atria Books",
                isbn: "9781501110344",
                genre: "Contemporary Romance"
            },
            {
                id: 12,
                title: "Ugly Love",
                author: "Colleen Hoover",
                price: 13.99,
                type: "physical",
                category: "books",
                available: true,
                image: "https://images-na.ssl-images-amazon.com/images/I/71Q5H9N9SQL._SY522_.jpg",
                description: "When Tate Collins meets airline pilot Miles Archer, she knows it isn't love at first sight. But she can't say the same about her attraction to him.",
                rating: 4.1,
                pages: 352,
                publisher: "Atria Books",
                isbn: "9781476753188",
                genre: "Contemporary Romance"
            },
            {
                id: 13,
                title: "Reminders of Him",
                author: "Colleen Hoover",
                price: 11.99,
                type: "digital",
                category: "books",
                available: true,
                image: "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1627673942i/58341222.jpg",
                description: "After serving five years in prison for a tragic mistake, Kenna Rowan returns to the town where it all went wrong, hoping to reunite with her four-year-old daughter.",
                rating: 4.6,
                pages: 352,
                publisher: "Montlake",
                isbn: "9781542025607",
                genre: "Contemporary Romance"
            }
        ];
        
        this.displayProducts();
    }

    setupEventListeners() {
        // Auth modal
        const loginBtn = document.getElementById('loginBtn');
        const authModal = document.getElementById('authModal');
        const cartIcon = document.querySelector('.cart-icon');
        const cartModal = document.getElementById('cartModal');
        const checkoutModal = document.getElementById('checkoutModal');

        // Modal controls
        this.setupModalControls();
        
        // Auth tabs
        document.querySelectorAll('.tab-btn').forEach(btn => {
            btn.addEventListener('click', (e) => {
                this.switchAuthTab(e.target.dataset.tab);
            });
        });

        // Auth forms
        document.querySelectorAll('.auth-form form').forEach(form => {
            form.addEventListener('submit', (e) => {
                e.preventDefault();
                this.handleAuth(form);
            });
        });

        // Search functionality
        const searchBtn = document.getElementById('searchBtn');
        const searchInput = document.getElementById('searchInput');
        
        searchBtn.addEventListener('click', () => this.searchProducts());
        searchInput.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') this.searchProducts();
        });

        // Product type filter
        document.getElementById('productType').addEventListener('change', (e) => {
            this.filterProducts(e.target.value);
        });

        // Add "Show All" button functionality
        const showAllBtn = document.createElement('button');
        showAllBtn.textContent = 'Mostrar Todos los Productos';
        showAllBtn.className = 'btn-primary';
        showAllBtn.style.marginBottom = '1rem';
        showAllBtn.onclick = () => this.displayProducts(this.products);
        
        const productsHeader = document.querySelector('.products-header');
        if (productsHeader) {
            productsHeader.appendChild(showAllBtn);
        }

        // Category filters
        document.querySelectorAll('.category-card').forEach(card => {
            card.addEventListener('click', (e) => {
                const category = card.dataset.category;
                this.filterByCategory(category);
            });
        });



        // Cart functionality
        cartIcon.addEventListener('click', () => {
            this.showModal('cartModal');
        });

        // Checkout process
        document.getElementById('checkoutBtn').addEventListener('click', () => {
            if (this.cart.length === 0) {
                this.showNotification('Tu carrito está vacío', 'warning');
                return;
            }
            
            if (!this.currentUser) {
                this.showNotification('Debes iniciar sesión para continuar', 'warning');
                this.showModal('authModal');
                return;
            }
            
            this.hideModal('cartModal');
            this.showModal('checkoutModal');
            this.currentStep = 1;
            this.showCheckoutStep(1);
        });

        // Checkout steps
        document.querySelector('.next-step').addEventListener('click', () => {
            this.nextCheckoutStep();
        });

        document.getElementById('processPayment').addEventListener('click', () => {
            this.processPayment();
        });

        // Login button
        loginBtn.addEventListener('click', () => {
            if (this.currentUser) {
                this.logout();
            } else {
                this.showModal('authModal');
            }
        });

        // Seller buttons
        const sellerBtn = document.getElementById('sellerBtn');
        const heroSellerBtn = document.getElementById('heroSellerBtn');
        const footerSellerLink = document.getElementById('footerSellerLink');
        
        if (sellerBtn) {
            sellerBtn.addEventListener('click', () => this.showModal('sellerModal'));
        }
        if (heroSellerBtn) {
            heroSellerBtn.addEventListener('click', () => this.showModal('sellerModal'));
        }
        if (footerSellerLink) {
            footerSellerLink.addEventListener('click', (e) => {
                e.preventDefault();
                this.showModal('sellerModal');
            });
        }

        // Plan buttons
        document.querySelectorAll('.btn-plan').forEach(btn => {
            btn.addEventListener('click', (e) => {
                const planName = e.target.closest('.plan-card').querySelector('h3').textContent;
                this.handlePlanSelection(planName, e.target);
            });
        });
    }

    setupModalControls() {
        // Close modal functionality
        document.querySelectorAll('.close').forEach(closeBtn => {
            closeBtn.addEventListener('click', (e) => {
                const modal = e.target.closest('.modal');
                this.hideModal(modal.id);
            });
            
            // Keyboard accessibility for close button
            closeBtn.addEventListener('keydown', (e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    const modal = e.target.closest('.modal');
                    this.hideModal(modal.id);
                }
            });
        });

        // Close modal when clicking outside
        document.querySelectorAll('.modal').forEach(modal => {
            modal.addEventListener('click', (e) => {
                if (e.target === modal) {
                    this.hideModal(modal.id);
                }
            });
            
            // Keyboard accessibility - ESC key to close
            modal.addEventListener('keydown', (e) => {
                if (e.key === 'Escape') {
                    this.hideModal(modal.id);
                }
            });
        });
        
        // Setup image lightbox functionality
        this.setupImageLightbox();
    }
    
    setupImageLightbox() {
        // Add click handler to product detail image
        document.addEventListener('click', (e) => {
            if (e.target.id === 'productDetailImage' && e.target.src) {
                this.openLightbox(e.target.src, e.target.alt);
            }
        });
        
        // Keyboard accessibility for product detail image
        document.addEventListener('keydown', (e) => {
            const target = e.target;
            if (target.id === 'productDetailImage' && (e.key === 'Enter' || e.key === ' ')) {
                e.preventDefault();
                if (target.src) {
                    this.openLightbox(target.src, target.alt);
                }
            }
        });
        
        // Close lightbox when clicking on image or outside
        const lightbox = document.getElementById('imageLightbox');
        if (lightbox) {
            lightbox.addEventListener('click', (e) => {
                if (e.target === lightbox || e.target.id === 'lightboxImage') {
                    this.closeLightbox();
                }
            });
        }
    }
    
    openLightbox(imageSrc, imageAlt) {
        const lightbox = document.getElementById('imageLightbox');
        const lightboxImage = document.getElementById('lightboxImage');
        const lightboxCaption = document.getElementById('lightboxCaption');
        
        if (lightbox && lightboxImage) {
            lightboxImage.src = imageSrc;
            lightboxImage.alt = imageAlt || 'Imagen del producto';
            lightboxCaption.textContent = imageAlt || 'Imagen del producto';
            
            this.showModal('imageLightbox');
            
            // Focus on the image for accessibility
            setTimeout(() => {
                lightboxImage.focus();
            }, 100);
        }
    }
    
    closeLightbox() {
        this.hideModal('imageLightbox');
        // Return focus to the product detail image
        const productImage = document.getElementById('productDetailImage');
        if (productImage) {
            productImage.focus();
        }
    }

    showModal(modalId) {
        const modal = document.getElementById(modalId);
        if (modal) {
            modal.style.display = 'block';
            modal.setAttribute('aria-hidden', 'false');
            document.body.style.overflow = 'hidden';
            
            // Trap focus within modal
            this.trapFocus(modal);
            
            // Store the element that opened the modal for focus return
            this.lastFocusedElement = document.activeElement;
        }
    }

    hideModal(modalId) {
        const modal = document.getElementById(modalId);
        if (modal) {
            modal.style.display = 'none';
            modal.setAttribute('aria-hidden', 'true');
            document.body.style.overflow = 'auto';
            
            // Return focus to the element that opened the modal
            if (this.lastFocusedElement) {
                this.lastFocusedElement.focus();
            }
        }
    }
    
    trapFocus(element) {
        const focusableElements = element.querySelectorAll(
            'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
        );
        const firstFocusable = focusableElements[0];
        const lastFocusable = focusableElements[focusableElements.length - 1];
        
        element.addEventListener('keydown', function(e) {
            if (e.key === 'Tab') {
                if (e.shiftKey) {
                    if (document.activeElement === firstFocusable) {
                        e.preventDefault();
                        lastFocusable.focus();
                    }
                } else {
                    if (document.activeElement === lastFocusable) {
                        e.preventDefault();
                        firstFocusable.focus();
                    }
                }
            }
        });
        
        // Focus first element
        if (firstFocusable) {
            setTimeout(() => firstFocusable.focus(), 100);
        }
    }

    switchAuthTab(tab) {
        // Update tab buttons
        document.querySelectorAll('.tab-btn').forEach(btn => {
            btn.classList.remove('active');
        });
        document.querySelector(`[data-tab="${tab}"]`).classList.add('active');

        // Update forms
        document.querySelectorAll('.auth-form').forEach(form => {
            form.classList.remove('active');
        });
        document.getElementById(`${tab}Form`).classList.add('active');
    }

    handleAuth(form) {
        const formData = new FormData(form);
        const isLogin = form.closest('#loginForm');
        
        if (isLogin) {
            // Simulate login
            this.currentUser = {
                name: "Usuario Demo",
                email: form.querySelector('input[type="email"]').value
            };
            this.showNotification('Sesión iniciada correctamente', 'success');
        } else {
            // Simulate registration
            this.currentUser = {
                name: form.querySelector('input[type="text"]').value,
                email: form.querySelector('input[type="email"]').value
            };
            this.showNotification('Cuenta creada correctamente', 'success');
        }
        
        this.updateLoginButton();
        this.hideModal('authModal');
    }

    updateLoginButton() {
        const loginBtn = document.getElementById('loginBtn');
        if (this.currentUser) {
            loginBtn.textContent = `Hola, ${this.currentUser.name.split(' ')[0]}`;
            loginBtn.style.background = 'linear-gradient(135deg, #4caf50, #388e3c)';
        } else {
            loginBtn.textContent = 'Iniciar Sesión';
            loginBtn.style.background = 'linear-gradient(135deg, #9c27b0, #673ab7)';
        }
    }

    logout() {
        this.currentUser = null;
        this.cart = [];
        this.updateLoginButton();
        this.updateCartDisplay();
        this.showNotification('Sesión cerrada', 'success');
    }

    displayProducts(productsToShow = this.products) {
        const grid = document.getElementById('productsGrid');
        
        if (productsToShow.length === 0) {
            grid.innerHTML = '<div class="no-products">No se encontraron productos</div>';
            return;
        }

        grid.innerHTML = productsToShow.map(product => `
            <div class="product-card" data-id="${product.id}">
                <div class="product-image loading" onclick="showProductDetail(${product.id})" style="cursor: pointer;">
                    <img src="${product.image}" alt="${product.title}" loading="lazy" onload="this.classList.add('loaded'); this.parentElement.classList.remove('loading')" onerror="this.style.display='none'; this.parentElement.innerHTML='<div style=\\'font-size:3rem;color:#dee2e6\\'>📷</div>'">
                </div>
                <div class="product-info">
                    <h3 class="product-title" onclick="showProductDetail(${product.id})" style="cursor: pointer;">${product.title}</h3>
                    ${product.author ? `<p class="product-author">by ${product.author}</p>` : ''}
                    ${product.brand ? `<p class="product-brand">${product.brand}</p>` : ''}
                    ${product.seller ? `<p class="product-seller">Vendido por: ${product.seller}</p>` : ''}
                    ${product.location ? `<p class="product-location"><i class="fas fa-map-marker-alt"></i> ${product.location}</p>` : ''}
                    <div class="product-rating">
                        <div class="stars">${this.generateStars(product.rating)}</div>
                        <span>${product.rating}</span>
                    </div>
                    <div class="product-price">$${product.price}</div>
                    <span class="product-type ${product.type}">${product.type === 'physical' ? 'Físico' : 'Digital'}</span>
                    <div class="product-availability ${product.available ? 'available' : 'unavailable'}">
                        ${product.available ? '✓ Disponible' : '✗ No disponible'}
                    </div>
                    <button class="add-to-cart" ${!product.available ? 'disabled' : ''} 
                            onclick="app.addToCart(${product.id})">
                        ${product.available ? 'Agregar al Carrito' : 'No Disponible'}
                    </button>
                    <button class="view-details" onclick="showProductDetail(${product.id})">
                        Ver Detalles
                    </button>
                </div>
            </div>
        `).join('');
    }

    searchProducts() {
        const query = document.getElementById('searchInput').value.toLowerCase();
        if (!query) {
            this.displayProducts();
            return;
        }

        const filtered = this.products.filter(product => 
            product.title.toLowerCase().includes(query) ||
            product.category.toLowerCase().includes(query) ||
            (product.seller && product.seller.toLowerCase().includes(query))
        );
        
        this.displayProducts(filtered);
    }

    filterProducts(type) {
        if (type === 'all') {
            this.displayProducts();
            return;
        }

        const filtered = this.products.filter(product => product.type === type);
        this.displayProducts(filtered);
    }

    filterByCategory(category) {
        const filtered = this.products.filter(product => product.category === category);
        this.displayProducts(filtered);
        
        // Scroll to products section
        document.querySelector('.products').scrollIntoView({ behavior: 'smooth' });
    }

    getCategoryName(category) {
        const categoryNames = {
            'electronics': 'Electrónicos',
            'clothing': 'Ropa',
            'home': 'Hogar',
            'books': 'Libros',
            'food': 'Comida Local',
            'crafts': 'Artesanías'
        };
        return categoryNames[category] || category;
    }

    addToCart(productId) {
        if (!this.currentUser) {
            this.showNotification('Debes iniciar sesión para agregar productos', 'warning');
            this.showModal('authModal');
            return;
        }

        const product = this.products.find(p => p.id === productId);
        if (!product || !product.available) {
            this.showNotification('Producto no disponible', 'error');
            return;
        }

        const existingItem = this.cart.find(item => item.id === productId);
        if (existingItem) {
            existingItem.quantity += 1;
        } else {
            this.cart.push({
                ...product,
                quantity: 1
            });
        }

        this.updateCartDisplay();
        this.showNotification('Producto agregado al carrito', 'success');
    }

    removeFromCart(productId) {
        this.cart = this.cart.filter(item => item.id !== productId);
        this.updateCartDisplay();
        this.updateCartModal();
    }

    updateQuantity(productId, change) {
        const item = this.cart.find(item => item.id === productId);
        if (item) {
            item.quantity += change;
            if (item.quantity <= 0) {
                this.removeFromCart(productId);
            } else {
                this.updateCartDisplay();
                this.updateCartModal();
            }
        }
    }

    updateCartDisplay() {
        const cartCount = document.getElementById('cartCount');
        const totalItems = this.cart.reduce((sum, item) => sum + item.quantity, 0);
        cartCount.textContent = totalItems;
        
        this.updateCartModal();
    }

    updateCartModal() {
        const cartItems = document.getElementById('cartItems');
        const cartTotal = document.getElementById('cartTotal');
        
        if (this.cart.length === 0) {
            cartItems.innerHTML = '<div class="empty-cart">Tu carrito está vacío</div>';
            cartTotal.textContent = '0.00';
            return;
        }

        const total = this.cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
        cartTotal.textContent = total.toFixed(2);

        cartItems.innerHTML = this.cart.map(item => `
            <div class="cart-item">
                <div class="cart-item-image">
                    <img src="${item.image}" alt="${item.title}">
                </div>
                <div class="cart-item-info">
                    <div class="cart-item-title">${item.title}</div>
                    <div class="cart-item-price">$${item.price}</div>
                </div>
                <div class="quantity-controls">
                    <button class="quantity-btn" onclick="app.updateQuantity(${item.id}, -1)">-</button>
                    <span>${item.quantity}</span>
                    <button class="quantity-btn" onclick="app.updateQuantity(${item.id}, 1)">+</button>
                </div>
                <div class="remove-item" onclick="app.removeFromCart(${item.id})">
                    <i class="fas fa-trash"></i>
                </div>
            </div>
        `).join('');
    }

    showCheckoutStep(step) {
        document.querySelectorAll('.step').forEach(s => s.classList.remove('active'));
        document.querySelector(`[data-step="${step}"]`).classList.add('active');
        this.currentStep = step;
    }

    nextCheckoutStep() {
        if (this.currentStep < 3) {
            this.showCheckoutStep(this.currentStep + 1);
        }
    }

    processPayment() {
        // Simulate payment processing
        this.showNotification('Procesando pago...', 'warning');
        
        setTimeout(() => {
            const success = Math.random() > 0.2; // 80% success rate
            
            if (success) {
                this.showOrderConfirmation();
                this.showCheckoutStep(3);
            } else {
                this.showPaymentError();
            }
        }, 2000);
    }

    showOrderConfirmation() {
        const orderNumber = Math.floor(Math.random() * 1000000);
        const total = this.cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
        const hasPhysical = this.cart.some(item => item.type === 'physical');
        
        document.getElementById('orderConfirmation').innerHTML = `
            <div class="order-success">
                <i class="fas fa-check-circle"></i>
                <h3>¡Pago exitoso!</h3>
                <div class="order-details">
                    <p><strong>Número de orden:</strong> #${orderNumber}</p>
                    <p><strong>Total:</strong> $${total.toFixed(2)}</p>
                    <p><strong>Estado:</strong> ${hasPhysical ? 'Procesando envío' : 'Entrega digital en proceso'}</p>
                    <p><strong>Tiempo estimado:</strong> ${hasPhysical ? '3-5 días hábiles' : 'Inmediato'}</p>
                </div>
                <button class="btn-primary" onclick="app.completeOrder()">Finalizar</button>
            </div>
        `;
    }

    showPaymentError() {
        this.showNotification('Error en el pago. ¿Desea reintentar?', 'error');
        
        // Show retry option
        const retryBtn = document.createElement('button');
        retryBtn.textContent = 'Reintentar Pago';
        retryBtn.className = 'btn-primary';
        retryBtn.style.marginTop = '1rem';
        retryBtn.onclick = () => this.processPayment();
        
        const paymentSection = document.querySelector('[data-step="2"]');
        paymentSection.appendChild(retryBtn);
    }

    completeOrder() {
        this.cart = [];
        this.updateCartDisplay();
        this.hideModal('checkoutModal');
        this.showNotification('¡Gracias por tu compra!', 'success');
    }

    generateStars(rating) {
        const fullStars = Math.floor(rating);
        const hasHalfStar = rating % 1 !== 0;
        const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0);
        
        let stars = '';
        for (let i = 0; i < fullStars; i++) {
            stars += '<span class="star">★</span>';
        }
        if (hasHalfStar) {
            stars += '<span class="star">☆</span>';
        }
        for (let i = 0; i < emptyStars; i++) {
            stars += '<span class="star empty">☆</span>';
        }
        return stars;
    }

    showProductDetail(productId) {
        const product = this.products.find(p => p.id === productId);
        if (!product) return;

        // Populate modal with product details
            document.getElementById('productDetailImage').src = product.image;
            document.getElementById('productDetailImage').alt = product.title;
            document.getElementById('productDetailTitle').textContent = product.title;
            document.getElementById('productDetailAuthor').textContent = product.author || product.brand || product.seller || '';
            document.getElementById('productDetailStars').innerHTML = this.generateStars(product.rating);
            document.getElementById('productDetailRating').textContent = `${product.rating} de 5 estrellas`;
            document.getElementById('productDetailPrice').textContent = `$${product.price}`;
            
            // Handle different product types with better localization
            if (product.category === 'books') {
                document.getElementById('productDetailPages').textContent = `${product.pages} páginas`;
                document.getElementById('productDetailPublisher').textContent = product.publisher;
                document.getElementById('productDetailGenre').textContent = product.genre;
                document.getElementById('productDetailISBN').textContent = product.seller || 'Editorial';
                document.getElementById('productDetailType').textContent = product.type === 'physical' ? 'Libro Físico' : 'Libro Digital';
            } else if (product.category === 'food') {
                document.getElementById('productDetailPages').textContent = product.specs || 'Producto alimenticio';
                document.getElementById('productDetailPublisher').textContent = product.brand;
                document.getElementById('productDetailGenre').textContent = 'Comida Local';
                document.getElementById('productDetailISBN').textContent = product.seller;
                document.getElementById('productDetailType').textContent = product.type === 'physical' ? 'Producto Físico' : 'Producto Digital';
            } else if (product.category === 'crafts') {
                document.getElementById('productDetailPages').textContent = 'Artesanía tradicional';
                document.getElementById('productDetailPublisher').textContent = product.brand;
                document.getElementById('productDetailGenre').textContent = 'Artesanías';
                document.getElementById('productDetailISBN').textContent = product.seller;
                document.getElementById('productDetailType').textContent = 'Hecho a mano';
            } else {
                // For other products, show relevant specs
                document.getElementById('productDetailPages').textContent = product.specs || product.material || product.features || 'Ver descripción';
                document.getElementById('productDetailPublisher').textContent = product.brand || 'N/A';
                document.getElementById('productDetailGenre').textContent = this.getCategoryName(product.category);
                document.getElementById('productDetailISBN').textContent = product.seller || 'Vendedor verificado';
                document.getElementById('productDetailType').textContent = product.type === 'physical' ? 'Producto Físico' : 'Producto Digital';
            }
            
            // Add location if available
            const locationElement = document.getElementById('productDetailLocation');
            if (locationElement) {
                locationElement.textContent = product.location || 'El Salvador';
            }
            
            document.getElementById('productDetailDescription').textContent = product.description;

            // Set up add to cart button
            const addToCartBtn = document.getElementById('productDetailAddToCart');
            addToCartBtn.disabled = !product.available;
            addToCartBtn.textContent = product.available ? 'Agregar al Carrito' : 'No Disponible';
            addToCartBtn.onclick = () => {
                this.addToCart(productId);
                this.hideModal('productModal');
            };

        this.showModal('productModal');
    }

    showNotification(message, type = 'success') {
        const notification = document.createElement('div');
        notification.className = `notification ${type}`;
        notification.textContent = message;
        notification.setAttribute('role', 'alert');
        notification.setAttribute('aria-live', 'assertive');
        
        document.body.appendChild(notification);
        
        // Announce to screen readers
        this.announceToScreenReader(message);
        
        setTimeout(() => {
            notification.remove();
        }, 4000);
    }

    // Seller functionality
    handlePlanSelection(planName, button) {
        if (button.textContent === 'Comenzar Gratis') {
            this.showNotification('¡Bienvenido a Zonama! Tu cuenta de vendedor gratuita está lista.', 'success');
            this.hideModal('sellerModal');
        } else if (button.textContent === 'Contactar Ventas') {
            this.showNotification('Te contactaremos pronto para el Plan Empresarial', 'success');
            this.hideModal('sellerModal');
        } else {
            this.showNotification(`Has seleccionado el ${planName}. Redirigiendo al pago...`, 'success');
            setTimeout(() => {
                this.hideModal('sellerModal');
            }, 2000);
        }
    }

    // Enhanced product loading with local Salvador products
    loadSalvadorProducts() {
        const salvadorProducts = [
            {
                id: 100,
                title: "Café Salvadoreño Premium",
                brand: "Finca El Volcán",
                price: 12.99,
                type: "physical",
                category: "food",
                available: true,
                image: "https://images.unsplash.com/photo-1447933601403-0c6688de566e?w=400&h=300&fit=crop&auto=format",
                description: "Café 100% arábica cultivado en las montañas de El Salvador. Tostado artesanal con notas de chocolate y caramelo.",
                rating: 4.8,
                seller: "Cooperativa Cafetalera San Salvador",
                location: "Santa Ana, El Salvador"
            },
            {
                id: 101,
                title: "Pupusas Congeladas (12 unidades)",
                brand: "Pupusería Doña María",
                price: 8.50,
                type: "physical",
                category: "food",
                available: true,
                image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b?w=400&h=300&fit=crop&auto=format",
                description: "Pupusas tradicionales salvadoreñas congeladas. Incluye queso, frijol y chicharrón. Listas para calentar.",
                rating: 4.6,
                seller: "Pupusería Doña María",
                location: "San Salvador, El Salvador"
            },
            {
                id: 102,
                title: "Artesanía de Barro Negro",
                brand: "Artesanos de Ilobasco",
                price: 25.00,
                type: "physical",
                category: "crafts",
                available: true,
                image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=300&fit=crop&auto=format",
                description: "Hermosa pieza de cerámica tradicional salvadoreña hecha a mano en Ilobasco. Perfecta para decoración.",
                rating: 4.9,
                seller: "Cooperativa de Artesanos",
                location: "Ilobasco, Cabañas"
            },
            {
                id: 103,
                title: "Hamaca Salvadoreña Tejida",
                brand: "Textiles Tradicionales SV",
                price: 45.00,
                type: "physical",
                category: "home",
                available: true,
                image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=400&h=300&fit=crop&auto=format",
                description: "Hamaca tradicional tejida a mano por artesanos salvadoreños. Colores vibrantes y máxima comodidad.",
                rating: 4.7,
                seller: "Textiles Tradicionales SV",
                location: "La Palma, Chalatenango"
            }
        ];

        // Add Salvador products to the main products array
        this.products = [...this.products, ...salvadorProducts];
    }

    // Department delivery calculator
    calculateDeliveryFee(department) {
        const deliveryFees = {
            'san-salvador': 2.50,
            'la-libertad': 3.00,
            'santa-ana': 4.00,
            'san-miguel': 5.00,
            'usulutan': 5.50,
            'la-paz': 3.50,
            'sonsonate': 4.50,
            'chalatenango': 6.00,
            'la-union': 6.50,
            'ahuachapan': 5.00,
            'cabanas': 5.50,
            'cuscatlan': 3.00,
            'morazan': 6.00,
            'san-vicente': 4.00
        };

        return deliveryFees[department] || 7.00; // Default fee for remote areas
    }

    // Enhanced checkout with delivery calculation
    updateCheckoutTotal() {
        const cartTotal = this.cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
        const departmentSelect = document.querySelector('#addressForm select');
        
        if (departmentSelect && departmentSelect.value) {
            const deliveryFee = this.calculateDeliveryFee(departmentSelect.value);
            const total = cartTotal + deliveryFee;
            
            // Update display
            const totalElement = document.getElementById('cartTotal');
            if (totalElement) {
                totalElement.innerHTML = `
                    <div>Subtotal: $${cartTotal.toFixed(2)}</div>
                    <div>Envío: $${deliveryFee.toFixed(2)}</div>
                    <div style="font-weight: bold; border-top: 1px solid #ddd; padding-top: 0.5rem; margin-top: 0.5rem;">
                        Total: $${total.toFixed(2)}
                    </div>
                `;
            }
        }
    }

    // Initialize Salvador-specific features
    initSalvadorFeatures() {
        this.loadSalvadorProducts();
        
        // Add delivery fee calculation to address form
        const addressForm = document.getElementById('addressForm');
        if (addressForm) {
            const departmentSelect = addressForm.querySelector('select');
            if (departmentSelect) {
                departmentSelect.addEventListener('change', () => {
                    this.updateCheckoutTotal();
                });
            }
        }
    }
}

// Initialize the application
const app = new ECommerceApp();

// Global function for product details
window.showProductDetail = function(productId) {
    if (app && app.showProductDetail) {
        app.showProductDetail(productId);
    }
};

// Enhanced initialization
document.addEventListener('DOMContentLoaded', function() {
    // Initialize Salvador-specific features
    if (app) {
        app.initSalvadorFeatures();
    }

    // Add smooth scrolling for better UX
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

    // Add intersection observer for animations
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    // Observe elements for animation
    document.querySelectorAll('.benefit-card, .category-card, .product-card').forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(20px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });
});

// Service Worker registration for PWA capabilities (optional)
if ('serviceWorker' in navigator) {
    window.addEventListener('load', function() {
        navigator.serviceWorker.register('/sw.js')
            .then(function(registration) {
                console.log('ServiceWorker registration successful');
            })
            .catch(function(err) {
                console.log('ServiceWorker registration failed');
            });
    });
}
