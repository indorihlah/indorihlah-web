"use client";

import { useState, type FormEvent, type ReactNode } from "react";
import { Label, TextInput, Textarea } from "flowbite-react";

const inputClassName =
  "!rounded-lg !border-slate-300 !bg-white !text-slate-900 placeholder:!text-slate-400 focus:!border-blue-600 focus:!ring-blue-600";

function FormField({
  id,
  label,
  children,
  wide = false,
  optional = false,
}: {
  id: string;
  label: string;
  children: ReactNode;
  wide?: boolean;
  optional?: boolean;
}) {
  return (
    <div className={wide ? "md:col-span-2" : undefined}>
      <Label
        htmlFor={id}
        className="mb-2 block text-sm font-semibold text-slate-700"
      >
        {label}
        {!optional && (
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

export default function LeaveForm() {
  const [formMessage, setFormMessage] = useState("");

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setFormMessage(
      "Data permohonan sudah valid. Pengiriman online akan tersedia setelah sistem administrasi terhubung.",
    );
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <FieldGroup title="Data pemohon">
        <FormField id="full-name" label="Nama Lengkap">
          <TextInput
            id="full-name"
            name="fullName"
            type="text"
            autoComplete="name"
            required
            className={inputClassName}
          />
        </FormField>

        <FormField id="birthplace" label="Tempat Lahir">
          <TextInput
            id="birthplace"
            name="birthplace"
            type="text"
            autoComplete="off"
            required
            className={inputClassName}
          />
        </FormField>

        <FormField id="birth-date" label="Tanggal Lahir">
          <TextInput
            id="birth-date"
            name="birthDate"
            type="date"
            autoComplete="bday"
            required
            className={inputClassName}
          />
        </FormField>

        <FormField
          id="institution"
          label="Nama sekolah / instansi / perusahaan"
        >
          <TextInput
            id="institution"
            name="institution"
            type="text"
            autoComplete="organization"
            required
            className={inputClassName}
          />
        </FormField>
      </FieldGroup>

      <FieldGroup title="Identitas dan alamat">
        <FormField
          id="identity-number"
          label="NIP (Nomor Induk Kepegawaian) / NIM (Nomor Induk Mahasiswa)"
          wide
        >
          <TextInput
            id="identity-number"
            name="identityNumber"
            type="text"
            autoComplete="off"
            required
            className={inputClassName}
          />
        </FormField>

        <FormField id="address" label="Alamat Lengkap" wide>
          <Textarea
            id="address"
            name="address"
            rows={3}
            autoComplete="street-address"
            required
            className={inputClassName}
          />
        </FormField>
      </FieldGroup>

      <FieldGroup title="Rencana cuti">
        <FormField id="leave-start" label="Tanggal cuti dimulai">
          <TextInput
            id="leave-start"
            name="leaveStart"
            type="date"
            required
            className={inputClassName}
          />
        </FormField>

        <FormField id="leave-end" label="Tanggal cuti berakhir">
          <TextInput
            id="leave-end"
            name="leaveEnd"
            type="date"
            required
            className={inputClassName}
          />
        </FormField>
      </FieldGroup>

      <FieldGroup title="Catatan tambahan">
        <FormField id="notes" label="Catatan" wide optional>
          <Textarea
            id="notes"
            name="notes"
            rows={3}
            placeholder="Tambahkan catatan jika diperlukan..."
            className={inputClassName}
          />
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
          Ajukan Surat Izin Cuti
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