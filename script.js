let bookedRooms = [];

function bookRoom() {

    const name = document.getElementById("name").value.trim();
    const phone = document.getElementById("phone").value.trim();
    const room = document.getElementById("room").value;
    const checkin = document.getElementById("checkin").value;
    const checkout = document.getElementById("checkout").value;
    const guests = document.getElementById("guests").value;

    if (name === "" || phone === "" || room === "" || checkin === "" || checkout === "") {
        alert("Please fill all details.");
        return;
    }

    if (bookedRooms.includes(room)) {
        alert("Room already booked!");
        return;
    }

    const inDate = new Date(checkin);
    const outDate = new Date(checkout);

    if (outDate <= inDate) {
        alert("Check-Out date must be after Check-In date.");
        return;
    }

    let days = Math.ceil((outDate - inDate) / (1000 * 60 * 60 * 24));

    let price = 0;

    if (room === "101") price = 1000;
    else if (room === "102") price = 1500;
    else if (room === "103") price = 2000;

    let total = price * days;

    bookedRooms.push(room);

    const table = document.getElementById("bookingTable");

    const row = table.insertRow();

    row.insertCell(0).innerHTML = name;
    row.insertCell(1).innerHTML = phone;
    row.insertCell(2).innerHTML = room;
    row.insertCell(3).innerHTML = guests;
    row.insertCell(4).innerHTML = days;
    row.insertCell(5).innerHTML = "₹" + total;

    alert("Room Booked Successfully!");

    document.getElementById("name").value = "";
    document.getElementById("phone").value = "";
    document.getElementById("room").value = "";
    document.getElementById("checkin").value = "";
    document.getElementById("checkout").value = "";
    document.getElementById("guests").value = "1";
}
