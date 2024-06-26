import Footer from "@/components/shared/Footer";

export default function CreatorRootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <div className=" flex min-h-screen flex-col">
            <main className="flex-1">{children}</main>
        </div>
    );
}
