"use client";

import React, { useState } from "react";

import AutoForm, { AutoFormSubmit } from "@acme/ui/auto-form";
import { Button } from "@acme/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@acme/ui/dialog";
import { CreateSkillRequestSchema } from "@acme/validators";

import { api } from "~/trpc/react";
import SkillSelect from "./SkillSelect";

const SkillRequest = () => {
  const [open, setOpen] = useState(false);
  const create = api.skillRequest.create.useMutation({
    onSuccess: () => {
      setOpen(false);
    },
  });
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button>Request skill</Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Request skill</DialogTitle>
          <DialogDescription>
            Request a new skill for the platform. Think about why you need this!
          </DialogDescription>
        </DialogHeader>
        <AutoForm
          formSchema={CreateSkillRequestSchema}
          onSubmit={(values) => {
            console.log(values);
            create.mutate(values);
          }}
          fieldConfig={{
            skillId: {
              fieldType: SkillSelect,
              description: "You can select a parent domain if needed.",
            },
          }}
        >
          <DialogFooter>
            <Button variant="outline">Cancel</Button>
            <Button type="submit" isLoading>
              Submit
            </Button>
          </DialogFooter>
        </AutoForm>
      </DialogContent>
    </Dialog>
  );
};

export default SkillRequest;
