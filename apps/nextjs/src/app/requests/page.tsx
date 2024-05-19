import React from "react";
import { CheckIcon, Heart, HeartOff } from "lucide-react";

import { Badge } from "@acme/ui/badge";
import { Button } from "@acme/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@acme/ui/card";
import { Icon } from "@acme/ui/icon";
import { H1 } from "@acme/ui/typography";

import { api } from "~/trpc/server";
import SkillRequest from "./_components/SkillRequest";

const Domain = async () => {
  const requests = await api.skillRequest.all();
  return (
    <div className="mx-auto flex w-full max-w-5xl flex-col gap-4">
      <div className="flex items-center justify-between gap-2">
        <H1>Requested skills</H1>
        <SkillRequest />
      </div>
      <div className="flex flex-col gap-4">
        {requests.map((request) => (
          <Card key={request.id}>
            <CardHeader>
              <CardTitle>{request.name}</CardTitle>
              <CardDescription>{request.description}</CardDescription>
            </CardHeader>
            <CardFooter>
              <div className="flex w-full items-center gap-2">
                <Button
                  size="icon"
                  variant="outline"
                  className="border-destructive"
                >
                  <Icon as={HeartOff} />
                </Button>
                <Badge variant="destructive">-100</Badge>
                <div className="h-2 flex-1 rounded-lg bg-gradient-to-r from-destructive to-primary" />
                <Badge>+100</Badge>
                <Button
                  size="icon"
                  variant="outline"
                  className="border-primary"
                >
                  <Icon as={Heart} />
                </Button>
              </div>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Domain;
