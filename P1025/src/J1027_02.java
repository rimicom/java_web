import java.util.Scanner;

public class J1027_02 {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
//
//		자신이 입력한 6개의 숫자와 로또 당첨번호 6개와 비교해서
//		몇개를 맞췄는지 출력하는 프로그램을 구현하시오.
//		6개 : 100억    5개 : 50억    4개 : 1억    3개 : 5천만원    
//		2개 : 5백만원   1개 : 1천원    0개 : 꽝!
//		입력 로또번호 : 11 21 5 39 41 2 
//		당첨 로또번호 : 1 29 34 39 38 23 
//		당첨 로또번호 : 39 
//		당첨 금액 : 1천원
		
		
		Scanner scan = new Scanner(System.in);
		int[] lotto = new int[45];
		int[] input = new int[6];
		int[] lotto6 = new int[6];
		int[] matchNum = new int[6];
		int temp=0;
		int random_num = 0;
		//1. 1-45까지 번호생성
		for(int i=0;i<45;i++) {
			lotto[i]=i+1;
		}
		
		// 2. my로또번호 입력
		for(int i=0;i<6;i++) {
			System.out.println("로또번호를 입력하세요.>>");
			input[i] = scan.nextInt();
			if(input[i]<1 || input[i]>45) {
				System.out.println("번호가 잘못입력되었습니다. 다시 입력하세요.");
				i--;
			}
		}
		
		
		// 3. 1-45까지 로또번호 섞기
		for(int i=0;i<500;i++) {
			random_num = (int)(Math.random()*45); //0-44
			// 교환
			temp = lotto[0];
			lotto[0]=lotto[random_num];
			lotto[random_num]=temp;
			
		}
		
		// 4. 입력 로또번호 출력
		System.out.print("입력 로또번호 : ");
		for(int i=0;i<6;i++) {
			System.out.printf("%d ",input[i]);
		}
		System.out.println();
		
		// 5. 당첨 로또번호 출력
		System.out.print("당첨 로또번호 : ");
		for(int i=0;i<6;i++) {
			lotto6[i] = lotto[i];
			System.out.printf("%d ",lotto6[i]);
		}
		System.out.println();
		
		int z = 0;
		for(int i=0;i<6;i++) {
			for(int j=0;j<6;j++) {
				
				if(lotto6[i] == input[j]) {
					matchNum[z] = input[j];
					z++;
				}
			}
		
		}
		
		System.out.print("당첨 로또번호 : ");
		int cnt =0;
		for(int i=0;i<6;i++) {
			if(matchNum[i]!=0) {
				System.out.printf("%d ",matchNum[i]);
				cnt++;
			}
		}
		System.out.println();
		
		String[] reward = {"꽝!","1천원","5백만원","5천만원","1억원","50억원","100억원"};
		
		
		System.out.println("당첨 금액 : "+reward[cnt]);
		
		
		
		
	}

}