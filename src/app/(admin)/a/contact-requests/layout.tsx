import { SiteHeader } from "@/components/site-header";

export default async function ContactRequestsInterfaceLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <SiteHeader title="Contact Requests" />
      <div className="flex flex-1 flex-col">
        <div className="@container/main flex flex-1 flex-col gap-2">
          <div className="flex flex-col gap-4 py-4 md:gap-6 md:py-6">
            <div className="px-2 sm:px-4">{children}</div>
          </div>
        </div>
      </div>
    </>
  );
}
