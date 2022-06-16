

class Solution {
    public int shortestSubarray(int[] A, int K) {
        int N = A.length, res = N + 1;
        int[] S  = new int[N+ 1];
        for(int i = 0; i < N; i++) S[i + 1] = S[i] + A[i];
        Deque<Integer> d = new LinkedList();
        for(int i = 0; i < N + 1; i++){
            while(d.size() > 0 && S[i] - S[d.peekFirst()] >= K){
                res = Math.min(res, i - d.pollFirst()); 
            }
            // keep the INCREASING order to keep the optimal result (index larger should have larger(equal) value in the queue)
            while(d.size() > 0 && S[i] <= S[d.peekLast()]){
                d.pollLast();
            }
            d.offerLast(i);
        }

        return res == N + 1? -1: res;
    }
}