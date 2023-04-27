# Point 5 
   ### A) Argue that there exists a line passing through one Ghostbuster and one ghost such that the number of Ghostbusters on one side of the line equals the number of ghosts on the same side. Describe how to find such a line in O(n lg n) time. 
        

    Solution: Find the bottom, left-most point as in Graham scan. Sort the remaining
    points (by angle) from that point. Assume that the bottom, left most point is a Ghostbuster. Visit the sorted points by increasing angle, keeping track of the difference
    between number of visited Ghostbusters and Ghosts. Stop when the difference is -1,
    and connect the point to the bottom, left-most point. Run time is dominated by the
    sort, which takes O(n lg n)-time.

   ### B) Give an O(n*nlg n)-time algorithm to pair Ghost busters with ghosts in such a way that no streams cross.
   Solution: Using the above algorithm matches one pair of Ghostbuster and Ghost. On
    each side of the line formed by the pairing, the number of Ghostbusters and Ghosts are
    the same, so use the algorithm recursively on each side of the line to find pairings. The
    worst case is when, after each iteration, one side of the line contains no Ghostbusters
    or Ghosts. Then, we need n/2 total iterations to find pairings, giving us an P(n*nlg n)time algorithm.