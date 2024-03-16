"use client";

import { Container } from "@/components/common/Container";
import { zodRequiredString } from "@/components/fragments/Home/Top/CheckoutModal/UploadBox";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  IDKitWidget,
  ISuccessResult,
  VerificationLevel,
} from "@worldcoin/idkit";
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
import { useState } from "react";
import { enviroment } from "@/lib/enviroment";
import { useMutation } from "@tanstack/react-query";
import { Spinner } from "@/components/ui/spinner";
import { useRouter } from "next/navigation";

const FormSchema = z.object({
  mid: zodRequiredString,
  description: zodRequiredString,
});

type FormSchemaType = z.infer<typeof FormSchema>;

export default function ReportPage() {
  const router = useRouter();

  const form = useForm<FormSchemaType>({
    resolver: zodResolver(FormSchema),
  });

  const [isVerified, setIsVerified] = useState(false);
  const [idData, setIDData] = useState<ISuccessResult>();

  const report = useMutation({
    mutationKey: ["report"],
    mutationFn: async () => {
      if (!idData) return;
      const response = await fetch("/api/verify", {
        method: "POST",
        body: JSON.stringify({
          merkle_root: idData.merkle_root,
          nullifier_hash: idData.nullifier_hash,
          proof: idData.proof,
          verification_level: idData.verification_level,
        }),
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
      });
      const result = await response.text();

      if (response.status == 200) {
        alert("Successfully filed report. Thank you!");
        router.push("/");
      } else {
        alert("Failed to file report. Invalid verification");
      }
    },
  });

  return (
    <Container size="small" className="mt-24">
      <Card>
        <CardHeader>
          <CardTitle>Report an domain or address</CardTitle>
          {/* <CardTitle>1. Verify identity</CardTitle> */}
        </CardHeader>
        <CardContent className="flex flex-col gap-4">
          <div className="flex gap-5 items-center">
            <IDKitWidget
              action="report"
              // signal="my_signal"
              app_id={enviroment.WI_APP_ID}
              onSuccess={(result) => {
                setIsVerified(true);
                setIDData(result);
              }}
              verification_level={VerificationLevel.Device}
              handleVerify={(result) => {
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
            {isVerified && (
              <p className="flex gap-2">
                <CheckCheck />
                Verified
              </p>
            )}
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
              {...form.register("mid")}
            />
          </div>

          <div>
            <p className="mb-1 mt-5 font-bold text-foreground/80">
              Describe why the domain/address is malicious
            </p>
            <Textarea
              placeholder="Explain breifly what makes this malicious."
              {...form.register("description")}
            />
          </div>

          <Button
            disabled={!isVerified || !form.formState.isValid}
            size="lg"
            onClick={() => {
              report.mutate();
            }}
          >
            {report.isPending && <Spinner size="sm" className="mr-3" />}
            File report
          </Button>
        </CardContent>
      </Card>
    </Container>
  );
}
