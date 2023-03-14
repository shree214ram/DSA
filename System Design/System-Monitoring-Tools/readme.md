1. Kafka
2. Grefana 
3. Metrics
4. Monitoring {HealthChecks to check Hart Bits of Systems} Kubernativs 
5. Mechanism to send Alerts at below 
    1. Disk Memory Utilization 
    2. Redis Utilization

### Apache Kafka 

    What is Kafka? | Confluent
    https://www.confluent.io/what-is-apache-kafka/?utm_medium=sem&utm_source=bing&utm_campaign=ch.sem_br.nonbrand_tp.prs_tgt.kafka_mt.xct_rgn.india_lng.eng_dv.all&utm_term=kafka&creative=&device=c&placement=&msclkid=54bf43dcec6e1488eec6204c2fc9184c


    What is Kafka? | How it Works, Key Concept | Advantanges & Scope (educba.com)
    https://www.educba.com/what-is-kafka/

    Kafka Node | 6 Best Steps of Integrating Kafka with NodeJS (educba.com)
    https://www.educba.com/kafka-node/

    Implementing a Kafka Producer and Consumer In Node.js (With Full Examples) For Production (sohamkamani.com)
    https://www.sohamkamani.com/nodejs/working-with-kafka/


    What is Kafka | Messaging System | Distributed Environment | Apache Kafka Tutorial in Hindi |Video 1 - YouTube
    https://www.youtube.com/watch?v=TGKUYoegrDY&ab_channel=BrijeshGupta

    Apache Kafka Basics - A Layman's guide for beginners | Explained with real life examples - YouTube 
    https://www.youtube.com/watch?v=0V9SK6jmDPk&ab_channel=ITkFunde

    Apache Kafka is Distributed  and Message Streaming Platform
    Apache kafka is implemented via Linked in for 
   1. Fast Live streaming 
    2. Data transformation 
    3. Millions of message in microsecond 
    4. High Scalability 
    5. High Throughput 
    6. Low Latency 

    # High Throughput
    Capable of handling high-velocity and high-volume data, Kafka can handle millions of messages per second.
    # High Scalability
    Scale Kafka clusters up to a thousand brokers, trillions of messages per day, petabytes of data, hundreds of thousands of partitions. Elastically expand and contract storage and processing.
    # Low Latency
    Can deliver these high volume of messages using a cluster of machines with latencies as low as 2ms
    # Permanent Storage
    Safely, securely store streams of data in a distributed, durable, reliable, fault-tolerant cluster
    # High Availability
    Extend clusters efficiently over availability zones or connect clusters across geographic regions, making Kafka highly available and fault tolerant with no risk of data loss.


# Dead Lator queue
https://medium.com/@sannidhi.s.t/dead-letter-queues-dlqs-in-kafka-afb4b6835309

1. if any json is not valid then log malformed message on DLQ , without disturb the flow .
2. if any json is valid but inner data is not valid then log malformed message on DLQ , without disturb the flow .
3. if target data limit is complete and another records are coming so we can keep this message to DLQ
4. if target topic is not exist and we dont have destination so we can keep that's message in DLG 
    

#### Way to transfer information from one server to another Or One Application to Another Application ?
1. Rest API {Payload}
2. Message Queue 
2. Message Stream 
2. Shared Database 
2. S3 Bucket (Cloud Storage)
https://medium.com/codex/sending-data-between-applications-e08fb0028a71

#### How to build Analytical Dashboard  ?
Big Data Hadoop Apache spark 