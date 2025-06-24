import React from "react";
import { SingleEventPage } from "@/app/(user-interface)/events/[eventId]/single-event-page";
import { Events } from "@/lib/types";

export default async function page({
  params,
}: {
  params: Promise<{ eventId: string }>;
}) {
  const { eventId } = await params;
  const event = Events.find((event) => event.id === eventId);

  if (!event) {
    return (
      <div className="max-w-4xl mx-auto px-4 pt-32 pb-10 md:py-36 font-Inter">
        <p className="text-center text-black">Event not found</p>
      </div>
    );
  }

  return <SingleEventPage event={event} />;
}
