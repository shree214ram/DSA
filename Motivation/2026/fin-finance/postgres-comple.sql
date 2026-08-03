-- 1. Create and setup the schema
CREATE SCHEMA IF NOT EXISTS dev;
ALTER SCHEMA dev OWNER TO finguardian_user;

-- 2. Create users table (with the column Hibernate is trying to add)
CREATE TABLE IF NOT EXISTS dev.users (
    id BIGSERIAL PRIMARY KEY,
    username VARCHAR(255),
    password VARCHAR(255),
    email VARCHAR(255),
    pwa_notification_token VARCHAR(255)
);
ALTER TABLE dev.users OWNER TO finguardian_user;

-- 3. Create tax_documents table
CREATE TABLE IF NOT EXISTS dev.tax_documents (
    id BIGSERIAL PRIMARY KEY,
    file_name VARCHAR(255),
    file_type VARCHAR(100),
    upload_status VARCHAR(50),
    sensitive_data_masked BOOLEAN,
    created_at TIMESTAMP WITHOUT TIME ZONE DEFAULT CURRENT_TIMESTAMP
);
ALTER TABLE dev.tax_documents OWNER TO finguardian_user;

-- 4. Create audit_logs table
CREATE TABLE IF NOT EXISTS dev.audit_logs (
    id BIGSERIAL PRIMARY KEY,
    document_id BIGINT,
    action VARCHAR(100),
    old_value TEXT, 
    new_value TEXT,
    timestamp TIMESTAMP WITHOUT TIME ZONE,
    source_provenance VARCHAR(255)
);
ALTER TABLE dev.audit_logs OWNER TO finguardian_user;

-- 5. Create tax_calculations table
CREATE TABLE IF NOT EXISTS dev.tax_calculations (
    id BIGSERIAL PRIMARY KEY,
    document_id BIGINT REFERENCES dev.tax_documents(id),
    total_tax_amount DECIMAL(15, 2),
    calculation_date TIMESTAMP WITHOUT TIME ZONE DEFAULT CURRENT_TIMESTAMP,
    status VARCHAR(50)
);
ALTER TABLE dev.tax_calculations OWNER TO finguardian_user;

-- 6. Grant schema usage (Extra safety)
GRANT ALL PRIVILEGES ON SCHEMA dev TO finguardian_user;
GRANT ALL PRIVILEGES ON ALL TABLES IN SCHEMA dev TO finguardian_user;
GRANT ALL PRIVILEGES ON ALL SEQUENCES IN SCHEMA dev TO finguardian_user;
