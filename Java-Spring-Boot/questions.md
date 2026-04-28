This is a comprehensive collection of our technical deep-dive into distributed systems, gRPC resilience, and Domain-Driven Design (DDD). I have synthesized all the questions and answers from our recent discussions into this structured "Cheat Sheet" for your notes.

---

# 🚀 Java & Microservices Architecture: The Interview Master List

## Part 1: Distributed Transactions & Consistency
**Q1: How do you handle transactional boundaries across multiple microservices?**
* **The Problem:** Distributed systems lack ACID properties across service boundaries.
* **The Solution:** Use the **Saga Pattern**. It manages a sequence of local transactions. If one step fails, the Saga executes **compensating transactions** to undo previous successful steps.
* **Implementation:** Choose between **Choreography** (event-driven, decentralized) or **Orchestration** (centralized manager).

**Q2: What is the "Dual Write" problem and how do you solve it?**
* **The Problem:** A service updates its database but crashes before it can send a notification message to a broker (like Kafka), leading to data inconsistency.
* **The Solution:** Use the **Transactional Outbox Pattern**. Save the event message in an `OUTBOX` table within the *same* database transaction as the business logic. A separate relay process then picks up the message and publishes it.



**Q3: Why is Idempotency critical in distributed systems?**
* **Answer:** Networks are unreliable. A service might process a request, but the "Success" response gets lost. The client retries, sending the same request again. 
* **Implementation:** Use a **Correlation ID** or **Idempotency Key**. The server checks if the ID has already been processed before executing the logic.

---

## Part 2: gRPC Resilience & Integration
**Q4: How do you implement Retries and Circuit Breakers for gRPC?**
* **Retries:** Use gRPC's native **Service Config** to define retryable status codes (e.g., `UNAVAILABLE`) and exponential backoff.
* **Circuit Breakers:** Use libraries like **Resilience4j**. If a downstream gRPC service fails repeatedly, the breaker "trips" to prevent system-wide exhaustion.
* **Alternative:** Offload these concerns to a **Service Mesh** (like Istio/Envoy) via the Sidecar pattern.

**Q5: How does Deadline Propagation improve system stability?**
* **Answer:** In gRPC, a **Deadline** allows a client to specify how long it is willing to wait. This deadline is propagated through the entire call chain (Service A → B → C). If the deadline expires, all services in the chain stop processing immediately, saving resources.

---

## Part 3: Domain-Driven Design (DDD) & Spring Boot
**Q6: How is a Bounded Context represented in a Spring application?**
* **Microservices:** Usually one Bounded Context per microservice.
* **Monolith:** Represented by separate Maven/Gradle modules or distinct packages. It ensures domain terms (e.g., "Account") stay isolated to their specific logic.

**Q7: Explain Aggregate and Aggregate Root in the context of Spring Data.**
* **Aggregate:** A cluster of objects treated as one unit for data changes.
* **Aggregate Root:** The gatekeeper. All external calls must go through it. 
* **Spring Mapping:** The Root is usually the `@Entity` with a corresponding `Repository`.



**Q8: How should Aggregates communicate?**
* **Internal:** Use **Domain Events** (e.g., Spring Data's `@DomainEvents`) for logic within the same context.
* **External:** Use **Asynchronous Messaging** (Kafka/RabbitMQ) to maintain eventual consistency between different Bounded Contexts.

**Q9: What is an Anti-Corruption Layer (ACL)?**
* **Answer:** A translation layer (Service or Adapter) used when your clean domain needs to talk to a legacy or third-party system. It prevents external "messy" models from leaking into your clean business logic.

---

## Part 4: Testing & Mapping Summary

| DDD Concept | Spring Boot / Technical Implementation |
| :--- | :--- |
| **Entity** | Class with `@Entity` and a unique ID. |
| **Value Object** | Java **Records** or `@Embeddable`. |
| **Repository** | Interfaces extending `JpaRepository` or `CrudRepository`. |
| **Domain Service** | `@Service` for logic that spans multiple entities. |
| **Application Service** | `@Service` that handles DTO conversion and transactions. |

**Testing Strategy:**
* **Unit Tests:** For Aggregates and Value Objects (No Spring Context).
* **Integration Tests:** `@DataJpaTest` for Repository verification.
* **Contract Tests:** **Spring Cloud Contract** or **Pact** to ensure service-to-service API compatibility.

---
*Copy and paste this into your notes. This covers the architectural foundation we've built over our sessions!*