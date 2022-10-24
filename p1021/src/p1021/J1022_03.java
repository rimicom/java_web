package p1021;

public class J1022_03 {

	public static void main(String[] args) {

//  1    2    3    4    5    
//  2    4    6    8    10    
//  3    6    9    12    15    
//  4    8    12    16    20    
//  5    10    15    20    25
		
		// 출력해보세요
		
		int[][] num = new int[5][5];
		for(int i = 0; i<5;i++) {
			for(int j =0;j<5;j++) {
				num[i][j] = (i+1)*(j+1);
			}
		}
		for(int i = 0; i<5;i++) {
			for(int j =0;j<5;j++) {
				System.out.printf("%d \t",num[i][j]);
			}
			System.out.println();
		}

	}

}
