// Mock data for bookings
let bookings = [
  {
    id: "2dc032fb-5ef9-4511-88ba-8a76d2677ae6",
    dateTime: "2024-11-01T08:00:00",
    booked: false,
  },
  {
    id: "b3571afb-4bb7-4f24-bb1c-e1f85bed0c12",
    dateTime: "2024-11-01T08:30:00",
    booked: false,
  },
  {
    id: "41da3330-4e04-4796-a1e3-926390820f80",
    dateTime: "2024-11-01T09:00:00",
    booked: false,
  },
  {
    id: "dbc2eba0-a8f3-452e-8c46-9311bc5dbdb0",
    dateTime: "2024-11-01T09:30:00",
    booked: false,
  },
  {
    id: "88c39862-8d0d-40f6-b2e0-6c8307e71cda",
    dateTime: "2024-11-01T10:00:00",
    booked: false,
  },
  {
    id: "6fd16142-7b19-4f78-bb00-3edc24fc0f14",
    dateTime: "2024-11-01T10:30:00",
    booked: false,
  },
  {
    id: "ea573a7d-b1a8-4b54-8f29-a89ee3c8b120",
    dateTime: "2024-11-01T11:00:00",
    booked: false,
  },
  {
    id: "e7de8ef3-4956-412f-b721-ae819aba8c72",
    dateTime: "2024-11-01T11:30:00",
    booked: false,
  },
  {
    id: "72ff0140-f770-44cb-a916-b2850c60ed6c",
    dateTime: "2024-11-01T12:00:00",
    booked: false,
  },
  {
    id: "7da60c08-fd1e-48d4-9211-a7477b7b5918",
    dateTime: "2024-11-01T12:30:00",
    booked: false,
  },
  {
    id: "0c5b8518-47cc-4b1f-ae4c-9129df8c5726",
    dateTime: "2024-11-01T13:00:00",
    booked: false,
  },
  {
    id: "171a967e-1417-4731-85c9-6701a47fa2d1",
    dateTime: "2024-11-01T13:30:00",
    booked: false,
  },
  {
    id: "12bab8e3-0cc7-49ef-b4f7-7079cfda7c1a",
    dateTime: "2024-11-01T14:00:00",
    booked: false,
  },
  {
    id: "43cc734e-62be-4d2a-81c6-fc55408e5acb",
    dateTime: "2024-11-01T14:30:00",
    booked: false,
  },
  {
    id: "b14f10cc-6475-4314-a696-4a29d702a8ea",
    dateTime: "2024-11-01T15:00:00",
    booked: false,
  },
  {
    id: "5dcd0dd9-3732-48c0-8a56-56b7e5c67659",
    dateTime: "2024-11-01T15:30:00",
    booked: false,
  }
]

//Named Export (+ Default)
export const getAllBookings = () => {
  return bookings;
};

//Named Export
export const getAvailableBookings = () => {
  return bookings.filter((booking) => !booking.booked);
};

//Named Export
export const bookBookingById = (id) => {
  const bookingIndex = bookings.findIndex((booking) => booking.id === id);

  if (bookingIndex === -1) {
    return { success: false, message: "Booking not found" };
  }

  if (bookings[bookingIndex].booked) {
    return { success: false, message: "Booking is already booked" };
  }

  // Mark the booking as booked
  bookings[bookingIndex].booked = true;
  return { success: true, message: "Booking successfully booked" };
};


export default getAllBookings; // Default Export




//console.log(getAllBookings());

//console.log(bookBookingById("b14f10cc-6475-4314-a696-4a29d702a8ea"));


/*
Named Export:
You can export multiple values.
Must use the exact name when importing.

Default Export:
You can only have one default export per file.
Can use any name when importing.


Export: Use export to make functions, variables, or classes available for import in other files.
Import: Use import to bring those exported elements into another file.
*/