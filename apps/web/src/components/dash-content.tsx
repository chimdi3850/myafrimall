import Needs from "../Images/needs.png"
import { Button } from "@myafrimall/ui/components/button"
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from  "@myafrimall/ui/components/select"
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@myafrimall/ui/components/card"
import { Truck, MoveUp, MoveDown, type LucideIcon, Icon, ArrowUp, ChevronUp, Clock10,  } from "lucide-react"
import { TrendingUp } from "lucide-react"
import { Area, AreaChart, CartesianGrid, XAxis } from "recharts"
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
  type ChartConfig,
} from "@myafrimall/ui/components/chart"
import {Tabs, TabsContent, TabsTrigger, TabsList} from '@myafrimall/ui/components/tabs'
import { Separator } from "@myafrimall/ui/components/separator";
import {Badge} from '@myafrimall/ui/components/badge'

const items = [
  { label: "This Month", value: null },
  { label: "Last Month", value: "apple" },
  { label: "Two Month Ago", value: "banana" },
  { label: "Last Year", value: "blueberry" }
]

const chartData = [
  { month: "January", desktop: 186 },
  { month: "February", desktop: 305 },
  { month: "March", desktop: 237 },
  { month: "April", desktop: 73 },
  { month: "May", desktop: 209 },
  { month: "June", desktop: 214 },
]
const chartConfig = {
  desktop: {
    label: "Desktop",
    color: "var(--chart-1)",
  },
} satisfies ChartConfig


