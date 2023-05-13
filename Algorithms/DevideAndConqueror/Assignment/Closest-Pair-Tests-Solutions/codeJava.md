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
    
// Online Java Compiler
// Use this editor to write, compile and run your Java code online
import java.util.Arrays;
import java.util.List;
import java.util.ArrayList;
// A structure to represent a Point in 2D plane
class PointClass {
    public int x;
    public int y;

    public PointClass(int x, int y) {
        this.x = x;
        this.y = y;
    }
}
class ClosestPair {
    // The main function that finds the smallest distance
    // This method mainly uses findClosestUtilFn()
    public static double findSmallestDistFn(  PointClass[] P, int n) {
        PointClass[] Px = Arrays.copyOf(P, n);
        Arrays.sort(Px, (p1, p2) -> p1.x - p2.x);
        PointClass[] Py = Arrays.copyOf(P, n);
        Arrays.sort(Py, (p1, p2) -> p1.y - p2.y);
        
        // Use recursive function findClosestUtilFn() to find the smallest distance
        return findClosestUtilFn(Px, Py, n);
    }
    // A recursive function to find the smallest distance. The array Px contains
    // all points sorted according to x coordinates and Py contains all points
    // sorted according to y coordinates
    private static double findClosestUtilFn(PointClass[] Px, PointClass[] Py, int n) {
        
        // If there are 2 or 3 points, then use brute force
        if (n <= 3) {
            return bruteForceMethod(Px, n);
        }
        // Find the middle point
        int mid = n / 2;
        PointClass midPoint = Px[mid];
        
        // Divide points in y sorted array around the vertical line.
        // Assumption: All x coordinates are distinct.
        PointClass[] Pyl = Arrays.copyOfRange(Py, 0, mid);// y sorted points on left of vertical line
        PointClass[] Pyr = Arrays.copyOfRange(Py, mid, n);//y sorted points on right of vertical line
        
        // Consider the vertical line passing through the middle point
        // calculate the smallest distance dl on left of middle point and
        // dr on right side
        double dl = findClosestUtilFn(Px, Pyl, mid);
        double dr = findClosestUtilFn(Arrays.copyOfRange(Px, mid, n), Pyr, n - mid);
    
        // Find the smaller of two distances
        double d = Math.min(dl, dr);
    
        // Build an array strip[] that contains points close (closer than d)
        // to the line passing through the middle point
        List<PointClass> strip = new ArrayList<PointClass>();
        for (PointClass p : Py) {
            if (Math.abs(p.x - midPoint.x) < d) {
                strip.add(p);
            }
        }
    
        return stripClosestMethod(strip.toArray(new PointClass[strip.size()]), strip.size(), d);
    }
// A Brute Force method to return the smallest distance between two points
    // in P[] of size n
    private static double bruteForceMethod(PointClass[] P, int n) {
        double min = Double.MAX_VALUE;
        for (int i = 0; i < n; ++i) {
            for (int j = i + 1; j < n; ++j) {
                double dist = distance(P[i], P[j]);
                if (dist < min) {
                    min = dist;
                }
            }
        }
        return min;
    }
// A utility function to find the distance between the closest points of
    // strip of a given size. All points in strip[] are sorted according to
    // y coordinate. They all have an upper bound on minimum distance as d.
    // Note that this method seems to be a O(n^2) method, but it's a O(n)
    // method as the inner loop runs at most 6 times
    private static double stripClosestMethod(PointClass[] strip, int size, double d) {
        double min = d; // Initialize the minimum distance as d
        
        // Pick all points one by one and try the next points till the difference
        // between y coordinates is smaller than d.
        // This is a proven fact that this loop runs at most 6 times
        for (int i = 0; i < size; ++i) {
            for (int j = i + 1; j < size && (strip[j].y - strip[i].y) < min; ++j) {
                double dist = distance(strip[i], strip[j]);
                if (dist < min) {
                    min = dist;
                }
            }
        }
        return min;
    }
    private static double distance(PointClass p1, PointClass p2) {
        return Math.sqrt(Math.pow(p1.x - p2.x, 2) + Math.pow(p1.y - p2.y, 2));
    }

// Driver program to test above functions
    public static void main(String[] args) {
        //Point 10 txt 
            PointClass[] P10 = {
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
        };
        int n10 = P10.length;
        System.out.println("The smallest distance is for 10 point txt " + findSmallestDistFn(  P10, n10));

        //Point 100 txt 
            PointClass[] P100 = {
        new PointClass(124,16507),
        new PointClass(7640,6184),
        new PointClass(11982,18518),
        new PointClass(5376,3572),
        new PointClass(1602,21185),
        new PointClass(2620,6449),
        new PointClass(5453,15708),
        new PointClass(1166,2190),
        new PointClass(4791,21603),
        new PointClass(2156,10039),
        new PointClass(4657,9742),
        new PointClass(1776,2047),
        new PointClass(1695,11832),
        new PointClass(3221,4612),
        new PointClass(777,13683),
        new PointClass(331,21280),
        new PointClass(4951,64187),
        new PointClass(2043,2485),
        new PointClass(2234,4846),
        new PointClass(7828,4188),
        new PointClass(3126,23372),
        new PointClass(1185,32144),
        new PointClass(3285,4156),
        new PointClass(5010,143),
        new PointClass(597,3797),
        new PointClass(1522,2104),
        new PointClass(2682,12948),
        new PointClass(6892,9010),
        new PointClass(148,6329),
        new PointClass(10693,9209),
        new PointClass(3458,12408),
        new PointClass(836,1452),
        new PointClass(9588,14948),
        new PointClass(3790,77578),
        new PointClass(1667,3555),
        new PointClass(653,20977),
        new PointClass(410,9570),
        new PointClass(1543,4175),
        new PointClass(1863,9883),
        new PointClass(2181,21318),
        new PointClass(615,9946),
        new PointClass(1435,5650),
        new PointClass(3692,2305),
        new PointClass(2096,46990),
        new PointClass(5775,3272),
        new PointClass(327,87689),
        new PointClass(159,28571),
        new PointClass(485,23978),
        new PointClass(68,24059),
        new PointClass(2874,15314),
        new PointClass(677,14237),
        new PointClass(6116,4075),
        new PointClass(646,13785),
        new PointClass(6927,4135),
        new PointClass(6318,4882),
        new PointClass(8737,20078),
        new PointClass(341,4743),
        new PointClass(2064,6475),
        new PointClass(1731,3650),
        new PointClass(1679,1254),
        new PointClass(1062,52),
        new PointClass(2146,8650),
        new PointClass(7858,8151),
        new PointClass(1085,7847),
        new PointClass(2846,81845),
        new PointClass(6019,30574),
        new PointClass(3870,1932),
        new PointClass(55,6829),
        new PointClass(5993,2121),
        new PointClass(2160,25999),
        new PointClass(3042,15987),
        new PointClass(1450,1970),
        new PointClass(2925,2157),
        new PointClass(1680,2624),
        new PointClass(2704,3074),
        new PointClass(811,8172),
        new PointClass(2931,14310),
        new PointClass(370,1576),
        new PointClass(1237,2249),
        new PointClass(812,2444),
        new PointClass(6109,9252),
        new PointClass(1373,7054),
        new PointClass(3822,4148),
        new PointClass(1637,8292),
        new PointClass(3147,5918),
        new PointClass(83,18848),
        new PointClass(2408,6848),
        new PointClass(4770,56199),
        new PointClass(526,15797),
        new PointClass(5940,10116),
        new PointClass(2223,10569),
        new PointClass(7986,8337),
        new PointClass(3958,7947),
        new PointClass(1730,3258),
        new PointClass(1758,3344),
        new PointClass(2265,60660),
        new PointClass(1866,8612),
        new PointClass(488,907),
        new PointClass(7001,45595),
        new PointClass(4576,28387)
    };            

        int n100 = P100.length;
        System.out.println("The smallest distance is for 100 point txt " + findSmallestDistFn(  P100, n100));


        //Point 1000 txt 
            PointClass[] P1000 = {
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
        };
        int n1000 = P1000.length;
        System.out.println("The smallest distance is for 1000 point txt " + findSmallestDistFn(  P1000, n1000));
    }
}




