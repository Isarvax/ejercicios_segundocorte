
/**
 * Array containing the room numbers.
 * @type {number[]}
 */
const rooms = [100, 101, 102, 103, 201, 202, 203, 301, 302, 303];
/**
 * Represents the status of each room.
 * @type {boolean[]}
 */
const roomStatus = Array(10).fill(false);
/**
 * Object representing room reservations.
 * @type {Object}
 */
const roomReservations = {};


/**
 * Reserves a room with the given room number for the specified name.
 * @param {number} roomNumber - The room number to be reserved.
 * @param {string} name - The name of the person reserving the room.
 */
const reserveRoom = (roomNumber, name) => {
  const index = rooms.indexOf(roomNumber);
  if (index !== -1 && roomStatus[index] === false) {
    roomStatus[index] = true;
    roomReservations[roomNumber] = name;
    alert(`La habitación ${roomNumber} ha sido reservada por ${name}.`);
  } else {
    alert(`La habitación ${roomNumber} ya está reservada.`);
  }
};


/**
 * Frees up a room by setting its status to false and removing its reservation.
 * @param {number} roomNumber - The number of the room to be freed.
 */
const freeRoom = (roomNumber) => {
  const index = rooms.indexOf(roomNumber);
  if (index !== -1 && roomStatus[index] === true) {
    roomStatus[index] = false;
    delete roomReservations[roomNumber];
    alert(`La habitación ${roomNumber} ha sido liberada.`);
  } else {
    alert(`La habitación ${roomNumber} ya está libre.`);
  }
};


/**
 * Displays the available rooms.
 */
const showAvailableRooms = () => {
  const availableRooms = rooms.filter((room, index) => {
    return roomStatus[index] === false;
  });

  if (availableRooms.length > 0) {
    alert(`Las habitaciones disponibles son: ${availableRooms.join(', ')}`);
  } else {
    alert('No hay habitaciones disponibles.');
  }
};


/**
 * Displays the occupancy status of rooms.
 */
const showOccupancy = () => {
  const availableRooms = rooms.filter((room, index) => {
    return roomStatus[index] === false;
  });
  const reservedRooms = rooms.filter((room, index) => {
    return roomStatus[index] === true;
  });
  alert(`Hay ${availableRooms.length} habitaciones disponibles y ${reservedRooms.length} habitaciones reservadas.`);
};



/**
 * Handles user input for a menu-driven room reservation system.
 */
const handleUserInput = () => {
  let userInput;
  do {
  
    userInput = prompt('Menú \n' + '1. Reservar una habitación '+ 
    ' 2. Liberar una habitación'+
    ' 3. Consultar ocupación' +
  ' 4. Salir');

    switch (userInput) {
      case '1':
        const roomNumber = parseInt(prompt('Ingrese el número de la habitación:\n[100, 101, 102, 103, 201, 202, 203, 301, 302, 303]:'));
        if (!isNaN(roomNumber) && rooms.includes(roomNumber)) {
          const name = prompt('Ingrese su nombre:');
          reserveRoom(roomNumber, name);
        } else {
          alert('Número de habitación inválido. Intente de nuevo.');
        }
        break;
      case '2':
        const roomNumberToFree = parseInt(prompt('Ingrese el número de la habitación que desea liberar:'));
        if (!isNaN(roomNumberToFree) && rooms.includes(roomNumberToFree)) {
          freeRoom(roomNumberToFree);
        } else {
          alert('Número de habitación inválido. Intente de nuevo.');
        }
        break;
      case '3':
        showOccupancy();
        break;
      case '4':
        alert('Saliendo...');
        break;
      default:
        alert('Opción inválida. Intente de nuevo.');
        break;
    }
  } while (userInput !== '4');
};


handleUserInput();