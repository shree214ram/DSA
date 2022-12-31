# Types Of Index 
https://www.youtube.com/watch?v=oe_k_smHIZo&ab_channel=CodingGlitz

1. Clustered 
2. Non-Cluster 
3. Btree {Binary Search}
4. Unique Index 
5. Composite Index {More than two column}
6. Functional Index
7. Bitmap index 


### Difference between clustered and non clustered Indexing ?

1.  cluster Index defines the order in which data  has inserted at table phisicaly 
    Example : Dictioanry 
    Non-cluster index is stored at one place and data at another 
    Example :- Book 
2.  A table can have one cluster index 
    A table can have multiple non-clusterindex 
3.  Cluster index is fast
    Non-clustee index is slow . 


    Create Index myIndex on mytable collumn ("empId")