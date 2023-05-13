# Assignment 3 :- Programming Assignment (algorithm for the closest pair of points)
   ## The smallest distance between two points in the given array.
   
   ### Approach1  O(n (Logn)^2)
        
   1. Sort the array according to x direction  P[] . 
   2. Now we have to find the middle point in the array, we can use P[n/2] as middle point. 
   3. Divide the given array in two parts. The first subarray part contains points from P[0] to P[n/2]. The second subarray part contains points from P[n/2+1] to P[n-1].
   4. Recursively find the smallest distances in both subarrays. Let the distances be distanceLeft and distanceRight. Find the minimum of distanceLeft and distanceRight. Let the minimum be d.
   5. From the above 3 steps, we have an upper bound d of minimum distance. Now we need to consider the pairs such that one point in pair is from the left half and the other is from the right half. Consider the vertical line passing through P[n/2] and find all points whose x coordinate is closer than d to the middle vertical line. Build an array strip[] of all such points. 
   6. Sort the array strip[] according to y coordinates. This step is O(nLogn). It can be optimized to O(n) by recursively sorting and merging. 
   7. Find the smallest distance in strip[]. This is tricky. From the first look, it seems to be a O(n^2) step, but it is actually O(n). It can be proved geometrically that for every point in the strip, we only need to check at most 7 points after it (note that strip is sorted according to Y coordinate). See this for more analysis.
   8. Finally return the minimum of d and distance calculated in the above step (step 7)

   ### Approach2 O(nlogn)

   In this approach, we will discuss an implementation where the time complexity is O(nLogn). 
   1. The idea is to presort all points according to y coordinates. 
   2. Let the sorted array be Py[]. When we make recursive calls, we need to divide points of Py[] also according to the vertical line. 
   3. We can do that by simply processing every point and comparing its x coordinate with x coordinate of the middle line.
   
   #### Code 

 <script>
    // 2 dimension point class 
    class PointClass {
        constructor(x, y) {
            this.x = x;
            this.y = y;
        }
    }

    // Needed to sort array of points according to X coordinate
    function compareXCordinates(a, b) {
    let p1 = a,
        p2 = b;
    return (p1.x !== p2.x) * (p1.x - p2.x) + (p1.y - p2.y);
    }

    // Needed to sort array of points according to Y coordinate
    function compareYCordinates(a, b) {
    let p1 = a,
        p2 = b;
    return (p1.y !== p2.y) * (p1.y - p2.y) + (p1.x - p2.x);
    }

    // A utility function to find the distance between two points
    function dist(p1, p2) {
    return Math.sqrt(Math.pow(p1.x - p2.x, 2) + Math.pow(p1.y - p2.y, 2));
    }

    // A Brute Force method to return the smallest distance between two points
    // in P[] of size n
    function bruteForce(P, n) {
        let min = Number.POSITIVE_INFINITY;
        for (let i = 0; i < n; i++) {
            for (let j = i + 1; j < n; j++) {
            if (dist(P[i], P[j]) < min) {
                min = dist(P[i], P[j]);
            }
            }
        }
        return min;
    }

    // A utility function to find a minimum of two float values
    function min(x, y) {
        return x < y ? x : y;
    }

    // A utility function to find the distance between the closest points of
    // strip of a given size. All points in strip[] are sorted according to
    // y coordinate. They all have an upper bound on minimum distance as d.
    // Note that this method seems to be a O(n^2) method, but it's a O(n)
    // method as the inner loop runs at most 6 times
    function stripClosest(strip, size, d) {
        let min = d; // Initialize the minimum distance as d

        // Pick all points one by one and try the next points till the difference
        // between y coordinates is smaller than d.
        // This is a proven fact that this loop runs at most 6 times
        for (let i = 0; i < size; i++) {
            for (let j = i + 1; j < size; j++) {
                if (strip[j].y - strip[i].y < min) {
                    if (dist(strip[i], strip[j]) < min) {
                        min = dist(strip[i], strip[j]);
                    }
                }
            }
        }

        return min;
    }

    // A recursive function to find the smallest distance. The array Px contains
    // all points sorted according to x coordinates and Py contains all points
    // sorted according to y coordinates
    function findClosestUtilFn(Px, Py, n) {
        // If there are 2 or 3 points, then use brute force
        if (n <= 3) {
            return bruteForce(Px, n);
        }

        // Find the middle point
        let mid = Math.floor(n / 2);
        let midPoint = Px[mid];

        // Divide points in y sorted array around the vertical line.
        // Assumption: All x coordinates are distinct.
        let Pyl = new Array(mid); // y sorted points on left of vertical line
        let Pyr = new Array(n - mid); // y sorted points on right of vertical line
        let li = 0;
        let ri = 0; // indexes of left and right subarrays
        for (let i = 0; i < n; i++) {
            if (
                (
                    Py[i].x < midPoint.x || 
                    (Py[i].x === midPoint.x && Py[i].y < midPoint.y)
                ) &&
                li < mid
            ) {
                Pyl[li] = Py[i];
                li++;
            } else {
                Pyr[ri] = Py[i];
                ri++;
            }
        }

        // Consider the vertical line passing through the middle point
        // calculate the smallest distance dl on left of middle point and
        // dr on right side
        let dl = findClosestUtilFn(Px, Pyl, mid);
        let dr = findClosestUtilFn(Px.slice(mid), Pyr, n - mid);

        // Find the smaller of two distances
        let d = min(dl, dr);

        // Build an array strip[] that contains points close (closer than d)
        // to the line passing through the middle point
        let strip = new Array(n);
        let j = 0;
        for (let i = 0; i < n; i++) {
            if (Math.abs(Py[i].x - midPoint.x) < d) {
                strip[j] = Py[i];
                j++;
            }
        }

        // Find the closest points in strip. Return the minimum of d and closest
        // distance is strip[]
        return stripClosest(strip, j, d);
    }

    // The main function that finds the smallest distance
    // This method mainly uses findClosestUtilFn()
    function findSmallestDistFn(P, n) {
        let Px = [...P];
        let Py = [...P];
        Px.sort((a, b) => compareXCordinates(a, b));
        Py.sort((a, b) => compareYCordinates(a, b));

        // Use recursive function findClosestUtilFn() to find the smallest distance
        return findClosestUtilFn(Px, Py, n);
    }

    // Main Driver code for 10 points 
    let P10 = [
        new PointClass(1574, 9098),
        new PointClass(7156, 1322),
        new PointClass(511 ,4721),
        new PointClass(815 ,17928),
        new PointClass(1267, 5292),
        new PointClass(666 ,405),        
        new PointClass(889 ,14787),
        new PointClass(1184, 2147),
        new PointClass(2560, 18128),
        new PointClass(337 ,1320)
    ];
    let n10 = P10.length;
    console.log(`The smallest distance is for 10 point txt ${findSmallestDistFn(P10, n10)}`);
    
    // Main Driver code for 100 points 

    let P100 = [
        new PointClass(1574, 9098),
        new PointClass(7156, 1322),
        new PointClass(511 ,4721),
        new PointClass(815 ,17928),
        new PointClass(1267, 5292),
        new PointClass(666 ,405),        
        new PointClass(889 ,14787),
        new PointClass(1184, 2147),
        new PointClass(2560, 18128),
        new PointClass(337 ,1320)
    ];
    let n100 = P100.length;
    console.log(`The smallest distance is for 100 point txt ${findSmallestDistFn(P100, n100)}`);

    // Main Driver code for 1000 points 

    let P1000 = [
        new PointClass(1574, 9098),
        new PointClass(7156, 1322),
        new PointClass(511 ,4721),
        new PointClass(815 ,17928),
        new PointClass(1267, 5292),
        new PointClass(666 ,405),        
        new PointClass(889 ,14787),
        new PointClass(1184, 2147),
        new PointClass(2560, 18128),
        new PointClass(337 ,1320)
    ];
    let n1000 = P1000.length;
    console.log(`The smallest distance is for 1000 point txt ${findSmallestDistFn(P1000, n1000)}`);
    </script>

