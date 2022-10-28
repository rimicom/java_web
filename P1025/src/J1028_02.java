import java.util.Scanner;

public class J1028_02 {

	public static void main(String[] args) {
		// 파스칼삼각형을 출력하는 프로그램 작성
		
		Scanner scan = new Scanner(System.in);
		System.out.println("숫자를 입력하세요 >> ");
		int num = scan.nextInt();
		int[][] a = new int[num][num];
		int i, j;

		a[1][1] = 1;

		for( i=2; i<a.length; i++)
		{
			for( j=1; j<=i; j++)
			{
				a[i][j] = a[i-1][j-1] + a[i-1][j];
			}
		}

		for( i=1; i<a.length; i++)
		{
			for( j=1; j<=i; j++)
			{
				System.out.print(a[i][j]);
			}

			System.out.println();
		}
		
		

	}

}
