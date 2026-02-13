import { POPULATE_CONTENTS, LATEST_TRANSACTIONS } from "@/constants";
import { Card, CardContent, CardFooter, CardTitle } from "./ui/card";
import { Badge } from "@/components/ui/badge";

interface Props {
  title: string;
}

const CardList = ({ title }: Props) => {
  const list =
    title === "Popular Content" ? POPULATE_CONTENTS : LATEST_TRANSACTIONS;
  return (
    <div>
      <h1 className="text-lg font-medium">{title}</h1>
      <div className="flex flex-col gap-2 mt-2">
        {list.map((item) => (
          <Card key={item.id} className="flex-row items-center gap-4 p-4">
            <div className="w-12 h-12 rounded-sm relative overflow-hidden">
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover"
              />
            </div>
            <CardContent className="p-0">
              <CardTitle className="text-sm font-medium">
                {item.title}
              </CardTitle>
              <Badge variant="secondary">{item.badge}</Badge>
            </CardContent>
            <CardFooter className="ml-auto">{item.count / 10}K</CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default CardList;
