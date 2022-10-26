import java.util.Scanner;

public class J1026_02 {

	public static void main(String[] args) {
		Scanner scan = new Scanner(System.in);
		
		String[] arr = {"홍길동","이순신","유관순","김구"};
		
		String str = scan.next();
		
		for(int i = 0 ; i<arr.length;i++) {
			if(arr[i].equals(str)) {
				System.out.println("존재합니다");
				break;
			}
			
		}
		

	}

}
