package p1024;

import java.util.Scanner;

public class J1024_03 {

	public static void main(String[] args) {
		// while(true)
		// 학생수를 입력받아서 
		// 입력받은 학생의 수 만큼의 국어점수를 입력받아서 
		// 최고점수랑 평균을 구하는 프로그램
		Scanner scan = new Scanner(System.in);
		int choice = 0;
		int stuNum = 0;
		int[] score = null;
		loop:
		while(true) {
			System.out.println("----------------------------");
			System.out.println("1. 학생 수 입력 "); //배열 생성 
			System.out.println("2. 국어 점수 입력 ");
			System.out.println("3. 입력된 점수 출력 ");
			System.out.println("4. 평균과 최고값 출력 ");
			System.out.println("5. 종료 ");
			System.out.println("----------------------------");
			System.out.println("원하는 번호를 입력하세요 ");
			choice = scan.nextInt();
			switch(choice) {
			case 1: // 학생 수 입력
				System.out.println("학생 수를 입력하세요");
				stuNum = scan.nextInt();
				score = new int[stuNum];
				break;
			case 2: // 점수 입력
				for(int i =0;i<score.length;i++) {
					System.out.println((i+1)+"번째 학생의 국어점수 입력 >>");
					score[i] =scan.nextInt();
				}
				break; 
			case 3: // 출력
				for(int i =0;i<score.length;i++) {
					System.out.println((i+1)+"번째 학생의 국어점수:"+score[i]);
					
				}
				break;
			case 4: // "4. 평균과 최고값 출력 "
				int maxScore = 0;
				int totalScore = 0; 
				for(int i =0;i<score.length;i++) {
					totalScore += score[i];
					if(maxScore < score[i]) {
						maxScore = score[i];
					}
				}
				double avgScore = 0; 
				avgScore = (double)totalScore/score.length;
				
				System.out.printf("평균 : %.2f, 최고점: %d ", avgScore, maxScore);
				break;
			case 5:
				break loop;
			
			}
			
			
		}

	}

}
