-- ============================================
-- 1️⃣ Product Category Table
-- ============================================
CREATE TABLE product_categories (
    id INT PRIMARY KEY AUTO_INCREMENT,
    category_name VARCHAR(255) NOT NULL,
    parent_category_id INT NULL,
    category_type  VARCHAR(255),
    description TEXT,
    image VARCHAR(255),
    slug VARCHAR(255) UNIQUE NOT NULL,
    status ENUM('active', 'inactive') DEFAULT 'active',
    display_order INT DEFAULT 0,
    seo_title VARCHAR(255),
    seo_description TEXT,
    seo_keywords TEXT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    associated_coupons JSON,
    product_count INT DEFAULT 0,
    store_association JSON,
    FOREIGN KEY (parent_category_id) REFERENCES product_categories(id) ON DELETE SET NULL
);

-- ============================================
-- 2️⃣ Product Table
-- ============================================
CREATE TABLE products (
    id INT PRIMARY KEY AUTO_INCREMENT,
    product_name VARCHAR(255) NOT NULL,
    barcode VARCHAR(50) UNIQUE NOT NULL,
    price DECIMAL(10,2) NOT NULL,
    discounted_price DECIMAL(10,2),
    discount DECIMAL(10,2),
    unit_price DECIMAL(10,2),
    quantity INT DEFAULT 1,
    total_price DECIMAL(10,2) GENERATED ALWAYS AS (unit_price * quantity) STORED,
    category_id INT NOT NULL,
    subcategory VARCHAR(100),
    brand VARCHAR(100),
    color VARCHAR(50),
    size_available JSON,
    model_size VARCHAR(50),
    model_height INT,
    fit ENUM('Normale', 'Su Misura'),
    gender ENUM('Maschile', 'Femminile', 'Unisex'),
    inventory_status INT DEFAULT 0,
    customizable BOOLEAN DEFAULT FALSE,
    main_image VARCHAR(255),
    additional_images JSON,
    description TEXT,
    stores_available JSON,
    auto_completion BOOLEAN DEFAULT FALSE,
    reservations BOOLEAN DEFAULT FALSE,
    coupons_applied JSON,
    seo_title VARCHAR(255),
    seo_description TEXT,
    seo_keywords TEXT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    FOREIGN KEY (category_id) REFERENCES product_categories(category_id) ON DELETE CASCADE
);

-- ============================================
-- 3️⃣ Product Images Table
-- ============================================
CREATE TABLE product_images (
    image_id INT PRIMARY KEY AUTO_INCREMENT,
    product_id INT NOT NULL,
    image_url VARCHAR(255) NOT NULL,
    image_type ENUM('cover', 'detail', 'thumbnail', "other"),
    resolution VARCHAR(50),
    format ENUM('JPG', 'JPEG', 'PNG'),
    upload_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (product_id) REFERENCES products(id) ON DELETE CASCADE
);

-- ============================================
-- 3️⃣ Store Categories  Table
-- ============================================
CREATE TABLE store_categories (
    id INT PRIMARY KEY AUTO_INCREMENT,
    category_name VARCHAR(255) NOT NULL,
    parent_category_id INT NULL, -- Self-referencing to handle subcategories
    description TEXT,
    image VARCHAR(255),
    slug VARCHAR(255) UNIQUE NOT NULL,
    status ENUM('active', 'inactive') DEFAULT 'active',
    seo_title VARCHAR(255),
    seo_description TEXT,
    seo_keywords TEXT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    FOREIGN KEY (parent_category_id) REFERENCES store_categories(id) ON DELETE SET NULL
);


-- ============================================
-- 4️⃣ Stores Table
-- ============================================
CREATE TABLE stores (
    id INT PRIMARY KEY AUTO_INCREMENT,
    store_name VARCHAR(255) NOT NULL,
    email VARCHAR(255),
    phone VARCHAR(50),
    address TEXT,
    postal_code VARCHAR(20),
    province VARCHAR(100),
    cover_image VARCHAR(255),
    additional_images JSON,
    free_shipping_threshold DECIMAL(10,2),
    store_categories JSON,
    store_hours JSON,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);

-- ============================================
-- 4️⃣ Store Table
-- ============================================
CREATE TABLE store_with_categories (
    id INT PRIMARY KEY AUTO_INCREMENT,
    store_id INT NOT NULL,
    category_id INT NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    FOREIGN KEY (store_id) REFERENCES stores(id) ON DELETE CASCADE,
    FOREIGN KEY (category_id) REFERENCES store_categories(id) ON DELETE CASCADE
);


