# cassandra-exercise

## What is cassandra?

* open source
* noSQL
* distributed (spread accros multiple servers)
* provides massive scalability
* clusters exists of 1000 nodes
* nodes can be accross multiple servers
* based on amazon dynamo and google big table

http://cassandra.apache.org/

* linear scalable
* fault tolerance
* no need for specialiced servers

https://academy.datastax.com/planet-cassandra/companies


Categories
* Product catalog
* Recommendation/Personalization
* Fraud detection
* Messaging
* IOT/sensor data

a netwroks group of servers of cassandra is a cluster
no slave or master nodes
has replication
no single point of failure
datastax is a company that is heavily involved with cassandra

snitch is how the nodes in a cluster know about the topology

gossip is how the nodes in a cluster communicate with eachother

Every one second, each node comunicates with up to three other nodes, exchanging information about itself and all the other nodes that has information about

to distribute data across the nodes, cassandra uses a partitioner named murmur3

https://gist.github.com/hkhamm/a9a2b45dd749e5d3b3ae

nodetool status
nodetool info -h 127.0.0.1
nodetool ring

a database is a keyspace
within a keyspace, tables can be defined

>  describe keyspaces;

> create keyspace todos with replication  = { 'class': 'SimpleStrategy', 'replication_factor': 1 };
> use todos

> create table todo_list ( 
  value text,
  datetime timestamp,
  primary key (datetime)
)