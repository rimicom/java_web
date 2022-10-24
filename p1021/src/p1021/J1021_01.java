package p1021;

public class J1021_01 {

	public static void main(String[] args) {


		// 1-25의 1차원 배열에 넣으시오 > 배열에 1-25까지 숫자넣기 
		// > 랜덤하게 섞어서 > 2차원배열 출력
		// 이번에는 숫자대신 문자로  
		// a - y (25개) 를 넣은 배열[1차원]을 생성하고 
		// 랜덤하게 섞어서 
		// 5 by 5의 배열을 출력

		// a-y 까지 넣는 1차원 배열[25]을 생성 . 출력 . 
		char[] cha = new char[25];
		for (int i = 0; i<25 ; i++) {
			cha[i] = (char)('a'+i);
		}
		
//		for (int i = 0; i<25 ; i++) {
//			System.out.println(cha[i]);
//		}
//		
		// 랜덤하게 섞기
		
		int random_num = 0;
		char temp = ' ';
		for (int i = 0;i<500;i++) {
			random_num = (int)(Math.random()*25);
			temp = cha[0];
			cha[0] = cha[random_num];
			cha[random_num]=temp;
		}
		// 5 * 5 배열에 넣기 
		
		char[][] arr = new char[5][5];
		for(int i =0 ; i<5;i++) {
			for(int j = 0; j<5 ; j++) {
				arr[i][j] = cha[5*i+j];
			}
		}
		// 2차원 배열 출력하기 
		for(int i =0 ; i<5;i++) {
			for(int j = 0; j<5 ; j++) {
				System.out.printf("%s \t",arr[i][j]);
			}
			System.out.println();
		}
		
		
		
		
		
	}

}
