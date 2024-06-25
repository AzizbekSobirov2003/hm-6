"use client";
// shadc UI
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Image, { StaticImageData } from "next/image";
import { FormEvent } from "react";

interface Type {
  User: StaticImageData;
  inptVal1: string;
  inptVal2: string;
  handleSave: () => void;
  setinptVal2: (value: string) => void;
  setinptVal1: (value: string) => void;
}

const Register: React.FC<Type> = ({
  User,
  inptVal1,
  setinptVal1,
  handleSave,
  inptVal2,
  setinptVal2,
}) => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button
          variant="outline"
          className="mx-3 w-[45px] border-none bg-[#F8F7F3FF] bg-none hover:bg-[#F8F7F3FF]"
        >
          <span className="mx-3 rounded-md p-2 hover:bg-gray-300 hover:bg-opacity-30">
            <span className="flex items-center justify-center">
              <Image src={User} alt="user icon" />
            </span>
            <p className="text-center">Войти</p>
          </span>
        </Button>
      </DialogTrigger>
        
        
    </Dialog>
  );
};

export default Register;
