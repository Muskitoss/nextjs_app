import Form from "next/form";
import { Label } from "@/src/components/ui/label";
import { Input } from "@/src/components/ui/input";
import { Button } from "@/src/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/src/components/ui/card";

export default function Page(){
    return (
        <Card>
            <CardHeader>
                <CardTitle>
                    Create user
                </CardTitle>
            </CardHeader>
            <CardContent>
                <form action="/api/users" method="POST" className="flex flex-col gap-2">
                    <Label>
                        User first name
                        <Input name="first_name" />
                    </Label>
                    <Label>
                        User last name
                        <Input name="last_name" />
                    </Label>
                    <Label>
                        User username
                        <Input name="username" />
                    </Label>
                    <Label>
                        User email
                        <Input name="email" />
                    </Label>
                    <Label>
                        User password
                        <Input name="password" />
                    </Label>
                    <Button type="submit" >Submit</Button>
                </form>
            </CardContent>
        </Card>
    );
}