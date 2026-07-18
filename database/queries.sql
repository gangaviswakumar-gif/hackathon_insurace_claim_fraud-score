-- ==========================================
-- Query 1: Get Customer & Policy Details
-- ==========================================

SELECT
    c.customer_id,
    c.customer_name,
    c.phone,
    c.email,
    c.total_claims,
    c.total_claim_amount,
    c.fraud_cases,

    p.policy_id,
    p.policy_number,
    p.policy_type,
    p.coverage_amount,
    p.status

FROM customers c
JOIN policies p
ON c.customer_id = p.customer_id

WHERE p.policy_number = 'POL1003';

-- ==========================================
-- Query 2: Get Previous Claims of a Customer
-- ==========================================

SELECT
    claim_id,
    incident_date,
    claim_date,
    accident_location,
    claim_amount,
    status,
    risk_score
FROM claims
WHERE customer_id = 3
ORDER BY claim_date DESC;

-- ==========================================
-- Query 3: Get Customer Fraud History
-- ==========================================

SELECT
    fh.fraud_id,
    fh.claim_id,
    fh.fraud_reason,
    fh.investigation_status,
    fh.reported_date
FROM fraud_history fh
WHERE fh.customer_id = 3
ORDER BY fh.reported_date DESC;

-- ==========================================
-- Query 4: Create a New Claim
-- ==========================================

INSERT INTO claims (
    customer_id,
    policy_id,
    incident_date,
    claim_date,
    accident_location,
    claim_amount,
    description,
    status,
    risk_score
)
VALUES (
    1,
    1,
    '2026-07-18 14:30:00',
    CURRENT_TIMESTAMP,
    'Kochi',
    180000,
    'Front bumper damaged after rear-end collision.',
    'Pending',
    0
);

-- ==========================================
-- Query 5: Save Claim Documents
-- ==========================================

INSERT INTO claim_documents (
    claim_id,
    document_type,
    file_name,
    file_path
)
VALUES
(
    10,
    'Image',
    'front_damage.jpg',
    'uploads/claim_10/front_damage.jpg'
),
(
    10,
    'Video',
    'accident_video.mp4',
    'uploads/claim_10/accident_video.mp4'
);

-- ==========================================
-- Query 6: Update Risk Score & Status
-- ==========================================

UPDATE claims
SET
    risk_score = 76,
    status = 'Under Review'
WHERE claim_id = 10;

-- ==========================================
-- Query 7: Investigator Final Decision
-- ==========================================

UPDATE claims
SET
    status = 'Approved'
WHERE claim_id = 10;

-- OR

UPDATE claims
SET
    status = 'Rejected'
WHERE claim_id = 10;

-- ==========================================
-- Query 8: Generate Complete Claim Report
-- ==========================================

SELECT
    c.claim_id,
    cu.customer_name,
    p.policy_number,
    p.policy_type,
    c.claim_amount,
    c.accident_location,
    c.claim_date,
    c.status,
    c.risk_score,
    cu.total_claims,
    cu.total_claim_amount,
    cu.fraud_cases
FROM claims c
JOIN customers cu
    ON c.customer_id = cu.customer_id
JOIN policies p
    ON c.policy_id = p.policy_id
WHERE c.claim_id = 10;
