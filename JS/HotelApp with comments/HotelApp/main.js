function main() {
    // Go sozdavame hotelot
    var codeHotel = new Hotel();

    // Sakame da izminat 30 dena
    for (var days = 1; days <= 30; days++) {

        // na sekoj tret den vrabotuvame lugje
        if (days % 3 === 0) {
            // na random birame brojka na vraboteni sto sakame da gi vrabotime
            var hiredEmployees = getRandomNumber(1, 3);
            // i vrtime tolku pati
            for (var index = 1; index <= hiredEmployees; index++) {
                // pravime nov vraboten
                var employee = new Human(index, "employee");
                // i go vrabotuvame vo hotelot
                codeHotel.employees.push(employee);
            }
        }

        // na random birame brojka na gosti koi sakame da gi pokanime
        var numberOfGuests = getRandomNumber(2, 8);
        // i vrtime tolku pati
        for (var guests = 1; guests <= numberOfGuests; guests++) {
            // pravime nov gostin
            var client = new Human(guests, "client");
            // i go prifakjame vo hotelot
            codeHotel.takeInGuest(client);
        }
        
        // Na kraj, mu vikame na hotelot da si ja brka svojata rabota
        codeHotel.work();
    }

    // koga ke pominat 30 dena, reportame sto se slucuva so hotelot
    console.log(codeHotel);
}

main();