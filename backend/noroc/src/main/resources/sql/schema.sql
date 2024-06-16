-- Active: 1718097916125@@127.0.0.1@5432@norocdb
-- Drop existing tables if they exist
CREATE TABLE IF NOT EXISTS "User" (
    id SERIAL NOT NULL,
    userName VARCHAR(60) NOT NULL,
    password VARCHAR(60) NOT NULL,
    firstName VARCHAR(60) NOT NULL,
    lastName VARCHAR(60) NOT NULL,
    email VARCHAR(60) NOT NULL,
    role SMALLINT NOT NULL,
    CONSTRAINT UserPK PRIMARY KEY (id),
    CONSTRAINT UserNameUniqueKey UNIQUE (userName)
);

CREATE INDEX IF NOT EXISTS UserIndexByUserName ON "User" (userName);

CREATE TABLE IF NOT EXISTS Category (
    id BIGSERIAL NOT NULL,
    name VARCHAR(60) NOT NULL,
    CONSTRAINT CategoryPK PRIMARY KEY (id),
    CONSTRAINT CategoryNameUniqueKey UNIQUE (name)
);

CREATE INDEX IF NOT EXISTS CategoryIndexByName ON Category (name);

CREATE TABLE IF NOT EXISTS Product (
    id BIGSERIAL NOT NULL,
    name VARCHAR(60) NOT NULL,
    description VARCHAR(2000) NOT NULL,
    price DECIMAL(11, 2) NOT NULL,
    categoryId BIGINT NOT NULL,
    CONSTRAINT ProductPK PRIMARY KEY (id),
    CONSTRAINT ProductCategoryIdFK FOREIGN KEY(categoryId)
        REFERENCES Category (id)
);

CREATE INDEX IF NOT EXISTS ProductIndexByName ON Product (name);

CREATE TABLE IF NOT EXISTS ShoppingCart (
    id BIGSERIAL NOT NULL,
    userId BIGINT NOT NULL,
    CONSTRAINT ShoppingCartPK PRIMARY KEY (id),
    CONSTRAINT ShoppingCartUserIdFK FOREIGN KEY(userId)
        REFERENCES "User" (id)
);

CREATE TABLE IF NOT EXISTS ShoppingCartItem (
    id BIGSERIAL NOT NULL,
    productId BIGINT NOT NULL,
    quantity SMALLINT NOT NULL,
    shoppingCartId BIGINT NOT NULL,
    CONSTRAINT ShoppingCartItemPK PRIMARY KEY (id),
    CONSTRAINT ShoppingCartItemProductIdFK FOREIGN KEY(productId)
        REFERENCES Product (id),
    CONSTRAINT ShoppingCartItemShoppingCartIdFK FOREIGN KEY(shoppingCartId)
        REFERENCES ShoppingCart (id)
);

CREATE TABLE IF NOT EXISTS OrderTable (
    id BIGSERIAL NOT NULL,
    userId BIGINT NOT NULL,
    date TIMESTAMP NOT NULL,
    postalAddress VARCHAR(200) NOT NULL,
    postalCode VARCHAR(20) NOT NULL,
    CONSTRAINT OrderPK PRIMARY KEY (id),
    CONSTRAINT OrderUserIdFK FOREIGN KEY(userId)
        REFERENCES "User" (id)
);

CREATE TABLE IF NOT EXISTS OrderItem (
    id BIGSERIAL NOT NULL,
    productId BIGINT NOT NULL,
    productPrice DECIMAL(11, 2) NOT NULL,
    quantity SMALLINT NOT NULL,
    orderId BIGINT NOT NULL,
    CONSTRAINT OrderItemPK PRIMARY KEY (id),
    CONSTRAINT OrderItemProductIdFK FOREIGN KEY(productId)
        REFERENCES Product (id),
    CONSTRAINT OrderItemOrderIdFK FOREIGN KEY(orderId)
        REFERENCES OrderTable (id)
);
CREATE TABLE IF NOT EXISTS CheckoutProcess (
    id BIGSERIAL PRIMARY KEY,
    orderId BIGINT NOT NULL,
    status VARCHAR(50) NOT NULL,
    paymentId BIGINT NOT NULL,
    FOREIGN KEY (orderId) REFERENCES OrderTable (id),
    FOREIGN KEY (paymentId) REFERENCES Payment (id)
);
CREATE TABLE IF NOT EXISTS Payment (
    id BIGSERIAL PRIMARY KEY,
    amount DECIMAL(11, 2) NOT NULL,
    date TIMESTAMP NOT NULL,
    method VARCHAR(50) NOT NULL,
    status VARCHAR(50) NOT NULL
);

-- Active: 1718097121195@@127.0.0.1@5432
-- ----------------------------------------------------------------------------
-- Put here INSERT statements for inserting data required by the application
-- in the "norocdb" database.
-------------------------------------------------------------------------------

-- Insert categories
INSERT INTO Category (name) VALUES ('Collares');
INSERT INTO Category (name) VALUES ('Pulseras');
INSERT INTO Category (name) VALUES ('Pendientes');
INSERT INTO Category (name) VALUES ('Anillos');

