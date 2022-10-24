package p1024;

import java.util.Scanner;

public class J1024_02 {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
//		int num = 5; 
//		int[] a = null; 	
//		a = new int[num];
		
		// 배열의 크기를 입력받아서 
		// 5  => 1,2,3,4,5가 출력되게 하는 프로그램을 만드세요 
		// 3 => 1,2,3 
		
		Scanner scan = new Scanner(System.in);
		int num = 0 ; 
		int[] arr = null; 
		System.out.println("배열의 크기를 입력하세요 : ");
		num = scan.nextInt();
		arr = new int[num];
		
		for(int i = 0 ; i< arr.length; i++) {
			arr[i] = i+1; 
		}
		for(int i = 0 ; i< arr.length; i++) {
			System.out.println(arr[i]); 
		}
		
		
		
		
		
		

	}

}
