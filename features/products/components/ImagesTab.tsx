'use client';

import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { UploadCloud, Plus } from 'lucide-react';

export default function ImagesTab() {
  return (
    <Card className="w-full p-6">
      <div className="flex items-center justify-between">
        <h2 className="text-xl font-bold">Carica Immagini</h2>
      </div>

      <CardContent className="mt-4 bg-gray-50 p-6 rounded-lg">
        <div className="grid grid-cols-4 gap-4">
          <div className="border rounded-lg p-4 text-center bg-white shadow-sm flex flex-col items-center justify-center">
            <UploadCloud className="text-orange-500 size-12" />
            <p className="text-orange-500 font-semibold">Carica Immagine</p>
            <p className="text-xs text-gray-500">
              Carica la copertina per il tuo prodotto.
            </p>
            <p className="text-xs text-gray-500">
              Formato File: jpg/jpeg Risoluzione: 1800 x 2400 (3:4)
            </p>
          </div>
          <div className="border rounded-lg p-4 text-center bg-white shadow-sm flex flex-col items-center justify-center">
            <UploadCloud className="text-orange-500 size-8" />
            <p className="text-orange-500 text-sm">Carica Immagine</p>
          </div>
          <div className="border rounded-lg p-4 text-center bg-white shadow-sm flex items-center justify-center">
            <Plus className="text-orange-500 size-10" />
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
