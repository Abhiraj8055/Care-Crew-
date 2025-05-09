
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ShoppingCart, MessageCircle, UserCircle2 } from "lucide-react";
import { useAuth } from "@/contexts/AuthContext";

const NavbarActions = () => {
  const { currentUser } = useAuth();

  return (
    <div className="ml-auto flex items-center gap-4">
      {currentUser && (
        <>
          <Link to="/chat">
            <Button variant="ghost" size="icon" className="relative" aria-label="Messages">
              <MessageCircle className="h-5 w-5" />
            </Button>
          </Link>
          <Link to="/cart">
            <Button variant="ghost" size="icon" className="relative" aria-label="Shopping cart">
              <ShoppingCart className="h-5 w-5" />
            </Button>
          </Link>
          <Link to="/profile">
            <Button variant="ghost" size="icon" aria-label="User profile">
              <UserCircle2 className="h-5 w-5" />
            </Button>
          </Link>
        </>
      )}
      {!currentUser && (
        <Link to="/login">
          <Button size="sm">Login</Button>
        </Link>
      )}
    </div>
  );
};

export default NavbarActions;
