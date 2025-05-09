
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Layout from "@/components/Layout";
import ChatList from "@/components/chat/ChatList";
import ChatWindow from "@/components/chat/ChatWindow";
import { mockMessages, mockUsers } from "@/data/mockData";
import { Message, User } from "@/types";
import { useAuth } from "@/contexts/AuthContext";
import { useToast } from "@/hooks/use-toast";

const ChatPage = () => {
  const { receiverId } = useParams();
  const { currentUser } = useAuth();
  const { toast } = useToast();
  const [chatUsers, setChatUsers] = useState<User[]>([]);
  const [messages, setMessages] = useState<Message[]>([]);
  const [selectedUser, setSelectedUser] = useState<User | null>(null);

  // Load chat users when component mounts
  useEffect(() => {
    if (currentUser) {
      // Get all users who have messages with the current user
      const userIdsWithMessages = new Set<string>();
      mockMessages.forEach(message => {
        if (message.senderId === currentUser.id) {
          userIdsWithMessages.add(message.receiverId);
        } else if (message.receiverId === currentUser.id) {
          userIdsWithMessages.add(message.senderId);
        }
      });
      
      const relevantUsers = mockUsers.filter(user => 
        userIdsWithMessages.has(user.id) && user.id !== currentUser.id
      );
      setChatUsers(relevantUsers);
    }
  }, [currentUser]);

  // Set initially selected user from URL or first in the list
  useEffect(() => {
    if (receiverId && chatUsers.length > 0) {
      const user = chatUsers.find(user => user.id === receiverId);
      if (user) {
        setSelectedUser(user);
      } else if (chatUsers.length > 0) {
        setSelectedUser(chatUsers[0]);
      }
    } else if (chatUsers.length > 0) {
      setSelectedUser(chatUsers[0]);
    }
  }, [receiverId, chatUsers]);

  // Load messages for selected user
  useEffect(() => {
    if (currentUser && selectedUser) {
      const filteredMessages = mockMessages.filter(
        message => 
          (message.senderId === currentUser.id && message.receiverId === selectedUser.id) ||
          (message.senderId === selectedUser.id && message.receiverId === currentUser.id)
      ).sort((a, b) => a.createdAt.getTime() - b.createdAt.getTime());
      
      setMessages(filteredMessages);
    }
  }, [currentUser, selectedUser]);

  const handleSendMessage = (content: string) => {
    if (!currentUser || !selectedUser || !content.trim()) return;
    
    const newMessage: Message = {
      id: `message${new Date().getTime()}`,
      senderId: currentUser.id,
      receiverId: selectedUser.id,
      content,
      createdAt: new Date(),
      read: false
    };
    
    setMessages(prev => [...prev, newMessage]);
    toast({
      title: "Message sent",
      description: "Your message has been sent successfully"
    });
  };

  if (!currentUser) {
    return (
      <Layout>
        <div className="container mx-auto py-6">
          <h1 className="text-2xl font-bold mb-6">Messages</h1>
          <div className="p-12 text-center">
            <p className="text-lg">Please login to view your messages</p>
          </div>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      <div className="container mx-auto py-6">
        <h1 className="text-2xl font-bold mb-6">Messages</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 h-[70vh]">
          <div className="md:col-span-1 border rounded-lg overflow-hidden bg-white shadow">
            <ChatList 
              users={chatUsers} 
              selectedUser={selectedUser} 
              onSelectUser={setSelectedUser} 
            />
          </div>
          
          <div className="md:col-span-3 border rounded-lg overflow-hidden bg-white shadow">
            {selectedUser ? (
              <ChatWindow 
                currentUser={currentUser} 
                recipient={selectedUser}
                messages={messages}
                onSendMessage={handleSendMessage}
              />
            ) : (
              <div className="flex items-center justify-center h-full">
                <p className="text-muted-foreground">Select a conversation to start messaging</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default ChatPage;
