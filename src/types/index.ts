
export type UserType = 'household' | 'provider' | 'admin';

export interface User {
  id: string;
  email: string;
  phone?: string;
  name: string;
  userType: UserType;
  createdAt: Date;
  photoUrl?: string;
}

export interface Provider {
  id: string;
  userId: string;
  name: string;
  age: number;
  gender: 'male' | 'female' | 'other';
  skills: string[];
  experience: number; // in years
  salaryExpectation: number;
  location: string;
  availability: 'full-time' | 'part-time';
  certifications?: string[];
  averageRating?: number;
  photoUrl?: string;
  about?: string;
  isAvailable: boolean;
}

export interface Household {
  id: string;
  userId: string;
  name: string;
  location: string;
  members: number;
  requirements?: string[];
  preferredWorkingHours?: string;
}

export interface Review {
  id: string;
  providerId: string;
  householdId: string;
  rating: number; // 1-5
  comment: string;
  createdAt: Date;
}

export interface HireRequest {
  id: string;
  providerId: string;
  householdId: string;
  status: 'pending' | 'accepted' | 'declined' | 'completed' | 'cancelled';
  requestType: 'trial' | 'hire';
  message?: string;
  createdAt: Date;
}

export interface Message {
  id: string;
  senderId: string;
  receiverId: string;
  content: string;
  createdAt: Date;
  read: boolean;
}

export interface Notification {
  id: string;
  userId: string;
  title: string;
  message: string;
  type: 'message' | 'request' | 'system';
  read: boolean;
  createdAt: Date;
  relatedId?: string;
}