-- Insert products
INSERT INTO product (name, description, price, categoryId) VALUES
('Collar Elegancia', 'Collar de cuentas de cristal checo', 29.99, 1),
('Collar Perla Blanca', 'Collar de cuentas de cristal checo', 49.99, 1),
('Collar Corazón', 'Collar de cuentas de cristal checo', 19.99, 1),
('Collar Estrella', 'Collar de cuentas de cristal checo', 24.99, 1),
('Collar Vintage', 'Collar de cuentas de cristal checo', 34.99, 1),
('Pulsera Clásica', 'Pulsera de cuentas de cristal checo', 14.99, 2),
('Pulsera Oro', 'Pulsera de cuentas de cristal checo', 79.99, 2),
('Pulsera Plata', 'Pulsera de cuentas de cristal checo', 59.99, 2),
('Pulsera Aventura', 'Pulsera de cuentas de cristal checo', 19.99, 2),
('Pulsera Minimalista', 'Pulsera de cuentas de cristal checo', 24.99, 2),
('Anillo Diamante', 'Anillo de cuentas de cristal checo', 499.99, 3),
('Anillo Esmeralda', 'Anillo de cuentas de cristal checo', 299.99, 3),
('Anillo Rubí', 'Anillo de cuentas de cristal checo', 199.99, 3),
('Anillo Zafiro', 'Anillo de cuentas de cristal checo', 249.99, 3),
('Anillo Clásico', 'Anillo de cuentas de cristal checo', 99.99, 3),
('Pendientes Elegancia', 'Pendientes de cuentas de cristal checo', 39.99, 4),
('Pendientes Perla', 'Pendientes de cuentas de cristal checo', 59.99, 4),
('Pendientes Diamante', 'Pendientes de cuentas de cristal checo', 99.99, 4),
('Pendientes Corazón', 'Pendientes de cuentas de cristal checo', 29.99, 4),
('Pendientes Estrella', 'Pendientes de cuentas de cristal checo', 34.99, 4),
('Collar Mariposa', 'Collar de cuentas de cristal checo', 27.99, 1),
('Collar Luna', 'Collar de cuentas de cristal checo', 22.99, 1),
('Collar Sol', 'Collar de cuentas de cristal checo', 18.99, 1),
('Collar Flor', 'Collar de cuentas de cristal checo', 26.99, 1),
('Collar Amor', 'Collar de cuentas de cristal checo', 32.99, 1),
('Pulsera Corazón', 'Pulsera de cuentas de cristal checo', 21.99, 2),
('Pulsera Luna', 'Pulsera de cuentas de cristal checo', 17.99, 2),
('Pulsera Mariposa', 'Pulsera de cuentas de cristal checo', 15.99, 2),
('Pulsera Sol', 'Pulsera de cuentas de cristal checo', 13.99, 2),
('Pulsera Flor', 'Pulsera de cuentas de cristal checo', 19.99, 2),
('Anillo Mariposa', 'Anillo de cuentas de cristal checo', 69.99, 3),
('Anillo Corazón', 'Anillo de cuentas de cristal checo', 89.99, 3),
('Anillo Estrella', 'Anillo de cuentas de cristal checo', 79.99, 3),
('Anillo Flor', 'Anillo de cuentas de cristal checo', 59.99, 3),
('Anillo Luna', 'Anillo de cuentas de cristal checo', 39.99, 3),
('Pendientes Mariposa', 'Pendientes de cuentas de cristal checo', 44.99, 4),
('Pendientes Luna', 'Pendientes de cuentas de cristal checo', 39.99, 4),
('Pendientes Sol', 'Pendientes de cuentas de cristal checo', 34.99, 4),
('Pendientes Flor', 'Pendientes de cuentas de cristal checo', 29.99, 4),
('Pendientes Aro', 'Pendientes de cuentas de cristal checo', 24.99, 4),
('Collar Diamante', 'Collar de cuentas de cristal checo', 59.99, 1),
('Collar Esmeralda', 'Collar de cuentas de cristal checo', 69.99, 1),
('Collar Rubí', 'Collar de cuentas de cristal checo', 79.99, 1),
('Collar Zafiro', 'Collar de cuentas de cristal checo', 89.99, 1),
('Collar Cristal', 'Collar de cuentas de cristal checo', 49.99, 1),
('Pulsera Diamante', 'Pulsera de cuentas de cristal checo', 39.99, 2),
('Pulsera Esmeralda', 'Pulsera de cuentas de cristal checo', 49.99, 2),
('Pulsera Rubí', 'Pulsera de cuentas de cristal checo', 59.99, 2),
('Pulsera Zafiro', 'Pulsera de cuentas de cristal checo', 69.99, 2),
('Pulsera Cristal', 'Pulsera de cuentas de cristal checo', 29.99, 2),
('Anillo Amor', 'Anillo de cuentas de cristal checo', 99.99, 3),
('Anillo Brillo', 'Anillo de cuentas de cristal checo', 109.99, 3),
('Anillo Luz', 'Anillo de cuentas de cristal checo', 119.99, 3),
('Anillo Encanto', 'Anillo de cuentas de cristal checo', 89.99, 3),
('Anillo Magia', 'Anillo de cuentas de cristal checo', 79.99, 3),
('Pendientes Amor', 'Pendientes de cuentas de cristal checo', 44.99, 4),
('Pendientes Brillo', 'Pendientes de cuentas de cristal checo', 54.99, 4),
('Pendientes Luz', 'Pendientes de cuentas de cristal checo', 64.99, 4),
('Pendientes Encanto', 'Pendientes de cuentas de cristal checo', 74.99, 4),
('Pendientes Magia', 'Pendientes de cuentas de cristal checo', 84.99, 4);