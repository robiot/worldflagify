import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Rocket, User } from "lucide-react";
import { FC, useRef, useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";

import { useDropzone } from "react-dropzone";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import Image from "next/image";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { useRouter } from "next/navigation";

const MAX_FILE_SIZE = 8388608;

export const zodRequiredString = z.string().trim().min(1);

const FormSchema = z.object({
  prompt: zodRequiredString,
});

type FormSchemaType = z.infer<typeof FormSchema>;

export const UploadBox: FC = () => {
  const form = useForm<FormSchemaType>({
    resolver: zodResolver(FormSchema),
  });

  const [result, setResult] = useState<{
    malicious: boolean;
    flagged_amount: number;
  }>();

  return (
    <>
      <Card className="h-fit min-w-[25rem] p-8 flex flex-col items-center w-full">
        <p className="text-xl font-bold mb-8">Is this address malicious?</p>

        <Input
          placeholder="Ethereum address, ens name, web domain"
          className=""
          {...form.register("prompt")}
        ></Input>

        <Button
          className="w-full mt-3"
          onClick={form.handleSubmit(async (data) => {
            setResult({
              malicious: false,
              flagged_amount: 0,
            });
          })}
        >
          Check
        </Button>

        {result && (
          <div className="mt-5 flex flex-col gap-2 text-center">
            <p className="text-green-500 font-bold">Not marked as malicious</p>
            <p className="font-bold">Reported 0 times</p>
            {/* <Button variant="secondary">
            <Rocket className="h-4 w-4 mr-3"/>
            Integrate this into your project
          </Button> */}
          </div>
        )}
        <a
          className="mt-7 text-sm text-primary"
          onClick={() => {
            alert("Not implemented yet");
          }}
        >
          Or check the data on the Blockchain
        </a>
      </Card>
    </>
  );
};
