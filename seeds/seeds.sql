-- INSERT data INTO categories table
INSERT INTO categories (name) VALUES
('Electronics'),
('Furniture'),
('Supplies');

-- INSERT data INTO employees table
INSERT INTO employees (first_name, last_name, email, password, is_admin) VALUES
('John', 'Doe', 'john.doe@example.com', 'password123', TRUE),
('Jane', 'Smith', 'jane.smith@example.com', 'password123', FALSE),
('Alice', 'Jones', 'alice.jones@example.com', 'password123', FALSE),
('Bob', 'Brown', 'bob.brown@example.com', 'password123', FALSE),
('Charlie', 'Clark', 'charlie.clark@example.com', 'password123', TRUE);

-- INSERT data INTO items table
INSERT INTO items (item_name, description, available, category_id) VALUES
('Laptop', 'Dell XPS 13', TRUE, 1),
('Monitor', 'HP 24mh', TRUE, 1),
('Office Chair', 'Ergonomic chair', TRUE, 2),
('Desk Lamp', 'Adjustable desk lamp', TRUE, 2),
('Notebook', 'Spiral-bound notebook', TRUE, 3),
('Printer', 'HP LaserJet Pro', TRUE, 1),
('Whiteboard', 'Magnetic whiteboard', TRUE, 3),
('Desk', 'Standing desk', TRUE, 2);

-- INSERT data INTO transactions table
INSERT INTO transactions (borrow_date, return_date, user_id, items_id) VALUES
('2024-01-10 09:00:00', '2024-01-15 17:00:00', 1, 1),
('2024-01-12 08:30:00', NULL, 2, 3),
('2024-01-05 09:30:00', '2024-01-10 16:00:00', 3, 5),
('2024-01-08 10:00:00', '2024-01-12 14:00:00', 4, 6),
('2024-01-11 08:00:00', '2024-01-18 17:00:00', 5, 7);