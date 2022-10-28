import java.util.Scanner;

public class J1028_01 {

	public static void main(String[] args) {
		Scanner scan = new Scanner(System.in);	
		int choice = 0;  // 메뉴 선택 
		int stuNum = 3; // 학생 수 
	    String[] name= new String[stuNum]; // 학생의 수 만큼 배열 생성 
	    int[][] score = new int[stuNum][3]; // 학생의 수 , 과목3개의 2차원배열생성 
	    int[] total = new int[stuNum]; // 학생의 수 만큼 배열 생성 
	    double[] avg = new double[stuNum]; // 학생의 수 만큼 배열 생성 
	    int count = 0; // 입력된 학생의 수 
	    int[] rank = new int[stuNum];
	    int rankNum = 0;
		String[] title = {"이름","국어","영어","수학","합계","평균","등수"};
        //                 0     1     2      3    4    5      6

		loop:
			while (true) {
				// 초기화면 구성
				System.out.println("[ 학생성적 처리 프로그램 ]");
				System.out.println("1. 학생입력");
				System.out.println("2. 학생 전체 출력");
				System.out.println("3. 학생 검색 출력");
				System.out.println("4. 학생 성적 수정");
				System.out.println("5. 등수 처리 ");
				System.out.println("0. 종료");
				System.out.println("---------------------------");
				System.out.println("원하는 번호를 입력하세요.>>");
				choice = scan.nextInt();

				switch(choice) {
				case 1:
					System.out.println("[ 학생성적 입력 ]");
					if(count>=3) {
						System.out.println("모든 학생을 입력하셨습니다.!!");
						break;
					}
					for (int i = 0; i <name.length;i++) {
						System.out.println( (i+1)+"번째 학생의 이름을 입력하세요 ");
						name[i] = scan.next();
						for(int j = 0 ; j<score[i].length;j++) {
							System.out.println( name[i] + "학생의 "+ title[j+1]+ "점수를 입력하세요 >> ");
							score[i][j] = scan.nextInt();
						}
						count++;
					}
					
					
					// total 
					for (int i = 0; i <name.length;i++) {
						for(int j = 0 ; j<score[i].length;j++) {
							total[i] += score[i][j]; 
						}
					}
					// avg 
					for (int i = 0; i <name.length;i++) {
						
						avg[i] =  (double)total[i] / score[i].length;
					}
					
					
					break;
					
				case 2:
					System.out.println("[ 전체 학생 성적 출력 ]");
					System.out.println("---------------------------");
					System.out.println("이름\t국어\t영어\t수학\t총점\t평균\t등수");
					System.out.println("---------------------------");
					
					for (int i = 0; i <name.length;i++) {
						System.out.printf("%s\t%d\t%d\t%d\t%d\t%.2f\t%d",name[i],score[i][0],score[i][1],score[i][2],total[i],avg[i],rank[i]);
						System.out.println();
					}
					
					System.out.println("---------------------------");

					
					
					break;
				case 3:
					System.out.println("검색할 학생의 이름을 입력하세요.(상위메뉴 이동: -1 ) ");
				    String searName = scan.next();
				    if(searName.equals("-1")) {
				    	System.out.println("상위메뉴로 이동합니다.");
						break;
				    }
				    
				    // 몇번째 배열속에 있는 학생 이름이냐 ? 
				    int searchNo = -1;
				    

				    for (int i =0;i<name.length;i++) {
					    if(name[i].equals(searName) ) {
					    	searchNo = i;
				    	}

				    }
				    
				    if(searchNo==-1) {
				    	System.out.println("입력하신 학생이 존재하지 않습니다 ");
				    	break;
				    }
				    
				
					
					System.out.println("[ 학생 성적 출력 ]");
					
					
					System.out.println("---------------------------");
					System.out.println("이름\t국어\t영어\t수학\t총점\t평균\t");
					System.out.println("---------------------------");
					
					
					System.out.printf("%s\t%d\t%d\t%d\t%d\t%.2f\t%d",name[searchNo],score[searchNo][0],score[searchNo][1],score[searchNo][2],total[searchNo],avg[searchNo],rank[searchNo]);
					System.out.println();
					
					
					System.out.println("---------------------------");

					
					break;
					
				case 4: 
					System.out.println("검색할 학생의 이름을 입력하세요.(상위메뉴 이동: -1 ) ");
				    String stuName = scan.next();
				    if(stuName.equals("-1")) {
				    	System.out.println("상위메뉴로 이동합니다.");
						break;
				    }
				    
				    // 몇번째 배열속에 있는 학생 이름이냐 ? 
				    searchNo = -1;
				    

				    for (int i =0;i<name.length;i++) {
					    if(name[i].equals(stuName) ) {
					    	searchNo = i;
				    	}

				    }
				    
				    if(searchNo==-1) {
				    	System.out.println("입력하신 학생이 존재하지 않습니다 ");
				    	break;
				    }
				    
				    System.out.println(stuName+ "학생을 입력하셨습니다. ");
				    System.out.println("1.국어\t2.영어\t3.수학 ");
				    System.out.println("수정할 과목의 번호를 선택해 주세요 >>");
				    int subNo = scan.nextInt();
				    System.out.println("현재 점수는 " + score[searchNo][subNo-1]+"점 입니다. ");
				    System.out.println("수정할 과목의 점수를 입력해주세요 ");
				    score[searchNo][subNo-1] = scan.nextInt();
				    
				    // 총점, 평균 같이 수정 
				    total[searchNo] = score[searchNo][0]+score[searchNo][1]+score[searchNo][2];
				    avg[searchNo] = total[searchNo]/3.0; 
				    
				    System.out.println("수정이 완료되었습니다. ");
				    
				    
					
					
				case 0:
					System.out.println("[ 학생성적 처리 프로그램이 종료되었습니다 ]");
					break loop;
					
				}
			}

	}

}
