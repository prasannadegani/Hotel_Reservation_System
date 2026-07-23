let bookedRooms = [];
function bookRoom() {
    const name = document.getElementById("name").value.trim();
    const phone = document.getElementById("phone").value.trim();
    const room = document.getElementById("room").value;
    const checkin = document.getElementById("checkin").value;
    const checkout = document.getElementById("checkout").value;
    const guests = document.getElementById("guests").value;
    if (
        name === "" ||
        phone === "" ||
        room === "" ||
        checkin === "" ||
        checkout === ""
    ) {
        alert("Please fill all details.");
        return;
    }
    if (!/^[0-9]{10}$/.test(phone)) {
        alert("Please enter a valid 10-digit phone number.");
        return;
    }
    if (bookedRooms.includes(room)) {
        alert("Room already booked! Please select another room.");
        return;
    }
    const inDate = new Date(checkin);
    const outDate = new Date(checkout);
    if (outDate <= inDate) {
        alert("Check-Out date must be after Check-In date.");
        return;
    }
    const days = Math.ceil(
        (outDate - inDate) / (1000 * 60 * 60 * 24)
    );
    const roomDetails = {
        "101": {
            name: "Standard Room",
            price: 1000
        },
        "102": {
            name: "Deluxe Room",
            price: 1500
        },
        "103": {
            name: "Premium Room",
            price: 2000
        },
        "104": {
            name: "Executive Room",
            price: 2500
        },
        "105": {
            name: "Family Suite",
            price: 3000
        },
        "106": {
            name: "Luxury Suite",
            price: 4000
        }
    };
    const selectedRoom = roomDetails[room];
    const price = selectedRoom.price;
    const total = price * days;
    bookedRooms.push(room);
    const table = document.getElementById("bookingTable");
    const row = table.insertRow();
    row.insertCell(0).innerHTML = name;
    row.insertCell(1).innerHTML = phone;
    row.insertCell(2).innerHTML =
        "Room " + room + " - " + selectedRoom.name;
    row.insertCell(3).innerHTML = guests;
    row.insertCell(4).innerHTML = days;
    row.insertCell(5).innerHTML = "₹" + total;
    alert(
        "Room Booked Successfully!\n\n" +
        "Room: " + selectedRoom.name + "\n" +
        "Days: " + days + "\n" +
        "Total Bill: ₹" + total
    );
    document.getElementById("name").value = "";
    document.getElementById("phone").value = "";
    document.getElementById("room").value = "";
    document.getElementById("checkin").value = "";
    document.getElementById("checkout").value = "";
    document.getElementById("guests").value = "1";
}
