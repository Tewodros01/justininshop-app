"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { useState } from "react";
import GeneralTab from "./GeneralTab";
import ImagesTab from "./ImagesTab";
import CategoryTab from "./CategoryTab";
import { ChevronLeft } from "lucide-react";

export default function ProductForm() {
  const [activeTab, setActiveTab] = useState("general");

  return (
    <Card className="w-full p-6 bg-black">
      <div className="flex items-center justify-between">
        <Button variant="ghost" className="flex items-center gap-2">
          <ChevronLeft className="size-5" />
          Annulla
        </Button>
        <h2 className="text-xl font-bold">Crea Nuovo Prodotto</h2>
        <Button className="bg-orange-500 text-white">Crea Prodotto</Button>
      </div>

      <div className="mt-4 flex gap-2">
        <Button
          variant="outline"
          className={activeTab === "general" ? "bg-orange-500 text-white" : ""}
          onClick={() => setActiveTab("general")}
        >
          Generale
        </Button>
        <Button
          variant="outline"
          className={activeTab === "images" ? "bg-orange-500 text-white" : ""}
          onClick={() => setActiveTab("images")}
        >
          Immagini
        </Button>
        <Button
          variant="outline"
          className={activeTab === "category" ? "bg-orange-500 text-white" : ""}
          onClick={() => setActiveTab("category")}
        >
          Categoria
        </Button>
      </div>

      <CardContent className="mt-4 bg-black p-6 rounded-lg">
        {activeTab === "general" && <GeneralTab />}
        {activeTab === "images" && <ImagesTab />}
        {activeTab === "category" && <CategoryTab />}
      </CardContent>
    </Card>
  );
}
