"use client";

import React from "react";

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

import SkillSelect from "./SkillSelect";

const SkillRequest = () => {
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
          fieldConfig={{
            skillId: {
              fieldType: SkillSelect,
              description: "You can select a parent domain if needed.",
            },
          }}
        >
          <DialogFooter>
            <Button variant="outline">Cancel</Button>
            <AutoFormSubmit>Submit</AutoFormSubmit>
          </DialogFooter>
        </AutoForm>
      </DialogContent>
    </Dialog>
  );
};

export default SkillRequest;
