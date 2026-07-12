import java.util.Scanner;

public class HotelReservationSystem {

    public static void main(String[] args) {

        Scanner sc = new Scanner(System.in);

        int rooms[] = {101, 102, 103};
        boolean booked[] = {false, false, false};

        while (true) {

            System.out.println("\n----- HOTEL RESERVATION SYSTEM -----");
            System.out.println("1. View Rooms");
            System.out.println("2. Book Room");
            System.out.println("3. Exit");
            System.out.print("Enter Choice: ");

            int choice = sc.nextInt();

            switch (choice) {

                case 1:
                    System.out.println("\nRoom No\tStatus");

                    for (int i = 0; i < rooms.length; i++) {
                        if (booked[i])
                            System.out.println(rooms[i] + "\tBooked");
                        else
                            System.out.println(rooms[i] + "\tAvailable");
                    }
                    break;

                case 2:
                    System.out.print("Enter Room Number: ");
                    int room = sc.nextInt();

                    boolean found = false;

                    for (int i = 0; i < rooms.length; i++) {
                        if (rooms[i] == room) {
                            found = true;

                            if (!booked[i]) {
                                booked[i] = true;
                                System.out.println("Room Booked Successfully!");
                            } else {
                                System.out.println("Room Already Booked!");
                            }
                        }
                    }

                    if (!found) {
                        System.out.println("Invalid Room Number!");
                    }
                    break;

                case 3:
                    System.out.println("Thank You!");
                    sc.close();
                    return;

                default:
                    System.out.println("Invalid Choice!");
            }
        }
    }
}
