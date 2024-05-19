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
import SkillRequest from "./_components/SkillRequest";

const Domain = async () => {
  const requests = await api.skillRequest.all();
  return (
    <div className="mx-auto flex w-full max-w-5xl flex-col">
      <div className="flex items-center justify-between gap-2">
        <H1>Requested skills</H1>
        <SkillRequest />
      </div>
      <div className="grid md:grid-cols-2 lg:grid-cols-4">
        {requests.map((request) => (
          <Card key={request.id}>
            <CardHeader>
              <CardTitle>{request.name}</CardTitle>
              <CardDescription>{request.skill?.name}</CardDescription>
            </CardHeader>
            <CardContent></CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Domain;
