"use client";

import { AskQuestionSchema } from "@/lib/validations";
import { zodResolver } from "@hookform/resolvers/zod";
import React from "react";
import { useForm } from "react-hook-form";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../ui/form";
import { Input } from "../ui/input";
import { Button } from "../ui/button";

const QuestionForm = () => {
  const form = useForm({
    resolver: zodResolver(AskQuestionSchema),
    defaultValues: {
      title: "",
      content: "",
      tags: [],
    },
  });

  const handleSubmitQuestion = () => {};

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(handleSubmitQuestion)}>
        <FormField
          control={form.control}
          name="title"
          render={({ field }) => (
            <FormItem>
              <FormLabel>
                Question Title
                <span className="text-red-400 font-semibold">*</span>
              </FormLabel>
              <FormControl>
                <Input {...field} />
              </FormControl>
              <FormMessage />
              <FormDescription>
                Be specific, imagine you are asking a question to your teacher.
              </FormDescription>
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="content"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="pt-5">
                Content Title
                <span className="text-red-400 font-semibold">*</span>
              </FormLabel>
              <FormControl>
                <Input {...field} />
              </FormControl>
              <FormMessage />
              <FormDescription>
                Describe the question in detail. Use code blocks whenever
                possible.
              </FormDescription>
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="tags"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="pt-5">
                Tags
                <span className="text-red-400 font-semibold">*</span>
              </FormLabel>
              <FormControl>
                <Input {...field} />
              </FormControl>
              <FormMessage />
              <FormDescription>
                Add not more than 3 tags which tells whats your question is
                about. Press enter to add a tag.
              </FormDescription>
            </FormItem>
          )}
        />
        <Button className="mt-10">Ask a Question</Button>
      </form>
    </Form>
  );
};

export default QuestionForm;
