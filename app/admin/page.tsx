import { buttonVariants } from "@/src/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/src/components/ui/card";
import Link from "next/link";

export default async function Page() {

    return (
        <Card>
            <CardHeader>
                <CardTitle>
                    URL : /admin
                </CardTitle>
            </CardHeader>
            <CardContent className="flex flex-col gap-4">
                <Link
                    className={buttonVariants({size: "lg", variant: "outline"})}
                    href="/admin/users/1"
                >
                    User 1
                </Link>
                <Link
                    className={buttonVariants({size: "lg", variant: "outline"})}
                    href="/admin/users/melvyn"
                >
                    User Melvyn
                </Link>
                <Link
                    className={buttonVariants({size: "lg", variant: "outline"})}
                    href="/admin/users/patate"
                >
                    User Patate
                </Link>
            </CardContent>
        </Card>
    )
}