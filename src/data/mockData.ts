
import { User, Provider, Household, Review, HireRequest, Message, Notification } from "@/types";

// Mock Users
export const mockUsers: User[] = [
  {
    id: "user1",
    email: "john@example.com",
    name: "John Smith",
    userType: "household",
    createdAt: new Date("2023-01-15"),
    photoUrl: "https://images.unsplash.com/photo-1568602471122-7832951cc4c5?w=400&auto=format&fit=crop&q=60" // Male business portrait
  },
  {
    id: "user2",
    email: "jane@example.com",
    name: "Jane Doe",
    userType: "provider",
    createdAt: new Date("2023-02-10"),
    photoUrl: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=400&auto=format&fit=crop&q=60" // Female portrait
  },
  {
    id: "user3",
    email: "admin@example.com",
    name: "Admin User",
    userType: "admin",
    createdAt: new Date("2023-01-01"),
    photoUrl: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=400&auto=format&fit=crop&q=60" // Male in blue shirt
  },
  {
    id: "user4",
    email: "sarah@example.com",
    name: "Sarah Johnson",
    userType: "provider",
    createdAt: new Date("2023-03-05"),
    photoUrl: "https://images.unsplash.com/photo-1534751516642-a1af1ef26a56?w=400&auto=format&fit=crop&q=60" // Female with dark hair
  },
  {
    id: "user5",
    email: "michael@example.com",
    name: "Michael Brown",
    userType: "household",
    createdAt: new Date("2023-02-20"),
    photoUrl: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&auto=format&fit=crop&q=60" // Male smiling
  }
];

// Mock Providers
export const mockProviders: Provider[] = [
  {
    id: "provider1",
    userId: "user2",
    name: "Jane Doe",
    age: 35,
    gender: "female",
    skills: ["cooking", "cleaning", "childcare"],
    experience: 7,
    salaryExpectation: 25000,
    location: "Downtown",
    availability: "full-time",
    certifications: ["Food Handling Certificate"],
    averageRating: 4.7,
    photoUrl: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=400&auto=format&fit=crop&q=60", // Female portrait
    about: "Experienced cook with expertise in multiple cuisines. I specialize in healthy meal preparation and kitchen organization.",
    isAvailable: true
  },
  {
    id: "provider2",
    userId: "user4",
    name: "Sarah Johnson",
    age: 29,
    gender: "female",
    skills: ["cleaning", "laundry", "elderly care"],
    experience: 5,
    salaryExpectation: 22000,
    location: "Uptown",
    availability: "part-time",
    averageRating: 4.5,
    photoUrl: "https://images.unsplash.com/photo-1534751516642-a1af1ef26a56?w=400&auto=format&fit=crop&q=60", // Female with dark hair
    about: "Detail-oriented house cleaner with experience in various household tasks. I take pride in keeping homes spotless and organized.",
    isAvailable: true
  },
  {
    id: "provider3",
    userId: "user6",
    name: "Robert Chen",
    age: 42,
    gender: "male",
    skills: ["cooking", "gardening"],
    experience: 12,
    salaryExpectation: 30000,
    location: "Westside",
    availability: "full-time",
    certifications: ["Culinary Arts Certificate"],
    averageRating: 4.9,
    photoUrl: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&auto=format&fit=crop&q=60", // Asian male portrait
    about: "Professional chef with experience in restaurant and home settings. I specialize in Asian and European cuisines.",
    isAvailable: true
  },
  {
    id: "provider4",
    userId: "user7",
    name: "Maria Garcia",
    age: 31,
    gender: "female",
    skills: ["childcare", "cooking", "cleaning"],
    experience: 6,
    salaryExpectation: 26000,
    location: "Downtown",
    availability: "full-time",
    certifications: ["First Aid", "CPR"],
    averageRating: 4.8,
    photoUrl: "https://images.unsplash.com/photo-1531123897727-8f129e1688ce?w=400&auto=format&fit=crop&q=60", // Hispanic female
    about: "Experienced nanny and housekeeper. I'm passionate about childcare and creating a clean, organized environment.",
    isAvailable: true
  },
  {
    id: "provider5",
    userId: "user8",
    name: "David Wilson",
    age: 45,
    gender: "male",
    skills: ["driving", "elderly care", "errands"],
    experience: 10,
    salaryExpectation: 28000,
    location: "Eastside",
    availability: "part-time",
    certifications: ["Driving License", "Elderly Care Certificate"],
    averageRating: 4.6,
    photoUrl: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&auto=format&fit=crop&q=60", // Older male with glasses
    about: "Reliable assistant for elderly care and household management. I can help with driving, errands, and daily care.",
    isAvailable: false
  }
];

