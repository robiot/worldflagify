"use client";

import { Container } from "@/components/common/Container";
import { zodRequiredString } from "@/components/fragments/Home/Top/CheckoutModal/UploadBox";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { zodResolver } from "@hookform/resolvers/zod";
import { IDKitWidget, VerificationLevel } from "@worldcoin/idkit";
import { CheckCheck, Sparkles } from "lucide-react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const FormSchema = z.object({
  prompt: zodRequiredString,
});

type FormSchemaType = z.infer<typeof FormSchema>;

export default function ReportPage() {
  const form = useForm<FormSchemaType>({
    resolver: zodResolver(FormSchema),
  });

  return (
    <Container size="small" className="mt-24">
      <Card>
        <CardHeader>
          <CardTitle>Report an address</CardTitle>
          {/* <CardTitle>1. Verify identity</CardTitle> */}
        </CardHeader>
        <CardContent className="flex flex-col gap-4">
          <div className="flex gap-5 items-center">
            <IDKitWidget
              action="report"
              // signal="my_signal"
              app_id="app_staging_c1b712d4cbcf6127a1750e851d9d4540"
              onSuccess={() => {}}
              verification_level={VerificationLevel.Device}
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
            <p className="hidden gap-2">
              <CheckCheck />
              Verified
            </p>
          </div>

          <div>
            <p className="mb-1 mt-5 font-bold text-foreground/80">Type *</p>
            <Select defaultValue="domain">
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Theme" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="domain">Domain</SelectItem>
                <SelectItem value="ethereum-wallet">
                  Ethereum address
                </SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div>
            <p className="mb-1 mt-5 font-bold text-foreground/80">
              Malicious identifier *
            </p>
            <Input
              placeholder="Malicious web domain, ethereum address or ens domain"
              {...form.register("prompt")}
            />
          </div>

          <div>
            <p className="mb-1 mt-5 font-bold text-foreground/80">
              Describe why the address is malicious
            </p>
            <Textarea placeholder="Explain breifly what makes this address malicious." />
          </div>

          <Button
            size="lg"
            onClick={() => {
              alert("Successfully filed report. Thank you!");
            }}
          >
            File report
          </Button>
        </CardContent>
      </Card>
    </Container>
  );
}
