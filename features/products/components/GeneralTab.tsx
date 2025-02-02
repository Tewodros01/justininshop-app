'use client';

import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
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
import { ChevronLeft } from 'lucide-react';
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

export default function GeneralTab() {
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
      <CardContent className="mt-4 bg-gray-50 p-6 rounded-lg">
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="grid grid-cols-1 gap-6 md:grid-cols-2"
          >
            <FormField
              control={form.control}
              name="barcode"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Codice a barre (GTIN/UPC/EAN)</FormLabel>
                  <FormControl>
                    <Input {...field} disabled className="bg-gray-100" />
                  </FormControl>
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="price"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Prezzo</FormLabel>
                  <FormControl>
                    <Input {...field} disabled className="bg-gray-100" />
                  </FormControl>
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Nome Prodotto</FormLabel>
                  <FormControl>
                    <Input placeholder="Esempio: Jungle Dress" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="brand"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Brand</FormLabel>
                  <FormControl>
                    <Input placeholder="Esempio: Versace" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </form>
        </Form>
      </CardContent>
    </Card>
  );
}
