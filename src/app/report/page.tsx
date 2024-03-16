"use client";

import { Container } from "@/components/common/Container";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { IDKitWidget } from "@worldcoin/idkit";
import { CheckCheck, Sparkles } from "lucide-react";

export default function ReportPage() {
  return (
    <Container size="small" className="mt-24">
      <Card>
        <CardHeader>
          <CardTitle>Report a address</CardTitle>
          {/* <CardTitle>1. Verify identity</CardTitle> */}
        </CardHeader>
        <CardContent className="flex flex-col gap-4">
          <div className="flex gap-5 items-center">
            <IDKitWidget
              action="get_this_from_the_dev_portal"
              signal="my_signal"
              app_id="app_local"
              onSuccess={() => {}}
              handleVerify={() => {
                console.log("you verified!!@");
              }}
            >
              {({ open }) => (
                <Button
                  onClick={open}
                  className="bg-black gap-3 w-fit"
                  size="lg"
                >
                  <Sparkles />
                  Verify with World ID
                </Button>
              )}
            </IDKitWidget>
            <p className="flex gap-2">
              <CheckCheck />
              Verified
            </p>
          </div>

          <div>
            <p className="mb-1 mt-5 font-bold text-foreground/80">
              Malicious identifier *
            </p>
            <Input placeholder="Malicious web domain, ethereum address or ens domain" />
          </div>

          <div>
            <p className="mb-1 mt-5 font-bold text-foreground/80">
              Describe why the address is malicious
            </p>
            <Textarea placeholder="Explain breifly what makes this address malicious." />
          </div>

          <Button size="lg">File report</Button>
        </CardContent>
      </Card>
    </Container>
  );
}
