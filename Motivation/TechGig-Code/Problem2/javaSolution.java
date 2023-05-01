/* Read input from STDIN. Print your output to STDOUT*/

import java.io.*;
import java.util.*;
import java.util.stream.Collectors;

public class CandidateCode {
   private static List<Integer> getInputArray(BufferedReader br) throws IOException {
    return Arrays.stream(br.readLine().trim().split(" "))
        .map(Integer::parseInt)
        .collect(Collectors.toList());
  }

  static int getCost(List<Integer> arr, int target) {
    return arr.stream().mapToInt(i -> Math.abs(i - target)).sum();
  }

  public static void main(String[] args) throws IOException {
    BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
    br.readLine();
    List<Integer> arr = getInputArray(br);
    List<Integer> queries = getInputArray(br);
    br.close();

    String ans = queries.parallelStream()
        .map(query -> getCost(arr, query))
        .map(String::valueOf)
        .collect(Collectors.joining(" "));
    System.out.println(ans);
  }
}
