import CardList from "@/components/CardList";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";
import { Sheet, SheetTrigger } from "@/components/ui/sheet";
import {
  BadgeCheckIcon,
  CandyIcon,
  CitrusIcon,
  ShieldIcon,
} from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import EditUser from "@/components/EditUser";
import AppLineChart from "@/components/AppLineChart";
const UserPage = () => {
  return (
    <div>
      <Breadcrumb>
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink href="/">Dashboard</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbLink href="/users">Users</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbPage>John Doe</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>

      <div className="mt-4 flex flex-col xl:flex-row gap-8">
        <div className="w-full xl:w-1/3 space-y-6">
          <div className="bg-primary-foreground p-4 rounded-lg">
            <h1 className="text-xl font-semibold">User Badge</h1>
            <div className="flex gap-4 mt-4">
              <HoverCard>
                <HoverCardTrigger>
                  <BadgeCheckIcon
                    size={36}
                    className="rounded-full bg-blue-500/30 border-blue-500/50 p-2"
                  />
                </HoverCardTrigger>
                <HoverCardContent>
                  <h1 className="text-sm mb-2">Verified User</h1>
                  <p className="text-sm text-muted-foreground">
                    This user has been verified by the admin
                  </p>
                </HoverCardContent>
              </HoverCard>
              <HoverCard>
                <HoverCardTrigger>
                  <CitrusIcon
                    size={36}
                    className="rounded-full bg-purple-500/30 border-purple-500/50 p-2"
                  />
                </HoverCardTrigger>
                <HoverCardContent>
                  <h1 className="text-sm mb-2">Citrus User</h1>
                  <p className="text-sm text-muted-foreground">
                    This user has been awarded with a citrus badge
                  </p>
                </HoverCardContent>
              </HoverCard>
              <HoverCard>
                <HoverCardTrigger>
                  <ShieldIcon
                    size={36}
                    className="rounded-full bg-pink-500/30 border-pink-500/50 p-2"
                  />
                </HoverCardTrigger>
                <HoverCardContent>
                  <h1 className="text-sm mb-2">Shielded User</h1>
                  <p className="text-sm text-muted-foreground">
                    This user has been shielded by the admin
                  </p>
                </HoverCardContent>
              </HoverCard>
              <HoverCard>
                <HoverCardTrigger>
                  <CandyIcon
                    size={36}
                    className="rounded-full bg-yellow-500/30 border-yellow-500/50 p-2"
                  />
                </HoverCardTrigger>
                <HoverCardContent>
                  <h1 className="text-sm mb-2">Awarded</h1>
                  <p className="text-sm text-muted-foreground">
                    This user has been awarded by the admin
                  </p>
                </HoverCardContent>
              </HoverCard>
            </div>
          </div>
          <div className="bg-primary-foreground p-4 rounded-lg">
            <div className="flex items-center justify-between">
              <h1 className="text-lg font-semibold">User Information</h1>
              <Sheet>
                <SheetTrigger asChild>
                  <Button>Edit user</Button>
                </SheetTrigger>
                <EditUser />
              </Sheet>
            </div>
            <div className="space-y-4 mt-4">
              <div className="flex flex-col gap-2 mb-8">
                <p className="text-sm text-muted-foreground">
                  Profile completion
                </p>
                <Progress value={66} />
              </div>
              <div className="flex items-center gap-2">
                <span className="font-semibold">Username:</span>
                <span>john_doe</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="font-semibold">Email:</span>
                <span>john.doe@example.com</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="font-semibold">Phone:</span>
                <span>+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="font-semibold">Location:</span>
                <span>Johnston, USA</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="font-semibold">Username:</span>
                <span>john_doe</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="font-semibold">Role:</span>
                <Badge>Admin</Badge>
              </div>
            </div>
            <p className="text-sm text-muted-foreground mt-2">
              Joined on January 1, 2023
            </p>
          </div>
          <div className="bg-primary-foreground p-4 rounded-lg">
            <CardList title="Latest Transactions" />
          </div>
        </div>
        <div className="w-full xl:w-2/3 space-y-6">
          <div className="bg-primary-foreground p-4 rounded-lg space-y-2">
            <div className="flex items-center gap-2">
              <Avatar className="size-12">
                <AvatarImage src="https://github.com/shadcn.png" />
                <AvatarFallback>CN</AvatarFallback>
              </Avatar>
              <h1 className="text-lg font-semibold mt-2">John Doe</h1>
            </div>
            <p className="text-sm text-muted-foreground">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui
              soluta nesciunt quod consequuntur dicta ab nostrum sed sunt,
              blanditiis alias voluptatem in obcaecati fugiat ipsa.
            </p>
          </div>
          <div className="bg-primary-foreground p-4 rounded-lg">
            <h1 className="text-lg font-semibold">User Activities</h1>
            <AppLineChart />
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserPage;
