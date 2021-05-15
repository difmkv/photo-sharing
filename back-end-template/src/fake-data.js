const USER_ID_1 = "B8isSMaiCQZZLrbL17M65L4dRTH2";
const USER_ID_2 = "c8qhORsYP6UETr6zF4GzjQsrOoF3";
const USER_ID_3 = "IBlmge1VDNReQm6b3P6EmjKe7eA2";

module.exports.users = [
  {
    id: USER_ID_1,
    email: "brendabrown@gmail.com",
    fullName: "Brenda Brown",
  },
  {
    id: USER_ID_2,
    email: "jimsmith@gmail.com",
    fullName: "Jim Smith",
  },
  {
    id: USER_ID_3,
    email: "janejones@gmail.com",
    fullName: "Jane Jones",
  },
];

module.exports.photos = [
  {
    url: "/photo-1.jpeg",
    title: "Doggo",
    ownerId: USER_ID_1,
    sharedWith: [USER_ID_2],
  },
  {
    url: "/photo-0.jpg",
    title: "Good Boy",
    ownerId: USER_ID_2,
    sharedWith: [USER_ID_1],
  },
];
