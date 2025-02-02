'use client';

import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Switch } from '@/components/ui/switch';
import { Textarea } from '@/components/ui/textarea';
import { ChevronLeft, HelpCircle, UploadCloud, Plus } from 'lucide-react';
import { useForm } from 'react-hook-form';
import * as z from 'zod';

const formSchema = z.object({
  barcode: z.string().optional(),
  name: z.string().min(2),
  brand: z.string().optional(),
  price: z.string(),
  color: z.string().optional(),
  fit: z.string().optional(),
  unisex: z.boolean().optional(),
  customFit: z.boolean().optional(),
});

export default function ProductForm() {
  const form = useForm({
    defaultValues: {
      barcode: '43573423246',
      name: '',
      brand: '',
      price: '€100.00',
      color: '',
      fit: 'Normale',
      unisex: false,
      customFit: false,
    },
  });

  function onSubmit(values) {
    console.log(values);
  }

  return (
    <Card className="w-full p-6">
      <div className="flex items-center justify-between">
        <Button variant="ghost" className="flex items-center gap-2">
          <ChevronLeft className="size-5" />
          Annulla
        </Button>
        <h2 className="text-xl font-bold">Crea Nuovo Prodotto</h2>
        <Button className="bg-orange-500 text-white">Crea Prodotto</Button>
      </div>

      <div className="mt-4 flex gap-2">
        <Button variant="outline">Generale</Button>
        <Button variant="outline" className="bg-orange-500 text-white">
          Immagini
        </Button>
        <Button variant="outline">Categoria</Button>
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
