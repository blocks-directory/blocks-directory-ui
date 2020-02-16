---
title: AWS Released Managed Apache Cassandra. Here's What You Need to Know.
date: "2020-02-16T19:55:24.284Z"
description: "AWS Released Managed Apache Cassandra. Here's the key things you need to know about the Managed Cassandra Service and differences between Cassandra and DynamoDB."
---

AWS recently released the [Managed Cassandra Service](https://aws.amazon.com/mcs/). Here are the key things you need to know:

- **Truly serverless**. No servers to manage. Unlimited scaling. 
You only pay for the storage used, read/write operations, 
and the data transfer out of the AWS region. 
It’s a bit more expensive than DynamoDB (10–20%) right now but likely to get cheaper with time.

- **Fully compatible with existing drivers/connectors**. 
You point your application to the regional endpoint and use the generated credentials.

- **There is no CloudFormation support yet**. But you can use CQL to create your tables.

- **There’s a UI in the AWS console.** You can manage your keyspaces and tables from there and run CQL queries.

### DynamoDB vs. Apache Cassandra

But what does it really do? Well, the closest AWS product to Cassandra would be the DynamoDB.
If you’re familiar with the DynamoDB, then you only need to know the key differences.

In DynamoDB, there’s no schema other than the defined primary key. 
**Cassandra**, on the other hand, **requires you have every column defined in the schema**. 
It’s possible to make a schema-less column using Map or List data types, however.

Each table family in Cassandra (think table in DynamoDB) has to have a primary key, 
which is almost like DynamoDB partition key. The key difference here is that in **Cassandra, 
a primary key can include multiple columns (composite key)**, 
while in DynamoDB partition key can only include one column. 
To query a table in Cassandra, you’ll need to provide all the 
columns included in the primary key (otherwise, you’re scanning the whole 
table which is slow and should be avoided at all costs). 

DynamoDB sort key is similar to what’s called a clustering key in Cassandra. 
Much like in DynamoDB, you can use it to narrow your search. 
A big difference is that **in Cassandra, the clustering key can include 
multiple columns, and you don’t have to provide all of them to query the table**. 
This is good when you want to store and query hierarchical data (country → state → city) 
though you can do the same with the DynamoDB if you create 
a special column where you would put concatenated strings.

There’s a difference between Cassandra’s materialized views and Dynamo’s global secondary indexes. 
Though both solve similar problems (efficient querying on a different primary key), 
**materialized views in Cassandra have to include all the columns from the original table’s 
primary key in their primary key**. However, they can appear in any order and can define 
different partitioning compared to the base table. DynamoDB doesn't have a restriction like that, 
and your global secondary index can use any columns.

Another pain point with DynamoDB is the schema migration. 
If you want to change the structure of the table completely, 
you’re out of luck because there is no way of changing the schema 
of an existing table. The only way to do that is to copy the 
data into a new table, and there are no ready-made 
solutions for schema migrations just yet. 

Cassandra, on the other hand, supports schema migrations through alter table statements. 
But the good news stops there because **there's a bunch of restrictions on 
the operations concerning the primary key**. If you have to do that, it's 
the same as in DynamoDB — copying the data into a new table with a different structure. 
It's a bit easier with Cassandra because you can utilize CQL queries.
