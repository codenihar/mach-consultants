import { BlogsService } from "@/actions/blogs/blogs.service";
import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import { LayoutWrapper } from "@/components/layout/Layout-wrapper";

export default async function UserInterfaceLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const promises = Promise.all([BlogsService.getBlogs()]);

  return (
    <div>
      <Header />
      <LayoutWrapper promises={promises}>{children}</LayoutWrapper>
      <Footer promises={promises} />
    </div>
  );
}
