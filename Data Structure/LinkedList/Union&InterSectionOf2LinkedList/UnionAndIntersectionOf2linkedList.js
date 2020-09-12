import LinkedList from './linkedList';

import HashTable from '../Hashing/hashTable';


// const LinkedList = require('./linkedList');
// const HashTable = require('../Hashing/hashTable');

function getIntersection(head1, head2) {
    // HashSet<Integer> hset = new HashSet<>(); 
    const hset = new HashTable(10);

    let n1 = head1;
    let n2 = head2;
    let result = new LinkedList();

    // loop stores all the elements of list1 in hset 
    while (n1 != null) {
        if (hset.contains(n1.data)) {
            hset.add(n1.data);
        } else {
            hset.add(n1.data);
        }
        n1 = n1.next;
    }

    //For every element of list2 present in hset 
    //loop inserts the element into the result 
    while (n2 != null) {
        if (hset.contains(n2.data)) {
            result.push(n2.data);
        }
        n2 = n2.next;
    }
    return result;
}

function getUnion(head1, head2) {
    // HashMap that will store the  
    // elements of the lists with their counts 
    // HashMap<Integer, Integer> hmap = new HashMap<>(); 
    const hmap = new HashTable(10);

    let n1 = head1;
    let n2 = head2;
    let result = new LinkedList();

    // loop inserts the elements and the count of  
    // that element of list1 into the hmap 
    while (n1 != null) {
        if (hmap.containsKey(n1.data)) {
            let val = hmap.get(n1.data);
            hmap.put(n1.data, val + 1);
        } else {
            hmap.put(n1.data, 1);
        }
        n1 = n1.next;
    }

    // loop further adds the elements of list2 with  
    // their counts into the hmap  
    while (n2 != null) {
        if (hmap.containsKey(n2.data)) {
            let val = hmap.get(n2.data);
            hmap.put(n2.data, val + 1);
        } else {
            hmap.put(n2.data, 1);
        }
        n2 = n2.next;
    }

    // Eventually add all the elements 
    // into the result that are present in the hmap 
    // for(let a:hmap.keySet()) 
    {
        result.append(a);
    }
    return result;
}

const llist1 = new LinkedList();
const llist2 = new LinkedList();
const union = new LinkedList();
const intersection = new LinkedList();

/*create a linked list 10->15->4->20 */
llist1.push(20);
llist1.push(4);
llist1.push(15);
llist1.push(10);

/*create a linked list 8->4->2->10 */
llist2.push(10);
llist2.push(2);
llist2.push(4);
llist2.push(8);
console.log("shree")
intersection = getIntersection(llist1.head, llist2.head);
union = getUnion(llist1.head, llist2.head);

console.log("First List is");
llist1.printList();

console.log("Second List is");
llist2.printList();

console.log("Intersection List is");
intersection.printList();

console.log("Union List is");
union.printList();
