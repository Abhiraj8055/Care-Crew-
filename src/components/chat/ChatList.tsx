
import { User } from "@/types";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { cn } from "@/lib/utils";

interface ChatListProps {
  users: User[];
  selectedUser: User | null;
  onSelectUser: (user: User) => void;
}

const ChatList = ({ users, selectedUser, onSelectUser }: ChatListProps) => {
  return (
    <div className="h-full flex flex-col">
      <div className="p-3 border-b">
        <h3 className="font-medium">Conversations</h3>
      </div>
      <div className="flex-1 overflow-y-auto">
        {users.length === 0 ? (
          <div className="flex items-center justify-center h-32">
            <p className="text-sm text-muted-foreground">No conversations yet</p>
          </div>
        ) : (
          <ul className="divide-y">
            {users.map((user) => (
              <li key={user.id}>
                <button
                  className={cn(
                    "w-full flex items-center gap-3 p-3 text-left hover:bg-accent transition-colors",
                    selectedUser?.id === user.id && "bg-accent"
                  )}
                  onClick={() => onSelectUser(user)}
                >
                  <Avatar className="h-10 w-10">
                    <AvatarImage src={user.photoUrl} alt={user.name} />
                    <AvatarFallback>{user.name.substring(0, 2).toUpperCase()}</AvatarFallback>
                  </Avatar>
                  <div className="min-w-0 flex-1">
                    <p className="font-medium truncate">{user.name}</p>
                    <p className="text-sm text-muted-foreground truncate">
                      {user.userType === "provider" ? "Provider" : "Household"}
                    </p>
                  </div>
                </button>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default ChatList;
