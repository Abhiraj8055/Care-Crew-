
import { useState, useRef, useEffect } from "react";
import { Message, User } from "@/types";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Send } from "lucide-react";
import { format } from "date-fns";
import { cn } from "@/lib/utils";

interface ChatWindowProps {
  currentUser: User | null;
  recipient: User;
  messages: Message[];
  onSendMessage: (content: string) => void;
}

const ChatWindow = ({ currentUser, recipient, messages, onSendMessage }: ChatWindowProps) => {
  const [messageText, setMessageText] = useState("");
  const messagesEndRef = useRef<HTMLDivElement>(null);

  // Scroll to bottom when messages change
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const handleSend = () => {
    if (messageText.trim()) {
      onSendMessage(messageText);
      setMessageText("");
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  return (
    <div className="flex flex-col h-full">
      {/* Header */}
      <div className="p-3 border-b flex items-center gap-3">
        <Avatar className="h-9 w-9">
          <AvatarImage src={recipient.photoUrl} alt={recipient.name} />
          <AvatarFallback>{recipient.name.substring(0, 2).toUpperCase()}</AvatarFallback>
        </Avatar>
        <div>
          <h3 className="font-medium">{recipient.name}</h3>
          <p className="text-xs text-muted-foreground">
            {recipient.userType === "provider" ? "Provider" : "Household"}
          </p>
        </div>
      </div>

      {/* Messages */}
      <div className="flex-1 overflow-y-auto p-4 space-y-4">
        {messages.length === 0 ? (
          <div className="flex items-center justify-center h-full">
            <p className="text-muted-foreground">No messages yet. Start the conversation!</p>
          </div>
        ) : (
          messages.map((message) => (
            <div 
              key={message.id}
              className={cn(
                "flex",
                message.senderId === currentUser?.id ? "justify-end" : "justify-start"
              )}
            >
              <div className="flex gap-2 max-w-[80%]">
                {message.senderId !== currentUser?.id && (
                  <Avatar className="h-8 w-8 mt-1">
                    <AvatarImage src={recipient.photoUrl} alt={recipient.name} />
                    <AvatarFallback>{recipient.name.substring(0, 2).toUpperCase()}</AvatarFallback>
                  </Avatar>
                )}
                <div>
                  <div
                    className={cn(
                      "rounded-lg p-3",
                      message.senderId === currentUser?.id
                        ? "bg-primary text-primary-foreground"
                        : "bg-muted"
                    )}
                  >
                    <p className="whitespace-pre-wrap break-words">{message.content}</p>
                  </div>
                  <p className="text-xs text-muted-foreground mt-1">
                    {format(message.createdAt, "p")}
                  </p>
                </div>
              </div>
            </div>
          ))
        )}
        <div ref={messagesEndRef} />
      </div>

      {/* Message Input */}
      <div className="p-3 border-t">
        <div className="flex gap-2">
          <Textarea
            placeholder="Type a message..."
            className="min-h-[60px] resize-none"
            value={messageText}
            onChange={(e) => setMessageText(e.target.value)}
            onKeyDown={handleKeyDown}
          />
          <Button 
            size="icon" 
            className="h-[60px]" 
            onClick={handleSend}
            disabled={!messageText.trim()}
          >
            <Send className="h-5 w-5" />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ChatWindow;
