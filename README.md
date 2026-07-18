# hackathon_insurace_claim_fraud-score
SmartClaim is an MCP-powered AI system that assesses insurance claims by analyzing submitted details, photos, videos, location, and weather data. It generates an explainable fraud risk score, helping insurers prioritize suspicious claims for manual review while improving claim assessment efficiency.


# SmartClaim Database

## Overview

The SmartClaim Database is built using PostgreSQL and stores all information required for the Insurance Claim Risk Assessment System.

It maintains customer records, insurance policies, previous claims, uploaded claim documents, and fraud history.

This database is used by the MCP Server to retrieve customer information, create new claims, and support AI-based fraud risk assessment.

---

# Database Structure

The database consists of five tables:

1. customers
2. policies
3. claims
4. claim_documents
5. fraud_history

---

## Table Relationships

customers
│
├── policies
│
└── claims
      │
      ├── claim_documents
      │
      └── fraud_history

---

## Files

schema.sql

Contains the complete database schema.

Includes:

- CREATE TABLE statements
- Primary Keys
- Foreign Keys
- Constraints

---

seed.sql

Contains sample data for testing.

Includes:

- Customers
- Policies
- Previous Claims
- Claim Documents
- Fraud History

---

queries.sql

Contains SQL queries used by the MCP Server.

Available Queries:

- Get Customer & Policy Details
- Get Previous Claims
- Get Fraud History
- Create New Claim
- Save Claim Documents
- Update Risk Score
- Investigator Decision
- Generate Dashboard Report

---

## Database Setup

### Step 1

Create the tables

```sql
\i schema.sql
```

### Step 2

Insert sample data

```sql
\i seed.sql
```

---

## Technologies

- PostgreSQL
- SQL
- pgAdmin 4

---

## SmartClaim Workflow

Customer submits claim

↓

Claim stored in PostgreSQL

↓

MCP Server retrieves customer history

↓

Location Verification

↓

Weather Verification

↓

Image Analysis (Gemini)

↓

Rule Engine

↓

Risk Score

↓

Manual Review

---

## Developed For

Amrita University MCP Hackathon 2026

Project:
SmartClaim – AI Insurance Claim Risk Assessment System
