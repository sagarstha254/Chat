export const sampleChats = [
  {
    avatar: ["https://www.w3schools.com"],
    name: "John Doe",
    _id: "1",
    groupChat: false,
    members: ["1", "2"],
  },
  {
    avatar: ["https://www.w3schools.com"],
    name: "John Boi",
    _id: "2",
    groupChat: false,
    members: ["1", "2"],
  },
];

export const sampleUsers = [
  {
    avatar: ["https://www.w3schools.com"],
    name: "John Doe",
    _id: "1",
  },
  {
    avatar: ["https://www.w3schools.com"],
    name: "John Boi",
    _id: "2",
  },
];

export const sampleNotificatons = [
  {
    sender: {
      avatar: ["https://www.w3schools.com"],
      name: "John Doe",
    },
    _id: "1",
  },
  {
    sender: {
      avatar: ["https://www.w3schools.com"],
      name: "John Boi",
    },
    _id: "2",
  },
];

export const sampleMessage = [
  {
    attachments: [
      {
        public_id: "assdfdfg",
        url: "https://www.w3schools.com/howto/img_avatar.png",
      },
    ],
    content: "shity message",
    _id: "sfnsdjkfsdnfkjsbsdfnd",
    sender: {
      _id: "user._id",
      name: "Chaman",
    },
    chat: "chatId",
    createdAt: "2024-02-12T10:41:30.630Z",
  },
  {
    attachments: [
      {
        public_id: "asdfg",
        url: "https://www.w3schools.com/howto/img_avatar.png",
      },
    ],
    content: "shity message2",
    _id: "sfnsdjkfsdnfkjsbnd",
    sender: {
      _id: "sdfsdfsdf",
      name: "Chaman2",
    },
    chat: "chatId",
    createdAt: "2024-02-12T10:41:30.630Z",
  },
];

export const dashboardData = {
  users: [
    {
      name: "John Doe",
      avatar: "https://www.w3schools.com/howto/img_avatar.png",
      _id: "1",
      username: "john_doe",
      friends: 20,
      groups: 5,
    },
    {
      name: "John Boi",
      avatar: "https://www.w3schools.com/howto/img_avatar.png",
      _id: "2",
      username: "john_boi",
      friends: 20,
      groups: 25,
    },
  ],

  chats: [
    {
      name: "LabadBass Group",
      avatar: ["https://www.w3schools.com/howto/img_avatar.png"],
      _id: "1",
      groupChat: false,
      members: [
        {
          _id: "1",
          avatar: "https://www.w3schools.com/howto/img_avatar.png",
        },
        {
          _id: "2",
          avatar: "https://www.w3schools.com/howto/img_avatar.png",
        },
      ],
      totalMembers: 2,
      totalMessages: 20,
      creator: {
        name: "John Doe",
        avatar: "https://www.w3schools.com/howto/img_avatar.png",
      },
    },
    {
      name: "Luston Group",
      avatar: ["https://www.w3schools.com/howto/img_avatar.png"],
      _id: "2",
      groupChat: false,
      members: [
        {
          _id: "1",
          avatar: "https://www.w3schools.com/howto/img_avatar.png",
        },
        {
          _id: "2",
          avatar: "https://www.w3schools.com/howto/img_avatar.png",
        },
      ],
      totalMembers: 2,
      totalMessages: 20,
      creator: {
        name: "John Boi",
        avatar: "https://www.w3schools.com/howto/img_avatar.png",
      },
    },
  ],

  messages: [
    {
      attachments: [],
      content: "Message hai",
      _id: "sanfdkafdskfndakf",
      sender: {
        avatar: "https://www.w3schools.com/howto/img_avatar.png",
        name: "Chaman",
      },
      chat: "chatId",
      groupChat: false,
      createdAt: "2024-02-12T10:41:30.630Z",
    },

    {
      attachments: [
        {
          public_id: "asdsad 2",
          url: "https://www.w3schools.com/howto/img_avatar.png",
        },
      ],
      content: "",
      _id: "asfadsfgasdgads",
      sender: {
        avatar: "https://www.w3schools.com/howto/img_avatar.png",
        name: "Chaman 2",
      },
      chat: "chatId",
      groupChat: true,
      createdAt: "2024-02-12T10:41:30.630Z",
    },
  ],
};
