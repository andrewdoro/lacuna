"use client";

import React, { useState } from "react";

import AutoForm from "@acme/ui/auto-form";
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

import SkillSelect from "~/app/requests/_components/SkillSelect";
import { api } from "~/trpc/react";
import ProjectCreateForm from "./ProjectCreateForm";

const ProjectCreate = () => {
  const [open, setOpen] = useState(false);
  const create = api.project.create.useMutation({
    onSuccess: () => {
      setOpen(false);
    },
  });
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button>New project</Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Request skill</DialogTitle>
          <DialogDescription>
            Create a new project on the platform
          </DialogDescription>
        </DialogHeader>

        <ProjectCreateForm />
        <DialogFooter>
          <Button variant="outline">Cancel</Button>
          <Button type="submit" isLoading>
            Submit
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default ProjectCreate;
