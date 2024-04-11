import React from "react";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@acme/ui/card";
import { H1 } from "@acme/ui/typography";

import { api } from "~/trpc/server";
import RequestDomainDialog from "./_components/RequestDomainDialog";

const Domain = async () => {
  const requests = await api.domain.requests();
  return (
    <div className="flex flex-col">
      <H1>Requested domains</H1>
      <RequestDomainDialog />
      <div className="grid md:grid-cols-2 lg:grid-cols-4">
        {requests.map((request) => (
          <Card key={request.id}>
            <CardHeader>
              <CardTitle>{request.name}</CardTitle>
              <CardDescription>{request.domain.name}</CardDescription>
            </CardHeader>
            <CardContent></CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Domain;
