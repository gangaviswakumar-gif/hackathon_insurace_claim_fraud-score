-- ==========================================
-- SmartClaim Database Schema
-- ==========================================

-- Drop existing tables (for development only)
DROP TABLE IF EXISTS fraud_history CASCADE;
DROP TABLE IF EXISTS claim_documents CASCADE;
DROP TABLE IF EXISTS claims CASCADE;
DROP TABLE IF EXISTS policies CASCADE;
DROP TABLE IF EXISTS customers CASCADE;

-- ==========================================
-- Customers Table
-- ==========================================

CREATE TABLE customers (
    customer_id SERIAL PRIMARY KEY,
    customer_name VARCHAR(100) NOT NULL,
    phone VARCHAR(15) NOT NULL,
    email VARCHAR(100) UNIQUE,
    total_claims INT DEFAULT 0,
    total_claim_amount DECIMAL(12,2) DEFAULT 0,
    fraud_cases INT DEFAULT 0
);
-- ==========================================
-- Policies Table
-- ==========================================

CREATE TABLE policies (
    policy_id SERIAL PRIMARY KEY,

    customer_id INT NOT NULL,

    policy_number VARCHAR(30) UNIQUE NOT NULL,

    policy_type VARCHAR(50) NOT NULL,

    coverage_amount DECIMAL(12,2) NOT NULL,

    start_date DATE NOT NULL,

    end_date DATE NOT NULL,

    status VARCHAR(20) DEFAULT 'Active',

    CONSTRAINT fk_policy_customer
        FOREIGN KEY (customer_id)
        REFERENCES customers(customer_id)
        ON DELETE CASCADE
);
-- ==========================================
-- Claims Table
-- ==========================================

CREATE TABLE claims (
    claim_id SERIAL PRIMARY KEY,

    customer_id INT NOT NULL,

    policy_id INT NOT NULL,

    incident_date TIMESTAMP NOT NULL,

    claim_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP,

    accident_location VARCHAR(255) NOT NULL,

    claim_amount DECIMAL(12,2) NOT NULL,

    description TEXT NOT NULL,

    status VARCHAR(30) DEFAULT 'Pending',

    risk_score INT DEFAULT 0,

    CONSTRAINT fk_claim_customer
        FOREIGN KEY (customer_id)
        REFERENCES customers(customer_id)
        ON DELETE CASCADE,

    CONSTRAINT fk_claim_policy
        FOREIGN KEY (policy_id)
        REFERENCES policies(policy_id)
        ON DELETE CASCADE
);

-- ==========================================
-- Claim Documents Table
-- ==========================================

CREATE TABLE claim_documents (
    document_id SERIAL PRIMARY KEY,

    claim_id INT NOT NULL,

    document_type VARCHAR(30) NOT NULL,

    file_name VARCHAR(255) NOT NULL,

    file_path TEXT NOT NULL,

    uploaded_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT fk_document_claim
        FOREIGN KEY (claim_id)
        REFERENCES claims(claim_id)
        ON DELETE CASCADE
);
-- ==========================================
-- Fraud History Table
-- ==========================================

CREATE TABLE fraud_history (
    fraud_id SERIAL PRIMARY KEY,

    customer_id INT NOT NULL,

    claim_id INT NOT NULL,

    fraud_reason TEXT NOT NULL,

    investigation_status VARCHAR(30) DEFAULT 'Under Investigation',

    reported_date DATE NOT NULL,

    CONSTRAINT fk_fraud_customer
        FOREIGN KEY (customer_id)
        REFERENCES customers(customer_id)
        ON DELETE CASCADE,

    CONSTRAINT fk_fraud_claim
        FOREIGN KEY (claim_id)
        REFERENCES claims(claim_id)
        ON DELETE CASCADE
);
