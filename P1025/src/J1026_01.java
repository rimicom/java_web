
public class J1026_01 {
	public static void main(String[] args) {
//      전체 학생출력 :
//		---------------------------
//		이름	  국어	영어	수학	총점	평균	
//		---------------------------
//		홍길동 100	100	90	290	96.67	
//		유관순 100	90	90	280	93.33	
//		이순신 80	    90	100	270	90.00	
//		---------------------------
//		검색된 학생 출력 : 
//		---------------------------
//		이름	  국어	영어	수학	총점	평균	
//		---------------------------
//		홍길동 100	100	90	290	96.67	
		int choice = 0;
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
				
				switch(choice) {
				case 1: break;
				case 2: break; 
				case 3: 
					System.out.println("검색할 학생의 이름을 입력하세요.(상위메뉴 이동: -1 ) ");
					System.out.println("입력하신 학생이 존재하지 않습니다 ");
					break;
				case 0: 
					System.out.println("프로그램이 종료되었습니다 ");
					break loop;
				
				}
		
			}
		

	}

}