export function DashContent() {
    return (
        <div className="grid gap-4 p-4">
            <div className="flex flex-col gap-2">
            <img src={Needs} alt="" />
            <div className="flex items-center justify-center gap-2">
                <div className="size-3 bg-secondary  rounded-full"/>
                <div className="size-3 bg-primary rounded-full"/>
                <div className="size-3 bg-secondary rounded-full"/>
            </div>
            </div>
            <div>
                <div className="flex justify-between">
                    <h4>Overview</h4>
                    <Select items={items}>
                    <SelectTrigger className="w-25 max-w-48 rounded-sm">
                    <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                    <SelectGroup>
                    {items.map((item) => (
                        <SelectItem key={item.value} value={item.value}>
                        {item.label}
                        </SelectItem>
                    ))}
                    </SelectGroup>
                </SelectContent>
                </Select>
                </div>
                <div className="flex flex-col md:flex-row items-center gap-4 py-2">
                    <Card className="w-full rounded-sm bg-indigo-500  ">
                        <CardHeader>Your Balance</CardHeader>
                        <CardDescription className="px-5">3,000,000.28</CardDescription>
                        <CardContent><Button className="w-25 rounded-sm px-4 text-indigo-700 bg-white">Fund Wallet</Button></CardContent>
                    </Card>
                    <Card className="w-full">
                        <CardHeader className="flex items-center gap-4"><div className="flex items-center justify-center size-8 rounded-full bg-amber-500"><Truck className=" size-6 " /></div>
                            <CardTitle>
                                Total Shipments
                            </CardTitle>
                        </CardHeader>
                        <CardContent>
                            <div className="flex items-center gap-4"><span className="text-2xl">34</span><span className="text-green-500 font-light flex items-center"><ArrowUp className="size-3" /> 90%</span></div>
                            <div className="flex items-center text-lg gap-2"><span className="text-muted-foreground text-sm">vs last 4 months:</span>4</div>
                        </CardContent>
                    </Card>
                    <Card className="w-full">
                        <CardHeader className="flex items-center gap-4"><div className="flex items-center justify-center size-8 rounded-full bg-emerald-400"><ArrowUp className=" size-6 bg-green-500" /></div>
                            <CardTitle>
                                Total Exports
                            </CardTitle>
                        </CardHeader>
                        <CardContent>
                            <div className="flex items-center gap-4"><span className="text-2xl">34</span><span className="text-green-500 font-light flex items-center"><ArrowUp className="size-3" /> 90%</span></div>
                            <div className="flex items-center text-lg gap-2"><span className="text-muted-foreground text-sm">vs last 4 months:</span>4</div>
                        </CardContent>
                    </Card>
                    <Card className="w-full">
                        <CardHeader className="flex items-center gap-4"><div className="flex items-center justify-center size-8 rounded-full"><MoveDown className=" size-6 text-green-950" /></div>
                            <CardTitle>
                                Total Imports
                            </CardTitle>
                        </CardHeader>
                        <CardContent>
                            <div className="flex items-center gap-4"><span className="text-2xl">34</span><span className="text-green-500 font-light flex items-center"><ArrowUp className="size-3" /> 90%</span></div>
                            <div className="flex items-center text-lg gap-2"><span className="text-muted-foreground text-sm">vs last 4 months:</span>4</div>
                        </CardContent>
                    </Card>
                </div>
            </div>
            <div>
                <div className="flex justify-between p-4">
                    <h4>Recent Shipment</h4>
                    <Button variant={"outline"}className="rounded-sm">See All</Button>
                </div>
                <div>
                    <Card>
                        <CardHeader className="flex items-center justify-between">
                            <CardTitle>Company Growth</CardTitle>
                            <Tabs defaultValue="year">
      <TabsList>
        <TabsTrigger value="overview">Year</TabsTrigger>
        <TabsTrigger value="analytics">Month</TabsTrigger>
        <TabsTrigger value="reports">Week</TabsTrigger>
      </TabsList>
      </Tabs>
                        </CardHeader>
                              <CardContent>
        <ChartContainer className="h-64 w-full" config={chartConfig}>
          <AreaChart
            accessibilityLayer
            data={chartData}
            margin={{
              left: 12,
              right: 12,
            }}
          >
            <CartesianGrid vertical={false} />
            <XAxis
              dataKey="month"
              tickLine={false}
              axisLine={false}
              tickMargin={8}
              tickFormatter={(value) => value.slice(0, 3)}
            />
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent indicator="line" />}
            />
            <Area
              dataKey="desktop"
              type="natural"
              fill="var(--color-desktop)"
              fillOpacity={0.4}
              stroke="var(--color-desktop)"
            />
          </AreaChart>
        </ChartContainer>
      </CardContent>
                    </Card>
                </div>
            </div>
            <Card>
            <CardContent className="flex flex-col gap-4">
                <div className="flex items-center justify-between">
                <div className="flex items-center justify-between w-1/2">
                    <div className="flex flex-col items-start">
                        <h3 className="text-muted-foreground">Tracking ID</h3>
                        <p>MAF-100-234-291</p>
                    </div>
                    <div className="flex flex-col items-start">
                        <h3 className="text-muted-foreground">Sender</h3>
                        <p>Bumi Tanny</p>
                    </div>
                    <div className="flex flex-col items-start">
                        <h3 className="text-muted-foreground">Receiver</h3>
                        <p>Mercy</p>
                    </div>
                </div>
                <ChevronUp />
                </div>
                <Separator />
                 <div className="flex items-center justify-between">
                    <div className="flex flex-col items-start">
                        <h3 className="text-muted-foreground">Pick Up From</h3>
                        <p>🇳🇬 Lagos, Nigeria</p>
                    </div>
                    <div className="flex flex-col items-start">
                        <h3 className="text-muted-foreground">Deliver To</h3>
                        <p>🇳🇬 Oyo, Nigeria</p>
                    </div>
                    <div className="flex flex-col items-start">
                        <h3 className="text-muted-foreground">Amount</h3>
                        <p>N3000</p>
                    </div>
                    <div className="flex flex-col items-start">
                        <h3 className="text-muted-foreground">Status</h3>
                        <Badge>In-Transit</Badge>
                    </div>
                </div>
                <Separator />
                 <div className="flex items-center justify-between">
                    <div className="flex flex-col items-start">
                        <h3 className="text-muted-foreground">Processing Time</h3>
                        <p className="flex gap-2"><Clock10 /> 10 hours</p>
                    </div>
                    <div className="flex items-center gap-2">
                        <Button variant={'outline'}>View more</Button>
                        <Button disabled>Paid</Button>
                    </div>
                </div>
            </CardContent>
            </Card>
            <Card>
            <CardContent className="flex flex-col gap-4">
                <div className="flex items-center justify-between">
                <div className="flex items-center justify-between w-1/2">
                    <div className="flex flex-col items-start">
                        <h3 className="text-muted-foreground">Tracking ID</h3>
                        <p>MAF-100-234-291</p>
                    </div>
                    <div className="flex flex-col items-start">
                        <h3 className="text-muted-foreground">Sender</h3>
                        <p>Bumi Tanny</p>
                    </div>
                    <div className="flex flex-col items-start">
                        <h3 className="text-muted-foreground">Receiver</h3>
                        <p>Mercy</p>
                    </div>
                </div>
                <ChevronUp />
                </div>
                <Separator />
                 <div className="flex items-center justify-between">
                    <div className="flex flex-col items-start">
                        <h3 className="text-muted-foreground">Pick Up From</h3>
                        <p>🇳🇬 Lagos, Nigeria</p>
                    </div>
                    <div className="flex flex-col items-start">
                        <h3 className="text-muted-foreground">Deliver To</h3>
                        <p>🇳🇬 Oyo, Nigeria</p>
                    </div>
                    <div className="flex flex-col items-start">
                        <h3 className="text-muted-foreground">Amount</h3>
                        <p>N3000</p>
                    </div>
                    <div className="flex flex-col items-start">
                        <h3 className="text-muted-foreground">Status</h3>
                        <Badge variant={'secondary'}>Delayed</Badge>
                    </div>
                </div>
                <Separator />
                 <div className="flex items-center justify-between">
                    <div className="flex flex-col items-start">
                        <h3 className="text-muted-foreground">Processing Time</h3>
                        <p className="flex gap-2"><Clock10 /> 10 hours</p>
                    </div>
                    <div className="flex items-center gap-2">
                        <Button variant={'outline'}>View more</Button>
                        <Button>Pay Now</Button>
                    </div>
                </div>
            </CardContent>
            </Card>
        </div>
        
    )
}