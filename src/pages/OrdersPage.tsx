
import React from 'react';
import { 
  PackageOpen, 
  CalendarClock, 
  CircleCheck, 
  Clock, 
  ArrowRight 
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from '@/components/ui/tabs';
import Layout from '@/components/Layout';
import { Badge } from '@/components/ui/badge';

// Mock data for orders
const orders = [
  {
    id: 'ORD-2023-001',
    date: '2023-10-15',
    status: 'completed',
    total: 320,
    items: [
      {
        id: '1',
        name: 'Weekly House Cleaning',
        provider: 'Maria Garcia',
        price: 120,
        image: '/placeholder.svg'
      },
      {
        id: '2',
        name: 'Meal Preparation (5 days)',
        provider: 'James Smith',
        price: 200,
        image: '/placeholder.svg'
      }
    ]
  },
  {
    id: 'ORD-2023-002',
    date: '2023-11-05',
    status: 'scheduled',
    scheduledDate: '2023-11-12',
    total: 150,
    items: [
      {
        id: '3',
        name: 'Deep Cleaning Service',
        provider: 'Clean Experts Ltd',
        price: 150,
        image: '/placeholder.svg'
      }
    ]
  }
];

// Upcoming bookings
const upcomingBookings = orders.filter(order => order.status === 'scheduled');
// Past orders
const pastOrders = orders.filter(order => order.status === 'completed');

const OrdersPage = () => {
  return (
    <Layout>
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-8">My Orders & Bookings</h1>
        
        <Tabs defaultValue="upcoming" className="w-full">
          <TabsList className="mb-8">
            <TabsTrigger value="upcoming" className="flex items-center">
              <CalendarClock className="mr-2 h-4 w-4" />
              Upcoming Bookings
            </TabsTrigger>
            <TabsTrigger value="past" className="flex items-center">
              <PackageOpen className="mr-2 h-4 w-4" />
              Past Orders
            </TabsTrigger>
          </TabsList>
          
          <TabsContent value="upcoming">
            {upcomingBookings.length > 0 ? (
              <div className="space-y-6">
                {upcomingBookings.map((order) => (
                  <Card key={order.id}>
                    <CardHeader className="flex flex-row items-start justify-between pb-2">
                      <div>
                        <CardTitle className="text-xl flex items-center">
                          Order #{order.id}
                          <Badge variant="outline" className="ml-2 bg-primary/10 text-primary border-primary/20">
                            Scheduled
                          </Badge>
                        </CardTitle>
                        <div className="text-sm text-muted-foreground mt-1">
                          Ordered on {order.date}
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="font-medium">${order.total.toFixed(2)}</div>
                        <div className="flex items-center text-sm text-muted-foreground mt-1">
                          <Clock className="mr-1 h-3.5 w-3.5" />
                          Service date: {order.scheduledDate}
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        {order.items.map((item) => (
                          <div key={item.id} className="flex space-x-4">
                            <img 
                              src={item.image} 
                              alt={item.name} 
                              className="h-16 w-16 rounded-md object-cover flex-shrink-0" 
                            />
                            <div className="flex-1">
                              <div className="font-medium">{item.name}</div>
                              <div className="text-sm text-muted-foreground">Provider: {item.provider}</div>
                            </div>
                            <div className="text-right">
                              <div className="font-medium">${item.price.toFixed(2)}</div>
                            </div>
                          </div>
                        ))}
                      </div>
                      
                      <div className="flex justify-end mt-6 space-x-3">
                        <Button variant="outline">Reschedule</Button>
                        <Button variant="destructive">Cancel Booking</Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            ) : (
              <div className="text-center py-16">
                <CalendarClock className="mx-auto h-16 w-16 text-muted-foreground mb-4" />
                <h2 className="text-2xl font-semibold mb-2">No upcoming bookings</h2>
                <p className="text-muted-foreground mb-8">
                  When you book services, your upcoming appointments will appear here.
                </p>
                <Button asChild>
                  <a href="/search">Browse Services</a>
                </Button>
              </div>
            )}
          </TabsContent>
          
          <TabsContent value="past">
            {pastOrders.length > 0 ? (
              <div className="space-y-6">
                {pastOrders.map((order) => (
                  <Card key={order.id}>
                    <CardHeader className="flex flex-row items-start justify-between pb-2">
                      <div>
                        <CardTitle className="text-xl flex items-center">
                          Order #{order.id}
                          <Badge variant="outline" className="ml-2 bg-green-50 text-green-600 border-green-200">
                            <CircleCheck className="mr-1 h-3.5 w-3.5" />
                            Completed
                          </Badge>
                        </CardTitle>
                        <div className="text-sm text-muted-foreground mt-1">
                          Ordered on {order.date}
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="font-medium">${order.total.toFixed(2)}</div>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        {order.items.map((item) => (
                          <div key={item.id} className="flex space-x-4">
                            <img 
                              src={item.image} 
                              alt={item.name} 
                              className="h-16 w-16 rounded-md object-cover flex-shrink-0" 
                            />
                            <div className="flex-1">
                              <div className="font-medium">{item.name}</div>
                              <div className="text-sm text-muted-foreground">Provider: {item.provider}</div>
                            </div>
                            <div className="text-right">
                              <div className="font-medium">${item.price.toFixed(2)}</div>
                            </div>
                          </div>
                        ))}
                      </div>
                      
                      <div className="flex justify-end mt-6 space-x-3">
                        <Button variant="outline">View Details</Button>
                        <Button>Book Again</Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            ) : (
              <div className="text-center py-16">
                <PackageOpen className="mx-auto h-16 w-16 text-muted-foreground mb-4" />
                <h2 className="text-2xl font-semibold mb-2">No past orders</h2>
                <p className="text-muted-foreground mb-8">
                  Once you complete services, your order history will appear here.
                </p>
                <Button asChild>
                  <a href="/search">Browse Services</a>
                </Button>
              </div>
            )}
          </TabsContent>
        </Tabs>
      </div>
    </Layout>
  );
};

export default OrdersPage;
