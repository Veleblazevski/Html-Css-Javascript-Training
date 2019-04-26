function Hotel (){
    // inicijalno hotelot ke ima 0 zarabotka, 0 gosti
    // prazna niza sobi i prazna niza vraboteni
    this.earnings = 0;
    this.rooms = [];
    this.employees = [];
    this.guests = 0;

    // so ovaa metoda hotelot si ja vrshi rabotata za eden den
    this.work = function() {
        // gi vrtime site sobi
        for (var i = 0; i < this.rooms.length; i++) {
            var hotelRoom = this.rooms[i];
            // i na sekoja soba i kazuvame da si go pomine denot
            hotelRoom.spendDay();
        }

        // gi vrtime site vraboteni
        for (var j = 0; j < this.employees.length; j++) {
            var employee = this.employees[j];
            // sekoj vraboten si bara soodvetna soba za cistenje
            for (var k = 0; k < this.rooms.length; k++) {
                var room = this.rooms[k];
                // ako sobata e slobodna i prljava
                if (!room.isTaken && !room.isClean) {
                    // zemi gi parite od smetkata na sobata i stavi gi vo kasata na hotelot
                    this.earnings += room.bill;
                    // iscisti ja sobata
                    employee.clean(room);
                    // prekini go ciklusot za sobite oti si nasol veke soba i si ja iscistil
                    break;
                }
            }
        }
    }

    // so ovaa metoda gi primame gostite sekoj den
    this.takeInGuest = function(guest) {
        // gi vrtime sobite
        for (var room = 0; room < this.rooms.length; room++) {
            // barame soba sto e cista i slobodna
            if (!this.rooms[room].isTaken && this.rooms[room].isClean) {
                // i kazuvame na najdenata soba da go primi klientot
                this.rooms[room].takeClient(guest);
                // vrsime evidencija deka vo hotelot ni dosol nov gostin
                this.guests++;
                // go prekinuvame ciklusot oti gostinot e veke zgrizen
                break;
            }
        }
    }

    // ovaa metoda ni generira pocetni vraboteni za da ima hotelot so koj da raboti
    this.generateEmployees = function() {
        // sakame 10 vraboteni
        for (var index = 1; index <= 10; index++) {
            // kreirame vraboten
            var employee = new Human(index, "employee");
            // i go stavame vo nizata od vraboteni
            this.employees.push(employee);
        }
    }

    // ovaa metoda ni generira sobi za hotelot
    this.generateRooms = function() {
        // sakame 100 sobi
        for (var index = 1; index <= 100; index++) {
            // kreirame soba
            var room = new Room(index);
            // i ja stavame vo nizata od sobi
            this.rooms.push(room);
        }
    }

    // go povikuvame generatorite ednas, pri samoto kreiranje na Hotel objektot
    this.generateRooms();
    this.generateEmployees();
}