export const metadata = {
    title: "Cyril Ram.",
    description: "Cyril Ram's Porfolio",
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html>
            <body>{children}</body>
        </html>
    );
}
