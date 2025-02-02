"use client";

// import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Plus } from "lucide-react";
import { Product } from "@/constants/mock-api";

export default function ProductForm({
  open,
  setOpen,
  initialData,
  pageTitle,
}: {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  initialData: Product | null;
  pageTitle: string;
}) {
  // const [activeTab, setActiveTab] = useState("general");

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogContent className="max-w-3xl bg-white p-6 rounded-lg">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold">{pageTitle}</DialogTitle>
        </DialogHeader>

        <div className="flex gap-6">
          {/* Image Upload Section */}
          <div className="w-1/3 space-y-4">
            <Card className="p-6 border-dashed border-2 border-gray-300 flex flex-col items-center justify-center text-center">
              <Plus className="text-orange-500" />
              <p className="text-orange-500">Carica Immagine</p>
              <p className="text-xs text-gray-500">
                Formato: jpg/jpeg Risoluzione: 2560 x 1440 (16:9)
              </p>
            </Card>
            <div className="flex gap-2">
              <Card className="p-4 border-dashed border-2 border-gray-300 flex flex-col items-center justify-center w-1/2">
                <Plus className="text-orange-500" />
                <p className="text-orange-500">Carica Immagine</p>
              </Card>
              <Card className="p-4 border-dashed border-2 border-gray-300 flex items-center justify-center w-1/2">
                <Plus className="text-gray-400" />
              </Card>
            </div>
          </div>

          {/* Form Section */}
          <div className="w-2/3 space-y-4">
            {[
              "Insegna",
              "Email",
              "Telefono",
              "Indirizzo",
              "Codice Postale",
              "Provincia",
            ].map((label) => (
              <div key={label} className="space-y-1">
                <Label className="text-sm font-medium text-gray-700">
                  {label} *
                </Label>
                <Input
                  className="w-full bg-gray-100 border-none focus:ring-0 text-gray-600"
                  placeholder={label}
                  defaultValue={
                    initialData
                      ? initialData[label.toLowerCase() as keyof Product]
                      : ""
                  }
                  disabled
                />
              </div>
            ))}
            <div className="space-y-1">
              <Label className="text-sm font-medium text-gray-700">
                Soglia di spedizione gratuita *
              </Label>
              <Input
                className="w-full bg-gray-100 border-none focus:ring-0 text-gray-600"
                placeholder="€50"
                defaultValue={""}
                disabled
              />
            </div>
            <div className="space-y-1">
              <Label className="text-sm font-medium text-gray-700">
                Categorie di vendita *
              </Label>
              <div className="flex gap-4">
                {["Maschile", "Femminile", "Accessori", "Design"].map(
                  (category) => (
                    <label
                      key={category}
                      className="flex items-center gap-2 text-gray-600"
                    >
                      <input type="checkbox" disabled /> {category}
                    </label>
                  )
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Buttons at Bottom */}
        <div className="flex justify-end gap-4 mt-6">
          <Button
            variant="outline"
            onClick={() => setOpen(false)}
            className="text-gray-700 bg-gray-200"
          >
            Annulla
          </Button>
          <Button className="bg-orange-500 text-white">Prosegui</Button>
        </div>
      </DialogContent>
    </Dialog>
  );
}
