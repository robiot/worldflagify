import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { User } from "lucide-react";
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

  return (
    <>
      <Card className="h-fit min-w-[25rem] p-8 flex flex-col items-center w-full">
        <p className="text-xl font-bold mb-8">Is this address malicious?</p>


        <Input placeholder="Ethereum address, ens name, web domain" className=""></Input>

        <Button className="w-full mt-3" disabled>Check</Button>

        <p className="mt-7 text-sm text-primary">Or check the data on Base</p>

      </Card>
    </>
  );
};