-- ============================================
-- 5️⃣ Inventory Management Table (Product per Store)
-- ============================================
CREATE TABLE store_inventory (
    inventory_id INT PRIMARY KEY AUTO_INCREMENT,
    store_id INT NOT NULL,
    product_id INT NOT NULL,
    stock_quantity INT DEFAULT 0,
    status ENUM('available', 'out_of_stock', 'recently_added') DEFAULT 'available',
    last_updated TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    FOREIGN KEY (store_id) REFERENCES stores(store_id) ON DELETE CASCADE,
    FOREIGN KEY (product_id) REFERENCES products(product_id) ON DELETE CASCADE
);

-- ============================================
-- 6️⃣ Orders Table
-- ============================================
CREATE TABLE orders (
    order_id INT PRIMARY KEY AUTO_INCREMENT,
    order_code VARCHAR(50) UNIQUE NOT NULL,
    user_id INT,
    order_status ENUM('pending', 'processing', 'shipped', 'completed', 'cancelled') DEFAULT 'pending',
    order_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    subtotal DECIMAL(10,2) NOT NULL,
    shipping_fee DECIMAL(10,2) DEFAULT 0.00,
    discount DECIMAL(10,2) DEFAULT 0.00,
    total_amount DECIMAL(10,2) GENERATED ALWAYS AS (subtotal + shipping_fee - discount) STORED,

    -- Shipping Details
    first_name VARCHAR(100),
    last_name VARCHAR(100),
    phone VARCHAR(50),
    email VARCHAR(255),
    city VARCHAR(100),
    postal_code VARCHAR(20),
    street_address VARCHAR(255),

    FOREIGN KEY (user_id) REFERENCES users(user_id) ON DELETE SET NULL
);

-- ============================================
-- 7️⃣ Order Items Table (Products in Orders)
-- ============================================
CREATE TABLE order_items (
    item_id INT PRIMARY KEY AUTO_INCREMENT,
    order_id INT NOT NULL,
    product_id INT NOT NULL,
    quantity INT DEFAULT 1,
    unit_price DECIMAL(10,2) NOT NULL,
    total_price DECIMAL(10,2) GENERATED ALWAYS AS (unit_price * quantity) STORED,

    FOREIGN KEY (order_id) REFERENCES orders(order_id) ON DELETE CASCADE,
    FOREIGN KEY (product_id) REFERENCES products(product_id) ON DELETE CASCADE
);

-- ============================================
-- 8️⃣ Coupons Table
-- ============================================
CREATE TABLE coupons (
    coupon_id INT PRIMARY KEY AUTO_INCREMENT,
    coupon_code VARCHAR(50) UNIQUE NOT NULL,
    discount_amount DECIMAL(10,2) NOT NULL,
    status ENUM('active', 'used', 'expired') DEFAULT 'active',
    expiration_date DATE,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);

-- ============================================
-- 9️⃣ User Coupons Table (Tracking Coupon Usage)
-- ============================================
CREATE TABLE user_coupons (
    id INT PRIMARY KEY AUTO_INCREMENT,
    coupon_id INT,
    user_email VARCHAR(255),
    validated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (coupon_id) REFERENCES coupons(coupon_id) ON DELETE CASCADE
);

-- ============================================
-- 🔟 Bookings Table (Reservations for Products)
-- ============================================
CREATE TABLE bookings (
    booking_id INT PRIMARY KEY AUTO_INCREMENT,
    qr_code VARCHAR(50) UNIQUE NOT NULL,
    product_id INT NOT NULL,
    user_id INT,
    size VARCHAR(10),
    booking_status ENUM('pending', 'ready_for_pickup', 'confirmed', 'cancelled') DEFAULT 'pending',
    expiration_time TIMESTAMP,

    -- Billing Information
    billing_name VARCHAR(255),
    billing_email VARCHAR(255),
    billing_phone VARCHAR(50),

    -- Shipping Information
    shipping_city VARCHAR(100),
    shipping_province VARCHAR(100),
    shipping_postal_code VARCHAR(20),
    shipping_state VARCHAR(100),
    shipping_notes TEXT,

    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,

    FOREIGN KEY (product_id) REFERENCES products(product_id) ON DELETE CASCADE,
    FOREIGN KEY (user_id) REFERENCES users(user_id) ON DELETE SET NULL
);
