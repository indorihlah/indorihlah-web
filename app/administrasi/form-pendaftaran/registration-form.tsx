"use client";

import { useState, type FormEvent, type ReactNode } from "react";
import { Label, Select, TextInput, Textarea } from "flowbite-react";

const inputClassName =
  "!rounded-lg !border-slate-300 !bg-white !text-slate-900 placeholder:!text-slate-400 focus:!border-blue-600 focus:!ring-blue-600";

function FormField({
  id,
  label,
  children,
  wide = false,
  required = false,
}: {
  id: string;
  label: string;
  children: ReactNode;
  wide?: boolean;
  required?: boolean;
}) {
  return (
    <div className={wide ? "md:col-span-2" : undefined}>
      <Label
        htmlFor={id}
        className="mb-2 block text-sm font-semibold text-slate-700"
      >
        {label}
        {required && (
          <span aria-hidden="true" className="ml-1 text-blue-700">
            *
          </span>
        )}
      </Label>
      {children}
    </div>
  );
}

function FieldGroup({
  title,
  children,
}: {
  title: string;
  children: ReactNode;
}) {
  return (
    <section className="rounded-2xl bg-slate-50 p-4 sm:p-6">
      <h2 className="mb-5 text-sm font-bold text-slate-900">{title}</h2>
      <div className="grid grid-cols-1 gap-5 md:grid-cols-2 md:gap-6">
        {children}
      </div>
    </section>
  );
}

export default function RegistrationForm() {
  const [formMessage, setFormMessage] = useState("");

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setFormMessage(
      "Data formulir sudah valid. Pengiriman online akan tersedia setelah sistem pendaftaran terhubung.",
    );
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <FieldGroup title="Kontak">
        <FormField id="phone" label="No. Handphone / WhatsApp yg aktif" required>
          <TextInput
            id="phone"
            name="phone"
            type="tel"
            autoComplete="tel"
            placeholder="Contoh: 0812 3456 7890"
            required
            className={inputClassName}
          />
        </FormField>

        <FormField id="email" label="Email" required>
          <TextInput
            id="email"
            name="email"
            type="email"
            autoComplete="email"
            placeholder="nama@email.com"
            required
            className={inputClassName}
          />
        </FormField>
      </FieldGroup>

      <FieldGroup title="Data jamaah">
        <FormField id="full-name" label="Nama Lengkap" required>
          <TextInput
            id="full-name"
            name="fullName"
            type="text"
            autoComplete="name"
            placeholder="Sesuai KTP atau paspor"
            required
            className={inputClassName}
          />
        </FormField>

        <FormField id="father-name" label="Nama Ayah" required>
          <TextInput
            id="father-name"
            name="fatherName"
            type="text"
            autoComplete="off"
            placeholder="Masukkan nama lengkap ayah"
            required
            className={inputClassName}
          />
        </FormField>
      </FieldGroup>

      <FieldGroup title="Alamat dan identitas">
        <FormField id="address" label="Alamat Lengkap" wide required>
          <Textarea
            id="address"
            name="address"
            rows={3}
            placeholder="Nama jalan, nomor rumah, kelurahan, kecamatan"
            required
            className={inputClassName}
          />
        </FormField>

        <FormField id="city" label="Kota Asal" required>
          <TextInput
            id="city"
            name="city"
            type="text"
            autoComplete="address-level2"
            placeholder="Contoh: Sidoarjo"
            required
            className={inputClassName}
          />
        </FormField>

        <FormField id="nik" label="No. NIK" required>
          <TextInput
            id="nik"
            name="nik"
            type="number"
            min={0}
            step={1}
            inputMode="numeric"
            placeholder="Masukkan 16 digit NIK"
            required
            className={inputClassName}
          />
        </FormField>

        <FormField id="family-card" label="No. KK" required>
          <TextInput
            id="family-card"
            name="familyCardNumber"
            type="number"
            min={0}
            step={1}
            inputMode="numeric"
            placeholder="Masukkan nomor Kartu Keluarga"
            required
            className={inputClassName}
          />
        </FormField>

        <FormField id="referral" label="Referensi dari">
          <TextInput
            id="referral"
            name="referral"
            type="text"
            placeholder="Misal: Teman, Iklan IG, dll"
            className={inputClassName}
          />
        </FormField>

      </FieldGroup>

      <FieldGroup title="Pilihan perjalanan">
        <FormField id="package" label="Paket yang dipilih" wide required>
          <Select
            id="package"
            name="package"
            defaultValue=""
            required
            className={inputClassName}
          >
            <option value="" disabled>
              Pilih Salah Satu
            </option>
            <option>Umroh 12 Hari Awal Musim</option>
            <option>Umroh 12 Hari Liburan Sekolah</option>
            <option>Umroh 9 Hari</option>
            <option>Umroh Lailatul Qodar</option>
            <option>Umroh Full Ramadhan</option>
            <option>Umroh Awal Ramadhan</option>
            <option>Umroh Plus Aqsha</option>
            <option>Umroh Plus Turkey</option>
            <option>Tabungan Umroh</option>
          </Select>
        </FormField>
      </FieldGroup>

      <div className="border-t border-slate-100 pt-6">
        <p className="mb-4 text-xs text-slate-500">
          Kolom bertanda <span className="font-bold text-blue-700">*</span>{" "}
          wajib diisi.
        </p>
        <button
          type="submit"
          className="inline-flex min-h-12 w-full items-center justify-center rounded-lg bg-blue-600 px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-blue-700 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-blue-600 md:w-auto"
        >
          Kirim Pendaftaran
        </button>
        {formMessage && (
          <p
            role="status"
            className="mt-4 rounded-lg border border-blue-100 bg-blue-50 px-4 py-3 text-sm leading-6 text-blue-900"
          >
            {formMessage}
          </p>
        )}
      </div>
    </form>
  );
}