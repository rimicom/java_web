package p1024;

public class J1024_01 {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		// 최대값을 구하세요 (for) 사용
		
		int max = 0; 
		int min = 100;
		int[] arr = {1,5,3,8,2};
		for(int i = 0 ; i < arr.length ; i++) {
			if ( max < arr[i]) {
				max = arr[i];
			}
			
		}
		System.out.println("최대값 : "+ max);

	}

}
