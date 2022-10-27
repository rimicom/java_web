import java.util.Scanner;

public class J1027_01 {

	public static void main(String[] args) {
		
//		---------------------------
//		이름	  국어	영어	수학	총점	평균	
//		---------------------------
//		홍길동 100	100	90	290	96.67	
//		유관순 100	90	90	280	93.33	
//		이순신 80	    90	100	270	90.00	
//		---------------------------
//		
		// name[], score[][], total[], avg[] 배열 생성
		Scanner scan = new Scanner(System.in);
		int choice = 0;  // 메뉴 선택 
		int stuNum = 3; // 학생 수 
	    String[] name= new String[stuNum]; // 학생의 수 만큼 배열 생성 
	    int[][] score = new int[stuNum][3]; // 학생의 수 , 과목3개의 2차원배열생성 
	    int[] total = new int[stuNum]; // 학생의 수 만큼 배열 생성 
	    double[] avg = new double[stuNum]; // 학생의 수 만큼 배열 생성 
	    int count = 0; // 입력된 학생의 수 
		String[] title = {"이름","국어","영어","수학","합계","평균","등수"};
        //                 0     1     2      3    4    5      6
		
		loop:
		while (true) {
			// 초기화면 구성
			System.out.println("[ 학생성적 처리 프로그램 ]");
			System.out.println("1. 학생입력"); // 이름, 국,영,수 입력 > 총점,평균
			System.out.println("2. 학생 전체 출력");
			System.out.println("3. 학생 검색 출력");
			System.out.println("4. 학생 성적 수정");
			System.out.println("0. 종료");
			System.out.println("---------------------------");
			System.out.println("원하는 번호를 입력하세요.>>");
			
			choice = scan.nextInt();
			switch(choice) {
			case 1:
				System.out.println("[학생 성적 입력]");
				for(int i = 0 ; i< name.length ; i++) {
					System.out.println((i+1)+"번째 학생을 입력하세요");
					name[i] = scan.next();
					for(int j = 0 ; j<score[i].length;j++) {
						System.out.println(name[i]+"학생의 "+title[j+1]+"점수를 입력하세요");
						score[i][j] = scan.nextInt();
					}	
				}
				
				// 총점, 평균 
				for(int i = 0 ; i< name.length ; i++) {
					for(int j = 0 ; j<score[i].length;j++) {
						total[i] = total[i] + score[i][j];
					}	
				}
				for(int i = 0 ; i< name.length ; i++) {
					avg[i] = (double)total[i]/score[i].length;
				}
								
				break;
			case 2:
				System.out.println("[학생 성적 출력]");
				System.out.println("---------------------------");
				System.out.println("이름\t국어\t영어\t수학\t총점\t평균");
				System.out.println("---------------------------");
				
				for(int i = 0; i<name.length;i++) {
					System.out.printf("%s\t%d\t%d\t%d\t%d\t%.2f",name[i],score[i][0], score[i][1],score[i][2],total[i],avg[i]);
					System.out.println();
				}
				break;
			case 3:
				System.out.println("검색할 학생의 이름을 입력하세요.(상위메뉴 이동: -1 ) ");
				String searName = scan.next();
				if (searName.equals("-1")) {
					System.out.println("상위 메뉴로 이동합니다.");
					break; 
				}
				int searchNo = -1; 
				for (int i = 0 ; i<name.length;i++) {
					if(name[i].equals(searName)) {
						searchNo = i;
					}
				}
				
				if (searchNo == -1) {
					System.out.println("학생이 존재하지 않습니다. ");
				}
				
				System.out.println("[학생 성적 출력]");
				System.out.println("---------------------------");
				System.out.println("이름\t국어\t영어\t수학\t총점\t평균");
				System.out.println("---------------------------");
				
				System.out.printf("%s\t%d\t%d\t%d\t%d\t%.2f",name[searchNo],score[searchNo][0], score[searchNo][1],score[searchNo][2],total[searchNo],avg[searchNo]);
				System.out.println();
				break;
				
				
				
				
			case 0:
				break loop;
			}
			
			
			
		}
		

	}

}
