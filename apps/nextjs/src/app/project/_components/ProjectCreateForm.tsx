import type { z } from "zod";
import React from "react";
import { zodResolver } from "@hookform/resolvers/zod";

import { InputField } from "@acme/ui/fields/input-field";
import { Form, useForm } from "@acme/ui/form";
import { CreateProjectSchema } from "@acme/validators";

type FormSchema = z.infer<typeof CreateProjectSchema>;

const ProjectCreateForm = () => {
  const form = useForm({
    schema: CreateProjectSchema,
    defaultValues: {},
  });
  const onSubmit = () => {
    console.log("submit");
  };
  return (
    <Form {...form}>
      <form>
        <InputField label="Title" form={form} name="title" />
        <InputField label="Description" form={form} name="description" />
      </form>
    </Form>
  );
};

export default ProjectCreateForm;
