"use client";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import { MoveUpRight } from "lucide-react";
import { useForm } from "react-hook-form";
import {
  contactFormSchema,
  TContactFormSchema,
} from "@/actions/contact-form/contact-form.types";
import { zodResolver } from "@hookform/resolvers/zod";
import { SuccessAlert } from "@/components/success-alert";
import React from "react";
import { FailureAlert } from "@/components/failure-alert";

interface ContactFormProps {
  onSubmit: (
    data: TContactFormSchema
  ) => Promise<{ success: boolean; message: string }>;
}

export function ContactForm({ onSubmit }: ContactFormProps) {
  const form = useForm<TContactFormSchema>({
    resolver: zodResolver(contactFormSchema),
  });

  const [status, setStatus] = React.useState<"success" | "error" | null>(null);
  const [message, setMessage] = React.useState<string | null>(null);
  const handleFinalSubmit = async (data: TContactFormSchema) => {
    const result = await onSubmit(data);

    if (result.success) {
      setStatus("success");
      setMessage(result.message);
    } else {
      setStatus("error");
      setMessage(result.message);
    }
  };

  const handleFormError = (errors: any) => {
    return { error: "Form Errors:", errors };
  };

  return (
    <Form {...form}>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          form.handleSubmit(handleFinalSubmit, handleFormError)(e);
        }}
        className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 mt-6 sm:mt-8"
      >
        <div className="max-sm:col-span-2">
          <FormField
            control={form.control}
            name="firstName"
            render={({ field }) => (
              <FormItem className="text-white text-sm">
                <FormLabel>First Name</FormLabel>
                <FormControl>
                  <Input
                    className="placeholder:text-gray-300"
                    placeholder="Enter First Name"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        <div className="max-sm:col-span-2">
          <FormField
            control={form.control}
            name="lastName"
            render={({ field }) => (
              <FormItem className="text-white text-sm">
                <FormLabel>Last Name</FormLabel>
                <FormControl>
                  <Input
                    className="placeholder:text-gray-300"
                    placeholder="Enter Last Name"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        <div className="col-span-2">
          <FormField
            control={form.control}
            name="organization"
            render={({ field }) => (
              <FormItem className="text-white text-sm">
                <FormLabel>Organization</FormLabel>
                <FormControl>
                  <Input
                    className="placeholder:text-gray-300"
                    placeholder="Enter organization"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        <div className="max-sm:col-span-2">
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem className="text-white text-sm">
                <FormLabel>Email</FormLabel>
                <FormControl>
                  <Input
                    className="placeholder:text-gray-300"
                    placeholder="Enter email"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        <div className="max-sm:col-span-2">
          <FormField
            control={form.control}
            name="phone"
            render={({ field }) => (
              <FormItem className="text-white text-sm">
                <FormLabel>Phone Number</FormLabel>
                <FormControl>
                  <Input
                    className="placeholder:text-gray-300"
                    placeholder="Enter phone number"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        <div className="col-span-2">
          <FormField
            control={form.control}
            name="inquiryType"
            render={({ field }) => (
              <FormItem className="text-white text-sm">
                <FormLabel>Inquiry Type</FormLabel>
                <Select value={field.value} onValueChange={field.onChange}>
                  <SelectTrigger className="w-full text-white data-[placeholder]:text-gray-300">
                    <SelectValue placeholder="Select Inquiry Type" />
                  </SelectTrigger>

                  <SelectContent>
                    <SelectItem value="Support or consulting">
                      Support or consulting
                    </SelectItem>
                    <SelectItem value="Conference or speaking">
                      Conference or speaking
                    </SelectItem>
                    <SelectItem value="Collaboration or research">
                      Collaboration or research
                    </SelectItem>
                    <SelectItem value="Information request">
                      Information request
                    </SelectItem>
                    <SelectItem value="Other">Other</SelectItem>
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        <div className="col-span-2">
          <FormField
            control={form.control}
            name="message"
            render={({ field }) => (
              <FormItem className="text-white text-sm">
                <FormLabel>Message</FormLabel>
                <FormControl>
                  <Input
                    className="placeholder:text-gray-300"
                    placeholder="How can we help you?"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        <div className="col-span-2 flex items-start gap-2 cursor-pointer">
          <FormField
            control={form.control}
            name="consent"
            render={({ field }) => (
              <FormItem>
                <div className="flex items-center space-x-2">
                  <FormControl>
                    <Checkbox
                      id="consent"
                      className="text-white"
                      checked={field.value}
                      onCheckedChange={field.onChange}
                      ref={field.ref}
                    />
                  </FormControl>
                  <FormLabel
                    htmlFor="consent"
                    className="text-white text-sm font-semibold"
                  >
                    GDPR consent: I authorize Mach to use my data to respond to
                    my request
                  </FormLabel>
                </div>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        {status === "success" && message && (
          <SuccessAlert message={message} duration={2000} />
        )}
        {status === "error" && message && (
          <FailureAlert message={message} duration={2000} />
        )}

        <div className="max-sm:col-span-2 mt-2">
          <button
            type="submit"
            disabled={form.formState.isSubmitting}
            className={`${
              form.formState.isSubmitting && "opacity-70"
            } w-[max-content] text-sm px-6 py-3 text-black bg-white hover:bg-gray-300 hover:opacity-90 font-semibold rounded-lg transition-colors duration-300 shadow-md hover:shadow-lg flex items-center justify-center gap-2 cursor-pointer`}
          >
            {form.formState.isSubmitting
              ? "Submitting..."
              : "Make An Appointment"}
            <MoveUpRight className="w-4 h-4" />
          </button>
        </div>
      </form>
    </Form>
  );
}