// Mock Households
export const mockHouseholds: Household[] = [
  {
    id: "household1",
    userId: "user1",
    name: "Smith Family",
    location: "Downtown",
    members: 4,
    requirements: ["cooking", "cleaning", "childcare"],
    preferredWorkingHours: "Weekdays 9 AM - 5 PM"
  },
  {
    id: "household2",
    userId: "user5",
    name: "Brown Residence",
    location: "Uptown",
    members: 2,
    requirements: ["cleaning", "elderly care"],
    preferredWorkingHours: "Weekdays 10 AM - 2 PM"
  }
];

// Mock Reviews
export const mockReviews: Review[] = [
  {
    id: "review1",
    providerId: "provider1",
    householdId: "household1",
    rating: 5,
    comment: "Jane is an excellent cook and very professional. Our family loves her meals!",
    createdAt: new Date("2023-05-10")
  },
  {
    id: "review2",
    providerId: "provider1",
    householdId: "household2",
    rating: 4,
    comment: "Very good service, always on time and reliable.",
    createdAt: new Date("2023-06-15")
  },
  {
    id: "review3",
    providerId: "provider2",
    householdId: "household1",
    rating: 5,
    comment: "Sarah keeps our house spotless. Highly recommended!",
    createdAt: new Date("2023-04-20")
  }
];

// Mock Hire Requests
export const mockHireRequests: HireRequest[] = [
  {
    id: "request1",
    providerId: "provider1",
    householdId: "household1",
    status: "completed",
    requestType: "trial",
    message: "We would like to try your cooking services for a day.",
    createdAt: new Date("2023-04-01")
  },
  {
    id: "request2",
    providerId: "provider1",
    householdId: "household1",
    status: "accepted",
    requestType: "hire",
    message: "We'd like to hire you for regular cooking, 3 days a week.",
    createdAt: new Date("2023-04-05")
  },
  {
    id: "request3",
    providerId: "provider2",
    householdId: "household2",
    status: "pending",
    requestType: "trial",
    message: "Looking for cleaning help, available for a trial this weekend?",
    createdAt: new Date("2023-06-25")
  }
];

// Mock Messages
export const mockMessages: Message[] = [
  {
    id: "message1",
    senderId: "user1",
    receiverId: "user2",
    content: "Hello Jane, are you available for a cooking job this weekend?",
    createdAt: new Date("2023-06-20T10:30:00"),
    read: true
  },
  {
    id: "message2",
    senderId: "user2",
    receiverId: "user1",
    content: "Hello Mr. Smith, yes I'm available. What time would you prefer?",
    createdAt: new Date("2023-06-20T11:45:00"),
    read: true
  },
  {
    id: "message3",
    senderId: "user1",
    receiverId: "user2",
    content: "Would Saturday at 4 PM work for you?",
    createdAt: new Date("2023-06-20T12:15:00"),
    read: false
  },
  {
    id: "message4",
    senderId: "user5",
    receiverId: "user4",
    content: "Hi Sarah, we need cleaning services for next week.",
    createdAt: new Date("2023-06-19T09:00:00"),
    read: true
  }
];

// Mock Notifications
export const mockNotifications: Notification[] = [
  {
    id: "notif1",
    userId: "user2",
    title: "New Hire Request",
    message: "You have a new hire request from the Smith Family.",
    type: "request",
    read: false,
    createdAt: new Date("2023-06-25T08:00:00"),
    relatedId: "request3"
  },
  {
    id: "notif2",
    userId: "user1",
    title: "New Message",
    message: "You have a new message from Jane Doe.",
    type: "message",
    read: false,
    createdAt: new Date("2023-06-20T11:45:00"),
    relatedId: "message2"
  },
  {
    id: "notif3",
    userId: "user4",
    title: "System Notification",
    message: "Please complete your profile to appear in search results.",
    type: "system",
    read: true,
    createdAt: new Date("2023-06-15T14:30:00")
  }
];
