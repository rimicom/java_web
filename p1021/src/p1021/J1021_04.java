package p1021;

import java.util.Scanner;

public class J1021_04 {

	public static void main(String[] args) {
		// TODO Auto-generated method stub

		Scanner scan = new Scanner(System.in);
		int[] arr = null;
		System.out.println("배열의 길이를 입력>> ");
		int num = scan.nextInt();
		arr = new int[num];
		
		for (int i = 0; i<num;i++) {
			arr[i]=i+1;
		}
		
		for (int i = 0; i<num;i++) {
			System.out.println(arr[i]);
		}
	}

}
