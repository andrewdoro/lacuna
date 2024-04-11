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
import { CreateDomainRequestSchema } from "@acme/validators";

import DomainSelect from "./DomainSelect";

const RequestDomainDialog = () => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button>Request domain</Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Request domain</DialogTitle>
          <DialogDescription>
            Request a new domain for the platform. Think about why you need
            this!
          </DialogDescription>
        </DialogHeader>
        <AutoForm
          formSchema={CreateDomainRequestSchema}
          fieldConfig={{
            parentId: {
              fieldType: DomainSelect,
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

export default RequestDomainDialog;
