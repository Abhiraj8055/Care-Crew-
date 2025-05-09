
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { ShoppingCart, User, Menu, X, Search } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from '@/components/ui/navigation-menu';
import { Input } from '@/components/ui/input';
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetClose,
} from '@/components/ui/sheet';
import { useAuth } from '@/contexts/AuthContext';
import { cn } from '@/lib/utils';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { 
  DropdownMenu, 
  DropdownMenuContent, 
  DropdownMenuItem, 
  DropdownMenuSeparator, 
  DropdownMenuTrigger 
} from '@/components/ui/dropdown-menu';

const Navbar = () => {
  const { currentUser, logout } = useAuth();
  const [searchQuery, setSearchQuery] = useState('');
  const navigate = useNavigate();

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/search?q=${encodeURIComponent(searchQuery)}`);
    }
  };

  const handleLogout = async () => {
    await logout();
    navigate('/');
  };

  const categories = [
    { name: 'Cooking', path: '/search?serviceType=cooking' },
    { name: 'Cleaning', path: '/search?serviceType=cleaning' },
    { name: 'Childcare', path: '/search?serviceType=childcare' },
    { name: 'Elderly Care', path: '/search?serviceType=elderlycare' },
    { name: 'Gardening', path: '/search?serviceType=gardening' },
    { name: 'Driving', path: '/search?serviceType=driving' },
  ];

  const MobileNavMenu = () => (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="ghost" size="icon" className="md:hidden">
          <Menu />
          <span className="sr-only">Toggle menu</span>
        </Button>
      </SheetTrigger>
      <SheetContent side="left">
        <div className="flex flex-col gap-6 h-full">
          <Link to="/" className="flex items-center gap-2">
            <ShoppingCart className="h-6 w-6 text-primary" />
            <span className="font-bold text-xl">CareCrew</span>
          </Link>
          
          <div className="space-y-2">
            <h4 className="font-medium text-sm">Categories</h4>
            <nav className="flex flex-col space-y-1">
              {categories.map((category) => (
                <SheetClose asChild key={category.path}>
                  <Link
                    to={category.path}
                    className="py-2 px-3 rounded-md hover:bg-muted transition-colors"
                  >
                    {category.name}
                  </Link>
                </SheetClose>
              ))}
            </nav>
          </div>
          
          <div className="space-y-2">
            <h4 className="font-medium text-sm">Account</h4>
            <nav className="flex flex-col space-y-1">
              {currentUser ? (
                <>
                  <div className="py-2 px-3">
                    Signed in as <span className="font-medium">{currentUser.name}</span>
                  </div>
                  <SheetClose asChild>
                    <Link
                      to="/profile"
                      className="py-2 px-3 rounded-md hover:bg-muted transition-colors"
                    >
                      My Profile
                    </Link>
                  </SheetClose>
                  <button
                    onClick={handleLogout}
                    className="py-2 px-3 rounded-md hover:bg-muted transition-colors text-left"
                  >
                    Sign Out
                  </button>
                </>
              ) : (
                <>
                  <SheetClose asChild>
                    <Link
                      to="/login"
                      className="py-2 px-3 rounded-md hover:bg-muted transition-colors"
                    >
                      Sign In
                    </Link>
                  </SheetClose>
                  <SheetClose asChild>
                    <Link
                      to="/register"
                      className="py-2 px-3 rounded-md hover:bg-muted transition-colors"
                    >
                      Register
                    </Link>
                  </SheetClose>
                </>
              )}
            </nav>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );

  return (
    <header className="sticky top-0 z-40 w-full bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b">
      <div className="container flex items-center justify-between h-16 gap-2">
        {/* Logo and mobile menu */}
        <div className="flex items-center gap-2">
          <MobileNavMenu />
          <Link to="/" className="flex items-center gap-2">
            <ShoppingCart className="h-6 w-6 text-primary" />
            <span className="font-bold text-lg hidden sm:inline-block">CareCrew</span>
          </Link>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-1">
          <NavigationMenu>
            <NavigationMenuList>
              <NavigationMenuItem>
                <NavigationMenuTrigger>Categories</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                    {categories.map((category) => (
                      <li key={category.path}>
                        <NavigationMenuLink asChild>
                          <Link
                            to={category.path}
                            className={cn(
                              "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                            )}
                          >
                            <div className="text-sm font-medium leading-none">{category.name}</div>
                          </Link>
                        </NavigationMenuLink>
                      </li>
                    ))}
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <Link to="/search" className={cn(
                  "group inline-flex h-10 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-accent/50 data-[state=open]:bg-accent/50"
                )}>
                  All Services
                </Link>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <Link to="/become-provider" className={cn(
                  "group inline-flex h-10 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-accent/50 data-[state=open]:bg-accent/50"
                )}>
                  Become a Provider
                </Link>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        </div>

        {/* Search bar */}
        <form onSubmit={handleSearch} className="flex-1 max-w-md hidden md:flex mx-4">
          <div className="relative w-full">
            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input
              type="search"
              placeholder="Search for services..."
              className="w-full pl-9"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
        </form>

        {/* Auth and cart actions */}
        <div className="flex items-center gap-2">
          <Button 
            variant="outline" 
            size="icon" 
            className="relative"
            asChild
          >
            <Link to="/cart">
              <ShoppingCart className="h-5 w-5" />
              <span className="absolute -top-1 -right-1 bg-primary text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">0</span>
              <span className="sr-only">Shopping cart</span>
            </Link>
          </Button>

          {currentUser ? (
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="icon" className="rounded-full">
                  <Avatar className="h-8 w-8">
                    <AvatarImage src={currentUser.photoUrl || undefined} alt={currentUser.name} />
                    <AvatarFallback>{currentUser.name.charAt(0)}</AvatarFallback>
                  </Avatar>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <div className="px-2 py-1.5 text-sm font-medium">
                  {currentUser.name}
                </div>
                <DropdownMenuSeparator />
                <DropdownMenuItem asChild>
                  <Link to="/profile">My Profile</Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link to="/orders">My Orders</Link>
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem onClick={handleLogout}>
                  Sign Out
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          ) : (
            <div className="flex items-center gap-2">
              <Button variant="ghost" size="sm" asChild>
                <Link to="/login">Sign In</Link>
              </Button>
              <Button size="sm" asChild>
                <Link to="/register">Register</Link>
              </Button>
            </div>
          )}
        </div>
      </div>
    </header>
  );
};

export default Navbar;
