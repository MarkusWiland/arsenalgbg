import { Card, CardBody } from "@nextui-org/react";
import { IconFileUnknown } from "@tabler/icons-react";

export default function NotFound() {
  return (
    <Card className="mx-auto mt-4 max-w-md">
      <CardBody className="text-center">
        <IconFileUnknown />
        <p className="text-2xl">This Page Cannot Be Found.</p>
      </CardBody>
    </Card>
  );
}
