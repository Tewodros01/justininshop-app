'use client';

import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

export default function CategoryTab() {
  return (
    <div className="w-full p-6">
      <div className="flex items-center justify-between">
        <h2 className="text-xl font-bold">Seleziona Categoria</h2>
      </div>

      <CardContent className="mt-4 bg-gray-50 p-6 rounded-lg">
        <h3 className="text-lg font-semibold">Macro categorie</h3>
        <div className="flex gap-2 flex-wrap">
          <Button variant="outline">Maschile</Button>
          <Button className="bg-orange-500 text-white">Femminile</Button>
          <Button variant="outline">Life Style</Button>
        </div>

        <h3 className="text-lg font-semibold mt-4">Categorie</h3>
        <div className="flex gap-2 flex-wrap">
          <Button variant="outline">Abbigliamento</Button>
          <Button className="bg-orange-500 text-white">Scarpe</Button>
          <Button variant="outline">Accessori</Button>
        </div>

        <h3 className="text-lg font-semibold mt-4">Sotto categorie</h3>
        <div className="flex gap-2 flex-wrap">
          <Button variant="outline">Sneakers</Button>
          <Button variant="outline">Scarpe sportive</Button>
          <Button className="bg-orange-500 text-white">Scarpe basse</Button>
          <Button variant="outline">Stringate</Button>
          <Button variant="outline">Stivaletti & stivali</Button>
          <Button variant="outline">Ballerine</Button>
          <Button variant="outline">Scarpe con il tacco</Button>
          <Button variant="outline">Sandali</Button>
          <Button variant="outline">Pantofole</Button>
          <Button variant="outline">Eleganti</Button>
          <Button variant="outline">Mocassini</Button>
          <Button variant="outline">Ciabatte</Button>
        </div>
      </CardContent>
    </div>
  );
}
