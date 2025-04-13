"use client";

import { AskQuestionSchema } from "@/lib/validations";
import { zodResolver } from "@hookform/resolvers/zod";
import React, { useRef } from "react";
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
import dynamic from "next/dynamic";
import { forwardRef } from "react";
import { type MDXEditorMethods, type MDXEditorProps } from "@mdxeditor/editor";
import TagCard from "../cards/TagCard";
import { z } from "zod";

// This is the only place InitializedMDXEditor is imported directly.
const Editor = dynamic(() => import("../editor/InitializedMDXEditor"), {
  // Make sure we turn SSR off
  ssr: false,
});

const QuestionForm = () => {
  const editorRef = useRef<MDXEditorMethods>(null);

  const form = useForm({
    resolver: zodResolver(AskQuestionSchema),
    defaultValues: {
      title: "",
      content: "",
      tags: [],
    },
  });

  const handleTagRemove = (tag: string, field: { value: string[] }) => {
    const newTags = field.value.filter((t) => t !== tag);
    form.setValue("tags", newTags);

    if (newTags.length === 0) {
      form.setError("tags", { type: "manual", message: "Tags are required." });
    }
  };

  const handleSubmitQuestion = (data: z.infer<typeof AskQuestionSchema>) => {
    console.log(data);
  };

  const handleTagKeyDown = (
    e: React.KeyboardEvent<HTMLInputElement>,
    field: { value: string[] }
  ) => {
    if (e.key === "Enter") {
      e.preventDefault();
      const tagInput = e.currentTarget.value.trim();

      if (tagInput && tagInput.length < 15 && !field.value.includes(tagInput)) {
        form.setValue("tags", [...field.value, tagInput]);
        e.currentTarget.value = "";
        form.clearErrors("tags");
      } else if (tagInput.length > 15) {
        form.setError("tags", {
          type: "manual",
          message: "Tag should be of less than 15 characters.",
        });
      } else if (field.value.includes(tagInput)) {
        form.setError("tags", {
          type: "manual",
          message: "Tag already exists.",
        });
      }
    }
  };

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
                Content
                <span className="text-red-400 font-semibold">*</span>
              </FormLabel>
              <FormControl>
                <Editor
                  editorRef={editorRef}
                  markdown={field.value}
                  fieldChange={field.onChange}
                />
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
                <div className="flex flex-col">
                  <Input onKeyDown={(e) => handleTagKeyDown(e, field)} />
                  {field.value.length > 0 &&
                    field?.value?.map((tag: string) => (
                      <TagCard
                        key={tag}
                        _id={tag}
                        name={tag}
                        compact
                        remove
                        isButton
                        handleRemove={() => handleTagRemove(tag, field)}
                      />
                    ))}
                </div>
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
