-- ==========================================
-- SmartClaim Sample Data
-- ==========================================

-- ==========================================
-- Customers
-- ==========================================

INSERT INTO customers
(customer_name, phone, email, total_claims, total_claim_amount, fraud_cases)
VALUES
('Rahul Sharma', '9876543210', 'rahul@gmail.com', 2, 180000.00, 0),
('Anjali Nair', '9895012345', 'anjali@gmail.com', 1, 45000.00, 0),
('Arjun Menon', '9847012345', 'arjun@gmail.com', 5, 1250000.00, 2),
('Sneha Thomas', '9871234567', 'sneha@gmail.com', 3, 350000.00, 0),
('Vikram Rao', '9988776655', 'vikram@gmail.com', 7, 2150000.00, 1),
('Priya Das', '9012345678', 'priya@gmail.com', 0, 0.00, 0),
('Kiran Kumar', '9123456789', 'kiran@gmail.com', 4, 620000.00, 0),
('Meera Joseph', '9234567890', 'meera@gmail.com', 6, 980000.00, 1);

-- ==========================================
-- Policies
-- ==========================================

INSERT INTO policies
(customer_id, policy_number, policy_type, coverage_amount, start_date, end_date, status)
VALUES
(1,'POL1001','Comprehensive',800000.00,'2025-01-01','2027-01-01','Active'),
(2,'POL1002','Third Party',300000.00,'2025-05-12','2027-05-12','Active'),
(3,'POL1003','Comprehensive',1500000.00,'2024-03-15','2027-03-15','Active'),
(4,'POL1004','Comprehensive',900000.00,'2025-02-10','2027-02-10','Active'),
(5,'POL1005','Premium',2500000.00,'2024-08-20','2027-08-20','Active'),
(6,'POL1006','Third Party',400000.00,'2026-01-15','2028-01-15','Active'),
(7,'POL1007','Comprehensive',1200000.00,'2025-06-18','2027-06-18','Active'),
(8,'POL1008','Premium',1800000.00,'2024-11-10','2027-11-10','Active');

-- ==========================================
-- Claims
-- ==========================================

INSERT INTO claims
(customer_id, policy_id, incident_date, claim_date, accident_location, claim_amount, description, status, risk_score)
VALUES

(1,1,'2025-06-15 14:20:00','2025-06-16 09:00:00',',Kochi',120000,'Rear-end collision at traffic signal','Approved',20),

(1,1,'2026-02-08 09:15:00','2026-02-09 10:30:00','Thrissur',60000,'Side door damaged while parking','Approved',18),

(2,2,'2026-01-20 18:30:00','2026-01-21 08:45:00','Kozhikode',45000,'Minor scratches after bike collision','Approved',10),

(3,3,'2025-03-11 20:10:00','2025-03-28 11:00:00','Bengaluru',450000,'Major front-end collision on highway','Rejected',82),

(3,3,'2025-09-22 13:40:00','2025-09-23 09:20:00','Mysuru',300000,'Engine damage after accident','Approved',74),

(4,4,'2025-10-02 10:30:00','2025-10-03 09:15:00','Thiruvananthapuram',110000,'Front bumper damaged in parking lot','Approved',22),

(5,5,'2026-03-18 22:10:00','2026-03-19 08:00:00','Chennai',750000,'Vehicle affected by flood','Under Review',67),

(7,7,'2025-11-06 16:00:00','2025-11-07 10:00:00','Coimbatore',220000,'Windshield broken due to falling object','Approved',24),

(8,8,'2025-08-19 15:25:00','2025-08-20 09:30:00','Ernakulam',410000,'Multiple body panel damage','Approved',55);

-- ==========================================
-- Claim Documents
-- ==========================================

INSERT INTO claim_documents
(claim_id, document_type, file_name, file_path)
VALUES

(1,'Image','front_damage.jpg','uploads/claim_1/front_damage.jpg'),
(1,'Invoice','repair_invoice.pdf','uploads/claim_1/repair_invoice.pdf'),

(2,'Image','side_damage.jpg','uploads/claim_2/side_damage.jpg'),

(3,'Image','bike_damage.jpg','uploads/claim_3/bike_damage.jpg'),

(4,'Image','front_collision.jpg','uploads/claim_4/front_collision.jpg'),
(4,'Video','accident_video.mp4','uploads/claim_4/accident_video.mp4'),

(5,'Invoice','engine_repair.pdf','uploads/claim_5/engine_repair.pdf'),

(6,'Image','bumper_damage.jpg','uploads/claim_6/bumper_damage.jpg'),

(7,'Video','flood_video.mp4','uploads/claim_7/flood_video.mp4'),

(8,'Image','windshield_damage.jpg','uploads/claim_8/windshield_damage.jpg'),

(9,'Image','body_damage.jpg','uploads/claim_9/body_damage.jpg');

-- ==========================================
-- Fraud History
-- ==========================================

INSERT INTO fraud_history
(customer_id, claim_id, fraud_reason, investigation_status, reported_date)
VALUES

(
    3,
    4,
    'Damage severity in uploaded images did not match the claimed repair estimate.',
    'Completed',
    '2025-04-05'
),

(
    5,
    7,
    'Customer attempted to submit multiple claims for the same flood incident.',
    'Under Investigation',
    '2026-03-25'
);
