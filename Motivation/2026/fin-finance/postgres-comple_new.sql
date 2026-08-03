-- 1. Wipe and recreate the schema for a clean slate
DROP SCHEMA IF EXISTS dev CASCADE;
CREATE SCHEMA dev;
ALTER SCHEMA dev OWNER TO finguardian_user;

-- 2. Users Table
CREATE TABLE dev.users (
    id BIGSERIAL PRIMARY KEY,
    email VARCHAR(255),
    password VARCHAR(255),
    full_name VARCHAR(255),
    is_two_factor_enabled BOOLEAN DEFAULT FALSE,
    google_id VARCHAR(255),
    pwa_notification_token VARCHAR(255)
);
ALTER TABLE dev.users OWNER TO finguardian_user;

-- 3. Tax Documents Table
CREATE TABLE dev.tax_documents (
    id BIGSERIAL PRIMARY KEY,
    file_name VARCHAR(255) NOT NULL,
    file_type VARCHAR(100),
    upload_status VARCHAR(50),
    sensitive_data_masked BOOLEAN DEFAULT FALSE,
    created_at TIMESTAMP WITHOUT TIME ZONE DEFAULT CURRENT_TIMESTAMP
);
ALTER TABLE dev.tax_documents OWNER TO finguardian_user;

-- 4. Audit Logs Table (Fixing the oldValue and naming issues)
CREATE TABLE dev.audit_logs (
    id BIGSERIAL PRIMARY KEY,
    document_id BIGINT,
    action VARCHAR(255),
    source_provenance TEXT,
    old_value TEXT,  -- Matches standard naming and your current DB type
    new_value TEXT,
    timestamp TIMESTAMP WITHOUT TIME ZONE DEFAULT CURRENT_TIMESTAMP
);
ALTER TABLE dev.audit_logs OWNER TO finguardian_user;

-- 5. Tax Calculations Table
CREATE TABLE dev.tax_calculations (
    id BIGSERIAL PRIMARY KEY,
    user_id BIGINT REFERENCES dev.users(id),
    financial_year VARCHAR(10),
    filed_income DECIMAL(15, 2),
    optimized_income DECIMAL(15, 2),
    filed_deductions DECIMAL(15, 2),
    optimized_deductions DECIMAL(15, 2),
    potential_savings DECIMAL(15, 2)
);
ALTER TABLE dev.tax_calculations OWNER TO finguardian_user;

-- 6. Grant schema usage (Extra safety)
GRANT ALL PRIVILEGES ON SCHEMA dev TO finguardian_user;
GRANT ALL PRIVILEGES ON ALL TABLES IN SCHEMA dev TO finguardian_user;
GRANT ALL PRIVILEGES ON ALL SEQUENCES IN SCHEMA dev TO finguardian_user;
